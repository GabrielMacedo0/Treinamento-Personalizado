
export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Treinamento Personalizado</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Transforme sua saúde, performance e estilo de vida com método profissional,
              acompanhamento individual e resultados sustentáveis.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span>IG</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span>IG</span>
              </a>
              <a href="mailto:contato@exemplo.com" className="text-gray-400 hover:text-white transition-colors">
                <span>IG</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg mb-4 font-semibold">Navegação</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Planos</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Depoimentos</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg mb-4 font-semibold">Áreas de Atuação</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Emagrecimento</li>
              <li>Performance Esportiva</li>
              <li>Endurance (Corrida, Ciclismo)</li>
              <li>Ganho de Massa Muscular</li>
              <li>Saúde e Longevidade</li>
              <li>Preparação para Competições</li>
              <li>Construção de Disciplina</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2026 Treinamento Personalizado. Todos os direitos reservados. |
            Evolução física sustentável com método profissional
          </p>
        </div>
      </div>
    </footer>
  );
}
