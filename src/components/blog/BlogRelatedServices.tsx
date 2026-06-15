import Link from "next/link";

const services = [
  {
    href: "/service/marketing/seo-local-dental",
    label: "SEO local para clínicas dentales",
  },
  {
    href: "/service/marketing/sitio-web-dental",
    label: "Sitio web dental",
  },
  {
    href: "/service/marketing/gestion-resenas",
    label: "Gestión de reseñas",
  },
  {
    href: "/service/marketing/marketing-contenido-dental",
    label: "Marketing de contenido dental",
  },
];

const BlogRelatedServices = () => {
  return (
    <aside className="mt-16 xl:mt-20 max-w-[960px] rounded-2xl border border-[#ECE7E4] dark:border-[#252525] p-6 md:p-8 bg-[#faf9f8] dark:bg-[#111]">
      <p className="text-[14px] uppercase tracking-wide text-text-3 mb-2">
        Sonrisa Argentina
      </p>
      <h2 className="text-[22px] md:text-[26px] leading-tight font-normal mb-3">
        ¿Querés más pacientes para tu clínica?
      </h2>
      <p className="text-[17px] leading-[1.7] text-secondary mb-6">
        Trabajamos SEO local, sitios web y reputación para consultorios en
        Buenos Aires y Argentina. Estos son nuestros servicios principales:
      </p>
      <ul className="space-y-3 mb-8">
        {services.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-[17px] underline underline-offset-4 hover:opacity-80 transition-opacity"
            >
              {item.label}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="/seo"
            className="text-[17px] underline underline-offset-4 hover:opacity-80 transition-opacity"
          >
            SEO dental — landing completa
          </Link>
        </li>
      </ul>
      <Link
        href="/contact"
        className="inline-flex items-center justify-center px-6 py-3 text-[16px] bg-text text-bg rounded-full hover:opacity-90 transition-opacity"
      >
        Hablemos por WhatsApp o email
      </Link>
    </aside>
  );
};

export default BlogRelatedServices;
