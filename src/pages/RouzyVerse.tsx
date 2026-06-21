import { Instagram, Youtube, Linkedin, Twitter } from 'lucide-react';

export function RouzyVerse() {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com',
      color: 'from-pink-500 to-purple-500',
      description: 'Daily photography & behind-the-scenes'
    },
    {
      name: 'TikTok',
      icon: () => (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      ),
      url: 'https://tiktok.com',
      color: 'from-black to-teal-500',
      description: 'Short-form creative content'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://youtube.com',
      color: 'from-red-500 to-red-600',
      description: 'Photography tutorials & vlogs'
    },
    {
      name: 'X (Twitter)',
      icon: Twitter,
      url: 'https://x.com',
      color: 'from-gray-700 to-gray-900',
      description: 'Quick updates & thoughts'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com',
      color: 'from-blue-600 to-blue-700',
      description: 'Professional network & insights'
    },
    {
      name: 'Substack',
      icon: () => (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
        </svg>
      ),
      url: 'https://substack.com',
      color: 'from-orange-500 to-orange-600',
      description: 'Long-form stories & essays'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-navy-dark via-navy-secondary to-navy-dark">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal/10 via-transparent to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-teal to-gold bg-clip-text text-transparent">
            RouzyVerse
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
            Visual Storytelling Through the Lens
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Capturing moments, creating memories, and building a community of visual storytellers
            across multiple platforms.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-navy-secondary border-y border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-semibold mb-6 text-center">About RouzyVerse</h2>
          <p className="text-gray-300 text-lg leading-relaxed text-center">
            RouzyVerse is more than photography—it's a journey through perspectives, emotions, and stories
            told through imagery. From stunning landscapes to intimate portraits, our work spans genres
            and styles, always with a focus on authenticity and artistic vision.
          </p>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="py-20 px-4 bg-navy-dark">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-center mb-4">Connect With Us</h2>
          <p className="text-gray-400 text-center mb-16">
            Follow our journey across social media platforms
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-gradient-to-br from-navy-secondary to-navy-dark border border-gray-800 rounded-xl p-8 hover:border-gray-600 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <div className={`bg-gradient-to-br ${social.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4 text-white`}>
                    <social.icon />
                  </div>
                  <h3 className="text-2xl font-display font-semibold mb-2 group-hover:text-teal transition-colors">
                    {social.name}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {social.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Placeholder */}
      <section className="py-20 px-4 bg-navy-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-center mb-16">Featured Work</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="aspect-square bg-gradient-to-br from-navy-dark to-gray-800 rounded-lg border border-gray-700 flex items-center justify-center hover:border-teal transition-colors group cursor-pointer"
              >
                <div className="text-center">
                  <div className="text-6xl mb-2 opacity-20 group-hover:opacity-40 transition-opacity">📷</div>
                  <p className="text-gray-600 text-sm">Photo {i}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 mt-8">
            Gallery coming soon. Follow us on social media for latest work!
          </p>
        </div>
      </section>
    </div>
  );
}
