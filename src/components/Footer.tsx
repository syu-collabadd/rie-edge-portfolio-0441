import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-secondary border-t border-gray-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-bold bg-gradient-to-r from-gold to-teal bg-clip-text text-transparent mb-4">
              RIE-Edge
            </h3>
            <p className="text-gray-400 text-sm">
              Where vision meets venture. Building brands that inspire and endure.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-gray-300">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-teal transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-teal transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-teal transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Ventures */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-gray-300">Ventures</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/ventures/rouzyverse" className="text-gray-400 hover:text-teal transition-colors text-sm">
                  RouzyVerse
                </Link>
              </li>
              <li>
                <Link to="/ventures/books" className="text-gray-400 hover:text-teal transition-colors text-sm">
                  RIE-Edge Books
                </Link>
              </li>
              <li>
                <Link to="/ventures/investments" className="text-gray-400 hover:text-teal transition-colors text-sm">
                  RIE-Edge Investments
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-gray-300">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:info@rie-edge.com" className="text-gray-400 hover:text-teal transition-colors text-sm">
                  info@rie-edge.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} RIE-Edge. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-4 md:mt-0">
            Built with vision and purpose
          </p>
        </div>
      </div>
    </footer>
  );
}
