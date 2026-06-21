import { Link } from 'react-router-dom';
import { ArrowRight, Camera, BookOpen, TrendingUp } from 'lucide-react';

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-navy-dark via-navy-secondary to-navy-dark">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal/10 via-transparent to-transparent"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-display font-bold mb-6 bg-gradient-to-r from-gold via-teal to-gold bg-clip-text text-transparent animate-[gradient_8s_ease_infinite] bg-[length:200%_auto]">
            RIE-Edge
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
            Where Vision Meets Venture
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            A diversified portfolio spanning photography, publishing, and strategic investments.
            Building brands that inspire and endure.
          </p>
          <Link
            to="/ventures/rouzyverse"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal to-teal/80 hover:from-teal/90 hover:to-teal/70 text-white px-8 py-4 rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg"
          >
            <span>Explore Ventures</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Featured Ventures Preview */}
      <section className="py-20 px-4 bg-navy-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-center mb-4">Our Ventures</h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Three distinct pillars driving innovation and creativity
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* RouzyVerse */}
            <Link to="/ventures/rouzyverse" className="group">
              <div className="bg-gradient-to-br from-navy-dark to-navy-secondary border border-gray-800 rounded-xl p-8 h-full hover:border-teal transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal/20">
                <div className="bg-teal/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-teal/20 transition-colors">
                  <Camera className="w-8 h-8 text-teal" />
                </div>
                <h3 className="text-2xl font-display font-semibold mb-3 group-hover:text-teal transition-colors">
                  RouzyVerse
                </h3>
                <p className="text-gray-400 mb-4">
                  Visual storytelling through photography and social media. Capturing moments that matter.
                </p>
                <div className="flex items-center space-x-2 text-teal opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium">Explore Gallery</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>

            {/* Books */}
            <Link to="/ventures/books" className="group">
              <div className="bg-gradient-to-br from-navy-dark to-navy-secondary border border-gray-800 rounded-xl p-8 h-full hover:border-gold transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold/20">
                <div className="bg-gold/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  <BookOpen className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-2xl font-display font-semibold mb-3 group-hover:text-gold transition-colors">
                  RIE-Edge Books
                </h3>
                <p className="text-gray-400 mb-4">
                  Curated collection of compelling narratives. From children's adventures to literary fiction.
                </p>
                <div className="flex items-center space-x-2 text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium">View Collection</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>

            {/* Investments */}
            <Link to="/ventures/investments" className="group">
              <div className="bg-gradient-to-br from-navy-dark to-navy-secondary border border-gray-800 rounded-xl p-8 h-full hover:border-teal transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal/20">
                <div className="bg-teal/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-teal/20 transition-colors">
                  <TrendingUp className="w-8 h-8 text-teal" />
                </div>
                <h3 className="text-2xl font-display font-semibold mb-3 group-hover:text-teal transition-colors">
                  RIE-Edge Investments
                </h3>
                <p className="text-gray-400 mb-4">
                  Strategic ventures in gear and real estate. Building value through diversification.
                </p>
                <div className="flex items-center space-x-2 text-teal opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 px-4 bg-navy-dark border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-display font-bold text-gold mb-2" style={{ fontVariantNumeric: 'tabular-nums' }}>
                3
              </div>
              <div className="text-gray-400">Active Ventures</div>
            </div>
            <div>
              <div className="text-5xl font-display font-bold text-teal mb-2" style={{ fontVariantNumeric: 'tabular-nums' }}>
                4
              </div>
              <div className="text-gray-400">Published Books</div>
            </div>
            <div>
              <div className="text-5xl font-display font-bold text-gold mb-2" style={{ fontVariantNumeric: 'tabular-nums' }}>
                2
              </div>
              <div className="text-gray-400">Investment Holdings</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
