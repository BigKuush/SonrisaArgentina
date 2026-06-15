import "../styles/globals.css";
import "@/styles/main.css";
import Provider from "@/provider";
import type { Metadata } from "next";

/** GA4 — en <head> (requerido para verificación vía Google Analytics) */
const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-J3YZT8VTNT";

// Title задаётся через <SeoData /> на страницах (иначе дублируется с metadata.title)
export const metadata: Metadata = {
  description:
    "Marketing digital dental en Argentina (Buenos Aires): más pacientes nuevos y primeras consultas con SEO local, sitios web y reseñas.",
  metadataBase: new URL("https://sonrisarg.com/"),
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "Sonrisa Argentina",
    title: "Marketing digital dental en Argentina | Sonrisa Argentina",
    description:
      "Clínicas dentales en Argentina: pacientes nuevos y primera consulta con SEO local, web y reseñas.",
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
    title: "Marketing digital dental en Argentina | Sonrisa Argentina",
    description:
      "Pacientes nuevos y primera consulta para clínicas dentales en Argentina.",
    images: ["/assets/imgs/og/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://sonrisarg.com/",
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
        {/* Google tag (gtag.js) — GA4 */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `,
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
