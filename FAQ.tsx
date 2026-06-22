import React, { useState } from "react";
import { MessageSquare, FileText, UserCheck, HeartPulse, ChevronRight, HelpCircle } from "lucide-react";

export default function ServiceFlow() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      stepNum: "01",
      title: "お問い合わせ・無料相談",
      lead: "まずは当ステーション、または担当窓口へお気軽にご連絡ください",
      icon: MessageSquare,
      description: "まずはご本人様、ご家族様、または担当するケアマネジャー様、医療機関のソーシャルワーカー様からお電話（052-768-7910）またはメールにてお気軽にご連絡ください。不安に思っていることや、現在の状況を優しく丁寧にお聞きします。契約前の事前診断、システムへの疑問だけでも喜んでお答えします。",
      notes: "★代表電話または急を要する場合は代表携帯（070-8940-7117）でもいつでもお受けしております。"
    },
    {
      stepNum: "02",
      title: "主治医への確認・訪問看護指示書の手続き",
      lead: "かかりつけの精神科医師に指示書を作成してもらいます",
      icon: FileText,
      description: "精神科訪問看護を開始するためには、かかりつけの精神科クリニックや病院等の主治医（精神保健指定医）から「精神科訪問看護指示書」を発行してもらうことが法律上義務付けられています。「主治医にどう伝えれば良いか分からない」という場合は、当スタッフが患者様に同行したり、医師やケースワーカー様とお電話で直接やり取りしてスムーズに手配を進めるサポートをいたします。",
      notes: "★他クリニックに通院中の場合でも連携が可能ですのでご安心ください。"
    },
    {
      stepNum: "03",
      title: "ご自宅での事前面談・ご説明・ご契約",
      lead: "看護師がご自宅へお伺いし、安心の看護プランを一緒に作ります",
      icon: UserCheck,
      description: "当ステーションのエキスパートナースがご自宅（またはご希望の場所、病院の面会室等）を訪問します。ご本人様のこれまでの歩み、現在の体調、これからの「こんな暮らしがしたい」という想いをお聞きします。その後、訪問スケジュール（週何回、何曜日など）や料金に関する丁寧な説明を行い、ご納得いただきましたら契約書を交わします。",
      notes: "★ご家族様のみのご相談、同席も大歓迎です。"
    },
    {
      stepNum: "04",
      title: "訪問看護サポートのスタート",
      lead: "信頼のふくろう守山スタッフが、温かなケアを届けに行きます",
      icon: HeartPulse,
      description: "作成された看護計画に基づき、精神科経験豊かなスタッフがお約束の時間に訪問を開始いたします。毎回の体調観察、服薬チェック、生活面でのリハビリテーション、心の対話を実施します。万一、訪問日以外に極激な不安が襲った場合の「24時間365日つながる緊急連絡ダイヤル」の使い方もここから正式にスタートいたします。",
      notes: "★様子を見ながら回数を増減（例: 最初は週3回から、安定したら週1回など）することが自由に可能です。"
    }
  ];

  return (
    <section id="flow" className="py-20 md:py-28 bg-[#FAF8F5] scroll-mt-20 border-b border-warm-sand/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-emerald-50 text-forest-medium text-xs font-bold rounded mb-3 tracking-widest uppercase border border-emerald-100">
            HOW TO START
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold font-serif text-forest-dark tracking-tight">
            ご利用開始までの<span className="text-forest-medium">かんたん4ステップ</span>
          </h3>
          <div className="w-12 h-1 bg-forest-light mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 text-sm mt-4 leading-relaxed font-sans">
            精神科訪問看護がはじめての方でも、当スタッフが医師の手続きや
            書面作成を最初から最後までやさしくナビゲーションします。安心してお任せください。
          </p>
        </div>

        {/* Dynamic / Interactive flow layouts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column - Steps triggers */}
          <div className="lg:col-span-5 space-y-4">
            {steps.map((st, sIdx) => {
              const StepIcon = st.icon;
              const isActive = activeStep === sIdx;
              return (
                <div
                  key={sIdx}
                  onClick={() => setActiveStep(sIdx)}
                  className={`border-2 rounded-2xl p-5 cursor-pointer transition-all duration-300 flex items-center gap-4 text-left group ${
                    isActive 
                      ? "bg-white border-forest-medium shadow-md shadow-forest-light/5" 
                      : "bg-white/60 border-warm-sand hover:border-gray-300 hover:bg-white"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg shrink-0 ${
                    isActive
                      ? "bg-forest-medium text-white shadow-inner"
                      : "bg-gray-100 text-gray-400 group-hover:text-forest-medium group-hover:bg-forest-light/10"
                  }`}>
                    <StepIcon className="w-5 h-5" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-bold tracking-widest ${isActive ? "text-soft-orange" : "text-gray-400"}`}>
                        STEP {st.stepNum}
                      </span>
                      {isActive && <ChevronRight className="w-4 h-4 text-forest-medium" />}
                    </div>
                    <h4 className={`text-sm sm:text-base font-bold font-serif ${isActive ? "text-forest-dark" : "text-gray-600"}`}>
                      {st.title}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column - Step detail card display */}
          <div className="lg:col-span-7 bg-white border border-warm-sand/80 rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-4xl font-serif font-bold text-forest-light/20">
                  STEP {steps[activeStep].stepNum}
                </span>
                <span className="w-1.5 h-6 bg-forest-medium rounded-full" />
                <h4 className="text-lg font-bold font-serif text-forest-dark">
                  {steps[activeStep].title}
                </h4>
              </div>
            </div>

            <p className="text-sm font-bold text-soft-orange leading-snug mb-4">
              {steps[activeStep].lead}
            </p>

            <p className="text-sm text-gray-600 leading-relaxed font-normal mb-6 whitespace-pre-wrap">
              {steps[activeStep].description}
            </p>

            {/* Note box */}
            <div className="bg-amber-50/60 rounded-2xl p-4 border border-amber-100/60 text-left flex items-start gap-2.5">
              <span className="inline-block px-1.5 py-0.5 bg-soft-orange/10 border border-soft-orange/20 text-soft-orange text-[10px] rounded font-bold uppercase tracking-wide shrink-0 mt-0.5">
                ふくろうのアドバイス
              </span>
              <p className="text-xs text-gray-600 font-semibold leading-relaxed">
                {steps[activeStep].notes}
              </p>
            </div>
          </div>

        </div>

        {/* Consultation Prompt */}
        <div className="mt-16 bg-[#FFF2EB] border border-[#FCD9C6] rounded-3xl p-6 md:p-8 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex gap-4 items-start text-left">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
              <HelpCircle className="w-6 h-6 text-soft-orange" />
            </div>
            <div>
              <h5 className="font-serif font-bold text-base text-forest-dark mb-1">
                「訪問看護を利用するのが初めてで、よくわからない」という方へ
              </h5>
              <p className="text-xs text-gray-500 leading-normal">
                主治医の先生へのご相談、指示書の発行申請手続きは、当ステーションにて1から完全にお手伝い（代行手配等）をさせて頂くことが可能です。まずはお気軽にご自宅やクリニック近くのカフェで、ご質問をお聞かせ下さい。
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
              }
            }}
            className="bg-forest-medium hover:bg-forest-dark text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm tracking-wide shrink-0 transition-colors shadow-sm cursor-pointer"
          >
            手続きの流れを相談する
          </button>
        </div>

      </div>
    </section>
  );
}
