"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { X } from "lucide-react";

// Estrutura de dados dos projetos por cluster
const clusters = [
  {
    id: "territorio-memoria",
    title: "Território & Memória",
    subtitle: "Projetos que preservam e valorizam identidades locais",
    projects: [
      {
        id: 1,
        title: "Som & Luz — Terra da Cocanha",
        cluster: "territorio-memoria",
        category: "Cultura",
        year: "2023",
        institution: "Prefeitura Municipal",
        coverImage: "/images/portfolio/som-luz-terra-cocanha.jpg",
        gridWeight: "hero" as const,
        caption: {
          what: "Espetáculo de som e luz que narra a história e memória do território, transformando patrimônio em experiência sensorial.",
          why: "Projeto que conecta passado e presente, valorizando a identidade local e criando nova forma de vivenciar o patrimônio.",
          impact:
            "Experiência consolidada, fortalecimento da memória territorial e atração de visitantes interessados em história e cultura.",
        },
        gallery: [],
        press: [],
      },
      {
        id: 2,
        title: "Domadores de Pedra",
        cluster: "territorio-memoria",
        category: "Cultura",
        year: "2022",
        institution: "Instituição Cultural",
        coverImage: "/images/portfolio/domadores-pedra.jpg",
        gridWeight: "medium" as const,
        caption: {
          what: "Documentário sobre a memória e identidade do território, preservando histórias e saberes locais.",
          why: "Importante registro da memória coletiva e valorização da identidade cultural do território.",
          impact:
            "Documentário finalizado, preservação de memórias e fortalecimento da identidade local.",
        },
        gallery: [],
        press: [],
      },
      {
        id: 3,
        title: "Museu Rural Étnico Costa Beber",
        cluster: "territorio-memoria",
        category: "Cultura",
        year: "2023",
        institution: "Prefeitura Municipal",
        coverImage: "/images/portfolio/museu-rural-etnico.jpg",
        gridWeight: "small" as const,
        caption: {
          what: "Criação e implantação de museu que preserva e valoriza a memória rural e étnica do território.",
          why: "Espaço permanente de preservação da memória e fortalecimento da identidade cultural local.",
          impact:
            "Museu em operação, fortalecendo identidade e gerando fluxo de visitantes interessados em história.",
        },
        gallery: [],
        press: [],
      },
    ],
  },
  {
    id: "eventos-arte-urbana",
    title: "Eventos & Arte Urbana",
    subtitle: "Experiências que transformam espaços e conectam pessoas",
    projects: [
      {
        id: 4,
        title: "Natal Itinerante",
        cluster: "eventos-arte-urbana",
        category: "Cultura",
        year: "2023",
        institution: "Prefeitura Municipal",
        coverImage: "/images/portfolio/natal-itinerante.jpg",
        gridWeight: "hero" as const,
        caption: {
          what: "Evento natalino itinerante que leva cultura e arte para diferentes bairros e comunidades.",
          why: "Democratização do acesso à cultura e fortalecimento dos vínculos comunitários através da arte.",
          impact:
            "Evento consolidado, envolvimento de comunidades e fortalecimento da identidade local.",
        },
        gallery: [],
        press: [],
      },
      {
        id: 5,
        title: "Páscoa Della Vita",
        cluster: "eventos-arte-urbana",
        category: "Cultura",
        year: "2023",
        institution: "Prefeitura Municipal",
        coverImage: "/images/portfolio/pascoa-della-vita.jpg",
        gridWeight: "medium" as const,
        caption: {
          what: "Evento de Páscoa que integra cultura, tradição e arte urbana, criando experiência única para a comunidade.",
          why: "Valorização de tradições locais através de linguagem contemporânea e arte urbana.",
          impact:
            "Evento com grande participação comunitária e fortalecimento das tradições locais.",
        },
        gallery: [],
        press: [],
      },
      {
        id: 6,
        title: "Simpósios Internacionais de Escultores",
        cluster: "eventos-arte-urbana",
        category: "Cultura",
        year: "2022",
        institution: "Prefeitura Municipal",
        coverImage: "/images/portfolio/simposios-escultores.jpg",
        gridWeight: "small" as const,
        caption: {
          what: "Simpósios que reúnem escultores internacionais, criando obras permanentes no território.",
          why: "Transformação de espaços públicos através da arte e fortalecimento do turismo cultural.",
          impact:
            "Obras permanentes instaladas, atração de visitantes e fortalecimento do turismo cultural.",
        },
        gallery: [],
        press: [],
      },
    ],
  },
  {
    id: "turismo-educacao",
    title: "Turismo & Educação",
    subtitle: "Experiências que ensinam, sensibilizam e geram pertencimento",
    projects: [
      {
        id: 7,
        title: "Festival César Passarinho",
        cluster: "turismo-educacao",
        category: "Turismo",
        year: "2023",
        institution: "Prefeitura Municipal",
        coverImage: "/images/portfolio/festival-cesar-passarinho.jpg",
        gridWeight: "hero" as const,
        caption: {
          what: "Festival que integra turismo, cultura e educação, promovendo aprendizagem e experiência para visitantes e comunidades.",
          why: "Projeto que compreende o turismo como prática pedagógica, qualificando tanto visitantes quanto comunidades locais.",
          impact:
            "Festival consolidado, qualificação da experiência turística e fortalecimento do pertencimento local.",
        },
        gallery: [],
        press: [],
      },
      {
        id: 8,
        title: "FATU — Festival do Turismo e Aventura",
        cluster: "turismo-educacao",
        category: "Turismo",
        year: "2023",
        institution: "SETUR Caxias do Sul, Patrocínio Banrisul",
        coverImage: "/images/portfolio/fatu.jpg",
        gridWeight: "medium" as const,
        caption: {
          what: "Festival que integra turismo, aventura e educação, envolvendo escolas municipais e promovendo aprendizagem territorial.",
          why: "Projeto que conecta turismo e educação, qualificando estudantes e promovendo conhecimento sobre o território.",
          impact:
            "Envolvimento de escolas, qualificação de estudantes e fortalecimento do turismo pedagógico.",
        },
        gallery: [],
        press: [],
      },
    ],
  },
  {
    id: "projetos-pesquisa",
    title: "Projetos & Pesquisa",
    subtitle: "Pesquisa aplicada e projetos estratégicos de impacto",
    projects: [
      {
        id: 9,
        title: "Congresso Internacional de Turismo Cinematográfico e Literário",
        cluster: "projetos-pesquisa",
        category: "Projetos Estratégicos",
        year: "2023",
        institution: "UCS + Barcelona + Algarve + Groningen",
        coverImage: "/images/portfolio/congresso-turismo-cinematografico.jpg",
        gridWeight: "hero" as const,
        caption: {
          what: "Congresso internacional que reúne pesquisadores e profissionais de diferentes países para discutir turismo cinematográfico e literário.",
          why: "Projeto que articula pesquisa acadêmica, prática territorial e cooperação internacional.",
          impact:
            "Congresso realizado, fortalecimento de redes internacionais e produção de conhecimento aplicado.",
        },
        gallery: [],
        press: [],
      },
      {
        id: 10,
        title: "Edital Embratur — Hospitalidade em Verde-Amarelo",
        cluster: "projetos-pesquisa",
        category: "Projetos Estratégicos",
        year: "2023",
        institution: "Embratur",
        coverImage: "/images/portfolio/embratur-verde-amarelo.jpg",
        gridWeight: "medium" as const,
        caption: {
          what: "Projeto aprovado em edital nacional que desenvolve estratégias de hospitalidade e turismo com identidade brasileira.",
          why: "Projeto que articula pesquisa, estratégia e prática para fortalecer o turismo nacional.",
          impact:
            "Projeto aprovado e em execução, contribuindo para o fortalecimento do turismo brasileiro.",
        },
        gallery: [],
        press: [],
      },
      {
        id: 11,
        title: "Pesquisa para futuro Museu da Indústria Moageira do RS",
        cluster: "projetos-pesquisa",
        category: "Projetos Estratégicos",
        year: "2023",
        institution: "Instituição Pública",
        coverImage: "/images/portfolio/museu-industria-moageira.jpg",
        gridWeight: "small" as const,
        caption: {
          what: "Pesquisa aplicada para estruturação de futuro museu sobre a indústria moageira do Rio Grande do Sul.",
          why: "Projeto que articula pesquisa histórica, memória industrial e desenvolvimento territorial.",
          impact:
            "Pesquisa em desenvolvimento, contribuindo para preservação da memória industrial e desenvolvimento territorial.",
        },
        gallery: [],
        press: [],
      },
      {
        id: 12,
        title: "Workshop 'Da Colônia Ijuhy à Capital Mundial das Etnias'",
        cluster: "projetos-pesquisa",
        category: "Projetos Estratégicos",
        year: "2023",
        institution: "Universidade",
        coverImage: "/images/portfolio/workshop-colonia-ijuhy.jpg",
        gridWeight: "small" as const,
        caption: {
          what: "Workshop que articula pesquisa, memória e desenvolvimento territorial, explorando a identidade étnica do território.",
          why: "Projeto que conecta pesquisa acadêmica, memória coletiva e estratégias de desenvolvimento territorial.",
          impact:
            "Workshop realizado, produção de conhecimento e fortalecimento da identidade étnica do território.",
        },
        gallery: [],
        press: [],
      },
    ],
  },
  {
    id: "midia-repercussao",
    title: "Mídia & Repercussão",
    subtitle: "Repercussão na imprensa regional e estadual",
    projects: [],
    press: [
      {
        id: 1,
        image: "/images/portfolio/press-1.jpg",
        source: "Jornal Regional",
      },
      {
        id: 2,
        image: "/images/portfolio/press-2.jpg",
        source: "Portal de Notícias",
      },
      {
        id: 3,
        image: "/images/portfolio/press-3.jpg",
        source: "Jornal Estadual",
      },
      {
        id: 4,
        image: "/images/portfolio/press-4.jpg",
        source: "Portal Regional",
      },
      {
        id: 5,
        image: "/images/portfolio/press-5.jpg",
        source: "Jornal Regional",
      },
      {
        id: 6,
        image: "/images/portfolio/press-6.jpg",
        source: "Portal de Notícias",
      },
    ],
  },
];

const filters = [
  { id: "all", label: "Todos" },
  { id: "territorio-memoria", label: "Território & Memória" },
  { id: "eventos-arte-urbana", label: "Eventos & Arte Urbana" },
  { id: "turismo-educacao", label: "Turismo & Educação" },
  { id: "projetos-pesquisa", label: "Projetos & Pesquisa" },
  { id: "midia-repercussao", label: "Mídia & Repercussão" },
];

const getGridClass = (weight: "hero" | "medium" | "small") => {
  if (weight === "hero") {
    return "md:col-span-8 lg:col-span-6";
  }
  if (weight === "medium") {
    return "md:col-span-4 lg:col-span-3";
  }
  return "md:col-span-4 lg:col-span-3";
};

const getHeightClass = (weight: "hero" | "medium" | "small") => {
  if (weight === "hero") {
    return "min-h-[500px] md:min-h-[600px] lg:min-h-[700px]";
  }
  if (weight === "medium") {
    return "min-h-[400px] md:min-h-[500px]";
  }
  return "min-h-[300px] md:min-h-[400px]";
};

export default function PortfolioPage() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<
    (typeof clusters)[0]["projects"][0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Travar scroll quando modal aberto
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const handleProjectClick = (project: (typeof clusters)[0]["projects"][0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  // Fechar modal com ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isModalOpen) {
        handleCloseModal();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isModalOpen]);

  const filteredClusters =
    selectedFilter === "all"
      ? clusters
      : clusters.filter((c) => c.id === selectedFilter);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section - Editorial */}
      <section className="pt-32 pb-24 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold mb-8 text-white">
              Portfólio
            </h1>
            <h2 className="font-serif text-2xl md:text-3xl text-gray-300 mb-6 font-light">
              Projetos que transformam territórios, conectam pessoas e geram
              impacto duradouro.
            </h2>
            <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
              Cada projeto é uma experiência construída a partir de cultura,
              identidade, escuta e estratégia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sticky Filters */}
      <section className="sticky top-16 z-40 bg-background/95 backdrop-blur-sm border-b border-lime-400/10 py-4">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((filter) => {
              const isActive = selectedFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    isActive
                      ? "bg-lime-400 text-black"
                      : "border border-lime-400/30 text-gray-300 hover:border-lime-400/50"
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Clusters Sections */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12">
          <AnimatePresence mode="wait">
            {filteredClusters.map((cluster) => (
              <motion.div
                key={cluster.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-24 last:mb-0"
              >
                {/* Cluster Header */}
                <div className="mb-12 text-center">
                  <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-3">
                    {cluster.title}
                  </h3>
                  {cluster.subtitle && (
                    <p className="text-sm md:text-base text-gray-400 font-light tracking-wide max-w-xl mx-auto">
                      {cluster.subtitle}
                    </p>
                  )}
                </div>

                {/* Projects Grid */}
                {cluster.projects && cluster.projects.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-6 md:gap-8">
                    {cluster.projects.map((project, index) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        className={`${getGridClass(
                          project.gridWeight
                        )} cursor-pointer group`}
                        onClick={() => handleProjectClick(project)}
                      >
                        <div
                          className={`relative w-full ${getHeightClass(
                            project.gridWeight
                          )} rounded-lg overflow-hidden bg-gradient-to-br from-lime-500/10 to-green-500/10 border border-lime-400/20 hover:border-lime-400/40 transition-all hover:scale-[1.02]`}
                        >
                          {/* Placeholder para imagem - substituir por imagens reais */}
                          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                            <p className="text-gray-500 text-sm">
                              {project.title}
                            </p>
                          </div>

                          {/* Overlay com informações */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                              <h4 className="font-serif text-xl md:text-2xl font-bold text-white mb-2 line-clamp-2">
                                {project.title}
                              </h4>
                              <p className="text-xs md:text-sm text-gray-300">
                                {project.category} · {project.year}
                              </p>
                              {project.institution && (
                                <p className="text-xs text-gray-400 mt-1">
                                  {project.institution}
                                </p>
                              )}
                            </div>
                          </div>

                          {/* Informações sempre visíveis (mobile) */}
                          <div className="absolute bottom-4 left-4 right-4 md:hidden">
                            <h4 className="font-serif text-lg font-bold text-white mb-1 line-clamp-2">
                              {project.title}
                            </h4>
                            <p className="text-xs text-gray-300">
                              {project.category} · {project.year}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Press Clipping Section */}
                {cluster.id === "midia-repercussao" && cluster.press && (
                  <div className="mt-12">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                      {cluster.press.map((item) => (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4 }}
                          className="relative aspect-[3/4] rounded-lg overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-lime-400/20 shadow-lg"
                        >
                          <div className="absolute inset-0 flex items-center justify-center">
                            <p className="text-gray-600 text-xs text-center px-2">
                              {item.source}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-white">
              Vamos criar seu próximo projeto?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-10 font-light leading-relaxed">
              Cada território tem uma história única. Vamos transformá-la em
              estratégia e impacto.
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-full bg-gradient-to-r from-lime-500 to-green-500 text-black hover:from-lime-400 hover:to-green-400"
            >
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
              >
                Iniciar conversa →
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Modal Editorial */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
              onClick={handleCloseModal}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-4 md:inset-8 lg:inset-16 z-50 bg-background rounded-lg overflow-hidden border border-lime-400/20 flex flex-col"
            >
              <div className="flex-1 overflow-y-auto">
                {/* Imagem hero */}
                <div className="relative w-full h-[40vh] md:h-[50vh] bg-gradient-to-br from-gray-800 to-gray-900">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-gray-500">Imagem principal do projeto</p>
                  </div>
                </div>

                {/* Conteúdo editorial */}
                <div className="max-w-4xl mx-auto px-6 md:px-12 py-12">
                  <div className="mb-10">
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
                      {selectedProject.title}
                    </h2>
                    <p className="text-gray-400">
                      {selectedProject.category} · {selectedProject.year}
                      {selectedProject.institution &&
                        ` · ${selectedProject.institution}`}
                    </p>
                  </div>

                  {/* Legenda editorial - 3 microparágrafos */}
                  <div className="space-y-6 mb-12">
                    <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-light">
                      {selectedProject.caption.what}
                    </p>
                    <p className="text-base md:text-lg text-gray-300 leading-relaxed font-light">
                      {selectedProject.caption.why}
                    </p>
                    <p className="text-base md:text-lg text-gray-300 leading-relaxed font-light">
                      {selectedProject.caption.impact}
                    </p>
                  </div>

                  {/* Galeria complementar */}
                  {selectedProject.gallery &&
                    selectedProject.gallery.length > 0 && (
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {selectedProject.gallery.map((img, idx) => (
                          <div
                            key={idx}
                            className="relative aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900"
                          >
                            {/* Placeholder para imagens da galeria */}
                          </div>
                        ))}
                      </div>
                    )}
                </div>
              </div>

              {/* Botão fechar */}
              <button
                onClick={handleCloseModal}
                aria-label="Fechar detalhes do projeto"
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-lime-400/20 hover:border-lime-400/40 transition-colors"
              >
                <X className="h-5 w-5 text-gray-300" />
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
