import { CheckCircle } from "lucide-react";

export function About() {
  const credentials = [
    "Bacharelado em Educação Física",
    "Treinamento Desportivo e Performance Humana",
    "Preparação Física para Endurance",
    "Fisiologia do Exercício Aplicada à Alta Performance",
    "Prescrição de Treinamento para Emagrecimento e Saúde",
    "Biomecânica da Corrida e Eficiência de Movimento",
    "Psicologia do Esporte e Construção de Disciplina",
    "Nutrição Esportiva Aplicada ao Desempenho",
    "Avaliação Física e Monitoramento de Performance"
  ];

  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl mb-6">Sobre Matheus</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Matheus é profissional de Educação Física, empresário e atleta de endurance,
                com histórico competitivo no esporte e vivência prática em alta performance.
              </p>
              <p>
                Ao longo dos anos, desenvolveu uma visão integrada entre treinamento, disciplina,
                comportamento e resultados sustentáveis, conciliando rotina profissional, família e performance esportiva.
              </p>
              <p>
                Sua metodologia vai além de treinos. Une a ciência do treinamento, psicologia aplicada à performance
                e estratégias práticas de rotina para ajudar pessoas a criarem consistência real, superarem autossabotagem
                e evoluírem com equilíbrio.
              </p>
              <p>
                A atuação é direcionada para quem busca emagrecer, melhorar performance e construir longevidade com método.
              </p>
              <p className="font-semibold">
                Mais do que treinos, nosso trabalho estrutura estilos de vida fortes e sustentáveis,
                capazes de gerar resultados no corpo, na mente e uma evolução contínua.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl mb-6">Formações Complementares</h3>
            <div className="space-y-3">
              {credentials.map((credential, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{credential}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
