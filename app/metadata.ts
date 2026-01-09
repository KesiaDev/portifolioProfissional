import type { Metadata } from "next";

export const siteConfig = {
  name: "Duda Rocha",
  description:
    "Transformando territórios através de projetos estratégicos em cultura, turismo e marketing territorial.",
  url: "https://dudarocha.com",
  ogImage: "/og-image.jpg",
  links: {
    email: "contato@dudarocha.com",
    phone: "+55 (11) 99999-9999",
  },
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "cultura",
    "turismo",
    "marketing territorial",
    "projetos estratégicos",
    "desenvolvimento regional",
    "políticas culturais",
    "branding territorial",
  ],
  authors: [
    {
      name: "Duda Rocha",
    },
  ],
  creator: "Duda Rocha",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};


