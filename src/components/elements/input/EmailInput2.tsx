"use client";
import { useState } from "react";

const WA_NUMBER = "5491127792717";

const EmailInput2 = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    const text = encodeURIComponent(
      `Quiero recibir novedades - Email: ${email}`
    );
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, "_blank");
    setEmail("");
  };
  return (
    <div className="md:pt-[6px] md:pb-[19px] md:ps-12 xl:pb-[9px] xl:pt-4 xl:ps-[108px] md:border-s md:border-[#ffffff14] w-full">
      <form onSubmit={handleSubmit} className="subscribe_form w-full">
        <div className="flex gap-[10px] border-b border-white pb-[25px] w-full items-center">
          <input
            type="email"
            className="text-[24px] bg-transparent text-text-fixed-2 focus:outline-none font-light w-full min-w-[220px] border-0"
            placeholder="Tu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button
            type="submit"
            className="subscribe_btn flex items-center justify-center min-w-[40px]"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmailInput2;
