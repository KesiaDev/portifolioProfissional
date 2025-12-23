"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, MapPin, Heart, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div 
              variants={fadeInUp} 
              className="mb-6"
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-muted text-sm font-medium text-muted-foreground">
                Cultura • Turismo • Marketing Territorial
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            >
              <span className="block">Transformando</span>
              <span className="block bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text text-transparent">
                territórios
              </span>
              <span className="block">através da cultura</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Projetos estratégicos que conectam pessoas, valorizam identidades
              e geram impacto econômico, social e cultural duradouro.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 py-6 text-lg group"
              >
                <Link href="/contato">
                  Vamos criar algo extraordinário juntos
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 py-6 text-lg"
              >
                <Link href="/portfolio">Conheça meus projetos</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 rounded-full border-foreground/30 flex items-start justify-center p-2"
          >
            <div className="w-1 h-3 bg-foreground/50 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Mais que projetos,{" "}
              <span className="text-muted-foreground">legados</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Cada território tem uma história única. Minha missão é
              transformá-la em estratégia, conectar pessoas e criar valor que
              transcende gerações.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Sparkles,
                title: "Visão Estratégica",
                description:
                  "Projetos que alinham cultura, economia e desenvolvimento social.",
              },
              {
                icon: MapPin,
                title: "Marketing Territorial",
                description:
                  "Posicionamento único que destaca a identidade de cada lugar.",
              },
              {
                icon: Heart,
                title: "Impacto Social",
                description:
                  "Iniciativas que transformam comunidades e valorizam pessoas.",
              },
              {
                icon: Lightbulb,
                title: "Inovação Cultural",
                description:
                  "Soluções criativas que conectam tradição e futuro.",
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
                    <h3 className="font-semibold text-lg mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Pronto para transformar seu território?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Vamos conversar sobre como podemos criar algo extraordinário
              juntos. Seja uma prefeitura, empresa ou instituição, estou aqui
              para ajudar.
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 py-6 text-lg"
            >
              <Link href="/contato">Iniciar conversa</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

