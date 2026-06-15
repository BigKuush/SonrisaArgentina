import type { Metadata } from "next";
import { getMainPage } from "@/lib/helper/contentConverter";
import { buildPageMetadata } from "@/lib/seo/metadata";
import ContactHero from "@/components/contact/ContactHero";
import Image from "next/image";
import ContactArea from "@/components/contact/ContactArea";

export function generateMetadata(): Metadata {
  const { data: contactData } = getMainPage("/contact/_index.mdx");
  const { meta } = contactData || {};

  return buildPageMetadata({
    title: meta?.meta_title,
    description: meta?.meta_description,
    path: "/contact",
  });
}

const Contact = () => {
  const { data: contactData } = getMainPage("/contact/_index.mdx");

  const { hero, image, contact: mainContact } = contactData || {};
  return (
    <main>
      <ContactHero {...hero} />
      <div className="overflow-hidden">
        <Image
          src={image}
          alt="Contacto Sonrisa Argentina"
          width={1920}
          height={850}
          className="w-full"
        />
      </div>
      <ContactArea {...mainContact} />
    </main>
  );
};

export default Contact;
