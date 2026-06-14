import { CheckCircle } from "lucide-react";
import { useState } from "react";

import photoRioRun from "../../assets/matheus-rio-run.jpeg";
import photoBike from "../../assets/matheus-bike.jpeg";
import photoIronmanRun from "../../assets/matheus-ironman-run.jpeg";
import photoRun2 from "../../assets/matheus-run2.jpeg";
import photoSwim from "../../assets/matheus-swim.jpeg";
import photoPodium from "../../assets/matheus-podium.jpeg";

const photos = [
  { src: photoRioRun, alt: "Matheus correndo no Ironman Rio com Cristo Redentor ao fundo", label: "Ironman Rio #981" },
  { src: photoBike, alt: "Matheus no ciclismo do Ironman", label: "Ironman - Ciclismo" },
  { src: photoIronmanRun, alt: "Matheus na corrida do Ironman", label: "Ironman - Corrida" },
  { src: photoRun2, alt: "Matheus competindo em triathlon", label: "Triathlon #67" },
  { src: photoSwim, alt: "Matheus na natação do triathlon", label: "Natação" },
  { src: photoPodium, alt: "Matheus e equipe no pódio do Ultra BM 75K", label: "Ultra BM 75K — 1º Lugar" },
];

export function About() {
  const [activePhoto, setActivePhoto] = useState(0);

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
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">Sobre Matheus</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Profissional de Educação Física, empresário e atleta de endurance com histórico competitivo real
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Photo gallery */}
          <div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl mb-4" style={{ aspectRatio: "4/3" }}>
              <img
                src={photos[activePhoto].src}
                alt={photos[activePhoto].alt}
                className="w-full h-full object-cover transition-all duration-300"
              />
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                🏅 {photos[activePhoto].label}
              </div>
            </div>

            <div className="grid grid-cols-6 gap-2">
              {photos.map((photo, i) => (
                <button
                  key={i}
                  onClick={() => setActivePhoto(i)}
                  className={`rounded-lg overflow-hidden transition-all duration-200 ${
                    activePhoto === i
                      ? "ring-2 ring-primary ring-offset-2 opacity-100"
                      : "opacity-60 hover:opacity-90"
                  }`}
                  style={{ aspectRatio: "1/1" }}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {["Ironman Brasil", "Ultra BM 75K — 1º Lugar", "Triathlon", "Endurance"].map((badge) => (
                <span
                  key={badge}
                  className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full border border-primary/20"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Bio */}
          <div>
            <div className="space-y-4 text-gray-700 leading-relaxed mb-8">
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
              <p className="font-semibold text-gray-900">
                Mais do que treinos, nosso trabalho estrutura estilos de vida fortes e sustentáveis,
                capazes de gerar resultados no corpo, na mente e uma evolução contínua.
              </p>
            </div>

            <h3 className="text-2xl mb-5 font-semibold">Formações Complementares</h3>
            <div className="space-y-2">
              {credentials.map((credential, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{credential}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
