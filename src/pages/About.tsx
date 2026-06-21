import { Target, Lightbulb, Users } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-navy-dark via-navy-secondary to-navy-dark">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-gold to-teal bg-clip-text text-transparent">
            About RIE-Edge
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Building a portfolio of ventures that span creativity, storytelling, and strategic investment.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4 bg-navy-secondary border-y border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-display font-semibold mb-6 text-gold">Our Mission</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            RIE-Edge exists at the intersection of art, literature, and business. We believe in the power
            of visual storytelling, the impact of written word, and the value of strategic diversification.
            Each venture under our umbrella represents a commitment to excellence and innovation.
          </p>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 px-4 bg-navy-dark">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-center mb-16">Our Values</h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-gradient-to-br from-teal/20 to-teal/5 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border border-teal/30">
                <Target className="w-10 h-10 text-teal" />
              </div>
              <h3 className="text-2xl font-display font-semibold mb-4">Purpose-Driven</h3>
              <p className="text-gray-400 leading-relaxed">
                Every venture we undertake is guided by a clear purpose and commitment to making a meaningful impact.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-gold/20 to-gold/5 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border border-gold/30">
                <Lightbulb className="w-10 h-10 text-gold" />
              </div>
              <h3 className="text-2xl font-display font-semibold mb-4">Innovation First</h3>
              <p className="text-gray-400 leading-relaxed">
                We embrace new ideas, creative approaches, and forward-thinking strategies across all our ventures.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-teal/20 to-teal/5 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border border-teal/30">
                <Users className="w-10 h-10 text-teal" />
              </div>
              <h3 className="text-2xl font-display font-semibold mb-4">Community Focused</h3>
              <p className="text-gray-400 leading-relaxed">
                Building connections and creating value for our audiences, readers, and partners is at the heart of what we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 bg-navy-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-display font-bold mb-8">Our Story</h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              RIE-Edge was founded on the belief that true success comes from diversification—not just in
              business, but in passion. Our journey began with a love for visual storytelling through
              photography, which evolved into RouzyVerse, our photography and social media brand.
            </p>
            <p>
              As our creative pursuits expanded, we ventured into publishing, bringing compelling stories
              to life through RIE-Edge Books. From children's literature to thought-provoking fiction, our
              publishing arm represents our commitment to the written word.
            </p>
            <p>
              Today, RIE-Edge stands as a testament to the power of pursuing multiple passions with equal
              dedication. Through our investments in gear and real estate, we've rounded out our portfolio
              with strategic ventures that complement our creative endeavors.
            </p>
            <p className="text-gold font-medium">
              We're building more than businesses—we're creating a legacy of creativity, innovation, and value.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
