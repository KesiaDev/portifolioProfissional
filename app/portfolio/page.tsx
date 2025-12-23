"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

// Dados de exemplo - devem ser substituídos pelos projetos reais
const projects = [
  {
    id: 1,
    title: "Festival de Cultura Regional",
    category: "cultura",
    client: "Prefeitura Municipal",
    year: "2023",
    context:
      "Desenvolvimento de um festival que valoriza a identidade cultural local e atrai visitantes de toda a região.",
    challenge:
      "Criar um evento que unisse tradição e inovação, gerando impacto cultural e econômico para a comunidade.",
    strategy:
      "Desenvolvimento de programação diversificada, curadoria de artistas locais e regionais, criação de roteiros temáticos e estratégia de comunicação integrada.",
    result:
      "Festival com mais de 15 mil visitantes, geração de R$ 500 mil em movimentação econômica e fortalecimento da identidade cultural local.",
    tags: ["Cultura", "Eventos", "Marketing Territorial"],
  },
  {
    id: 2,
    title: "Plano de Marketing Territorial",
    category: "marketing-territorial",
    client: "Consórcio Intermunicipal",
    year: "2023",
    context:
      "Desenvolvimento de estratégia de posicionamento para região turística com potencial ainda não explorado.",
    challenge:
      "Criar uma identidade visual e narrativa que destacasse os diferenciais da região e atraísse investimentos e turistas.",
    strategy:
      "Pesquisa profunda sobre identidade local, desenvolvimento de marca territorial, criação de narrativas estratégicas e plano de comunicação integrado.",
    result:
      "Aumento de 40% no fluxo turístico, captação de investimentos e reconhecimento da região como destino estratégico.",
    tags: ["Marketing Territorial", "Branding", "Estratégia"],
  },
  {
    id: 3,
    title: "Roteiro Turístico Temático",
    category: "turismo",
    client: "Secretaria de Turismo",
    year: "2022",
    context:
      "Criação de roteiros que conectam história, cultura, gastronomia e natureza em experiências memoráveis.",
    challenge:
      "Integrar diferentes atrativos em roteiros coesos que contassem uma história e criassem experiências autênticas.",
    strategy:
      "Mapeamento de atrativos, criação de narrativas temáticas, desenvolvimento de roteiros com diferentes durações e capacitação de guias locais.",
    result:
      "5 roteiros temáticos criados, aumento de 60% na permanência dos turistas e criação de novos negócios locais.",
    tags: ["Turismo", "Experiências", "Roteiros"],
  },
  {
    id: 4,
    title: "Projeto Estruturante de Cultura",
    category: "projetos-estrategicos",
    client: "Instituição Pública",
    year: "2022",
    context:
      "Desenvolvimento de projeto estruturante para captação de recursos e implementação de políticas culturais.",
    challenge:
      "Criar um projeto que atendesse às necessidades locais, se adequasse aos editais disponíveis e gerasse impacto duradouro.",
    strategy:
      "Diagnóstico cultural participativo, elaboração de projeto técnico, desenvolvimento de parcerias e acompanhamento da execução.",
    result:
      "Captação de R$ 2 milhões em recursos, implementação de políticas culturais e criação de espaços permanentes de cultura.",
    tags: ["Projetos Estratégicos", "Captação de Recursos", "Políticas Públicas"],
  },
];

const categories = [
  { id: "all", label: "Todos" },
  { id: "cultura", label: "Cultura" },
  { id: "turismo", label: "Turismo" },
  { id: "marketing-territorial", label: "Marketing Territorial" },
  { id: "projetos-estrategicos", label: "Projetos Estratégicos" },
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              Portfólio
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Projetos que transformam territórios, conectam pessoas e geram
              impacto duradouro. Cada iniciativa é uma história de
              transformação.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="rounded-full"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border-2 hover:border-foreground/30 transition-all hover:shadow-lg">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <CardTitle className="text-2xl mb-2">
                            {project.title}
                          </CardTitle>
                          <div className="flex flex-wrap gap-2 mb-2">
                            {project.tags.map((tag) => (
                              <Badge
                                key={tag}
                                variant="secondary"
                                className="text-xs"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {project.client} • {project.year}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Contexto</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {project.context}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Desafio</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {project.challenge}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Estratégia</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {project.strategy}
                        </p>
                      </div>
                      <div className="p-4 bg-muted/50 rounded-lg">
                        <h4 className="font-semibold text-sm mb-2">Resultado</h4>
                        <p className="text-sm leading-relaxed">
                          {project.result}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground mb-4">
                Nenhum projeto encontrado nesta categoria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-serif text-4xl font-bold mb-4">
              Vamos criar seu próximo projeto?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Cada território tem uma história única. Vamos transformá-la em
              estratégia e impacto.
            </p>
            <Button asChild size="lg" className="rounded-full">
              <Link href="/contato">
                Iniciar conversa
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

