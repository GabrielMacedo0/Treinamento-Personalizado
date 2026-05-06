import { Activity, Brain, Utensils, Moon, Heart, Users, DollarSign, Sparkles } from "lucide-react";

export function Pillars() {
  const pillars = [
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Saúde Física",
      description: "Movimento, força, condicionamento, energia e composição corporal.",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Saúde Mental",
      description: "Clareza, foco, disciplina, resiliência e controle emocional.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Saúde Nutricional",
      description: "Relação inteligente com alimentação, energia e recuperação.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Moon className="w-8 h-8" />,
      title: "Saúde do Sono",
      description: "Recuperação, hormônios, disposição e longevidade.",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Saúde Emocional",
      description: "Gestão de ansiedade, autoconfiança e equilíbrio interno.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Saúde Social",
      description: "Relacionamentos, ambiente e conexão humana.",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Saúde Financeira",
      description: "Organização, paz mental e liberdade de escolhas.",
      color: "from-yellow-500 to-amber-500"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Saúde Espiritual / Propósito",
      description: "Sentido, valores e direção de vida.",
      color: "from-violet-500 to-purple-500"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-6">Os pilares da nossa atuação</h2>
          <div className="max-w-3xl mx-auto space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>Acreditamos que performance nasce do equilíbrio entre diferentes áreas da vida.</p>
            <p>Corpo forte sem mente estável não sustenta.</p>
            <p>Resultado físico sem rotina organizada dura pouco.</p>
            <p>Alta performance sem saúde emocional vai cobrar.</p>
            <p className="font-semibold">
              Por isso, enxergamos o ser humano de forma completa.
            </p>
            <p>
              Trabalhamos com o conceito das <strong>8 saúdes</strong>,
              entendendo que evolução verdadeira acontece quando diferentes pilares caminham juntos.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border-t-4 border-transparent hover:border-blue-600 group"
            >
              <div className={`text-white bg-gradient-to-br ${pillar.color} p-3 rounded-lg inline-block mb-4`}>
                {pillar.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors">{pillar.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-blue-600 text-white p-8 rounded-xl text-center mb-8">
          <h3 className="text-2xl mb-4">Nosso foco de atuação</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Embora olhemos para o todo, concentramos nossa atuação onde conseguimos gerar impacto mais direto e consistente:
          </p>
          <div className="grid md:grid-cols-4 gap-4 text-left max-w-4xl mx-auto">
            {[
              "Saúde física",
              "Performance esportiva",
              "Composição corporal",
              "Rotina e disciplina",
              "Consistência",
              "Energia e longevidade",
              "Hábitos sustentáveis",
              "Equilíbrio mental"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-2xl text-gray-700 font-semibold">
            Você não precisa mudar tudo. Precisa começar pelo que muda o resto.
          </p>
        </div>
      </div>
    </section>
  );
}
