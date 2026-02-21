import "../styles/globals.css";
import "@/styles/main.css";
import Provider from "@/provider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Sonrisa Argentina — Marketing Digital Dental en Argentina",
    template: "%s | Sonrisa Argentina",
  },
  description:
    "Agencia de marketing digital especializada en clínicas dentales. Más pacientes nuevos con SEO, sitios web y gestión de reseñas.",
  metadataBase: new URL("https://bloomex.agency"),
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "Sonrisa Argentina",
    title: "Sonrisa Argentina — Marketing Digital Dental en Argentina",
    description:
      "Agencia de marketing digital especializada en clínicas dentales en Argentina.",
    images: [
      {
        url: "/assets/imgs/og/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sonrisa Argentina",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sonrisa Argentina — Marketing Digital Dental",
    description:
      "Marketing digital para clínicas dentales en Argentina.",
    images: ["/assets/imgs/og/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://bloomex.agency",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta
          name="format-detection"
          content="telephone=no, date=no, email=no, address=no"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="theme-color" content="#c8f542" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var m=document.cookie.match(/(?:^|;\\s*)lang=([^;]+)/);if(!m){document.cookie="lang=es;path=/;max-age=31536000";}})();`,
          }}
        />
      </head>
      <body suppressHydrationWarning={true}>
        <Provider>
          <div className="has-smooth" id="has_smooth"></div>
          {children}
        </Provider>
      </body>
    </html>
  );
}
