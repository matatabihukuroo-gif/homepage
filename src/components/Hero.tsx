import React from "react";
import { Shield, Clock, Heart, Users, Check, ArrowDown } from "lucide-react";

export default function Hero() {
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

  const scrollToStrengths = () => {
    const element = document.getElementById("strengths");
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
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-warm-peach/60 to-warm-cream py-12 md:py-20 lg:py-26 border-b border-warm-sand/50">
      {/* Decorative Warm Blobs */}
      <div className="absolute top-10 left-[-10%] w-[45%] aspect-square bg-forest-light/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[40%] aspect-square bg-soft-orange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text content Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 text-forest-medium px-4 py-1.5 rounded-full text-xs font-bold tracking-wide">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              精神科特化型 訪問看護ステーションふくろう守山
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-forest-dark tracking-tight leading-snug">
              心に寄り添い、守る。<br />
              ご自宅での<span className="text-soft-orange relative inline-block">
                自分らしい暮らし
                <span className="absolute bottom-1 left-0 w-full h-2 bg-soft-orange/15 -z-10 rounded-full" />
              </span>を支えます
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl font-sans">
              精神科看護に精通したプロフェッショナルな男女看護スタッフが、名古屋市守山区周辺のご自宅を訪問。
              365日24時間いつでもつながる安心のサポート体制で、ご本人様とご家族様の回復と安定に伴走します。
            </p>

            {/* Quick visual high-impact counters or badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full pt-2">
              <div className="flex items-center gap-3 bg-white/85 backdrop-blur border border-warm-sand/85 p-3.5 rounded-2xl shadow-sm hover:translate-y-[-2px] transition-all">
                <div className="w-10 h-10 rounded-full bg-soft-orange/10 flex items-center justify-center text-soft-orange shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-gray-400 tracking-wider">SUPPORT</div>
                  <div className="text-sm font-bold text-gray-800 leading-tight">365日24h対応</div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/85 backdrop-blur border border-warm-sand/85 p-3.5 rounded-2xl shadow-sm hover:translate-y-[-2px] transition-all">
                <div className="w-10 h-10 rounded-full bg-forest-light/10 flex items-center justify-center text-forest-medium shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-gray-400 tracking-wider">STAFF BACKGROUND</div>
                  <div className="text-sm font-bold text-gray-800 leading-tight">全員が精神科院経験</div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/85 backdrop-blur border border-warm-sand/85 p-3.5 rounded-2xl shadow-sm hover:translate-y-[-2px] transition-all">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-700 shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-gray-400 tracking-wider">GENERATION / GENDER</div>
                  <div className="text-sm font-bold text-gray-800 leading-tight">30代・40代男女ナース</div>
                </div>
              </div>
            </div>

            {/* Button links */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
              <button
                onClick={scrollToContact}
                className="bg-soft-orange text-white hover:bg-opacity-95 font-bold px-8 py-4 rounded-xl text-md transition-all shadow-md shadow-soft-orange/15 text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                まずは相談してみる（無料）
              </button>
              <button
                onClick={scrollToStrengths}
                className="bg-white border-2 border-forest-light/40 hover:border-forest-medium text-forest-medium font-bold px-7 py-4 rounded-xl text-md transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                私たちの3つの強み
                <ArrowDown className="w-4 h-4 text-forest-medium animate-bounce" />
              </button>
            </div>
          </div>

          {/* Graphic / Welcome Card Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md bg-white border border-warm-sand rounded-3xl p-6 shadow-xl relative overflow-hidden">
              {/* Soft decorative ring */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-forest-light/5 rounded-full -mr-16 -mt-16" />
              
              <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-5">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 bg-forest-medium rounded-full" />
                  <span className="text-xs font-bold text-forest-medium/90 tracking-wide uppercase">OWL NURSE WRAP</span>
                </div>
                <div className="text-xs font-bold text-gray-400 bg-gray-50 border border-gray-100 px-2 py-0.5 rounded">名古屋市守山区</div>
              </div>

              {/* Heartwarm Illustration represented in beautiful CSS Shapes */}
              <div className="w-full h-56 bg-gradient-to-br from-warm-peach to-amber-50/70 rounded-2xl flex items-center justify-center relative shadow-inner overflow-hidden border border-warm-sand/30">
                <div className="absolute bottom-0 w-full h-1/4 bg-emerald-500/10 rounded-t-3xl" />
                
                {/* Visualizing a cute owl nurse protecting a cozy house */}
                <div className="relative flex flex-col items-center select-none">
                  {/* Styled Nested house */}
                  <div className="w-16 h-12 bg-white rounded border border-warm-sand relative shadow-sm mb-2 flex flex-col justify-end items-center p-1">
                    <div className="absolute top-[-10px] left-[-3px] w-[70px] h-3 bg-soft-orange rounded-full rotate-[-12deg]" />
                    <div className="absolute top-[-10px] right-[-3px] w-[70px] h-3 bg-soft-orange rounded-full rotate-[12deg]" />
                    <div className="w-3 h-3 bg-forest-light/20 rounded-full mb-1" />
                  </div>

                  {/* Gentle giant owl floating protectively behind */}
                  <div className="w-24 h-24 bg-[#EBE4D5] rounded-full relative shadow-md border-2 border-white flex flex-col items-center justify-center -mt-6">
                    {/* Ears */}
                    <div className="absolute -top-1.5 left-2.5 w-6 h-5 bg-[#DED5C3] rounded-tl-full rounded-tr-xl border-l border-white rotate-[-15deg]" />
                    <div className="absolute -top-1.5 right-2.5 w-6 h-5 bg-[#DED5C3] rounded-tr-full rounded-tl-xl border-r border-white rotate-[15deg]" />
                    
                    {/* Eyes and beak */}
                    <div className="flex gap-1.5 mt-2">
                      <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center border border-warm-sand">
                        <div className="w-2 h-2 bg-gray-700 rounded-full" />
                      </div>
                      <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center border border-warm-sand">
                        <div className="w-2 h-2 bg-gray-700 rounded-full" />
                      </div>
                    </div>
                    {/* Beak */}
                    <div className="w-3 h-2 bg-[#F1A24B] rounded-b-full -mt-1.5" />
                    
                    {/* Belly pattern */}
                    <div className="w-14 h-8 bg-white/75 rounded-b-2xl mt-1 flex justify-center items-center gap-1.5">
                      <Heart className="w-3.5 h-3.5 text-soft-orange fill-soft-orange/30 animate-pulse" />
                    </div>

                    {/* Nurse cap badge overlay */}
                    <div className="absolute -top-2 bg-white border border-emerald-500 text-emerald-600 rounded px-1 text-[9px] font-bold leading-tight scale-90">
                      ふくろう
                    </div>
                  </div>
                </div>

                {/* Floating small badge bubbles of reassurance */}
                <span className="absolute top-4 left-4 bg-white/90 border border-gray-100 text-gray-700 font-bold text-[11px] px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-forest-medium" /> 心安らぐ時間
                </span>

                <span className="absolute bottom-4 right-4 bg-white/90 border border-gray-100 text-gray-700 font-bold text-[11px] px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-soft-orange" /> 365日いつもそばに
                </span>
              </div>

              {/* Little reassuring quote at bottom */}
              <div className="mt-5 bg-gradient-to-r from-forest-dark/5 to-transparent p-4 rounded-xl border-l-4 border-forest-light text-left">
                <span className="text-xs font-bold text-forest-medium block mb-0.5">「ふくろう」の名に込めた想い</span>
                <p className="text-[11px] leading-relaxed text-gray-500 font-normal">
                  夜の森を見守るふくろうのように、不安な夜や困った時にいつでも手を差し伸べられるよう、24時間の支援体制を完備しています。ひとりきりで悩まず、お気軽にご相談ください。
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
