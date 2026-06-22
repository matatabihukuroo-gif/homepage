import React, { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp, MessageCircleOff, DollarSign, Users } from "lucide-react";
import { FAQItem } from "../types";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const faqs: FAQItem[] = [
    {
      id: "faq-1",
      category: "about",
      question: "普通の訪問看護と「精神科特化型」の訪問看護では、具体的に何が違うのですか？",
      answer: "一般的な訪問看護が「血圧測定、点滴、床ずれ（褥瘡）ケア、おむつ交換や清拭」といった『お体（身体）の処置』をメインとするのに対し、精神科特化型は『目に見えにくい心のリハビリ』にフォーカスします。\n\n具体的には、不眠の解消、服薬チェック、焦りや死にたくなるような強い不安感情の受け止め、散歩などの外出リハビリ同行、家族間のストレス緩和など、ご本人様が自分らしく社会、またご自宅で安定して暮らせるようになるための「心の安全管理」と「環境への適応サポート」を行うのが最大の特徴です。スタッフ全員が精神科病棟での専門職キャリアを持っているため、的確な判断とカウンセリングが可能です。"
    },
    {
      id: "faq-2",
      category: "target",
      question: "本人が「絶対に看護師に来てほしくない」と心を閉ざしているのですが、家族だけでの相談からでも可能ですか？",
      answer: "はい、大歓迎です。精神疾患や引きこもりの状態にあるご本人様が、最初の段階で外部のサポートを嫌がるのはとても自然な反応です。\n\nまずはご親族・ご家族様が抱えている不安や息苦しさを、専門スタッフがお伺いすることからスタートします。「どのように話しかけると心が開きやすいか」「どんな提案なら拒否感が少ないか」を一緒に考えながら、無理をせず、一歩一歩ご本人様に信頼してもらえるスモールステップを試行します。ご家族の方の肩の荷が軽くなるだけでも、ご家庭全体の雰囲気が柔らかくなり、ご本人の快復を早めます。"
    },
    {
      id: "faq-3",
      category: "cost",
      question: "自立支援医療は、訪問看護の費用にも適用されるのでしょうか？また利用中の通院費も安くなりますか？",
      answer: "はい、適用されます。自立支援医療（精神通院医療）が決定している場合、指定された医療機関での診察代や精神科薬局での薬代だけでなく、当ステーションでの「精神科訪問看護」自体も一律【1割負担】へと減免されます。\n\nさらに住民税など世帯所得に基づき「月額の自己負担限度額（例: 世帯区分により2,500円や5,000円など）」が必ず設定されるため、仮に緊急コールや夜間の追加訪問などを頻回に含んだ場合でも、支払う総費用はその限度額（2,500円など）でストップ。経済的に非常に優しいシステムとなっております。手続きに関しては、私たちがすべて手続きのお手伝いをしますのでご安心ください。"
    },
    {
      id: "faq-4",
      category: "target",
      question: "女性の看護師さん、または力のある男性看護師さんを指定することは可能でしょうか？",
      answer: "はい、可能です。当ステーションには30代・40代を中心に、精神科病院の臨床現場で経験を積み上げた優秀な「男性看護師」および「女性看護師」がどちらも常勤として所属しております。\n\n「デリケートな同性の方の不調相談をしたい」「若い女性スタッフを希望したい」「興奮しやすく家族だけでは不安なので力強く冷静な男性ナースに側にいてほしい」など、ご本人様のお気持ちや周囲の環境に最も適した担当マッチングを行います。相性をみながら途中で変更することも可能ですので、何でも本音でお話しください。"
    },
    {
      id: "faq-5",
      category: "about",
      question: "何日に何回来てくれますか？1回の訪問時間はどのくらいですか？",
      answer: "1回あたりの訪問時間は、制度上、通常「30分〜1時間程度」となります。\n\n訪問回数は、週に1回から、最大で週3回を基準として設定されます。ただし、お薬を飲み忘れてしまい生活が危険な際や、ひどい急性期（直近退院後など）で不安が強まる場合は、特別指示によって15日間の集中連日ケアを行うなど、ご容態に合わせて柔軟、かつ無制限な訪問体制への切り替えも可能です。回数はご本人の自己回復に合わせて増減させていきます。"
    }
  ];

  const handleToggle = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#FAF8F5] scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-emerald-50 text-forest-medium text-xs font-bold rounded mb-3 tracking-widest uppercase border border-emerald-100">
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold font-serif text-forest-dark tracking-tight">
            精神科訪問看護に関する<span className="text-forest-medium">よくある質問</span>
          </h3>
          <div className="w-12 h-1 bg-forest-light mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 text-sm mt-4 leading-relaxed font-sans">
            治療に対するご本人様の葛藤やご家族負担、お金の手続きなど、
            多くの方が疑問に感じる代表的な不安に、ふくろう守山スタッフがお答えします。
          </p>
        </div>

        {/* FAQs Accordions */}
        <div className="space-y-4 text-left">
          {faqs.map((f, index) => {
            const isOpen = openId === f.id;
            return (
              <div
                key={f.id}
                className="bg-white border border-warm-sand rounded-2xl overflow-hidden shadow-sm transition-all duration-300"
              >
                {/* Trigger Button */}
                <button
                  onClick={() => handleToggle(f.id)}
                  className="w-full px-6 py-5 flex justify-between items-center gap-4 text-left cursor-pointer group hover:bg-warm-peach/25 transition-all"
                >
                  <div className="flex gap-3 items-start">
                    <span className="w-6 h-6 rounded-full bg-soft-orange/15 text-soft-orange font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      Q
                    </span>
                    <span className="font-bold sm:text-base text-sm font-serif text-forest-dark group-hover:text-forest-light transition-colors">
                      {f.question}
                    </span>
                  </div>
                  <div className="text-gray-400 shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5 text-soft-orange" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {/* Answer pane with slide/fade wrapper */}
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 border-t border-gray-50 animate-in fade-in slide-in-from-top-1.5 duration-200">
                    <div className="flex gap-3 items-start">
                      <span className="w-6 h-6 rounded-full bg-forest-light/10 text-forest-medium font-bold text-xs flex items-center justify-center shrink-0 mt-1 select-none">
                        A
                      </span>
                      <div className="text-gray-600 text-xs sm:text-sm leading-relaxed whitespace-pre-wrap font-normal mt-1">
                        {f.answer}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FAQ Sign-off banner */}
        <div className="mt-12 text-center text-xs text-gray-500 font-medium">
          ※ここに解決できなかった疑問や、個別のご状況（例: 生活保護申請の手続き、退院後の訪問頻度など）への回答は、
          <br className="hidden sm:inline" />
          当ステーションの相談窓口「<strong>052-768-7910</strong>」まで、いつでもお気軽におたずねください。
        </div>

      </div>
    </section>
  );
}
