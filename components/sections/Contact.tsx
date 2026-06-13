"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import SectionTitle from "@/components/ui/SectionTitle";
import { MapPin, Mail, Phone, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    // mailto fallback — opens default email client
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(form.subject || "Portfolio Contact")}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailtoUrl;
    setTimeout(() => setStatus("sent"), 500);
  }

  const inputClass = `
    w-full bg-white/[0.03] border border-white/8 rounded-xl px-4 py-3 text-sm text-white/80
    placeholder-white/20 outline-none focus:border-crimson-700/60 focus:bg-white/[0.05]
    focus:shadow-[0_0_0_3px_rgba(220,38,38,0.1)] transition-all duration-200
  `;

  return (
    <section
      id="contact"
      className="section"
      style={{ background: "linear-gradient(180deg, var(--bg-surface) 0%, var(--bg-void) 100%)" }}
    >
      <div className="container">
        <SectionTitle
          eyebrow="Contact"
          title="Let's Talk"
          subtitle="Open for internships, collaborations, research projects, and conversations"
        />

        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-8 mt-16">

          {/* Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-crimson rounded-2xl p-8 relative overflow-hidden h-fit"
          >
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-crimson-600 to-transparent" />

            <h3 className="text-xl font-bold text-white/90 mb-2">Get in Touch</h3>
            <p className="text-sm text-white/40 leading-relaxed mb-8">
              Whether you have an opportunity, a project idea, or just want to connect — I&apos;m always open to hearing from you.
            </p>

            <div className="space-y-5">
              {[
                { icon: <MapPin size={18} />, label: "Location", value: personalInfo.location },
                { icon: <Mail size={18} />, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { icon: <Phone size={18} />, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-xl bg-crimson-950/60 border border-crimson-900/30 flex items-center justify-center text-crimson-500 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[10px] text-crimson-600 uppercase tracking-widest font-bold mb-0.5">{item.label}</div>
                    {item.href
                      ? <a href={item.href} className="text-sm text-white/60 hover:text-crimson-400 transition-colors break-all">{item.value}</a>
                      : <div className="text-sm text-white/60">{item.value}</div>
                    }
                  </div>
                </div>
              ))}
            </div>

            {/* Quick email CTA */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="mt-8 flex items-center justify-center gap-2 w-full py-3 rounded-full text-sm font-semibold text-white transition-all"
              style={{ background: "linear-gradient(135deg, #dc2626, #991b1b)", boxShadow: "0 0 24px rgba(220,38,38,0.2)" }}
            >
              <Mail size={15} />
              Send Email Directly
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <h3 className="text-xl font-bold text-white/90 mb-1">Send a Message</h3>
            <p className="text-sm text-white/35 mb-8">Fill in the form and I&apos;ll get back to you as soon as possible.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] text-white/30 uppercase tracking-wider block mb-1.5">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Md Saif Ali"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="text-[11px] text-white/30 uppercase tracking-wider block mb-1.5">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] text-white/30 uppercase tracking-wider block mb-1.5">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="Internship Opportunity / Collaboration"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="text-[11px] text-white/30 uppercase tracking-wider block mb-1.5">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell me about your project or opportunity..."
                  className={inputClass + " resize-none"}
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-300 disabled:opacity-50"
                style={{
                  background: "linear-gradient(135deg, #dc2626, #991b1b)",
                  boxShadow: "0 0 24px rgba(220,38,38,0.25)"
                }}
              >
                <Send size={15} />
                {status === "sending" ? "Opening mail..." : status === "sent" ? "Email opened!" : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
