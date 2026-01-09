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

export default function MetodoHPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section - Posicionamento do Produto */}
      <section className="pt-32 pb-24 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-sm md:text-base text-gray-400 mb-4 font-light tracking-wide">
              Produto • Capacitação estratégica para o setor de serviços
            </p>
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-white">
              Método H+
            </h1>
            <h2 className="font-serif text-2xl md:text-3xl text-gray-300 mb-8 font-light leading-relaxed">
              Hospitalidade Aplicada & Excelência no Serviço
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mb-10 font-light leading-relaxed max-w-3xl mx-auto">
              O Método H+ é uma metodologia de capacitação em hospitalidade que combina formação prática, acompanhamento pós-capacitação e indicadores reais de impacto para qualificar o serviço e fortalecer a experiência do cliente.
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
                  Quero qualificar meu serviço →
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-lime-400/30 text-gray-300 hover:border-lime-400/50"
              >
                <a href="#como-funciona">Como o Método H+ funciona</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* O Problema Real - Dor do Mercado */}
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
                Por que a excelência no serviço não se sustenta sozinha?
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-6 font-light leading-relaxed">
                O setor de serviços — especialmente turismo, hospitalidade, eventos, gastronomia e saúde — opera sob condições complexas: jornadas extensas, trabalho em finais de semana, alta rotatividade e pressão constante por avaliações e reputação.
              </p>
              <p className="text-lg md:text-xl text-gray-300 mb-8 font-light leading-relaxed">
                Nesse contexto, treinamentos pontuais não são suficientes. A excelência no serviço exige formação contínua, acompanhamento no tempo e gestão orientada por indicadores.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "Alta rotatividade",
                  "Horários estendidos",
                  "Pressão por avaliações",
                  "Reclamações recorrentes",
                  "Falta de métricas de serviço",
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

      {/* O que é o Método H+ */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-white">
                O que é o Método H+
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-6 font-light leading-relaxed">
                O Método H+ é uma abordagem aplicada de hospitalidade que entende o atendimento como cultura organizacional, não apenas como técnica.
              </p>
              <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">
                Ele foi desenvolvido para transformar o serviço na ponta em diferencial competitivo, respeitando a realidade do setor e oferecendo ferramentas práticas para equipes e gestores.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Os Pilares do Método H+ - Cards */}
      <section id="como-funciona" className="py-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-white">
                Os Pilares do Método H+
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: GraduationCap,
                  title: "Capacitação Aplicada",
                  description:
                    "Formação prática em hospitalidade, atendimento, comunicação, escuta e experiência do cliente, adaptada ao contexto real do serviço.",
                },
                {
                  icon: TrendingUp,
                  title: "Acompanhamento Pós-Capacitação",
                  description:
                    "A formação não termina na sala de aula. O Método H+ acompanha a aplicação prática dos conteúdos no dia a dia das equipes.",
                },
                {
                  icon: BarChart3,
                  title: "Indicadores de Serviço",
                  description:
                    "Definição de métricas simples e eficazes para avaliar evolução do atendimento, consistência do serviço e percepção do cliente.",
                },
                {
                  icon: FileText,
                  title: "Gestão e Recomendações",
                  description:
                    "Relatórios sintéticos e recomendações estratégicas para gestores, instituições e poder público, apoiando decisões e priorização de ações.",
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

      {/* Para Quem É o Método H+ */}
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
                Para quem o Método H+ foi criado
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-10 font-light leading-relaxed text-center">
                Uma solução pensada para organizações, destinos e redes que entendem o serviço como ativo estratégico.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Meios de hospedagem",
                  "Bares, restaurantes e gastronomia",
                  "Eventos e equipamentos turísticos",
                  "Secretarias de Turismo e Desenvolvimento",
                  "Destinos turísticos e rotas",
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

      {/* Diferencial e Visão */}
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
                Hospitalidade não se ensina apenas com procedimentos.
              </p>
              <p className="text-2xl md:text-3xl text-gray-200 font-light leading-relaxed">
                Ela se constrói na prática, se sustenta no tempo e se fortalece com gestão.
              </p>
              <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed pt-4">
                O Método H+ conecta pessoas, processos e indicadores para que o atendimento deixe de ser um problema recorrente e passe a ser um diferencial percebido por clientes, usuários e comunidades.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Final - Conversão */}
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
              Vamos aplicar o Método H+ no seu serviço?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-10 font-light leading-relaxed">
              Cada organização tem uma realidade única. O Método H+ é adaptado ao seu contexto, equipe e território.
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
                Conversar sobre o Método H+ →
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}


