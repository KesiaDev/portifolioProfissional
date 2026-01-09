"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  FileText,
  Building2,
  Network,
  GraduationCap,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const diferenciais = [
  {
    icon: FileText,
    title: "Leitura Institucional Antes da Proposta",
    description:
      "Antes de qualquer entrega, analiso o contexto institucional do território: estrutura administrativa, limites legais, cenário político, atores envolvidos e grau de maturidade do projeto. Isso evita propostas inviáveis, conflitos desnecessários e iniciativas que não saem do papel.",
  },
  {
    icon: Building2,
    title: "Projetos que Dialogam com Políticas Públicas e Financiadores",
    description:
      "Tenho experiência na estruturação de projetos alinhados a editais, leis de incentivo, programas públicos e critérios de avaliação de financiadores. Isso garante propostas consistentes, defensáveis e compatíveis com as exigências técnicas e formais de cada contexto.",
  },
  {
    icon: Network,
    title: "Articulação entre Áreas, Pessoas e Interesses",
    description:
      "Territórios são construídos por relações. Atuo como ponte entre poder público, terceiro setor, iniciativa privada, universidades e comunidades locais, fortalecendo governança, reduzindo ruídos e ampliando a sustentabilidade das ações.",
  },
  {
    icon: GraduationCap,
    title: "Educação como Estratégia Transversal",
    description:
      "Entendo cultura e turismo como processos educativos. Os projetos consideram tanto quem chega — promovendo aprendizagem e experiência — quanto quem permanece no território, fortalecendo identidade, pertencimento e capacidades locais.",
  },
  {
    icon: CheckCircle,
    title: "Compromisso com Entrega e Responsabilidade",
    description:
      "Trabalho com cronogramas realistas, definição clara de responsabilidades, acompanhamento de execução e foco em resultados possíveis de serem comprovados. O objetivo não é apenas lançar projetos, mas garantir que funcionem e deixem estruturas ativas no território.",
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
              Por que trabalhar comigo
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Mais do que executar projetos, atuo como parceira estratégica de
              instituições, governos e organizações que precisam transformar
              ideias em ações viáveis, sustentáveis e legitimadas no território.
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
              Vamos estruturar seu projeto com coerência e impacto real?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Se você precisa qualificar uma ideia, viabilizar um projeto ou
              estruturar uma ação com responsabilidade institucional, impacto
              territorial e alinhamento estratégico, uma boa conversa é sempre o
              melhor ponto de partida.
            </p>
            <Button asChild size="lg" className="rounded-full">
              <Link href="/contato">
                👉 Conversar sobre seu projeto
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
