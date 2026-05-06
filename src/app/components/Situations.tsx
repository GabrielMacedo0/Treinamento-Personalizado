import { Target, TrendingUp, Heart, Trophy } from "lucide-react";

export function Situations() {
  const situations = [
    {
      icon: <Target className="w-12 h-12 text-blue-600 mb-4" />,
      title: "Quando a disciplina não se sustenta",
      description: "Para quem começa forte, para, recomeça e sente dificuldade em manter constância entre trabalho, família e rotina corrida."
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-blue-600 mb-4" />,
      title: "Quando você treina, mas não evolui",
      description: "Para quem já corre, pedala, treina ou frequenta academia, mas sente que o esforço não está se convertendo em performance real."
    },
    {
      icon: <Heart className="w-12 h-12 text-blue-600 mb-4" />,
      title: "Quando o corpo pede mudança",
      description: "Para quem sente queda de energia, ganho de peso, dores frequentes ou percebe que precisa investir em saúde antes que o tempo cobre a conta."
    },
    {
      icon: <Trophy className="w-12 h-12 text-blue-600 mb-4" />,
      title: "Quando você quer competir em alto nível",
      description: "Para runners, ciclistas e atletas que desejam performance com método profissional."
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">Como funciona</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Situações comuns em diferentes fases da sua evolução física. <br/>
            Identifique o que mais se aproxima do seu momento atual.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {situations.map((situation, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100"
            >
              {situation.icon}
              <h3 className="text-2xl mb-4">{situation.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {situation.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
