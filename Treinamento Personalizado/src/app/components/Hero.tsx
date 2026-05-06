export function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-32 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl mb-8 leading-tight">
          Treinamento Personalizado com <span className="text-blue-200">Resultados Reais</span>
        </h1>
        <div className="space-y-4 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
          <p>Em momentos de cansaço, estagnação, ganho de peso ou falta de consistência, treinar sem direção costuma gerar frustração.</p>
          <p className="font-semibold">Resultados REAIS exigem método e acompanhamento.</p>
          <p>Saúde, performance e esporte não são objetivos separados. São pilares da mesma vida.</p>
          <p>É nesse ponto que atuamos, estruturando evolução física sustentável para quem quer viver melhor e performar mais.</p>
        </div>
        <a
          href="#contact"
          className="inline-block bg-white text-blue-600 px-10 py-4 rounded-lg hover:bg-blue-50 transition-all transform hover:scale-105 text-lg font-semibold shadow-xl"
        >
          Agende a análise do seu projeto
        </a>
      </div>
    </section>
  );
}
