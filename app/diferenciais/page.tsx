"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Sparkles,
  Target,
  Users,
  Award,
  Heart,
  Lightbulb,
  ArrowRight,
} from "lucide-react";

const diferenciais = [
  {
    icon: Target,
    title: "Visão Estratégica Integrada",
    description:
      "Não trabalho com projetos isolados. Cada iniciativa faz parte de uma visão maior que conecta cultura, turismo, economia e desenvolvimento social. Meu olhar estratégico garante que cada ação gere impacto duradouro e se alinhe aos objetivos de longo prazo do território.",
  },
  {
    icon: Heart,
    title: "Sensibilidade Cultural",
    description:
      "Entendo que cada lugar tem uma identidade única. Minha abordagem respeita e valoriza as tradições locais, trabalhando com as comunidades de forma colaborativa. Não imponho soluções prontas, mas co-crio estratégias que fazem sentido para cada realidade.",
  },
  {
    icon: Lightbulb,
    title: "Inovação com Propósito",
    description:
      "Combino tradição e inovação de forma inteligente. Utilizo ferramentas modernas e metodologias inovadoras, sempre com foco em resultados reais e impacto positivo. Cada projeto é uma oportunidade de criar algo novo e transformador.",
  },
  {
    icon: Users,
    title: "Rede de Parceiros Estratégicos",
    description:
      "Trabalho com uma rede qualificada de parceiros em diferentes áreas - desde especialistas em políticas públicas até profissionais de comunicação e design. Isso me permite oferecer soluções completas e multidisciplinares.",
  },
  {
    icon: Award,
    title: "Excelência em Execução",
    description:
      "Do planejamento à execução, acompanho cada etapa com atenção aos detalhes. Meu compromisso é com a excelência em cada projeto, garantindo que as estratégias sejam implementadas com qualidade e gerem os resultados esperados.",
  },
  {
    icon: Sparkles,
    title: "Resultados Mensuráveis",
    description:
      "Não trabalho apenas com ideias bonitas. Desenvolvo projetos com objetivos claros, indicadores de sucesso e acompanhamento de resultados. Você saberá exatamente o que foi entregue e qual o impacto gerado.",
  },
];

export default function DiferenciaisPage() {
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
              Por que escolher Duda Rocha?
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Mais que uma profissional, uma parceira estratégica que entende
              que transformar territórios vai além de criar projetos. É sobre
              construir legados.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Diferenciais Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {diferenciais.map((diferencial, index) => (
              <motion.div
                key={diferencial.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-2 hover:border-foreground/30 transition-all hover:shadow-lg">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <div className="p-4 rounded-lg bg-muted w-fit">
                        <diferencial.icon className="h-8 w-8 text-foreground" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-xl mb-4">
                      {diferencial.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {diferencial.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-4xl font-bold mb-4">
                Minha Abordagem Única
              </h2>
              <p className="text-lg text-muted-foreground">
                Cada projeto é uma jornada colaborativa de transformação
              </p>
            </motion.div>

            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Escuta Profunda",
                  description:
                    "Começo mergulhando na realidade do território. Entendo sua história, cultura, desafios e potencialidades. Não assumo nada - descubro tudo através de pesquisa, conversas e imersão.",
                },
                {
                  step: "02",
                  title: "Estratégia Personalizada",
                  description:
                    "Com base no que descobri, desenvolvo uma estratégia única para seu território. Não uso templates - cada solução é pensada especificamente para suas necessidades e objetivos.",
                },
                {
                  step: "03",
                  title: "Execução com Cuidado",
                  description:
                    "Acompanho cada etapa da execução com atenção aos detalhes. Trabalho em parceria com sua equipe, garantindo que tudo seja implementado com excelência e alinhado à visão estratégica.",
                },
                {
                  step: "04",
                  title: "Legado Duradouro",
                  description:
                    "Meu objetivo não é apenas entregar um projeto, mas criar algo que continue gerando valor. Desenvolvo capacidades locais e estruturas que garantem a sustentabilidade dos resultados.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-xl">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-xl mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-serif text-4xl font-bold mb-4">
              Pronto para transformar seu território?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Vamos conversar sobre como posso ajudar você a criar algo
              extraordinário.
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

