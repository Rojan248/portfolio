import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Reveal } from "@/components/print/Reveal";
import { SectionHeader } from "@/components/print/SectionHeader";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CONTACT } from "@/data/content";
import { Mail, Phone, Github, Send, Check, Loader2 } from "lucide-react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const INPUT_CLASS =
  "mt-2 h-12 rounded-none border-2 border-ink-900 bg-paper-50 font-mono text-sm text-ink-900 placeholder:text-ink-500/70 focus-visible:ring-0 focus-visible:ring-offset-0";

// Pure validation helper: returns an error string, or "" when valid.
export function validateContact(form) {
  if (!form.name.trim()) return "Please enter your name.";
  if (!EMAIL_RE.test(form.email)) return "Please enter a valid email address.";
  if (form.message.trim().length < 5) return "Your message is a little short.";
  return "";
}

const ContactLink = ({ icon: Icon, label, value, href, testid }) => (
  <a
    href={href}
    target={href.startsWith("http") ? "_blank" : undefined}
    rel="noopener noreferrer"
    data-testid={testid}
    className="group flex items-center justify-between border-b-2 border-ink-900 py-4 transition-colors hover:bg-paper-100"
  >
    <span className="flex items-center gap-3">
      <Icon size={17} className="text-spot-600" />
      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-500">{label}</span>
    </span>
    <span className="font-mono text-sm text-ink-900 transition-transform group-hover:-translate-x-0.5">
      {value}
    </span>
  </a>
);

const ContactChannels = () => (
  <Reveal delay={0.1} className="lg:col-span-5">
    <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.24em] text-ink-500">
      Direct Channels
    </div>
    <div className="border-t-2 border-ink-900">
      <ContactLink
        icon={Mail}
        label="Email"
        value={CONTACT.email}
        href={`mailto:${CONTACT.email}`}
        testid="contact-email-link"
      />
      <ContactLink
        icon={Phone}
        label="Phone"
        value={CONTACT.phone}
        href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
        testid="contact-phone-link"
      />
      <ContactLink
        icon={Github}
        label="GitHub"
        value={CONTACT.github}
        href={CONTACT.githubUrl}
        testid="contact-github-link"
      />
    </div>

    <div className="mt-8 border-2 border-ink-900 bg-paper-50 p-5">
      <p className="display-tight text-3xl leading-[0.92] text-ink-900">
        Got a poster, post or page that needs to hit harder?
      </p>
      <p className="mt-3 text-sm leading-relaxed text-ink-700">
        Fast turnaround. 24&ndash;48 hour delivery. Evenings &amp; weekends, Nepal time.
      </p>
    </div>
  </Reveal>
);

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "", company: "" });
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [error, setError] = useState("");

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    const validationError = validateContact(form);
    setError(validationError);
    if (validationError) return;

    setStatus("submitting");
    try {
      await axios.post(`${API}/contact`, {
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
        company: form.company, // honeypot
      });
      setStatus("success");
      toast.success("Message sent", {
        description: "Thanks \u2014 Rojan will get back to you shortly.",
      });
      setForm({ name: "", email: "", message: "", company: "" });
    } catch (err) {
      setStatus("error");
      setError("Something went wrong sending your message. Please try again or email directly.");
    }
  };

  return (
    <section id="contact" data-section className="border-b-2 border-ink-900 bg-paper-100">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <SectionHeader num="06" kicker="Let's Build" title="Contact" />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* form */}
          <Reveal className="lg:col-span-7">
            <form onSubmit={submit} data-testid="contact-form" noValidate>
              {/* honeypot */}
              <div className="absolute left-[-9999px]" aria-hidden="true">
                <label>
                  Company
                  <input
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.company}
                    onChange={set("company")}
                  />
                </label>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <Label htmlFor="cf-name" className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-700">
                    Name
                  </Label>
                  <Input
                    id="cf-name"
                    data-testid="contact-form-name-input"
                    value={form.name}
                    onChange={set("name")}
                    placeholder="Your name"
                    className={INPUT_CLASS}
                  />
                </div>
                <div>
                  <Label htmlFor="cf-email" className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-700">
                    Email
                  </Label>
                  <Input
                    id="cf-email"
                    type="email"
                    data-testid="contact-form-email-input"
                    value={form.email}
                    onChange={set("email")}
                    placeholder="you@studio.com"
                    className={INPUT_CLASS}
                  />
                </div>
              </div>

              <div className="mt-5">
                <Label htmlFor="cf-msg" className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-700">
                  Brief
                </Label>
                <Textarea
                  id="cf-msg"
                  data-testid="contact-form-message-textarea"
                  value={form.message}
                  onChange={set("message")}
                  placeholder="Tell me about the project, timeline and deliverables…"
                  rows={6}
                  className="mt-2 rounded-none border-2 border-ink-900 bg-paper-50 font-mono text-sm text-ink-900 placeholder:text-ink-500/70 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>

              {error ? (
                <p
                  data-testid="contact-form-status-message"
                  className="mt-4 border-l-4 border-[color:var(--destructive)] bg-paper-50 px-3 py-2 font-mono text-xs uppercase tracking-[0.12em] text-[color:#B42318]"
                >
                  {error}
                </p>
              ) : null}

              {status === "success" ? (
                <p
                  data-testid="contact-form-status-message"
                  className="mt-4 flex items-center gap-2 border-l-4 border-spot-500 bg-paper-50 px-3 py-2 font-mono text-xs uppercase tracking-[0.12em] text-spot-600"
                >
                  <Check size={14} /> Message received &mdash; talk soon.
                </p>
              ) : null}

              <button
                type="submit"
                disabled={status === "submitting"}
                data-testid="contact-form-submit-button"
                className="mt-6 inline-flex items-center gap-3 border-2 border-ink-900 bg-ink-900 px-6 py-3 font-mono text-[12px] font-semibold uppercase tracking-[0.22em] text-paper-50 transition-colors hover:bg-ink-700 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Sending&hellip;
                  </>
                ) : (
                  <>
                    Send Message <Send size={15} />
                  </>
                )}
              </button>
            </form>
          </Reveal>

          {/* direct links */}
          <ContactChannels />
        </div>
      </div>
    </section>
  );
};
