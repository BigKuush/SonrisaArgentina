import ImageComponent from "@/components/tools/ImageComponent";
import { useCallback } from "react";
import { useLang } from "@/hooks/useLang";

type Props = {
  ctaText: string;
  ctaMail: string;
};

const FooterCta = ({ ctaText }: Props) => {
  const { lang } = useLang();
  const waDeepLink =
    lang === "es"
      ? "whatsapp://send?phone=5491127792717&text=Hola!%20Quiero%20un%20sitio%20web%20r%C3%A1pido%20para%20mi%20negocio.%20%C2%BFPueden%20ayudarme?"
      : lang === "pt"
      ? "whatsapp://send?phone=5491127792717&text=Ol%C3%A1!%20Preciso%20de%20um%20site%20r%C3%A1pido%20para%20meu%20neg%C3%B3cio.%20Podem%20ajudar?"
      : "whatsapp://send?phone=5491127792717&text=Hello!%20I%20need%20a%20fast%20website%20for%20my%20business.%20Can%20you%20help%20me?";

  const displayText =
    lang === "es"
      ? "Hablemos"
      : lang === "pt"
      ? "Vamos conversar"
      : ctaText;

  const handleClick = useCallback(() => {
    window.location.href = waDeepLink;
  }, [waDeepLink]);

  return (
    <section>
      <div className="inner-container">
        <div className="main-section-spacing text-text-fixed-2">
          <div
            className="text-center cursor-pointer select-none"
            onClick={handleClick}
          >
            <div className="">
              <span className="has_fade_anim text-[30px] xl:text-[40px] font-bold font-teko leading-none uppercase">
                🖐️ {lang === "es" ? "HOLA" : lang === "pt" ? "OLÁ" : "HELLO"}
                <ImageComponent
                  src="/assets/imgs/shape/img-s-6-light.png"
                  width={15}
                  height={28}
                  alt="icon"
                  className="inline-block mt-[-6px] ms-[10px]"
                />
              </span>
            </div>
            <div className="mt-[32px] xl:mt-[42px]">
              <h2 className="has_fade_anim uppercase font-teko max-w-[500px] text-[40px] sm:text-[60px] lg:text-[100px] xl:text-[150px] 2xl:text-[190px] leading-[.82] xl:max-w-[800px] my-0 mx-auto">
                {displayText}
              </h2>
            </div>
            {/* Email убран по требованию, весь блок кликабельный и ведет в WhatsApp */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterCta;
