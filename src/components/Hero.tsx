import React, { useState } from "react";
import { Shield, Clock, Heart, Users, Check, ArrowDown, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);

  const impactPhrases = [
    { en: "OWL NURSE COZY WRAP", jp: "ふくろうが心の傷をふんわり包み込む" },
    { en: "24/7 MIND GUARDIAN", jp: "どんな孤独な夜も寄り添う、絶対の守護" },
    { en: "SHIELD OF COMPASSION", jp: "豊かな精神科経験が、頼もしい温もりの盾になる" },
    { en: "WING OF PEACE & HOPE", jp: "大きな翼で、不安や焦燥の嵐をそっと凪にする" },
    { en: "NIGHT WATCHER COZY", jp: "守山区の皆様を、24時間優しく見守るふくろう" },
    { en: "EMPATHY MATATABI NEST", jp: "株式会社またたびがお届けする、信頼と回復の巣箱" },
    { en: "SOOTHING FOREST SHIELD", jp: "大地のココアベージュが、自律神経を和らげ癒やす" },
    { en: "SOUL REASSURANCE 24h", jp: "365日いつでもつながる。あなたを絶対に一人にしない" },
    { en: "365 SECURITY HARBOR", jp: "嵐を避ける港のように、穏やかな日々を守る砦" },
    { en: "MIMOSA HEALING CIRCLE", jp: "優しいハーブ香るサークル。ありのままのあなたで" }
  ];

  const nextPhrase = () => {
    setPhraseIndex((prev) => (prev + 1) % impactPhrases.length);
  };

  const prevPhrase = () => {
    setPhraseIndex((prev) => (prev - 1 + impactPhrases.length) % impactPhrases.length);
  };
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
          <div className="lg:col-span-12 xl:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-md bg-white border border-warm-sand rounded-3xl p-6 shadow-xl relative overflow-hidden transition-all duration-300">
              {/* Soft decorative ring */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-forest-light/5 rounded-full -mr-16 -mt-16" />
              
              {/* Interactive Header for Phrase Customization */}
              <div className="flex flex-col gap-2 border-b border-gray-100 pb-3 mb-4">
                <div className="flex items-center justify-between">
                  {/* Badge & Tooltip indicating clickability */}
                  <span className="text-[10px] font-black text-soft-orange flex items-center gap-1 uppercase tracking-wider bg-soft-orange/10 px-2.5 py-1 rounded-md animate-pulse">
                    <Sparkles className="w-3.5 h-3.5 text-soft-orange fill-soft-orange/35 shrink-0" />
                    インパクトフレーズ案 (10候補をタップ！)
                  </span>
                  <div className="text-[10px] font-bold text-gray-400 bg-gray-50 border border-gray-150 px-2 py-0.5 rounded">名古屋市守山区</div>
                </div>

                {/* Phrase Indicator Text & Toggle Arrow controls */}
                <div className="flex items-center justify-between bg-gradient-to-r from-warm-cream to-white border border-warm-sand/70 rounded-xl p-2 mt-1 relative">
                  <button 
                    onClick={prevPhrase} 
                    className="p-1.5 text-gray-400 hover:text-forest-dark hover:bg-gray-100 rounded-md transition-all cursor-pointer shrink-0"
                    title="前の候補へ"
                    id="prev-phrase-btn"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <div className="text-center px-2 flex-1 min-w-0">
                    <span className="text-xs font-black text-[#563628] tracking-wider block transition-all duration-300 truncate">
                      {impactPhrases[phraseIndex].en}
                    </span>
                    <span className="text-[10px] font-bold text-gray-500 block transition-all duration-300 truncate">
                      〜 {impactPhrases[phraseIndex].jp} 〜
                    </span>
                  </div>
                  <button 
                    onClick={nextPhrase} 
                    className="p-1.5 text-gray-400 hover:text-forest-dark hover:bg-gray-100 rounded-md transition-all cursor-pointer shrink-0"
                    title="次の候補へ"
                    id="next-phrase-btn"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Heartwarm Illustration represented in beautiful CSS Shapes */}
              <div className="w-full h-80 bg-gradient-to-br from-warm-peach via-[#FFF4EB] to-amber-50 rounded-2xl flex items-center justify-center relative shadow-inner overflow-hidden border border-warm-sand/30">
                <div className="absolute bottom-0 w-full h-1/4 bg-emerald-500/5 rounded-t-3xl" />
                
                {/* Visualizing a cute owl nurse protecting a cozy house */}
                <div className="relative flex flex-col items-center select-none pt-4">
                  
                  {/* BACKDROP WINGS (Making the hug giant, dynamic and prominent) */}
                  <div className="absolute -top-6 w-44 h-44 bg-forest-medium/10 rounded-full blur-md animate-pulse pointer-events-none animate-spin-slow" />

                  {/* Nested house (In front of owl wings, behind the owl body) */}
                  <div className="w-20 h-16 bg-white rounded-lg border-2 border-warm-sand relative shadow-md mb-2 flex flex-col justify-end items-center p-1 z-10">
                    {/* Roof */}
                    <div className="absolute top-[-12px] left-[-4px] w-[88px] h-4 bg-soft-orange rounded-full rotate-[-12deg]" />
                    <div className="absolute top-[-12px] right-[-4px] w-[88px] h-4 bg-soft-orange rounded-full rotate-[12deg]" />
                    {/* Windows & Chimney */}
                    <div className="absolute top-2 left-2 w-4 h-4 bg-yellow-100 border border-warm-sand rounded flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse" />
                    </div>
                    {/* Door */}
                    <div className="w-4 h-6 bg-[#A16F1D]/20 rounded-t border-t border-x border-[#A16F1D] mb-0" />
                  </div>

                  {/* Gentle giant owl floating protectively behind OR Wrapping the house with gigantic impact wings */}
                  <div className="w-40 h-40 bg-[#E3DAC9] rounded-full relative shadow-2xl border-4 border-white flex flex-col items-center justify-center -mt-10 z-20 transition-all duration-300 transform hover:scale-105 group">
                    
                    {/* GIANT HOVER FLAPPING WINGS (Hug illustration) */}
                    {/* Left Wing */}
                    <div className="absolute -left-12 top-4 w-16 h-28 bg-[#D2C6B1] rounded-l-full border-l-4 border-y-2 border-white origin-right rotate-[15deg] group-hover:rotate-[-5deg] transition-all duration-500 shadow-md flex items-center justify-end pr-1">
                      <div className="w-1 h-12 bg-white/40 rounded-full" />
                    </div>
                    {/* Right Wing */}
                    <div className="absolute -right-12 top-4 w-16 h-28 bg-[#D2C6B1] rounded-r-full border-r-4 border-y-2 border-white origin-left rotate-[-15deg] group-hover:rotate-[5deg] transition-all duration-500 shadow-md flex items-center justify-start pl-1">
                      <div className="w-1 h-12 bg-white/40 rounded-full" />
                    </div>

                    {/* Ears / Feather tufts */}
                    <div className="absolute -top-3 left-4 w-10 h-8 bg-[#D2C6B1] rounded-tl-full rounded-tr-3xl border-l-2 border-white rotate-[-18deg]" />
                    <div className="absolute -top-3 right-4 w-10 h-8 bg-[#D2C6B1] rounded-tr-full rounded-tl-3xl border-r-2 border-white rotate-[18deg]" />
                    
                    {/* Large expressive high-impact Owl Eyes */}
                    <div className="flex gap-2 mt-1">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-warm-sand shadow-inner relative overflow-hidden">
                        {/* Shimmer Pupil */}
                        <div className="w-5 h-5 bg-gray-800 rounded-full flex items-end justify-center relative">
                          <div className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full" />
                          <div className="w-2.5 h-2 bg-[#F1A24B] rounded-full opacity-60 mb-1" />
                        </div>
                      </div>
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-warm-sand shadow-inner relative overflow-hidden">
                        {/* Shimmer Pupil */}
                        <div className="w-5 h-5 bg-gray-800 rounded-full flex items-end justify-center relative">
                          <div className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full" />
                          <div className="w-2.5 h-2 bg-[#F1A24B] rounded-full opacity-60 mb-1" />
                        </div>
                      </div>
                    </div>

                    {/* Big Beak */}
                    <div className="w-5 h-3.5 bg-soft-orange rounded-b-full -mt-1.5 z-30 shadow-sm border-t border-white/20" />
                    
                    {/* Friendly belly pattern with heart */}
                    <div className="w-20 h-12 bg-white/85 rounded-b-3xl mt-2 flex flex-col justify-center items-center gap-1 shadow-inner border border-warm-sand/20">
                      <Heart className="w-5 h-5 text-soft-orange fill-soft-orange/30 animate-pulse" />
                    </div>

                    {/* Highly Professional Nurse Cap Overlay */}
                    <div className="absolute -top-4 bg-white border-2 border-forest-medium text-forest-medium font-black rounded-lg px-2 py-0.5 text-[10px] leading-tight shadow-md flex items-center gap-1 tracking-wider">
                      <span className="w-2 h-2 rounded-full bg-soft-orange animate-ping shrink-0" />
                      ふくろうナース
                    </div>
                  </div>
                </div>

                {/* Floating small badge bubbles of reassurance */}
                <span className="absolute top-3 left-3 bg-white/95 border border-warm-sand/80 text-forest-dark font-extrabold text-[10px] px-2.5 py-1 rounded-full shadow-md flex items-center gap-1 z-30">
                  <Check className="w-3.5 h-3.5 text-forest-medium stroke-[3]" /> 心安らぐ時間
                </span>

                <span className="absolute bottom-3 right-3 bg-white/95 border border-warm-sand/80 text-forest-dark font-extrabold text-[10px] px-2.5 py-1 rounded-full shadow-md flex items-center gap-1 z-30">
                  <Check className="w-3.5 h-3.5 text-soft-orange stroke-[3]" /> 365日いつでもそばに
                </span>
              </div>

              {/* Dynamic Interactive Description */}
              <div className="mt-4 bg-gradient-to-r from-forest-dark/5 to-transparent p-4 rounded-xl border-l-4 border-forest-light text-left transition-all">
                <span className="text-xs font-bold text-forest-medium flex items-center gap-1.5 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-forest-medium" />
                  「ふくろう守山」の守護の想い
                </span>
                <p className="text-[11px] leading-relaxed text-gray-500 font-normal">
                  夜の森をダイナミックに見守る大きなふくろうが、あなたの安らげる我が家を強固な愛の翼（巨大ウイング）でやさしく保護します。365日24時間対応可能な体制で、ご本人様もご家族様も孤独から完全に守護することをお約束します。
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
