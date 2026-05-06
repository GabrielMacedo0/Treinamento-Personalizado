import { CheckCircle } from "lucide-react";

export function Services() {
  const plans = [
    {
      name: "START",
      subtitle: "Para quem precisa começar certo, ganhar consistência e ter direcionamento profissional",
      price: "US$ 147",
      period: "/mês",
      features: [
        "Avaliação inicial completa",
        "Diagnóstico de rotina, objetivos e limitações",
        "Planejamento de treino personalizado",
        "Ajustes mensais de treino",
        "1 encontro mensal de 60 min (no primeiro mês onboarding estratégico)",
        "Comunidade exclusiva",
        "Suporte via WhatsApp (horário comercial)"
      ],
      recommended: false
    },
    {
      name: "PRIME",
      subtitle: "Para quem quer resultado consistente com acompanhamento mais próximo",
      price: "US$ 347",
      period: "/mês",
      features: [
        "Tudo do plano anterior +",
        "2 encontros mensais (1x 60 min + 1x 30 min)",
        "Encontro a cada 90 dias com Nutricionista",
        "Avaliação corporal a cada 60 dias",
        "Revisão constante de metas",
        "Treino evolutivo e periodizado",
        "Prioridade no Atendimento"
      ],
      recommended: true,
      note: "Minha recomendação"
    }
  ];

  return (
    <section id="services" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">Nossos Planos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha o plano ideal para sua jornada de transformação
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 border-2 ${
                plan.recommended
                  ? 'border-blue-600 shadow-2xl transform scale-105'
                  : 'border-gray-200 shadow-lg'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                  {plan.note}
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-3xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{plan.subtitle}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-blue-600">{plan.price}</span>
                  <span className="text-gray-600 text-lg">{plan.period}</span>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className={`block w-full text-center py-3 rounded-lg font-semibold transition-all ${
                  plan.recommended
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                Começar Agora
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
