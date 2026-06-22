import React from "react";
import { Phone, Mail, Landmark, Compass, Heart, Shield, ArrowUp, Smartphone } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
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
    <footer className="bg-forest-dark text-warm-cream pt-16 pb-8 border-t border-forest-medium/30 relative">
      
      {/* Scroll to Top Circle button */}
      <div className="absolute top-[-24px] left-1/2 -translate-x-1/2">
        <button
          onClick={handleScrollToTop}
          className="w-12 h-12 rounded-full bg-soft-orange text-white flex items-center justify-center hover:scale-105 transition-all shadow-md shadow-soft-orange/20 cursor-pointer"
          aria-label="最上部へ戻る"
        >
          <ArrowUp className="w-5 h-5 animate-pulse" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 border-b border-warm-sand/15 pb-12">
          
          {/* Logo & coordinates statement */}
          <div className="lg:col-span-5 space-y-5 text-left">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-5 h-5 text-soft-orange"
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
              <h4 className="text-md sm:text-lg font-bold font-serif text-white tracking-wide">
                訪問看護ステーション ふくろう守山
              </h4>
            </div>

            <p className="text-xs text-warm-sand/75 leading-relaxed font-sans font-normal max-w-sm">
              愛知県名古屋市守山区鳥羽見二丁目を拠点に、24時間365日体制で心の不調と回復を支える、精神科専門の訪問看護ステーションです。お一人ずつの回復ステップに親身に連動し続けます。
            </p>

            {/* Address specifications block */}
            <div className="text-xs text-warm-sand/90 space-y-2 leading-relaxed">
              <p>【運営母体】株式会社 またたび</p>
              <p>【所在地】〒463-0012 名古屋市守山区鳥羽見二丁目16番8号-1 TRYⅠ鳥羽見101号</p>
              <p>【許認可】愛知県指定：訪問看護ステーション認可取得済</p>
            </div>
          </div>

          {/* Shortcuts menu columns */}
          <div className="lg:col-span-3 text-left space-y-4">
            <h5 className="text-xs font-extrabold text-soft-orange tracking-widest uppercase">メニュー・案内</h5>
            <ul className="space-y-2 text-xs text-warm-sand/85">
              <li>
                <button onClick={() => scrollToId("strengths")} className="hover:text-soft-orange transition-colors cursor-pointer text-left">
                  ▶ 選ばれる強み（専門スキルなど）
                </button>
              </li>
              <li>
                <button onClick={() => scrollToId("services")} className="hover:text-soft-orange transition-colors cursor-pointer text-left">
                  ▶ 看護できること（サービス内容）
                </button>
              </li>
              <li>
                <button onClick={() => scrollToId("staff")} className="hover:text-soft-orange transition-colors cursor-pointer text-left">
                  ▶ スタッフ・管理者（想いと趣味）
                </button>
              </li>
              <li>
                <button onClick={() => scrollToId("flow")} className="hover:text-soft-orange transition-colors cursor-pointer text-left">
                  ▶ ご利用の簡単なプロセス
                </button>
              </li>
              <li>
                <button onClick={() => scrollToId("cost")} className="hover:text-soft-orange transition-colors cursor-pointer text-left">
                  ▶ ご利用料金（1割負担限度）
                </button>
              </li>
              <li>
                <button onClick={() => scrollToId("overview")} className="hover:text-soft-orange transition-colors cursor-pointer text-left">
                  ▶ 事業所概要・マップ
                </button>
              </li>
              <li>
                <button onClick={() => scrollToId("faq")} className="hover:text-soft-orange transition-colors cursor-pointer text-left">
                  ▶ よくお寄せいただくご質問
                </button>
              </li>
            </ul>
          </div>

          {/* Quick numbers widget */}
          <div className="lg:col-span-4 text-left space-y-4">
            <h5 className="text-xs font-extrabold text-soft-orange tracking-widest uppercase">ホットライン</h5>
            <div className="space-y-3.5">
              
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-center gap-3">
                <Phone className="w-4 h-4 text-soft-orange shrink-0" />
                <div>
                  <span className="text-[10px] text-warm-sand/65 block">ステーション公式代表番号</span>
                  <a href="tel:0527687910" className="text-sm font-extrabold text-white font-serif hover:text-soft-orange tracking-wide">
                    052-768-7910
                  </a>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-center gap-3">
                <Smartphone className="w-4 h-4 text-soft-orange shrink-0" />
                <div>
                  <span className="text-[10px] text-warm-sand/65 block">24時間いつでも急を要する場合（代表携帯）</span>
                  <a href="tel:07089407117" className="text-sm font-extrabold text-white font-serif hover:text-soft-orange tracking-wide">
                    070-8940-7117
                  </a>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-center gap-3">
                <Mail className="w-4 h-4 text-soft-orange shrink-0" />
                <div>
                  <span className="text-[10px] text-warm-sand/65 block">公式メール相談窓口</span>
                  <a href="mailto:matatabi.hukuroo@gmail.com" className="text-xs font-bold text-white hover:text-soft-orange select-all break-all">
                    matatabi.hukuroo@gmail.com
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Closing copyright notice */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-warm-sand/50 font-medium tracking-wide gap-3">
          <div className="flex items-center gap-1.5 select-none">
            <Shield className="w-3.5 h-3.5" />
            <span>厚生労働省指定 訪問看護ステーション基準準拠システム</span>
          </div>
          <div className="text-center md:text-right">
            &copy; {new Date().getFullYear()} Matatabi Co., Ltd. & 訪問看護ステーションふくろう守山 All Rights Reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}
