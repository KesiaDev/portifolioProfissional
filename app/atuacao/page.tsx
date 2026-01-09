"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Palette,
  MapPin,
  TrendingUp,
  Briefcase,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const areas = [
  {
    id: "projetos-estrategicos",
    icon: Briefcase,
    title: "Projetos Estratégicos e Institucionais",
    subtitle: "Transformando visões em realidade",
    description:
      "Desenvolvimento, estruturação e execução de projetos estratégicos de médio e longo prazo, articulando diferentes instituições, escalas territoriais e interesses públicos e privados.",
    problems: [
      "Falta de visão estratégica integrada",
      "Projetos fragmentados sem conexão",
      "Dificuldade em captar recursos",
      "Ausência de planejamento de longo prazo",
    ],
    solutions: [
      "Planejamento estratégico integrado e multidisciplinar",
      "Desenvolvimento de projetos estruturantes",
      "Elaboração de propostas para captação de recursos",
      "Acompanhamento e gestão de projetos complexos",
    ],
    impact:
      "Territórios com visão clara de futuro, projetos estruturantes implementados, recursos captados e transformação efetiva da realidade local.",
    forWho: [
      "Prefeituras e governos",
      "Instituições públicas e privadas",
      "Organizações do terceiro setor",
      "Empresas com projetos de impacto territorial",
    ],
  },
  {
    id: "turismo",
    icon: MapPin,
    title: "Turismo",
    subtitle: "Criando experiências conectadas ao território",
    description:
      "Planejamento e desenvolvimento do turismo a partir da identidade cultural, da memória e das vocações locais, compreendendo o turismo como experiência pedagógica que ensina, sensibiliza e gera pertencimento.",
    problems: [
      "Falta de identidade turística clara",
      "Ausência de roteiros e experiências diferenciadas",
      "Baixa atratividade do destino",
      "Pouca integração entre atrativos e serviços",
    ],
    solutions: [
      "Desenvolvimento de estratégias de posicionamento turístico",
      "Criação de roteiros temáticos e experiências autênticas",
      "Planejamento de eventos e festivais que atraem visitantes",
      "Integração entre cultura, gastronomia, natureza e história",
    ],
    impact:
      "Aumento do fluxo turístico, geração de emprego e renda, valorização dos atrativos locais e criação de uma marca territorial forte e desejada.",
    forWho: [
      "Prefeituras e secretarias de turismo",
      "Associações e consórcios turísticos",
      "Hotéis e pousadas",
      "Operadoras de turismo",
    ],
  },
  {
    id: "cultura",
    icon: Palette,
    title: "Cultura",
    subtitle: "Valorizando identidades e memória",
    description:
      "Projetos culturais que conectam passado e presente, valorizam tradições e criam novas narrativas. Desenvolvimento de políticas culturais, curadorias, festivais e iniciativas que fortalecem a identidade territorial.",
    problems: [
      "Falta de políticas culturais estruturadas",
      "Desconexão entre tradição e inovação",
      "Pouca valorização do patrimônio local",
      "Ausência de espaços de expressão cultural",
    ],
    solutions: [
      "Desenvolvimento de políticas culturais estratégicas",
      "Criação de programas e festivais que valorizam a identidade local",
      "Projetos de curadoria e exposições temáticas",
      "Fortalecimento de coletivos e artistas locais",
    ],
    impact:
      "Comunidades mais conectadas com sua identidade, aumento do orgulho local, geração de renda através da economia criativa e fortalecimento do patrimônio cultural.",
    forWho: [
      "Prefeituras e secretarias de cultura",
      "Instituições culturais",
      "Organizações do terceiro setor",
      "Empresas com foco em responsabilidade social",
    ],
  },
  {
    id: "educacao-mediacao",
    icon: GraduationCap,
    title: "Educação e Mediação Cultural",
    subtitle: "Turismo, cultura e aprendizagem no território",
    description:
      "Desenvolvimento de ações educativas, formativas e de mediação cultural que conectam turismo, cultura e território, promovendo aprendizagem, pertencimento e qualificação da experiência tanto para visitantes quanto para comunidades locais.",
    problems: [
      "Turismo desconectado da história local",
      "Comunidades pouco envolvidas nos projetos",
      "Ausência de ações formativas associadas ao turismo",
    ],
    solutions: [
      "Concepção de workshops e formações",
      "Mediação cultural em projetos territoriais",
      "Produção de conteúdo educativo e editorial",
      "Integração entre pesquisa acadêmica e prática territorial",
    ],
    impact:
      "Territórios mais conscientes de sua identidade, visitantes qualificados e projetos turísticos com maior densidade cultural.",
    forWho: [
      "Prefeituras",
      "Instituições culturais e educacionais",
      "Universidades",
      "Projetos de turismo pedagógico",
    ],
  },
  {
    id: "marketing-territorial",
    icon: TrendingUp,
    title: "Marketing Territorial",
    subtitle: "Comunicação como estratégia de desenvolvimento",
    description:
      "Estratégias de marketing que transformam lugares em marcas fortes e desejadas. Desenvolvimento de identidade visual, narrativas estratégicas e posicionamento que destaca diferenciais competitivos.",
    problems: [
      "Ausência de identidade visual e narrativa clara",
      "Falta de posicionamento estratégico",
      "Comunicação genérica e pouco impactante",
      "Dificuldade em comunicar diferenciais",
    ],
    solutions: [
      "Desenvolvimento de identidade visual e marca territorial",
      "Criação de narrativas estratégicas que conectam emocionalmente",
      "Planejamento de comunicação integrada",
      "Posicionamento que destaca diferenciais competitivos",
    ],
    impact:
      "Território reconhecido como marca forte, aumento da atratividade para investimentos, turismo e talentos, e comunicação que gera desejo e conexão.",
    forWho: [
      "Prefeituras e governos",
      "Agências de desenvolvimento regional",
      "Consórcios intermunicipais",
      "Empresas com foco em desenvolvimento territorial",
    ],
  },
];

export default function AtuacaoPage() {
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
              Áreas de Atuação
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Atuação profissional em cultura, turismo, educação e marketing
              territorial, compreendendo o turismo como prática pedagógica, a
              cultura como mediação simbólica e os projetos institucionais como
              instrumentos de desenvolvimento territorial.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Areas Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <Tabs
            defaultValue="projetos-estrategicos"
            className="max-w-6xl mx-auto"
          >
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-12 h-auto p-1 bg-gradient-to-r from-black/80 via-lime-500/10 to-green-500/10 border border-lime-400/20">
              {areas.map((area) => (
                <TabsTrigger
                  key={area.id}
                  value={area.id}
                  className="data-[state=active]:bg-gradient-to-br data-[state=active]:from-lime-500/20 data-[state=active]:to-green-500/20 data-[state=active]:border-lime-400/40 data-[state=active]:shadow-lg data-[state=active]:shadow-lime-500/20 py-3 px-1.5 h-auto border border-transparent hover:border-lime-400/20 transition-all [&[data-state=active]_svg]:text-lime-400 [&[data-state=active]_span]:text-lime-400"
                >
                  <div className="flex flex-col items-center gap-1.5 w-full min-w-0">
                    <area.icon className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0 text-gray-300 transition-colors" />
                    <span className="text-[10px] md:text-xs font-medium text-center leading-tight break-words w-full text-gray-300 transition-colors">
                      {area.title}
                    </span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {areas.map((area) => (
              <TabsContent key={area.id} value={area.id} className="mt-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <Card className="border-2">
                    <CardHeader>
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 rounded-lg bg-muted">
                          <area.icon className="h-8 w-8" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-3xl mb-2">
                            {area.title}
                          </CardTitle>
                          <p className="text-lg text-muted-foreground">
                            {area.subtitle}
                          </p>
                        </div>
                      </div>
                      <p className="text-base leading-relaxed text-muted-foreground">
                        {area.description}
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-8">
                      {/* Problems */}
                      <div>
                        <h3 className="font-semibold text-lg mb-4">
                          Desafios que Resolvo
                        </h3>
                        <div className="grid md:grid-cols-2 gap-3">
                          {area.problems.map((problem, index) => (
                            <div
                              key={index}
                              className="flex items-start gap-2 text-sm"
                            >
                              <span className="text-muted-foreground mt-1">
                                •
                              </span>
                              <span className="text-muted-foreground">
                                {problem}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Solutions */}
                      <div>
                        <h3 className="font-semibold text-lg mb-4">
                          Como Trabalho
                        </h3>
                        <div className="grid md:grid-cols-2 gap-3">
                          {area.solutions.map((solution, index) => (
                            <div
                              key={index}
                              className="flex items-start gap-2 text-sm"
                            >
                              <CheckCircle2 className="h-4 w-4 text-foreground mt-0.5 flex-shrink-0" />
                              <span className="text-foreground">
                                {solution}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Impact */}
                      <div className="p-6 bg-muted/50 rounded-lg">
                        <h3 className="font-semibold text-lg mb-3">Impacto</h3>
                        <p className="text-base leading-relaxed">
                          {area.impact}
                        </p>
                      </div>

                      {/* For Who */}
                      <div>
                        <h3 className="font-semibold text-lg mb-4">
                          Para Quem é Indicado
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {area.forWho.map((who, index) => (
                            <span
                              key={index}
                              className="px-4 py-2 rounded-full bg-muted text-sm"
                            >
                              {who}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4">
                        <Button asChild variant="default" size="lg">
                          <Link href="/contato">
                            Vamos conversar sobre seu projeto
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
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
              Não encontrou o que procura?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Cada projeto é único. Vamos conversar sobre suas necessidades
              específicas e criar uma solução sob medida.
            </p>
            <Button asChild size="lg" className="rounded-full">
              <Link href="/contato">Fale comigo</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
