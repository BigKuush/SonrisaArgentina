"use client";

import ImageComponent from "../tools/ImageComponent";
import { useCallback, useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasWordAnim from "@/lib/animation/hasWordAnim";
import { useLang } from "@/hooks/useLang";

const WebHero = () => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const { lang } = useLang();
  const waDeepLink =
    lang === "es"
      ? "whatsapp://send?phone=5491127792717&text=Hola!%20Quiero%20un%20sitio%20web%20r%C3%A1pido%20para%20mi%20negocio.%20%C2%BFPueden%20ayudarme?"
      : "whatsapp://send?phone=5491127792717&text=Hello!%20I%20need%20a%20fast%20website%20for%20my%20business.%20Can%20you%20help%20me?";
  const t =
    lang === "es"
      ? {
          badge: "Sonrisa Argentina",
          side: `RÁPIDO, PREMIUM Y\nSEO OPTIMIZADO\nSITIOS QUE\nINSPIRAN CONFIANZA`,
          titlePrefix: "WEBS RÁPIDAS",
          titleWeb: "WEB\nSITES",
          desc:
            "Sonrisa Argentina crea sitios rápidos y optimizados para SEO local dental. Diseñamos webs premium que generan confianza y convierten visitas en pacientes de primera consulta.",
          cta: "empezar ahora",
          watch: "Ver\nvideo",
          footerUnderline: "Con base en Buenos Aires",
          footerText:
            "desarrollamos sistemas web para atraer pacientes nuevos.",
        }
      : {
          badge: "Sonrisa Argentina",
          side: `FAST, PREMIUM &\nSEO‑OPTIMIZED\nWEBSITES CLIENTS\nTRUST`,
          titlePrefix: "WE BUILD FAST",
          titleWeb: "WEB\nSITES",
          desc:
            "Sonrisa Argentina builds fast websites for dental practices that need more first-time patient inquiries. We combine premium design, local SEO, and conversion-focused structure.",
          cta: "empezar ahora",
          watch: "Watch\nVideo",
          footerUnderline: "Based in Buenos Aires",
          footerText:
            "we build websites focused on first-time patient acquisition.",
        };

  useGSAP(
    () => {
      hasFadeAnim();
      hasWordAnim();
    },
    { scope: containerRef }
  );

  const handleWaClick = useCallback(() => {
    window.location.href = waDeepLink;
  }, [waDeepLink]);

  return (
    <section ref={containerRef}>
      <div className="inner-container large">
        <div className="relative pt-[50px] 2xl:pt-[100px] pb-[55px] lg:pb-[85px] xl:pb-[115px] me-0 2xl:me-[-140px] md:pe-[190px] 2xl:pe-[240px] z-[1]">
          <div className="absolute bottom-0 end-[calc(100%-200px)] w-[330px] 2xl:w-[410px] h-[410px] -z-[1]">
            <ImageComponent
              src="/assets/imgs/shape/img-s-64.png"
              darkSrc="/assets/imgs/shape/img-s-64-dark.png"
              width={410}
              height={410}
              className="w-full h-full rtl-rotate-y-180"
              alt="shape"
            />
          </div>

          <div
            className="has_word_anim absolute hidden lg:block border-s border-border end-0 top-0 w-[140px] h-full text-base leading-[1.8] ps-[30px] pt-[150px] 2xl:pt-[200px] text-text whitespace-pre-line"
            data-delay="0.75"
          >
            {t.side}
          </div>

          <div className="grid lg:grid-cols-[1fr_260px] xl:grid-cols-[1fr_370px] 2xl:grid-cols-[1fr_520px] gap-y-[50px] gap-x-[60px]">
            <div className="md:mt-[50px]">
              <h1 className="has_fade_anim uppercase text-[80px] xl:text-[110px] 2xl:text-[190px] leading-[0.76]">
                {t.titlePrefix}{" "}
                <span className="text-[24px] 2xl:text-[42px] text-text leading-[0.83] font-semibold inline-block relative pb-2.5 2xl:pb-[27px] -translate-y-[17px] 2xl:-translate-y-[36px] before:absolute before:content-[''] before:w-full before:h-px before:bg-[var(--theme)] before:bottom-0 before:start-0 after:absolute after:content-[''] after:w-full after:h-px after:bg-[var(--theme)] after:bottom-1 after:start-0 whitespace-pre-line">
                  {t.titleWeb}
                </span>{" "}
                <span className="inline-flex items-center gap-0 align-middle translate-y-1 relative">
                  <span className="inline-flex items-center justify-center align-middle w-[90px] h-[90px] 2xl:w-[110px] 2xl:h-[110px] bg-theme rounded-[24px] 2xl:rounded-[30px] text-text text-[18px] 2xl:text-[20px] font-semibold tracking-[0.08em] [writing-mode:vertical-rl] rotate-180 leading-none whitespace-nowrap normal-case z-[1]">
                    {t.badge}
                  </span>
                  <span
                    className="has_fade_anim relative inline-block -ms-10 2xl:-ms-12 -mt-1 w-[100px] h-[100px] 2xl:w-[150px] 2xl:h-[150px] z-[10]"
                    data-fade-offset="0"
                  >
                    <ImageComponent
                      src="/assets/imgs/shape/img-s-60.png"
                      darkSrc="/assets/imgs/shape/img-s-60.png"
                      width={120}
                      height={120}
                      className="w-full h-full object-contain"
                      alt="shape"
                    />
                  </span>
                </span>
              </h1>

              <div className="relative ms-[110px] 2xl:ms-[315px] mt-[35px] 2xl:mt-[65px]">
                <div
                  className="has_fade_anim absolute top-0 end-[calc(100%+60px)] w-max"
                  data-fade-offset="0"
                  data-on-scroll="0"
                  data-delay="0.75"
                >
                  <ImageComponent
                    src="/assets/imgs/shape/img-s-61.png"
                    darkSrc="/assets/imgs/shape/img-s-61-light.png"
                    width={50}
                    height={80}
                    alt="scroll indicator"
                  />
                </div>

                <p
                  className="text-lg 2xl:text-[20px] leading-[1.37] max-w-[380px] has_fade_anim"
                  data-on-scroll="0"
                  data-delay="0.30"
                >
                  {t.desc}
                </p>

                <div className="mt-[48px] has_fade_anim">
                  <button
                    type="button"
                    onClick={handleWaClick}
                    className="btn-text-flip wc-btn-underline text-sm uppercase inline-flex items-center gap-2.5"
                  >
                    <span data-text={t.cta}>{t.cta}</span>
                    <ImageComponent
                      src="/assets/imgs/icon/arrow-right-half.png"
                      darkSrc="/assets/imgs/icon/arrow-right-half-light.png"
                      width={21}
                      height={7}
                      alt="arrow icon"
                    />
                  </button>
                </div>
              </div>
            </div>

            <div>
              <div className="has_fade_anim relative" data-fade-from="right">
                <div className="absolute top-[46px] start-[67px]">
                  <ImageComponent
                    src="/assets/imgs/shape/img-s-62.png"
                    darkSrc="/assets/imgs/shape/img-s-62-light.png"
                    className="rtl-rotate-y-180"
                    width={100}
                    height={60}
                    alt="shape"
                  />
                </div>
                
                <div className="flex items-start gap-x-[4px]">
                  <div
                    className="has_fade_anim mt-[160px] relative w-[210px] h-[440px] overflow-hidden [mask-size:contain] [mask-position:center] [mask-repeat:no-repeat] rtl-rotate-y-180 after:absolute after:content-[''] after:w-full after:h-full after:bg-[#FF0000] after:top-0 after:start-0 after:mix-blend-multiply"
                    data-speed="0.9"
                    data-lag="0.2"
                    style={{
                      maskImage:
                        "url('/assets/imgs/shape/radius-half-left.png')",
                    }}
                  >
                    <ImageComponent
                      src="/assets/imgs/gallery/img-s-68.png"
                      width={210}
                      height={440}
                      className="w-[210px] h-[440px] object-cover"
                      alt="gallery image 1"
                    />
                  </div>
                  <div
                    className="has_fade_anim w-[251px] h-[500px] overflow-hidden [mask-size:contain] [mask-position:center] [mask-repeat:no-repeat] rtl-rotate-y-180"
                    data-speed="1.1"
                    data-lag="0.2"
                    style={{
                      maskImage:
                        "url('/assets/imgs/shape/radius-half-right.png')",
                    }}
                  >
                    <ImageComponent
                      src="/assets/imgs/gallery/img-s-69.png"
                      width={251}
                      height={500}
                      className="w-[251px] h-[500px] object-cover"
                      alt="gallery image 2"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-[41px] flex justify-end">
                <div className="inline-block ms-auto">
                  <ImageComponent
                    src="/assets/imgs/shape/img-s-63.png"
                    darkSrc="/assets/imgs/shape/img-s-63-light.png"
                    width={80}
                    height={50}
                    className="rtl-rotate-y-180"
                    alt="shape"
                  />
                  <div className="mt-[30px]">
                    <ImageComponent
                      src="/assets/imgs/client/img-s-3.png"
                      darkSrc="/assets/imgs/client/img-s-3-light.png"
                      width={160}
                      height={55}
                      alt="customer"
                    />
                  </div>

                  <p className="text-lg mt-[15px] leading-tight text-end max-w-[260px]">
                    <span className="underline text-text">{t.footerUnderline}</span>
                    <br />
                    {t.footerText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebHero;
