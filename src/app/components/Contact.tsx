import { useState } from "react";
import { Calendar, Mail, MessageCircle } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    goal: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Obrigado pelo interesse! Entraremos em contato em breve para agendar sua análise.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 text-white leading-tight">
            Your next level may not require changing everything.
          </h2>
          <p className="text-2xl text-blue-100 max-w-3xl mx-auto">
            It may simply require changing the right things first.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl mb-8">Próximos Passos</h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4 bg-blue-700 p-6 rounded-xl">
                <Calendar className="w-8 h-8 text-blue-200 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2 text-xl">1. Agende sua Análise</h4>
                  <p className="text-blue-100 leading-relaxed">
                    Preencha o formulário e agende um encontro inicial para entendermos
                    seu momento atual, objetivos e limitações.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-blue-700 p-6 rounded-xl">
                <MessageCircle className="w-8 h-8 text-blue-200 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2 text-xl">2. Diagnóstico Completo</h4>
                  <p className="text-blue-100 leading-relaxed">
                    Realizamos análise de rotina, histórico de treinos, avaliação física
                    e definimos um plano personalizado.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-blue-700 p-6 rounded-xl">
                <Mail className="w-8 h-8 text-blue-200 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2 text-xl">3. Comece sua Transformação</h4>
                  <p className="text-blue-100 leading-relaxed">
                    Inicie seu programa de treino personalizado com acompanhamento
                    contínuo e ajustes constantes.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-700 p-6 rounded-xl">
              <p className="text-lg leading-relaxed">
                <strong className="text-blue-100">Agende agora:</strong>
                <br/>
                <a
                  href="https://calendar.app.google/m6zti8LiEBay1t7U6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-200 underline text-xl"
                >
                  Clique aqui para agendar pelo Google Calendar
                </a>
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 text-gray-900">
            <h3 className="text-2xl mb-6">Solicite sua Análise Gratuita</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefone/WhatsApp *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="goal" className="block text-sm font-medium text-gray-700 mb-1">
                  Objetivo Principal *
                </label>
                <select
                  id="goal"
                  name="goal"
                  required
                  value={formData.goal}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                >
                  <option value="">Selecione seu objetivo</option>
                  <option value="emagrecimento">Emagrecimento</option>
                  <option value="performance">Performance Esportiva</option>
                  <option value="saude">Saúde e Bem-estar</option>
                  <option value="hipertrofia">Ganho de Massa Muscular</option>
                  <option value="consistencia">Criar Consistência</option>
                  <option value="competicao">Preparação para Competição</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Conte um pouco sobre seu momento atual
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Qual sua rotina? Já treina? Quais são seus principais desafios?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 font-semibold text-lg shadow-lg"
              >
                Solicitar Análise Gratuita
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
