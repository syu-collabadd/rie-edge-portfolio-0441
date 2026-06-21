import { ExternalLink, BookOpen } from 'lucide-react';

export function Books() {
  const books = [
    {
      title: 'Adventures of Leo & Atlas',
      description: 'A heartwarming children\'s tale following the exciting journeys of two best friends as they discover the world around them.',
      status: 'Published',
      link: '#',
      hasWebsite: true,
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Hotel Persia',
      description: 'An evocative narrative exploring culture, heritage, and the stories that connect generations through the lens of a historic hotel.',
      status: 'Landing Page',
      link: '#',
      hasWebsite: false,
      color: 'from-amber-500 to-orange-600'
    },
    {
      title: 'The Trilogy',
      description: 'A sweeping three-part saga that weaves together themes of identity, belonging, and transformation across time and space.',
      status: 'Coming Soon',
      link: '#',
      hasWebsite: false,
      color: 'from-emerald-500 to-teal-600'
    },
    {
      title: 'ByteCalls',
      description: 'Contemporary fiction exploring the intersection of technology and human connection in our digital age.',
      status: 'Landing Page',
      link: '#',
      hasWebsite: false,
      color: 'from-pink-500 to-rose-600'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-navy-dark via-navy-secondary to-navy-dark">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-gold to-amber-500 bg-clip-text text-transparent">
            RIE-Edge Books
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
            Stories That Inspire & Endure
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            From children's adventures to thought-provoking fiction, our publishing portfolio
            brings diverse voices and compelling narratives to readers worldwide.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4 bg-navy-secondary border-y border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-display font-semibold mb-6 text-gold">Our Publishing Vision</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            RIE-Edge Books is committed to publishing stories that matter. We believe in the power of
            literature to educate, inspire, and transform. Each title in our catalog represents a
            unique voice and perspective, carefully curated to resonate with readers of all ages.
          </p>
        </div>
      </section>

      {/* Books Grid */}
      <section className="py-20 px-4 bg-navy-dark">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-center mb-4">Our Collection</h2>
          <p className="text-gray-400 text-center mb-16">
            Explore our published works and upcoming releases
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {books.map((book) => (
              <div
                key={book.title}
                className="group bg-gradient-to-br from-navy-secondary to-navy-dark border border-gray-800 rounded-xl overflow-hidden hover:border-gray-600 transition-all duration-300 hover:shadow-2xl"
              >
                {/* Book Cover Placeholder */}
                <div className={`relative h-64 bg-gradient-to-br ${book.color} flex items-center justify-center`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10 text-center">
                    <BookOpen className="w-20 h-20 text-white/40 mx-auto mb-4" />
                    <p className="text-white/60 text-sm">Cover Coming Soon</p>
                  </div>
                </div>

                {/* Book Info */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-display font-semibold group-hover:text-gold transition-colors">
                      {book.title}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      book.status === 'Published'
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : book.status === 'Coming Soon'
                        ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                        : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                    }`}>
                      {book.status}
                    </span>
                  </div>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {book.description}
                  </p>

                  <a
                    href={book.link}
                    className={`inline-flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                      book.hasWebsite
                        ? 'bg-gold hover:bg-gold/90 text-navy-dark'
                        : 'bg-navy-dark border border-gray-700 hover:border-gold text-gray-300 hover:text-gold'
                    }`}
                  >
                    <span>{book.hasWebsite ? 'Visit Website' : 'Learn More'}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-navy-secondary border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-display font-semibold mb-4">Stay Updated</h2>
          <p className="text-gray-400 mb-8">
            New titles and announcements coming soon. Follow our journey as we bring more stories to life.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center space-x-2 bg-gold hover:bg-gold/90 text-navy-dark px-8 py-4 rounded-lg font-medium transition-all transform hover:scale-105"
          >
            <span>Get in Touch</span>
          </a>
        </div>
      </section>
    </div>
  );
}
