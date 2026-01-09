"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin,
  Target,
  Users,
  Heart,
  CheckCircle,
  Lightbulb,
  TrendingUp,
  Shield,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export default function SobrePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Editorial Authority Section - Asymmetric Layout */}
      <section className="pt-24 pb-32 md:pt-32 md:pb-40">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          {/* Title as Visual Anchor */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-24 md:mb-40"
          >
            <h1 className="font-serif text-7xl md:text-8xl lg:text-9xl font-medium text-lime-400 leading-[0.92] tracking-tight">
              Duda
              <br />
              Rocha
            </h1>
          </motion.div>

          {/* Asymmetric Composition */}
          <div className="relative">
            {/* Image Block - Displaced, Editorial Treatment */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative mb-16 md:mb-24 md:w-2/5 md:ml-auto md:mr-0"
            >
              {/* Editorial frame - offset */}
              <div className="absolute -left-6 -top-6 w-full h-full border-2 border-lime-400/30 rounded-lg pointer-events-none"></div>
              <div className="relative rounded-lg overflow-hidden bg-gradient-to-br from-lime-500/10 to-transparent">
                <Image
                  src="/duda-rocha-principal.jpeg"
                  alt="Duda Rocha - Profissional de Cultura, Turismo e Desenvolvimento Territorial"
                  width={900}
                  height={1200}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 40vw"
                  unoptimized
                />
              </div>
              {/* Overlay gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/30 pointer-events-none rounded-lg"></div>
            </motion.div>

            {/* Manifesto Text Blocks - Displaced, Editorial Rhythm */}
            <div className="md:absolute md:left-0 md:top-0 md:w-3/5 md:pr-20">
              {/* Opening Manifesto - Large, Impact, Light */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="mb-16 md:mb-20"
              >
                <p className="text-2xl md:text-3xl lg:text-4xl leading-[1.65] text-gray-200 font-light tracking-normal">
                  Acredito que territórios não se desenvolvem apenas com obras,
                  campanhas ou eventos, mas com sentido, identidade e pessoas
                  envolvidas nos processos.
                </p>
              </motion.div>

              {/* Core Philosophy - Medium, Breathing Space, Refined */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                className="mb-16 md:mb-20 md:pl-10 border-l border-lime-400/15"
              >
                <p className="text-xl md:text-2xl lg:text-3xl leading-[1.75] text-gray-300 font-light tracking-wide pl-8 md:pl-10">
                  Cada lugar carrega histórias, memórias e saberes que, quando
                  compreendidos e trabalhados com responsabilidade, tornam-se
                  ativos estratégicos para o desenvolvimento econômico, social e
                  cultural.
                </p>
              </motion.div>

              {/* Closing Statement - Refined, Calm, Authority */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                className="pt-12 md:pt-16 border-t border-lime-400/10"
              >
                <p className="text-lg md:text-xl lg:text-2xl leading-[1.8] text-gray-400 font-light tracking-wide">
                  Meu trabalho nasce desse entendimento: conectar passado e
                  futuro, cultura e estratégia, conhecimento e ação, sempre
                  respeitando a singularidade de cada território.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Anchor Text */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-r from-lime-500/10 to-green-500/10 border-l-4 border-lime-400 p-6 rounded-r-lg">
                <p className="text-base md:text-lg leading-relaxed text-gray-200">
                  Minha trajetória profissional articula pesquisa aplicada,
                  planejamento estratégico e execução de projetos nas áreas de
                  turismo, cultura, educação e desenvolvimento territorial,
                  tendo o marketing, a comunicação e a gestão como ferramentas
                  para traduzir identidade, conhecimento e estratégia em ações
                  concretas.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Minha Abordagem Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mb-12 text-center"
          >
            <h2 className="font-serif text-4xl font-bold mb-4 text-white">
              Minha Abordagem
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: MapPin,
                title: "ENTENDIMENTO PROFUNDO DO TERRITÓRIO",
                description:
                  "Antes de propor soluções, realizo diagnósticos que consideram história, cultura, identidade, desafios e potencialidades locais.",
              },
              {
                icon: Target,
                title: "ESTRATÉGIA CONTEXTUALIZADA",
                description:
                  "Cada projeto é desenvolvido a partir da realidade do território, respeitando seus ativos culturais, institucionais e humanos.",
              },
              {
                icon: CheckCircle,
                title: "EXECUÇÃO E ACOMPANHAMENTO",
                description:
                  "Atuação direta na organização, coordenação e monitoramento das ações, garantindo coerência entre planejamento e entrega.",
              },
              {
                icon: TrendingUp,
                title: "IMPACTO E CONTINUIDADE",
                description:
                  "Projetos pensados para permanecer no território, gerar valor duradouro e fortalecer governanças locais.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border border-lime-400/20 bg-gradient-to-br from-lime-500/5 to-green-500/5 hover:border-lime-400/40 transition-colors">
                  <CardContent className="p-8">
                    <div className="mb-4">
                      <item.icon className="h-8 w-8 text-lime-400" />
                    </div>
                    <h3 className="font-semibold text-lg mb-3 text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visão e Valores Section */}
      <section className="py-16 bg-gradient-to-b from-transparent to-lime-500/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mb-12 text-center"
          >
            <h2 className="font-serif text-4xl font-bold mb-4 text-white">
              Visão e Valores
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Lightbulb,
                title: "PROPÓSITO E SENTIDO PÚBLICO",
                description:
                  "Projetos orientados por relevância territorial e compromisso coletivo.",
              },
              {
                icon: Users,
                title: "COLABORAÇÃO E DIÁLOGO QUALIFICADO",
                description:
                  "Construção conjunta entre poder público, instituições, universidades, mercado e comunidades.",
              },
              {
                icon: Heart,
                title: "RESPONSABILIDADE COM TERRITÓRIOS E PESSOAS",
                description:
                  "Respeito à identidade local, à memória e aos sujeitos envolvidos nos processos.",
              },
              {
                icon: Shield,
                title: "COMPROMISSO COM EXECUÇÃO REAL",
                description:
                  "Planejamento com entrega efetiva, acompanhamento e responsabilidade institucional.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border border-lime-400/20 bg-gradient-to-br from-lime-500/5 to-green-500/5 hover:border-lime-400/40 transition-colors">
                  <CardContent className="p-8">
                    <div className="mb-4">
                      <item.icon className="h-8 w-8 text-lime-400" />
                    </div>
                    <h3 className="font-semibold text-lg mb-3 text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
