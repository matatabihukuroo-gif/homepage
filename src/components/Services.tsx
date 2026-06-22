import React, { useState } from "react";
import { Heart, RefreshCw, Layers, Compass, Users2, ShieldAlert, Sparkles, Check } from "lucide-react";

export default function Services() {
  const [activeTab, setActiveTab] = useState("all");

  const servicesData = [
    {
      id: "mental",
      category: "mind",
      title: "心の状態の観察と傾聴ケア",
      icon: Heart,
      badge: "最重要の心の寄り添い",
      desc: "ご本人様の不安、焦燥、気分の浮き沈み、パニックや幻覚・妄想などの精神症状を細やかにアセスメント。決して否定せず、お話をじっくり傾聴（傾聴による対話療法）することで、張り詰めた心の緊張をほぐし、心の平穏を取り戻します。",
      bullets: [
        "否定をしない、徹底的な傾聴カウンセリング",
        "再発・悪化フラグ（不眠・引きこもり変化など）の早期察知と医師連絡",
        "精神的なパニック・激しい不安感を落ち着かせるリラクゼーション療法"
      ]
    },
    {
      id: "medicine",
      category: "daily",
      title: "お薬の管理と安全な服薬支援",
      icon: Layers,
      badge: "治療の土台を強固に",
      desc: "「飲み忘れが多い」「副作用のふらつきや眠気が心配」「薬を減らしたいけれど医師に言えない」等の服薬の悩みに寄り添います。一包化の提案やお薬カレンダー等のグッズ活用、副作用状況のドクターへのフィードバックを完全サポートします。",
      bullets: [
        "確実な服薬確認と、お薬へのモチベーション維持のサポート",
        "服薬管理が容易になる環境改善（お薬カレンダーや色分け保管の工夫）",
        "副作用（ふらつき、手の震え、喉の渇き等）を的確に観察し医師へ報告"
      ]
    },
    {
      id: "rhythm",
      category: "daily",
      title: "生活リズムの調整と自立支援",
      icon: RefreshCw,
      badge: "健康的なライフスタイルの回復",
      desc: "昼夜逆転、偏った食事、入浴や清潔保持の怠りなどが起きやすい精神疾患に配慮。ご本人様が無理なくできる範囲で、毎朝の起床時間調整や軽作業、料理、掃除のフォローを一緒に行い、徐々に自立できる自信を育みます。",
      bullets: [
        "生活記録表（ライフスタディ）を用いた、無理のない睡眠リズムの構築",
        "お買い物同行や金銭管理アドバイス（必要に応じた福祉制度との架け橋）",
        "身だしなみやセルフケア（入浴・爪切り・片付け）の自立意欲へのアプローチ"
      ]
    },
    {
      id: "social",
      category: "social",
      title: "社会復帰と各種手続きの同行サポート",
      icon: Compass,
      badge: "社会・地域とのやさしい再連結",
      desc: "孤立しがちなご本人様を社会へやさしくつなげます。デイケアや就労移行支援、作業所（A型・B型作業所）に通いたいけれど勇気が出ない時の相談や、役所での自立支援医療申請の手順レクチャー、他機関への引き継ぎを徹底的に行います。",
      bullets: [
        "地域支援センター、就労移行支援担当者との安心なカンファレンス",
        "市役所等での医療費減免申請手続き（自立支援医療など）のサポート",
        "外に出ること・公共交通機関に慣れるためのスモールステップトレーニング"
      ]
    },
    {
      id: "family",
      category: "mind",
      title: "ご家族の相談相手と負担軽減（レスパイト）",
      icon: Users2,
      badge: "支える方も一人にさせない",
      desc: "「本人への声掛けの仕方が分からない」「いつまで続くのか先が見えず辛い」など、極限の不安を抱えがちなご家族のための支援。ご家族の良き相談相手として、専門的な対処法を伝えることで家庭内の過度なストレス（感情表出:High EE）を緩和します。",
      bullets: [
        "ご家族様だけを対象としたお悩み相談、正しい疾患理解へのアドバイス",
        "家庭内での突発的な衝突・精神危機（クライシス）への事前ルール化",
        "ご家族様の自己犠牲を防ぐケア（レスパイトによる精神的ゆとり確保）"
      ]
    },
    {
      id: "crisis",
      category: "social",
      title: "24時間ホットラインによる再発・危機回避",
      icon: ShieldAlert,
      badge: "守るための駆け込み寺",
      desc: "急な気分の悪化や死にたい気持ち（自傷行為などの危機）が高まった時に、直接担当者または当番看護師と24時間つながる回線を提供。精神科ならではの緊迫した場面でも、暴力を生むことなく、適切な冷静さとアプローチでご本人の安全をケアします。",
      bullets: [
        "パニック状態をご家族だけで抱え込まず、看護スタッフが電話介入",
        "主治医、精神相談救急との密なトリアージ連携",
        "安定へのレスポンス時間を圧倒的に短縮し、緊急再入院を防ぐ"
      ]
    }
  ];

  const filteredServices = activeTab === "all" 
    ? servicesData 
    : servicesData.filter(s => s.category === activeTab);

  return (
    <section id="services" className="py-20 md:py-28 bg-[#FAF8F5] border-y border-warm-sand/50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-emerald-50 text-forest-medium text-xs font-bold rounded mb-3 tracking-widest uppercase border border-emerald-100">
            NURSING SERVICES
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold font-serif text-forest-dark tracking-tight">
            ふくろう守山ができる<span className="text-forest-medium">温かな支援内容</span>
          </h3>
          <div className="w-12 h-1 bg-forest-light mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 text-sm mt-4 leading-relaxed font-sans">
            精神科訪問看護は、身体のケア（点滴や褥瘡ケアなど）だけでなく、
            「生活そのものの自立」と「心の安全基地（シェルター）をいかに作るか」を大切にしています。
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex justify-center gap-2 md:gap-3 mb-12 flex-wrap">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
              activeTab === "all"
                ? "bg-forest-medium text-white shadow-md shadow-forest-medium/15"
                : "bg-white border border-warm-sand text-gray-500 hover:text-forest-medium hover:border-forest-light/60"
            }`}
          >
            すべての看護サービス
          </button>
          
          <button
            onClick={() => setActiveTab("mind")}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
              activeTab === "mind"
                ? "bg-forest-medium text-white shadow-md shadow-forest-medium/15"
                : "bg-white border border-warm-sand text-gray-500 hover:text-forest-medium hover:border-forest-light/60"
            }`}
          >
            心・精神ケア
          </button>

          <button
            onClick={() => setActiveTab("daily")}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
              activeTab === "daily"
                ? "bg-forest-medium text-white shadow-md shadow-forest-medium/15"
                : "bg-white border border-warm-sand text-gray-500 hover:text-forest-medium hover:border-forest-light/60"
            }`}
          >
            生活・服薬管理
          </button>

          <button
            onClick={() => setActiveTab("social")}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
              activeTab === "social"
                ? "bg-forest-medium text-white shadow-md shadow-forest-medium/15"
                : "bg-white border border-warm-sand text-gray-500 hover:text-forest-medium hover:border-forest-light/60"
            }`}
          >
            社会復帰・緊急対応
          </button>
        </div>

        {/* Services Grid with elegant transition */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((srv, index) => {
            const IconComp = srv.icon;
            return (
              <div
                key={srv.id}
                className="bg-white border border-warm-sand/80 rounded-3xl p-6 shadow-sm hover:shadow-lg hover:border-forest-light/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Decorative badge and icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block px-2.5 py-1 bg-warm-peach text-soft-orange text-[10px] font-bold rounded-lg border border-warm-sand/50">
                      {srv.badge}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-forest-light/5 text-forest-medium flex items-center justify-center border border-forest-light/10">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Service Title */}
                  <h4 className="text-lg font-bold text-forest-dark font-serif tracking-tight mb-3">
                    {srv.title}
                  </h4>

                  {/* Main description */}
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                    {srv.desc}
                  </p>
                </div>

                {/* Sub Bullet verification items */}
                <div className="border-t border-gray-100 pt-4 mt-auto">
                  <span className="text-[11px] font-bold text-forest-medium block mb-2">具体的な看護アプローチ</span>
                  <ul className="space-y-2">
                    {srv.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-xs text-gray-600 leading-normal">
                        <Check className="w-3.5 h-3.5 text-forest-medium mt-0.5 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reference Quote */}
        <div className="mt-12 bg-white rounded-2xl border border-warm-sand p-6 text-center max-w-2xl mx-auto">
          <p className="text-xs text-gray-500 italic leading-relaxed">
            ※精神保健指定医（かかりつけ医等）の「精神科訪問看護指示書」が発行されれば、
            医療保険および自立支援医療をご利用いただけます。詳しくは下記「ご利用料金」をご覧ください。
          </p>
        </div>

      </div>
    </section>
  );
}
