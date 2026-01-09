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
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 gradient-hero bg-pattern">
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-lime-950/20 to-black/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(163,230,53,0.08),transparent_50%)]" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center w-full"
          >
            <motion.div
              variants={fadeInUp}
              className="mb-6"
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-lime-500/10 to-green-500/10 border border-lime-400/30 text-sm font-medium text-lime-200 backdrop-blur-sm">
                • Marketing • Cultura • Turismo • Educação • Desenvolvimento
                Territorial • Governança
              </span>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="block text-white whitespace-nowrap">
                  Projetos culturais e turísticos
                </span>
                <span className="block text-white whitespace-nowrap">
                  que saem do papel
                </span>
              </h1>

              <div className="mx-auto inline-block text-center">
                <span className="block text-lime-400 font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight whitespace-nowrap">
                  permanecem no território
                </span>

                <motion.p
                  variants={fadeInUp}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                  className="mt-4 block text-base md:text-lg text-gray-200 leading-relaxed"
                  style={{
                    textAlign: "justify",
                  }}
                >
                  Atuo na estruturação e execução de projetos que conectam
                  território, identidade cultural, turismo e economia criativa,
                  articulando poder público, instituições, universidades e
                  iniciativa privada.
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col items-center gap-6 mt-8"
            >
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 py-6 text-lg group"
              >
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Conversar agora
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <p className="text-sm text-gray-400 max-w-md text-center">
                Uma boa conversa é sempre o início de projetos consistentes, com
                sentido e impacto real.
              </p>
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

      {/* Como Trabalho */}
      <section className="py-16 bg-gradient-to-b from-background via-lime-950/20 to-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              Minha atuação combina pesquisa aplicada, planejamento estratégico
              e gestão operacional, com experiência em políticas públicas,
              editais, governança colaborativa e coordenação de equipes e
              fornecedores.
            </p>
          </motion.div>

          {/* Microcredencial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-center mb-8"
          >
            <p className="text-sm text-gray-500">
              Mestre e Doutoranda em Turismo e Hospitalidade | Publicitária |
              Especialista em Marketing, Branding e Growth
            </p>
          </motion.div>

          {/* Botão Conheça Projetos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center"
          >
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 py-6 text-lg"
            >
              <Link href="/portfolio">Conheça projetos realizados</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* O que eu faço */}
      <section className="py-24 bg-gradient-to-b from-background via-lime-950/20 to-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-gray-100">
              O que eu faço
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: MapPin,
                title: "Estruturação de Projetos Territoriais",
                description:
                  "Do diagnóstico à execução: criação de produtos culturais e turísticos, planejamento, cronogramas, equipes e monitoramento.",
              },
              {
                icon: Heart,
                title: "Articulação Institucional e Governança",
                description:
                  "Conexão entre poder público, universidades, setor produtivo, cultura e comunidades locais.",
              },
              {
                icon: Sparkles,
                title: "Pesquisa Aplicada e Conteúdo Estratégico",
                description:
                  "Estudos, mapeamentos, livros, workshops e projetos que transformam memória e identidade em valor econômico e social.",
              },
              {
                icon: Lightbulb,
                title: "Execução e Gestão de Projetos",
                description:
                  "Captação de recursos, gestão de fornecedores, prestação de contas e entrega validada por instituições públicas e privadas.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-2 border-lime-400/20 hover:border-lime-400/40 transition-all hover:glow-green gradient-card">
                  <CardContent className="p-8">
                    <div className="mb-4">
                      <item.icon className="h-8 w-8 text-lime-400" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2 text-gray-100">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section className="py-24 bg-gradient-to-br from-black/40 via-lime-950/30 to-black/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(163,230,53,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(132,204,22,0.1),transparent_50%)]" />
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center relative z-10"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-gray-100">
              Projetos que deixam legado comprovado
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Museus implantados, eventos consolidados, produtos turísticos em
              operação, políticas culturais executadas e territórios
              reposicionados a partir de identidade, cultura e governança
              colaborativa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 py-6 text-lg"
              >
                <Link href="/portfolio">Conheça projetos realizados</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 py-6 text-lg"
              >
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Conversar agora
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
