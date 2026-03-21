import SeoData from "@/components/tools/SeoData";

const PrivacidadPage = () => {
  return (
    <main>
      <SeoData
        meta_title="Política de Privacidad | Sonrisa Argentina"
        description="Política de privacidad de Sonrisa Argentina."
      />

      <section className="container2 pt-[90px] md:pt-[120px] xl:pt-[150px] pb-[70px] md:pb-[90px]">
        <h1 className="text-[34px] md:text-[48px] leading-tight">
          Política de Privacidad
        </h1>
        <p className="mt-[18px] text-[18px] leading-[1.7] text-secondary">
          Última actualización: 24 de febrero de 2026
        </p>

        <div className="mt-[30px] space-y-[26px] text-[17px] leading-[1.8] text-secondary">
          <p>
            En este sitio recopilamos datos de contacto que la persona usuaria
            envía de forma voluntaria mediante formularios o botones de
            contacto (por ejemplo: nombre, email, teléfono o WhatsApp).
          </p>

          <div>
            <h2 className="text-[24px] text-primary mb-[8px]">
              1. Qué datos podemos tratar
            </h2>
            <p>
              Datos de identificación y contacto, mensajes enviados en
              formularios, y datos técnicos básicos de navegación como IP,
              navegador, dispositivo y páginas visitadas.
            </p>
          </div>

          <div>
            <h2 className="text-[24px] text-primary mb-[8px]">
              2. Para qué usamos los datos
            </h2>
            <p>
              Utilizamos la información para responder consultas, enviar
              propuestas comerciales solicitadas, mejorar la calidad del sitio y
              realizar análisis de rendimiento y conversión.
            </p>
          </div>

          <div>
            <h2 className="text-[24px] text-primary mb-[8px]">
              2.1. Analítica web (Google Analytics)
            </h2>
            <p>
              Utilizamos{" "}
              <strong>Google Analytics 4</strong> (Google LLC / Google Ireland
              Limited) para conocer de forma agregada cómo se usa el sitio
              (páginas vistas, origen del tráfico, dispositivo aproximado). Los
              informes no incluyen datos que identifiquen directamente a una
              persona. Podés leer más en la{" "}
              <a
                href="https://policies.google.com/privacy"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                política de privacidad de Google
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-[24px] text-primary mb-[8px]">
              3. Base legal
            </h2>
            <p>
              El tratamiento se basa en el consentimiento de la persona usuaria
              al enviar sus datos y en el interés legítimo de operar y mejorar
              el servicio digital.
            </p>
          </div>

          <div>
            <h2 className="text-[24px] text-primary mb-[8px]">
              4. Conservación
            </h2>
            <p>
              Conservamos los datos durante el tiempo necesario para gestionar
              la consulta y la relación comercial, o hasta que la persona
              solicite su eliminación, salvo obligación legal en contrario.
            </p>
          </div>

          <div>
            <h2 className="text-[24px] text-primary mb-[8px]">
              5. Compartición de datos
            </h2>
            <p>
              Podemos utilizar proveedores tecnológicos para hosting, analítica,
              formularios, mensajería y atención comercial. No vendemos datos
              personales a terceros.
            </p>
          </div>

          <div>
            <h2 className="text-[24px] text-primary mb-[8px]">
              6. Derechos de las personas usuarias
            </h2>
            <p>
              Se puede solicitar acceso, rectificación, actualización o
              eliminación de datos, así como revocar el consentimiento para usos
              comerciales.
            </p>
          </div>

          <div>
            <h2 className="text-[24px] text-primary mb-[8px]">
              7. Contacto
            </h2>
            <p>
              Para solicitudes relacionadas con privacidad, escribinos a{" "}
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

export default PrivacidadPage;
