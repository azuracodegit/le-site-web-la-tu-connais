import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X, Code2, Mail, Users, ChevronRight, Globe, Sparkles, Shield } from 'lucide-react';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center pl-4 sm:pl-0">
                <Link to="/" className="flex items-center">
                  <Code2 className="h-8 w-8 text-blue-600" />
                  <span className="ml-1 text-xl font-bold text-gray-900">AzuraCode</span>
                </Link>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden sm:flex sm:items-center sm:space-x-8">
                <Link to="/" className="text-gray-700 hover:text-blue-600 hover:scale-110 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300">
                  Accueil
                </Link>
                <Link to="/about" className="text-gray-700 hover:text-blue-600 hover:scale-110 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300">
                  Qui Sommes-Nous
                </Link>
                <Link to="/contact" className="text-gray-700 hover:text-blue-600 hover:scale-110 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300">
                  Contact
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="sm:hidden flex items-center">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-700 hover:text-blue-600 hover:scale-110 transition-all duration-300"
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="sm:hidden">
              <div className="pt-2 pb-3 space-y-1">
                <Link
                  to="/"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Accueil
                </Link>
                <Link
                  to="/about"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Qui Sommes-Nous
                </Link>
                <Link
                  to="/contact"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={
              <>
                <About />
                <footer className="bg-white">
                  <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                      <p className="text-gray-500 text-sm">
                        © 2024 AzuraCode. Tous droits réservés.
                      </p>
                    </div>
                  </div>
                </footer>
              </>
            } />
            <Route path="/contact" element={
              <>
                <Contact />
                <footer className="bg-white">
                  <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                      <p className="text-gray-500 text-sm">
                        © 2024 AzuraCode. Tous droits réservés.
                      </p>
                    </div>
                  </div>
                </footer>
              </>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;