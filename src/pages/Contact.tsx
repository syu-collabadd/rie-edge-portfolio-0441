import { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission would go here
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-navy-dark via-navy-secondary to-navy-dark">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal/10 via-transparent to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-teal to-gold bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-300">
            Have a question or want to collaborate? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 px-4 bg-navy-dark">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-display font-semibold mb-6">Send Us a Message</h2>

              {submitted ? (
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-display font-semibold mb-2 text-green-400">
                    Message Sent!
                  </h3>
                  <p className="text-gray-400">
                    Thank you for reaching out. We'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-navy-secondary border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-teal transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-navy-secondary border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-teal transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 bg-navy-secondary border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-teal transition-colors resize-none"
                      placeholder="Tell us about your inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-teal to-teal/80 hover:from-teal/90 hover:to-teal/70 text-white px-8 py-4 rounded-lg font-medium transition-all transform hover:scale-[1.02] shadow-lg"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="md:pl-8">
              <h2 className="text-3xl font-display font-semibold mb-6">Contact Information</h2>

              <div className="space-y-8">
                <div className="bg-gradient-to-br from-navy-secondary to-navy-dark border border-gray-800 rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-teal/20 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-teal" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold mb-2">Email Us</h3>
                      <a href="mailto:info@rie-edge.com" className="text-teal hover:text-teal/80 transition-colors">
                        info@rie-edge.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-navy-secondary to-navy-dark border border-gray-800 rounded-xl p-6">
                  <h3 className="font-display font-semibold mb-4">Business Inquiries</h3>
                  <p className="text-gray-400 leading-relaxed">
                    For partnership opportunities, investment inquiries, or general business questions,
                    please use the contact form or reach out via email.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-navy-secondary to-navy-dark border border-gray-800 rounded-xl p-6">
                  <h3 className="font-display font-semibold mb-4">Follow Our Ventures</h3>
                  <p className="text-gray-400 mb-4 text-sm">
                    Stay connected with our latest updates across all platforms:
                  </p>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-gray-500">Photography:</span>{' '}
                      <a href="/ventures/rouzyverse" className="text-teal hover:underline">
                        RouzyVerse
                      </a>
                    </div>
                    <div>
                      <span className="text-gray-500">Publishing:</span>{' '}
                      <a href="/ventures/books" className="text-gold hover:underline">
                        RIE-Edge Books
                      </a>
                    </div>
                    <div>
                      <span className="text-gray-500">Investments:</span>{' '}
                      <a href="/ventures/investments" className="text-teal hover:underline">
                        Investment Portfolio
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
