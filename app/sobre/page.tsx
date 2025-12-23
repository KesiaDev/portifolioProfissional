"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Award, Heart } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export default function SobrePage() {
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
              Sobre Duda Rocha
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Uma profissional que acredita no poder transformador da cultura e
              no potencial estratégico de cada território.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg max-w-none mb-12"
            >
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                Minha trajetória é marcada pela paixão em conectar pessoas,
                valorizar identidades e transformar territórios através de
                projetos estratégicos que unem cultura, turismo e marketing
                territorial.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                Acredito que cada lugar carrega uma história única, uma
                identidade própria que, quando bem trabalhada, se torna um
                diferencial competitivo e um legado para as futuras gerações.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Meu trabalho vai além de criar projetos: construo pontes entre
                o passado e o futuro, entre tradição e inovação, entre
                comunidades e oportunidades. Cada iniciativa é pensada para
                gerar impacto econômico, social e cultural duradouro.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mb-12 text-center"
          >
            <h2 className="font-serif text-4xl font-bold mb-4">
              Visão e Valores
            </h2>
            <p className="text-lg text-muted-foreground">
              Os princípios que guiam meu trabalho e minha relação com cada
              projeto.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Target,
                title: "Propósito Claro",
                description:
                  "Cada projeto nasce de uma necessidade real e é desenvolvido com objetivos estratégicos bem definidos.",
              },
              {
                icon: Users,
                title: "Colaboração",
                description:
                  "Acredito no poder das parcerias e no trabalho conjunto para alcançar resultados extraordinários.",
              },
              {
                icon: Award,
                title: "Excelência",
                description:
                  "Busco sempre a excelência em cada detalhe, desde o planejamento até a execução e acompanhamento.",
              },
              {
                icon: Heart,
                title: "Impacto Social",
                description:
                  "Meu compromisso é com projetos que transformam vidas e fortalecem comunidades.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-2 hover:border-foreground/20 transition-colors">
                  <CardContent className="p-8">
                    <div className="mb-4">
                      <item.icon className="h-8 w-8 text-foreground" />
                    </div>
                    <h3 className="font-semibold text-xl mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-4xl font-bold mb-8">
                Minha Abordagem
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-xl mb-3">
                    Entendimento Profundo
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Antes de propor soluções, mergulho na realidade de cada
                    território, entendendo sua história, cultura, desafios e
                    potencialidades.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-3">
                    Estratégia Personalizada
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Cada projeto é único. Desenvolvo estratégias sob medida que
                    respeitam a identidade local e potencializam seus
                    diferenciais.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-3">
                    Execução com Excelência
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Do planejamento à execução, acompanho cada etapa com
                    atenção aos detalhes e compromisso com resultados
                    transformadores.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-3">
                    Legado Duradouro
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Meu objetivo é criar projetos que continuem gerando valor
                    muito além da entrega inicial, construindo um legado
                    sustentável.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

