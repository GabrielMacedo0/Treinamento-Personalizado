import { Menu, X, Calendar } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">Treinamento Personalizado</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Início</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">Sobre</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Planos</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Depoimentos</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contato</a>
            <a
              href="#contact"
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-md"
            >
              <Calendar className="w-4 h-4" />
              Agendar Análise
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <a href="#home" className="block text-gray-700 hover:text-blue-600 transition-colors">Início</a>
            <a href="#about" className="block text-gray-700 hover:text-blue-600 transition-colors">Sobre</a>
            <a href="#services" className="block text-gray-700 hover:text-blue-600 transition-colors">Planos</a>
            <a href="#testimonials" className="block text-gray-700 hover:text-blue-600 transition-colors">Depoimentos</a>
            <a href="#contact" className="block text-gray-700 hover:text-blue-600 transition-colors">Contato</a>
            <a
              href="#contact"
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors w-fit"
            >
              <Calendar className="w-4 h-4" />
              Agendar Análise
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
