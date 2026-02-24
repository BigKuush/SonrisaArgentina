import SeoData from "@/components/tools/SeoData";

const TerminosPage = () => {
  return (
    <main>
      <SeoData
        meta_title="Términos y Condiciones | Sonrisa Argentina"
        description="Términos y condiciones de uso del sitio web de Sonrisa Argentina."
      />

      <section className="container2 pt-[90px] md:pt-[120px] xl:pt-[150px] pb-[70px] md:pb-[90px]">
        <h1 className="text-[34px] md:text-[48px] leading-tight">
          Términos y Condiciones
        </h1>
        <p className="mt-[18px] text-[18px] leading-[1.7] text-secondary">
          Última actualización: 24 de febrero de 2026
        </p>

        <div className="mt-[30px] space-y-[26px] text-[17px] leading-[1.8] text-secondary">
          <p>
            El uso de este sitio implica la aceptación de estos términos. Si no
            estás de acuerdo, te recomendamos no utilizarlo.
          </p>

          <div>
            <h2 className="text-[24px] text-primary mb-[8px]">
              1. Objeto del sitio
            </h2>
            <p>
              Este sitio tiene fines informativos y comerciales, y presenta
              servicios de marketing digital para clínicas dentales.
            </p>
          </div>

          <div>
            <h2 className="text-[24px] text-primary mb-[8px]">
              2. Uso permitido
            </h2>
            <p>
              La persona usuaria se compromete a usar el sitio de forma lícita,
              sin afectar su funcionamiento ni vulnerar derechos de terceros.
            </p>
          </div>

          <div>
            <h2 className="text-[24px] text-primary mb-[8px]">
              3. Propiedad intelectual
            </h2>
            <p>
              Los contenidos del sitio (textos, diseño, imágenes y marca) están
              protegidos y no pueden reproducirse sin autorización previa.
            </p>
          </div>

          <div>
            <h2 className="text-[24px] text-primary mb-[8px]">
              4. Cotizaciones y resultados
            </h2>
            <p>
              Toda propuesta comercial puede variar según alcance y objetivos.
              Los resultados dependen de múltiples factores del mercado, por lo
              que no se garantizan resultados idénticos para todos los casos.
            </p>
          </div>

          <div>
            <h2 className="text-[24px] text-primary mb-[8px]">
              5. Enlaces a terceros
            </h2>
            <p>
              Este sitio puede contener enlaces externos. No controlamos ni
              asumimos responsabilidad por contenidos o políticas de terceros.
            </p>
          </div>

          <div>
            <h2 className="text-[24px] text-primary mb-[8px]">
              6. Limitación de responsabilidad
            </h2>
            <p>
              No garantizamos disponibilidad permanente del sitio ni ausencia
              total de errores técnicos. Trabajamos para mantenerlo actualizado
              y operativo.
            </p>
          </div>

          <div>
            <h2 className="text-[24px] text-primary mb-[8px]">
              7. Modificaciones
            </h2>
            <p>
              Nos reservamos el derecho de actualizar estos términos en
              cualquier momento. La versión vigente será la publicada en esta
              página.
            </p>
          </div>

          <div>
            <h2 className="text-[24px] text-primary mb-[8px]">
              8. Contacto
            </h2>
            <p>
              Para consultas legales o comerciales, escribinos a{" "}
              <a href="mailto:hola@sonrisarg.com" className="underline">
                hola@sonrisarg.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TerminosPage;
