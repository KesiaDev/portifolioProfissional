"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  GraduationCap,
  TrendingUp,
  BarChart3,
  FileText,
  ArrowRight,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export default function HospitalidadePage() {
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
            <p className="text-sm md:text-base text-gray-400 mb-4 font-light tracking-wide">
              Produto • Capacitação para o setor de serviços
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
              Hospitalidade & Excelência no Serviço
            </h1>
            <h2 className="font-serif text-xl md:text-2xl text-gray-300 mb-8 font-light leading-relaxed">
              Capacitação de profissionais, acompanhamento de práticas e indicadores reais de qualidade no atendimento.
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mb-10 font-light leading-relaxed max-w-3xl mx-auto">
              A maior experiência do turismo acontece no encontro entre pessoas.
              Por isso, capacitar equipes, acompanhar práticas e medir resultados é essencial para transformar o serviço em diferencial competitivo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
                  Conversar sobre capacitação →
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-lime-400/30 text-gray-300 hover:border-lime-400/50"
              >
                <a href="#como-funciona">Ver como funciona</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* O Desafio do Setor */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-lime-500/10 to-green-500/10 border border-lime-400/20 rounded-lg p-8 md:p-10"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-white">
                O desafio do setor de serviços
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-8 font-light leading-relaxed">
                O setor de turismo e hospitalidade opera sob condições complexas: jornadas extensas, trabalho em finais de semana, alta rotatividade e pressão constante por qualidade.
              </p>
              <p className="text-lg md:text-xl text-gray-300 mb-8 font-light leading-relaxed">
                Nesse contexto, a excelência no atendimento não se sustenta apenas com treinamentos pontuais, mas com processos contínuos de formação, acompanhamento e gestão do serviço.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "Turnover alto",
                  "Horários estendidos",
                  "Picos sazonais",
                  "Pressão por reputação",
                  "Serviço como diferencial",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full bg-background/50 border border-lime-400/20 text-sm text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* A Proposta */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-white">
                Uma metodologia própria para qualificar o serviço
              </h2>
              <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">
                Minha proposta vai além de cursos tradicionais. Estruturo programas de capacitação em hospitalidade que combinam formação prática, acompanhamento pós-capacitação e indicadores de impacto, adaptados à realidade de cada organização, território ou rede de serviços.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Como Funciona - Cards */}
      <section id="como-funciona" className="py-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: GraduationCap,
                  title: "Capacitação",
                  description:
                    "Formação prática em hospitalidade, atendimento, comunicação e experiência do cliente, adaptada ao contexto real do serviço.",
                },
                {
                  icon: TrendingUp,
                  title: "Acompanhamento",
                  description:
                    "Monitoramento da aplicação dos conteúdos no dia a dia das equipes, com escuta, feedback e ajustes contínuos.",
                },
                {
                  icon: BarChart3,
                  title: "Indicadores",
                  description:
                    "Definição de métricas simples e eficazes para avaliar a evolução do atendimento e da cultura de serviço.",
                },
                {
                  icon: FileText,
                  title: "Relatórios",
                  description:
                    "Sínteses claras para gestão, instituições ou poder público, apoiando decisões estratégicas.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full border border-lime-400/20 bg-gradient-to-br from-lime-500/5 to-green-500/5 hover:border-lime-400/40 transition-all">
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <item.icon className="h-8 w-8 text-lime-400" />
                      </div>
                      <h3 className="font-semibold text-xl mb-3 text-white">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-sm">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Para Quem É */}
      <section className="py-16 bg-gradient-to-b from-transparent to-lime-500/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-white text-center">
                Para quem é o Hospitalidade+
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-10 font-light leading-relaxed text-center">
                Uma solução pensada para organizações e territórios que precisam transformar o atendimento em ativo estratégico.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Meios de hospedagem",
                  "Bares, restaurantes e gastronomia",
                  "Eventos e equipamentos turísticos",
                  "Secretarias de Turismo e Desenvolvimento",
                  "Destinos turísticos",
                  "Instituições e redes de serviços",
                  "Saúde e hotelaria hospitalar",
                  "Terceiro setor e projetos territoriais",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-lime-400 flex-shrink-0"></div>
                    <span className="text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Diferencial Conceitual */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 text-center"
            >
              <p className="text-2xl md:text-3xl text-gray-200 font-light leading-relaxed">
                Hospitalidade não é apenas uma técnica.
              </p>
              <p className="text-2xl md:text-3xl text-gray-200 font-light leading-relaxed">
                É uma cultura organizacional que precisa ser construída, cuidada e acompanhada ao longo do tempo.
              </p>
              <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed pt-4">
                O Hospitalidade+ conecta formação, prática e gestão para que o atendimento deixe de ser um problema recorrente e passe a ser um diferencial competitivo do território.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-b from-lime-500/5 to-transparent">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-white">
              Vamos qualificar o serviço no seu território?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-10 font-light leading-relaxed">
              Cada território tem uma história única. Vamos transformá-la em experiência, reputação e impacto, com capacitação, acompanhamento e métricas de resultado.
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

      <Footer />
    </div>
  );
}


