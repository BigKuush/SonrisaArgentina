import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type AnimationSetting = {
  opacity: string | number;
  ease: string;
  duration: string | number;
  delay: string | number;
  y?: string | number;
  x?: string | number;
  scrollTrigger?: {
    trigger: any;
    start: string;
  };
};

export default function hasFadeAnim() {
  const fadeArray = gsap.utils.toArray(".has_fade_anim");
  fadeArray.forEach((item: any) => {
    let fade_direction = "bottom";
    let onscroll_value = 1;
    let duration_value = 1.15;
    let fade_offset = 40;
    let delay_value = 0.15;
    let ease_value = "power2.out";

    if (item.getAttribute("data-fade-offset")) {
      fade_offset = item.getAttribute("data-fade-offset");
    }
    if (item.getAttribute("data-duration")) {
      duration_value = item.getAttribute("data-duration");
    }

    if (item.getAttribute("data-fade-from")) {
      fade_direction = item.getAttribute("data-fade-from");
    }
    if (item.getAttribute("data-on-scroll")) {
      onscroll_value = item.getAttribute("data-on-scroll");
    }
    if (item.getAttribute("data-delay")) {
      delay_value = item.getAttribute("data-delay");
    }
    if (item.getAttribute("data-ease")) {
      ease_value = item.getAttribute("data-ease");
    }

    let animation_settings: AnimationSetting = {
      opacity: 0,
      ease: ease_value,
      duration: duration_value,
      delay: delay_value,
    };

    if (fade_direction == "top") {
      animation_settings["y"] = -fade_offset;
    }
    if (fade_direction == "left") {
      animation_settings["x"] = -fade_offset;
    }

    if (fade_direction == "bottom") {
      animation_settings["y"] = fade_offset;
    }

    if (fade_direction == "right") {
      animation_settings["x"] = fade_offset;
    }

    if (onscroll_value == 1) {
      animation_settings["scrollTrigger"] = {
        trigger: item,
        start: "top 85%",
      };
    }
    gsap.from(item, animation_settings);
  });

  ScrollTrigger.refresh();

  // Fallback: si ScrollTrigger/ScrollSmoother no dispara (común en dev), mostrar contenido
  const revealStuckElements = () => {
    fadeArray.forEach((item: any) => {
      const opacity = Number(gsap.getProperty(item, "opacity") ?? 1);
      if (opacity > 0.05) return;

      const rect = item.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (inView) {
        gsap.to(item, {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          overwrite: "auto",
        });
      }
    });
  };

  requestAnimationFrame(revealStuckElements);
  setTimeout(revealStuckElements, 1200);
}
