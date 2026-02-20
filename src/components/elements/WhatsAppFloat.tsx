"use client";

import { useState } from "react";

const PHONE = "5491127792717";
const MESSAGE = encodeURIComponent(
  "Hola! Me interesa el marketing dental para mi clínica. ¿Pueden contarme más?"
);

const WhatsAppFloat = () => {
  const [open, setOpen] = useState(false);

  const handleOpenWhatsApp = () => {
    // Используем протокол whatsapp:// — вызывает системный диалог
    // поверх текущей страницы, не уходя с сайта
    const protocolLink = `whatsapp://send?phone=${PHONE}&text=${MESSAGE}`;
    
    // Скрытый iframe вызовет протокол без навигации
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = protocolLink;
    document.body.appendChild(iframe);
    
    // Убираем iframe через секунду
    setTimeout(() => {
      if (iframe.parentNode) {
        iframe.parentNode.removeChild(iframe);
      }
    }, 1000);
  };

  return (
    <>
      {/* Плавающая кнопка */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-[100px] right-[24px] z-[9999] flex items-center justify-center w-[60px] h-[60px] rounded-full bg-[#25D366] shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_6px_28px_rgba(37,211,102,0.55)] transition-all duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </button>

      {/* Всплывающее окно */}
      {open && (
        <>
          {/* Затемнённый фон */}
          <div
            className="fixed inset-0 z-[10000] bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Модальное окно */}
          <div className="fixed z-[10001] bottom-[176px] right-[24px] w-[320px] max-w-[calc(100vw-48px)] rounded-[20px] bg-white shadow-[0_12px_40px_rgba(0,0,0,0.2)] overflow-hidden animate-fade-in">
            {/* Шапка */}
            <div className="bg-[#075E54] px-[20px] py-[18px] flex items-center gap-[12px]">
              <div className="w-[44px] h-[44px] rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <p className="text-white text-[15px] font-semibold leading-[1.2]">
                  Sonrisa Argentina
                </p>
                <p className="text-[#ffffff99] text-[12px] mt-[2px]">
                  Responde en minutos
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="ml-auto text-white/70 hover:text-white transition-colors"
                aria-label="Cerrar"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Сообщение */}
            <div className="px-[20px] py-[24px] bg-[#ECE5DD]">
              <div className="bg-white rounded-[12px] rounded-tl-[4px] px-[16px] py-[12px] shadow-sm max-w-[260px]">
                <p className="text-[14px] text-[#111B21] leading-[1.5]">
                  Hola! 👋 Somos <strong>Sonrisa Argentina</strong>, agencia de marketing dental.
                </p>
                <p className="text-[14px] text-[#111B21] leading-[1.5] mt-[8px]">
                  ¿Querés más pacientes para tu clínica? Escribinos y te contamos cómo.
                </p>
                <p className="text-[11px] text-[#667781] text-right mt-[6px]">
                  ahora
                </p>
              </div>
            </div>

            {/* Кнопка перехода */}
            <div className="px-[20px] py-[16px] bg-white">
              <button
                onClick={handleOpenWhatsApp}
                className="flex items-center justify-center gap-[8px] w-full py-[12px] rounded-[12px] bg-[#25D366] text-white text-[15px] font-semibold hover:bg-[#20bd5a] transition-colors cursor-pointer border-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Abrir WhatsApp
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default WhatsAppFloat;
