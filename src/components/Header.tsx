import React, { useState } from "react";
import { Phone, Mail, Menu, X, Clock, Heart } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed header
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      {/* Top emergency / quick contact strip */}
      <div className="bg-forest-dark text-warm-cream py-1.5 px-4 text-xs font-medium md:px-8 z-50 sticky top-0 border-b border-forest-medium/30 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-1">
          <div className="flex items-center gap-2">
            <span className="inline-block px-1.5 py-0.5 bg-soft-orange text-white text-[10px] rounded font-bold uppercase tracking-wider">
              24時間365日対応
            </span>
            <span className="text-warm-cream/90">
              ふくろう守山は夜間・休日、緊急時の相談も万全に対応しています
            </span>
          </div>
          <div className="flex items-center gap-4 divide-x divide-warm-sand/25">
            <div className="flex items-center gap-1 pl-4">
              <span className="text-warm-sand/80 text-[11px]">代表携帯:</span>
              <a
                href="tel:07089407117"
                className="font-bold hover:text-soft-orange transition-colors flex items-center gap-0.5"
              >
                <Phone className="w-3 h-3 text-soft-orange" />
                070-8940-7117
              </a>
            </div>
            <div className="flex items-center gap-1 pl-4">
              <span className="text-warm-sand/80 text-[11px]">FAX:</span>
              <span className="font-semibold">052-768-7911</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation Header */}
      <header className="sticky top-[34px] md:top-[36px] bg-white/95 backdrop-blur-md text-gray-800 shadow-sm z-40 transition-all duration-300 border-b border-warm-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo area */}
            <div
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-12 h-12 bg-forest-light/10 text-forest-medium rounded-full flex items-center justify-center border border-forest-light/20 shadow-inner group-hover:scale-105 transition-transform">
                {/* SVG representing a stylized friendly Owl / Fukuro */}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-7 h-7 text-forest-medium"
                >
                  {/* Owl body outline */}
                  <path d="M12 2C6.5 2 6 6 6 12c0 5 3 9 6 9s6-4 6-9c0-6-.5-10-6-10z" />
                  {/* Ear tufts */}
                  <path d="M6 3.5s-1.5-1.5-1-2c1.2.3 2 1.5 2 1.5" />
                  <path d="M18 3.5s1.5-1.5 1-2c-1.2.3-2 1.5-2 1.5" />
                  {/* Eyes */}
                  <circle cx="9" cy="9" r="2.5" />
                  <circle cx="9" cy="9" r="1.2" fill="currentColor" />
                  <circle cx="15" cy="9" r="2.5" />
                  <circle cx="15" cy="9" r="1.2" fill="currentColor" />
                  {/* Beak */}
                  <polygon points="12,10.5 10.5,12 13.5,12" fill="currentColor" />
                  {/* Wings */}
                  <path d="M6 13c-1.2 1.5-1 4.5.5 5.5M18 13c1.2 1.5 1 4.5-.5 5.5" />
                  {/* Belly feathers pattern */}
                  <path d="M10 15c1 .8 3 .8 4 0" />
                  <path d="M11 17c.5.5 1.5.5 2 0" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] tracking-widest font-bold text-gray-400 group-hover:text-forest-light transition-colors uppercase">
                  株式会社またたび 運営
                </span>
                <h1 className="text-lg sm:text-xl font-bold font-serif tracking-tight text-forest-dark flex items-center gap-1.5 leading-none">
                  訪問看護ステーション <span className="text-forest-medium">ふくろう守山</span>
                </h1>
              </div>
            </div>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-7">
              <button
                onClick={() => scrollToSection("strengths")}
                className="text-sm font-medium text-gray-600 hover:text-forest-medium transition-colors cursor-pointer"
              >
                選ばれる強み
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-sm font-medium text-gray-600 hover:text-forest-medium transition-colors cursor-pointer"
              >
                看護内容
              </button>
              <button
                onClick={() => scrollToSection("staff")}
                className="text-sm font-medium text-gray-600 hover:text-forest-medium transition-colors cursor-pointer"
              >
                スタッフ紹介
              </button>
              <button
                onClick={() => scrollToSection("flow")}
                className="text-sm font-medium text-gray-600 hover:text-forest-medium transition-colors cursor-pointer"
              >
                ご利用の流れ
              </button>
              <button
                onClick={() => scrollToSection("cost")}
                className="text-sm font-medium text-gray-600 hover:text-forest-medium transition-colors cursor-pointer"
              >
                ご利用料金
              </button>
              <button
                onClick={() => scrollToSection("overview")}
                className="text-sm font-medium text-gray-600 hover:text-forest-medium transition-colors cursor-pointer"
              >
                事業所情報
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-sm font-medium text-gray-600 hover:text-forest-medium transition-colors cursor-pointer"
              >
                よくある質問
              </button>

              {/* CTA Contacts info */}
              <div className="flex items-center gap-3 ml-4">
                <a
                  href="tel:052-768-7910"
                  className="flex items-center gap-1 bg-forest-light text-white py-2 px-4 rounded-full font-bold text-sm tracking-normal shadow-sm hover:bg-forest-medium transition-all group"
                >
                  <Phone className="w-4 h-4 text-warm-cream group-hover:scale-110 transition-transform" />
                  052-768-7910
                </a>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="flex items-center gap-1 bg-soft-orange text-white py-2 px-4 rounded-full font-bold text-sm shadow-sm hover:bg-opacity-90 transition-all cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  相談・問合せ
                </button>
              </div>
            </nav>

            {/* Mobile menu trigger */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href="tel:0527687910"
                className="w-11 h-11 bg-forest-light text-white rounded-full flex items-center justify-center shadow"
                aria-label="電話をかける"
              >
                <Phone className="w-5 h-5" />
              </a>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="w-11 h-11 border border-warm-sand rounded-full flex items-center justify-center hover:bg-warm-cream text-gray-700 mt-0.5 cursor-pointer"
                aria-label="メニュー開閉"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu panel */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-warm-sand shadow-lg flex flex-col p-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
            <button
              onClick={() => scrollToSection("strengths")}
              className="text-left py-2 font-medium border-b border-gray-100 text-gray-700 cursor-pointer"
            >
              選ばれる強み
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-left py-2 font-medium border-b border-gray-100 text-gray-700 cursor-pointer"
            >
              看護内容
            </button>
            <button
              onClick={() => scrollToSection("staff")}
              className="text-left py-2 font-medium border-b border-gray-100 text-gray-700 cursor-pointer"
            >
              スタッフ紹介
            </button>
            <button
              onClick={() => scrollToSection("flow")}
              className="text-left py-2 font-medium border-b border-gray-100 text-gray-700 cursor-pointer"
            >
              ご利用の流れ
            </button>
            <button
              onClick={() => scrollToSection("cost")}
              className="text-left py-2 font-medium border-b border-gray-100 text-gray-700 cursor-pointer"
            >
              ご利用料金
            </button>
            <button
              onClick={() => scrollToSection("overview")}
              className="text-left py-2 font-medium border-b border-gray-100 text-gray-700 cursor-pointer"
            >
              事業所情報
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-left py-2 font-medium border-b border-gray-100 text-gray-700 cursor-pointer"
            >
              よくある質問
            </button>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="tel:052-768-7910"
                className="flex items-center justify-center gap-2 bg-forest-light text-white py-3 px-4 rounded-xl font-bold shadow-sm"
              >
                <Phone className="w-5 h-5 text-white" />
                ステーション: 052-768-7910
              </a>
              <button
                onClick={() => scrollToSection("contact")}
                className="flex items-center justify-center gap-2 bg-soft-orange text-white py-3 px-4 rounded-xl font-bold shadow-sm cursor-pointer"
              >
                <Mail className="w-5 h-5 text-white" />
                無料オンライン相談窓口
              </button>
            </div>
            <div className="text-center text-xs text-gray-400 font-medium">
              名古屋市守山区鳥羽見二丁目16番8号ー1 101号
            </div>
          </div>
        )}
      </header>
    </>
  );
}
