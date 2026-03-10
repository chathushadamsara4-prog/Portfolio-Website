import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, Instagram } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 md:py-36 px-6 md:px-16 lg:px-24 border-t border-border">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center"
      >
        <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4 font-sans">Get in Touch</p>
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-12">
          Let's Create Together
        </h2>

        {/* Contact links */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          <a href="mailto:Sharfmohomed116@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-sans text-sm">
            <Mail size={16} /> Sharfmohomed116@gmail.com
          </a>
          <a href="tel:+94769998949" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-sans text-sm">
            <Phone size={16} /> +94 76 999 8949
          </a>
          <a href="https://www.instagram.com/_sharafofficial_/?__pwa=1#" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-sans text-sm">
            <Instagram size={16} /> Instagram
          </a>
          <a href="https://www.facebook.com/share/18JYgDr4Ap/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-sans text-sm">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            Facebook
          </a>
          <a href="https://www.linkedin.com/in/mohomed-sharaf-566044340" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-sans text-sm">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            LinkedIn
          </a>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6 text-left max-w-lg mx-auto">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors font-sans text-sm"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors font-sans text-sm"
            />
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors font-sans text-sm resize-none"
            />
          </div>
          <div className="text-center pt-4">
            <button
              type="submit"
              className="px-10 py-3 border border-primary text-primary text-sm tracking-[0.15em] uppercase font-sans hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactSection;
