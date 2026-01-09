"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Duda Rocha</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-2">
              Cultura • Turismo • Desenvolvimento Territorial
            </p>
            <p className="text-sm text-muted-foreground">RS – Brasil</p>
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
                  href="/hospitalidade"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Hospitalidade+
                </Link>
              </li>
              <li>
                <Link
                  href="/metodo-h"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Método H+
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
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <motion.a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </motion.a>
              <motion.a
                href="mailto:contato@dudarocha.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>E-mail</span>
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
