import requests
import sys
from datetime import datetime

class PortfolioAPITester:
    def __init__(self, base_url="https://ai-portfolio-hub-73.preview.emergentagent.com/api"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.failed_tests = []

    def run_test(self, name, method, endpoint, expected_status, data=None, headers=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        if headers is None:
            headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    resp_json = response.json()
                    print(f"   Response: {resp_json}")
                    return True, resp_json
                except:
                    return True, {}
            else:
                self.failed_tests.append({
                    "test": name,
                    "expected": expected_status,
                    "got": response.status_code,
                    "response": response.text[:200]
                })
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"   Response: {response.text[:200]}")
                return False, {}

        except Exception as e:
            self.failed_tests.append({
                "test": name,
                "error": str(e)
            })
            print(f"❌ Failed - Error: {str(e)}")
            return False, {}

    def test_health(self):
        """Test health endpoint"""
        success, response = self.run_test(
            "Health Check",
            "GET",
            "health",
            200
        )
        if success:
            if response.get('status') == 'ok' and response.get('db') == 'connected':
                print("   ✓ Health check response format correct")
                return True
            else:
                print(f"   ⚠ Health check response format incorrect: {response}")
                return False
        return False

    def test_contact_valid(self):
        """Test contact form with valid data"""
        timestamp = datetime.now().strftime('%H%M%S')
        success, response = self.run_test(
            "Contact Form - Valid Submission",
            "POST",
            "contact",
            200,
            data={
                "name": f"Test User {timestamp}",
                "email": f"test{timestamp}@example.com",
                "message": "This is a test message for the portfolio contact form."
            }
        )
        if success:
            if 'id' in response and 'created_at' in response:
                print("   ✓ Contact message stored with id and created_at")
                return True, response.get('id')
            else:
                print(f"   ⚠ Response missing id or created_at: {response}")
                return False, None
        return False, None

    def test_contact_invalid_email(self):
        """Test contact form with invalid email"""
        success, response = self.run_test(
            "Contact Form - Invalid Email",
            "POST",
            "contact",
            422,
            data={
                "name": "Test User",
                "email": "invalid-email",
                "message": "This should fail validation."
            }
        )
        return success

    def test_contact_honeypot(self):
        """Test contact form with honeypot field filled"""
        timestamp = datetime.now().strftime('%H%M%S')
        
        # Get count before submission
        success_before, messages_before = self.run_test(
            "Get Contact Messages - Before Honeypot",
            "GET",
            "contact",
            200
        )
        count_before = len(messages_before) if success_before else 0
        print(f"   Messages before honeypot: {count_before}")
        
        # Submit with honeypot filled
        success, response = self.run_test(
            "Contact Form - Honeypot Filled",
            "POST",
            "contact",
            200,
            data={
                "name": f"Bot User {timestamp}",
                "email": f"bot{timestamp}@spam.com",
                "message": "This is a spam message.",
                "company": "Spam Corp"  # Honeypot field
            }
        )
        
        if not success:
            return False
        
        # Get count after submission
        success_after, messages_after = self.run_test(
            "Get Contact Messages - After Honeypot",
            "GET",
            "contact",
            200
        )
        count_after = len(messages_after) if success_after else 0
        print(f"   Messages after honeypot: {count_after}")
        
        # Verify count did NOT increase
        if count_before == count_after:
            print("   ✓ Honeypot worked - message NOT stored in DB")
            return True
        else:
            print(f"   ❌ Honeypot failed - message WAS stored (count increased from {count_before} to {count_after})")
            self.failed_tests.append({
                "test": "Honeypot Verification",
                "issue": "Message was stored despite honeypot being filled"
            })
            return False

    def test_get_contact_messages(self):
        """Test getting contact messages"""
        success, response = self.run_test(
            "Get Contact Messages List",
            "GET",
            "contact",
            200
        )
        if success:
            if isinstance(response, list):
                print(f"   ✓ Returned list with {len(response)} messages")
                # Check if sorted newest-first (if we have messages)
                if len(response) >= 2:
                    first_date = response[0].get('created_at', '')
                    second_date = response[1].get('created_at', '')
                    if first_date >= second_date:
                        print("   ✓ Messages sorted newest-first")
                    else:
                        print("   ⚠ Messages may not be sorted newest-first")
                return True
            else:
                print(f"   ⚠ Response is not a list: {type(response)}")
                return False
        return False

def main():
    print("=" * 60)
    print("ROJAN KAFLE PORTFOLIO - BACKEND API TESTS")
    print("=" * 60)
    
    tester = PortfolioAPITester()

    # Run all tests
    print("\n" + "=" * 60)
    print("BACKEND API TESTS")
    print("=" * 60)
    
    tester.test_health()
    tester.test_contact_valid()
    tester.test_contact_invalid_email()
    tester.test_contact_honeypot()
    tester.test_get_contact_messages()

    # Print summary
    print("\n" + "=" * 60)
    print("TEST SUMMARY")
    print("=" * 60)
    print(f"Tests run: {tester.tests_run}")
    print(f"Tests passed: {tester.tests_passed}")
    print(f"Tests failed: {tester.tests_run - tester.tests_passed}")
    print(f"Success rate: {(tester.tests_passed / tester.tests_run * 100):.1f}%")
    
    if tester.failed_tests:
        print("\n❌ FAILED TESTS:")
        for fail in tester.failed_tests:
            print(f"  - {fail}")
    
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())
