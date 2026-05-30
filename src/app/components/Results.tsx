export function Results() {
  const stats = [
    {
      number: "+1.200 kg",
      label: "Perda de peso somada entre alunos acompanhados"
    },
    {
      number: "87%",
      label: "Mantiveram constância após os primeiros 90 dias"
    },
    {
      number: "+15 anos",
      label: "De experiência prática em esporte, treinamento e performance"
    },
    {
      number: "+300",
      label: "Planos personalizados aplicados entre emagrecimento, endurance e saúde"
    }
  ];

  return (
    <section className="py-20 px-6 bg-primary text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">Atuação baseada em resultados reais</h2>
          <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            Ao longo dos anos, ajudamos pessoas comuns, atletas e profissionais ocupados a transformar saúde, performance e estilo de vida com estratégia, consistência e acompanhamento individual.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-[#0a6338] rounded-xl"
            >
              <div className="text-5xl font-bold mb-3">{stat.number}</div>
              <div className="text-green-100 leading-relaxed">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
