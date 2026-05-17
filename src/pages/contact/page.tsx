import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'custom-apparel',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formBody = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        formBody.append(key, value);
      });

      const response = await fetch('https://readdy.ai/api/form/d6que2ba90d3mf3egnc0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formBody.toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: 'custom-apparel', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-[#f7f5f1]">
      <section className="border-b border-stone-200 bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">Contact</p>
          <h1 className="mt-3 max-w-4xl text-5xl font-semibold tracking-tight text-stone-950">Get In Touch.</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-600">
            Have questions? We're here to help bring your custom apparel vision to life.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <div className="rounded-[32px] border border-stone-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-stone-950">Email Us</h2>
              <ul className="mt-6 space-y-4 text-sm leading-7 text-stone-700">
                <li>Send us an email anytime</li>
                <li>designs.jenuine@gmail.com</li>
              </ul>
            </div>
            <div className="rounded-[32px] border border-stone-200 bg-stone-950 p-8 text-white shadow-sm">
              <h2 className="text-2xl font-semibold">Order timing</h2>
              <p className="mt-4 text-sm leading-7 text-stone-300">
                Standard turnaround is typically 10–15 business days unless a store window or special event deadline states otherwise.
              </p>
            </div>
          </div>

          <div className="rounded-[32px] border border-stone-200 bg-white p-8 shadow-sm sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <label className="block text-sm font-medium text-stone-700">
                  Name
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-2xl border border-stone-300 px-4 py-3 text-sm text-stone-900 outline-none transition focus:border-stone-900"
                    placeholder="Your name"
                  />
                </label>
                <label className="block text-sm font-medium text-stone-700">
                  Email
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-2xl border border-stone-300 px-4 py-3 text-sm text-stone-900 outline-none transition focus:border-stone-900"
                    placeholder="you@example.com"
                  />
                </label>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <label className="block text-sm font-medium text-stone-700">
                  Phone
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-2xl border border-stone-300 px-4 py-3 text-sm text-stone-900 outline-none transition focus:border-stone-900"
                    placeholder="Optional"
                  />
                </label>
                <label className="block text-sm font-medium text-stone-700">
                  I need help with
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-2xl border border-stone-300 px-4 py-3 pr-8 text-sm text-stone-900 outline-none transition focus:border-stone-900"
                  >
                    <option value="custom-apparel">Custom apparel</option>
                    <option value="spiritwear-store">Spiritwear store</option>
                    <option value="fundraising-store">Fundraising store</option>
                    <option value="bulk-order">Bulk order</option>
                    <option value="general-question">General question</option>
                  </select>
                </label>
              </div>

              <label className="block text-sm font-medium text-stone-700">
                Project details
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  maxLength={800}
                  rows={7}
                  className="mt-2 w-full rounded-[24px] border border-stone-300 px-4 py-3 text-sm text-stone-900 outline-none transition focus:border-stone-900"
                  placeholder="Tell us about the organization, quantity, timeline, and what you need."
                />
                <span className="mt-2 block text-xs text-stone-500">{formData.message.length}/800 characters</span>
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center rounded-full bg-stone-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-700 disabled:cursor-not-allowed disabled:bg-stone-400"
              >
                {isSubmitting ? 'Sending...' : 'Send request'}
              </button>

              {submitStatus === 'success' && (
                <div className="rounded-2xl border border-green-200 bg-green-50 p-4 text-sm text-green-800">
                  Your message was sent successfully.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
                  There was a problem sending the form. Try again or use another contact method once Shopify is connected.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
