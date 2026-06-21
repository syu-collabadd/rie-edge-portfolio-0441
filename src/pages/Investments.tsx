import { TrendingUp, Package, Home, ArrowRight } from 'lucide-react';

export function Investments() {
  const investments = [
    {
      name: 'PSA Gear',
      icon: Package,
      description: 'Premium outdoor and tactical gear for professionals and enthusiasts. Quality equipment built to last.',
      category: 'Equipment & Retail',
      status: 'Active Development',
      features: [
        'Premium quality products',
        'Professional-grade equipment',
        'Tactical and outdoor focus',
        'E-commerce platform in development'
      ],
      color: 'from-teal-500 to-cyan-600'
    },
    {
      name: 'Section 8',
      icon: Home,
      description: 'Strategic real estate investment focused on housing solutions and community development.',
      category: 'Real Estate',
      status: 'Landing Page',
      features: [
        'Housing-focused investments',
        'Community development',
        'Strategic property holdings',
        'Long-term value creation'
      ],
      color: 'from-blue-600 to-indigo-700'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-navy-dark via-navy-secondary to-navy-dark">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal/10 via-transparent to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <TrendingUp className="w-16 h-16 text-teal" />
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-teal to-blue-500 bg-clip-text text-transparent">
            RIE-Edge Investments
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
            Strategic Ventures Building Value
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Diversified investment portfolio spanning equipment retail and real estate,
            focused on sustainable growth and long-term value creation.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 px-4 bg-navy-secondary border-y border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-semibold mb-6 text-center">Investment Philosophy</h2>
          <p className="text-gray-300 text-lg leading-relaxed text-center mb-8">
            Our investment approach is grounded in diversification, strategic positioning, and a commitment
            to building sustainable value. We seek opportunities that align with our core values of quality,
            community impact, and long-term growth.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-display font-bold text-teal mb-2" style={{ fontVariantNumeric: 'tabular-nums' }}>
                2
              </div>
              <div className="text-gray-400">Active Holdings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-display font-bold text-teal mb-2" style={{ fontVariantNumeric: 'tabular-nums' }}>
                100%
              </div>
              <div className="text-gray-400">Long-Term Focus</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-display font-bold text-teal mb-2" style={{ fontVariantNumeric: 'tabular-nums' }}>
                2
              </div>
              <div className="text-gray-400">Sectors</div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Holdings */}
      <section className="py-20 px-4 bg-navy-dark">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-center mb-4">Our Holdings</h2>
          <p className="text-gray-400 text-center mb-16">
            Strategic investments across complementary sectors
          </p>

          <div className="space-y-8">
            {investments.map((investment) => (
              <div
                key={investment.name}
                className="group bg-gradient-to-br from-navy-secondary to-navy-dark border border-gray-800 rounded-xl overflow-hidden hover:border-gray-600 transition-all duration-300 hover:shadow-2xl"
              >
                <div className="grid md:grid-cols-3 gap-8 p-8">
                  {/* Left: Icon and Name */}
                  <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <div className={`bg-gradient-to-br ${investment.color} w-20 h-20 rounded-xl flex items-center justify-center mb-4`}>
                      <investment.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-display font-bold mb-2 group-hover:text-teal transition-colors">
                      {investment.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">{investment.category}</p>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-teal/20 text-teal border border-teal/30">
                      {investment.status}
                    </span>
                  </div>

                  {/* Middle: Description */}
                  <div className="md:col-span-2">
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                      {investment.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3 mb-6">
                      {investment.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2 text-gray-400">
                          <div className="w-1.5 h-1.5 rounded-full bg-teal"></div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button className="inline-flex items-center space-x-2 px-6 py-3 bg-navy-dark border border-gray-700 hover:border-teal text-gray-300 hover:text-teal rounded-lg font-medium transition-all">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="py-20 px-4 bg-navy-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-display font-bold mb-8 text-center">Investment Strategy</h2>

          <div className="space-y-8">
            <div className="bg-navy-dark border border-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-display font-semibold mb-4 text-gold">Diversification</h3>
              <p className="text-gray-300 leading-relaxed">
                By maintaining holdings across different sectors—equipment retail and real estate—we
                create a balanced portfolio that mitigates risk while maximizing growth opportunities.
              </p>
            </div>

            <div className="bg-navy-dark border border-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-display font-semibold mb-4 text-teal">Long-Term Value</h3>
              <p className="text-gray-300 leading-relaxed">
                We're building businesses and assets that appreciate over time. Our focus is on sustainable
                growth, not quick wins—creating value that endures for years to come.
              </p>
            </div>

            <div className="bg-navy-dark border border-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-display font-semibold mb-4 text-gold">Strategic Alignment</h3>
              <p className="text-gray-300 leading-relaxed">
                Each investment complements our broader portfolio. From creative ventures to strategic
                holdings, every piece fits into a cohesive vision for RIE-Edge's future.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
