import React from "react";
import { Phone, Smartphone, Mail } from "lucide-react";

export default function StickyContactBar() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-md shadow-[0_-4px_24px_rgba(0,0,0,0.06)] border-t border-warm-sand z-30 py-3 px-4 lg:hidden animate-in slide-in-from-bottom duration-300">
      <div className="grid grid-cols-3 gap-2.5 max-w-lg mx-auto">
        <a
          href="tel:052-768-7910"
          className="bg-forest-light hover:bg-forest-medium text-white flex flex-col items-center justify-center py-2 px-1.5 rounded-xl font-bold tracking-tight transition-transform active:scale-[0.98]"
        >
          <Phone className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] sm:text-xs">ステーション</span>
          <span className="text-[8px] font-normal opacity-85 leading-none mt-0.5">052-768-7910</span>
        </a>

        <a
          href="tel:070-8940-7117"
          className="bg-forest-dark hover:bg-opacity-95 text-white flex flex-col items-center justify-center py-2 px-1.5 rounded-xl font-bold tracking-tight transition-transform active:scale-[0.98]"
        >
          <Smartphone className="w-4 h-4 text-soft-orange mb-0.5" />
          <span className="text-[10px] sm:text-xs">代表携帯 (24h)</span>
          <span className="text-[8px] font-normal text-warm-sand leading-none mt-0.5">070-8940-7117</span>
        </a>

        <button
          onClick={scrollToContact}
          className="bg-soft-orange hover:bg-opacity-95 text-white flex flex-col items-center justify-center py-2 px-1.5 rounded-xl font-bold tracking-tight transition-transform active:scale-[0.98] cursor-pointer"
        >
          <Mail className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] sm:text-xs">ネット相談</span>
          <span className="text-[8px] font-normal opacity-85 leading-none mt-0.5">24h無料受付</span>
        </button>
      </div>
    </div>
  );
}
