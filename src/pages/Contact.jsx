import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import "../style/Contact.css"

const SERVICE_OPTIONS = ['Website', 'Graphics design', 'Video editing', 'Digital marketing', 'Not sure yet'];

export default function Contact() {
  const [form, setForm] = useState({ name: '', service: SERVICE_OPTIONS[0], message: '' });
  const [sent, setSent] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = `Name: ${form.name}%0AService: ${form.service}%0A%0A${encodeURIComponent(form.message)}`;
    window.location.href = `mailto:hello@bmixtechworld.example?subject=Quote request from ${encodeURIComponent(form.name || 'website visitor')}&body=${body}`;
    setSent(true);
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Tell us what you're building next."
        intro="Based in Salem, Tamil Nadu, and working with clients across the region. Call, message, or send the form and Balamurugan will get back to you directly."
      />

      <section className="section contact-section">
        <div className="wrap contact-grid">
          <div className="contact-info">
            <h2>Get in touch</h2>
            <ul className="contact-list">
              <li>
                <span className="contact-label">Phone</span>
                <a href="tel:+918825742098">+91 88257 42098</a>
              </li>
              <li>
                <span className="contact-label">Phone</span>
                <a href="tel:+919944054368">+91 99440 54368</a>
              </li>
              <li>
                <span className="contact-label">Location</span>
                <span>Salem, Tamil Nadu, India</span>
              </li>
              <li>
                <span className="contact-label">Hours</span>
                <span>Mon–Sat, 9:00 AM – 7:00 PM</span>
              </li>
            </ul>

            <div className="service-area">
              <span className="eyebrow-line">Service area</span>
              <p>Working with clients in and around Salem, with website and design work delivered remotely anywhere in Tamil Nadu.</p>
            </div>
          </div>

          <div className="quote-card">
            <h3>Get a quote</h3>
            <p className="quote-note">Share a few details and we'll reply with a plan and price.</p>

            {sent ? (
              <div className="quote-sent">
                <p>Your email app should be open with the details filled in — send it across and we'll reply soon.</p>
                <button type="button" className="btn btn-ghost" onClick={() => setSent(false)}>Send another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="quote-form">
                <label>
                  Your name
                  <input type="text" required value={form.name} onChange={update('name')} placeholder="Enter your name" />
                </label>

                <label>
                  Service needed
                  <select value={form.service} onChange={update('service')}>
                    {SERVICE_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </label>

                <label>
                  Project details
                  <textarea rows="4" required value={form.message} onChange={update('message')} placeholder="What do you need built or designed?" />
                </label>

                <button type="submit" className="btn btn-solid">Send request</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
