import { Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Eduardo Rodrigues",
      role: "Executivo",
      text: "Em 6 meses perdi 18kg e voltei a correr. O diferencial foi o método: não foi só treino, foi mudança de mentalidade e rotina. Hoje mantenho os resultados sem sofrimento."
    },
    {
      name: "Lucas Laurentino",
      role: "Empresário",
      text: "Sempre treinei, mas sem direção. Com o acompanhamento personalizado, bati meu melhor tempo na meia maratona e ainda reduzi 7% de gordura corporal. Performance real."
    },
    {
      name: "Stephany Borowiec",
      role: "Designer",
      text: "A abordagem vai além do treino físico. Aprendi a gerenciar ansiedade, melhorei meu sono e criei uma rotina sustentável mesmo com agenda cheia."
    },
    {
      name: "Rafaela Brunetto",
      role: "Advogada",
      text: "Depois de anos tentando emagrecer sozinha, finalmente encontrei um método que funciona. Perdi 12kg em 4 meses e, mais importante, mantive por mais de 1 ano."
    },
    {
      name: "Renata Macedo",
      role: "Professora",
      text: "O acompanhamento nutricional integrado fez toda diferença. Aprendi a comer para performance e não apenas para emagrecer. Resultado: corpo e mente melhores."
    },
    {
      name: "Nathalia Santos",
      role: "Médica",
      text: "Como profissional da saúde, valorizo evidência científica. O treino é periodizado, progressivo e adaptado à minha rotina. Resultados consistentes mês a mês."
    },
    {
      name: "Victor Goor",
      role: "Triatleta Amador",
      text: "Competindo há 5 anos, esse foi meu melhor ano. Melhorei 15min no Ironman e evitei lesões com o trabalho de prevenção e biomecânica."
    },
    {
      name: "Heloisa Vieira",
      role: "Arquiteta",
      text: "Não queria apenas emagrecer, queria qualidade de vida. Hoje tenho mais energia, durmo melhor e me sinto 10 anos mais jovem. Mudança completa."
    },
    {
      name: "Gabriel Macedo",
      role: "Engenheiro",
      text: "O suporte via WhatsApp faz diferença. Quando tenho dúvida ou preciso ajustar algo na rotina, tenho resposta rápida. Acompanhamento de verdade."
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">O que nossos alunos dizem</h2>
          <p className="text-xl text-gray-600">
            Resultados reais de quem transformou corpo, mente e estilo de vida
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              <Quote className="w-10 h-10 text-[#F4C542] mb-4" />
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <div className="border-t pt-4">
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-gray-500 text-sm">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
