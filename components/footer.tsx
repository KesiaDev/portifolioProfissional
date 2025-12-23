"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Duda Rocha</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Transformando territórios através de projetos estratégicos em
              cultura, turismo e marketing territorial.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/sobre"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  href="/atuacao"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Atuação
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Portfólio
                </Link>
              </li>
              <li>
                <Link
                  href="/diferenciais"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Diferenciais
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Conecte-se</h4>
            <div className="flex gap-4">
              <motion.a
                href="mailto:contato@dudarocha.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full border hover:bg-accent transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full border hover:bg-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full border hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {currentYear} Duda Rocha. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

