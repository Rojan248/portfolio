import requests
import sys
from datetime import datetime

class PortfolioAPITester:
    def __init__(self, base_url="https://ai-portfolio-hub-73.preview.emergentagent.com/api"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0

    def run_test(self, name, method, endpoint, expected_status, data=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
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
                return True, response.json() if response.text else {}
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"   Response: {response.text[:200]}")
                return False, {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, {}

    def test_health(self):
        """Test health endpoint"""
        return self.run_test("Health Check", "GET", "health", 200)

    def test_root(self):
        """Test root endpoint"""
        return self.run_test("Root Endpoint", "GET", "", 200)

    def test_create_contact(self, name, email, message):
        """Create a contact message"""
        success, response = self.run_test(
            "Create Contact Message",
            "POST",
            "contact",
            200,
            data={"name": name, "email": email, "message": message}
        )
        return success, response.get('id') if success else None

    def test_create_contact_invalid_email(self):
        """Test contact with invalid email"""
        success, _ = self.run_test(
            "Create Contact (Invalid Email)",
            "POST",
            "contact",
            422,  # Pydantic validation error
            data={"name": "Test", "email": "invalid-email", "message": "Test message"}
        )
        return success

    def test_create_contact_honeypot(self):
        """Test contact with honeypot field filled (should still return 200 but not store)"""
        success, response = self.run_test(
            "Create Contact (Honeypot)",
            "POST",
            "contact",
            200,
            data={"name": "Bot", "email": "bot@test.com", "message": "Spam", "company": "SpamCorp"}
        )
        return success, response.get('id') if success else None

    def test_get_contacts(self):
        """Get all contact messages"""
        return self.run_test("Get Contact Messages", "GET", "contact", 200)

    def test_create_status(self):
        """Create a status check"""
        success, response = self.run_test(
            "Create Status Check",
            "POST",
            "status",
            200,
            data={"client_name": f"test_client_{datetime.now().strftime('%H%M%S')}"}
        )
        return success, response.get('id') if success else None

    def test_get_status(self):
        """Get all status checks"""
        return self.run_test("Get Status Checks", "GET", "status", 200)

def main():
    print("=" * 60)
    print("ROJAN KAFLE PORTFOLIO - BACKEND API TESTS")
    print("=" * 60)
    
    tester = PortfolioAPITester()
    test_timestamp = datetime.now().strftime('%H%M%S')

    # Test health and root
    tester.test_health()
    tester.test_root()

    # Test contact endpoints
    success, contact_id = tester.test_create_contact(
        f"Test User {test_timestamp}",
        f"test{test_timestamp}@example.com",
        "This is a test message from the automated test suite."
    )
    
    if success and contact_id:
        print(f"   Created contact with ID: {contact_id}")

    # Test validation
    tester.test_create_contact_invalid_email()

    # Test honeypot
    success_hp, hp_id = tester.test_create_contact_honeypot()
    if success_hp:
        print(f"   Honeypot test passed (should return 200 but not store)")

    # Get all contacts
    success_get, contacts = tester.test_get_contacts()
    if success_get:
        print(f"   Retrieved {len(contacts)} contact messages")

    # Test status endpoints
    success_status, status_id = tester.test_create_status()
    if success_status and status_id:
        print(f"   Created status check with ID: {status_id}")

    tester.test_get_status()

    # Print results
    print("\n" + "=" * 60)
    print(f"📊 BACKEND TESTS COMPLETED: {tester.tests_passed}/{tester.tests_run} passed")
    print("=" * 60)
    
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())
