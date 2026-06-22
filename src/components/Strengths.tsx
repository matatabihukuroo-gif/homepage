import React from "react";
import { Clock, Shield, Users, CheckCircle, Smartphone } from "lucide-react";

export default function Strengths() {
  const strengthsData = [
    {
      num: "01",
      title: "365日24時間対応可能",
      sub: "いつでもつながる圧倒的な安心感",
      icon: Clock,
      themeColor: "bg-soft-orange/10 text-soft-orange border-soft-orange/20",
      description: "精神的な急激な変化は夜間や休日など、医療機関が休止している時間帯に起きやすい特徴があります。当ステーションでは常時対応用の電話回線および待機ナース体制を完備。パニックや不眠、激しい不安に襲われた際も、電話での傾聴サポートや緊急訪問で皆様の命と尊厳を守ります。",
      bullets: [
        "深夜の急な不安・パニック時も直通ダイヤルで看護師に即座に相談可能",
        "必要に応じた臨機応変な緊急夜間訪問看護に対応",
        "名古屋市守山区鳥羽見を拠点とする、確実で迅速なアクセス体制"
      ]
    },
    {
      num: "02",
      title: "スタッフ全員が精神科病院経験者",
      sub: "専門医療機関での確かな経験と専門スキル",
      icon: Shield,
      themeColor: "bg-forest-light/10 text-forest-medium border-forest-light/20",
      description: "当ステーションに在籍するスタッフは全員が「精神科単科病院、急性期閉鎖病棟、認知症治療病棟、慢性期病棟」での豊富な臨床ナース経験を持っています。経験が浅いことによる判断遅れや偏見を排除し、わずかな回復兆候や再発の前兆を専門的知見から見逃さず見守ります。",
      bullets: [
        "統合失調症、うつ病、双極性障害、発達障害、認知症など幅広く深い支援実績",
        "医師・心理士・ケースワーカー等との円滑な専門的「地域医療連携」の構築力",
        "内科・救命医療を積んだスタッフもおり、お体の軽度トラブル・合併症観察も対応"
      ]
    },
    {
      num: "03",
      title: "30〜40代の男女スタッフ在籍",
      sub: "患者様の悩みや「同性看護」へのきめ細かなマッチング",
      icon: Users,
      themeColor: "bg-blue-50 text-blue-700 border-blue-105",
      description: "話しやすい親しみやすさを持つ30代〜40代の中堅・ベテランスタッフが主体です。男性ナースおよび女性ナースがどちらも常勤で在籍。デリケートなお悩みを持つ思春期の女性患者様には女性ナース、男性単独世帯への支援や力強さによる介助・統率を好む場合には男性ナースといった個別指名対応が可能です。",
      bullets: [
        "女性スタッフ（山北志穂など、精神科経験10年以上）による繊細なケア",
        "男性スタッフ（佐々木一憲など、急性慢性不問）による万全なサポート",
        "30〜40代ならではの柔軟、気さく、かつ親身なライフアドバイス"
      ]
    }
  ];

  return (
    <section id="strengths" className="py-20 md:py-28 bg-[#FFFDFB] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-warm-peach/80 text-soft-orange text-xs font-bold rounded mb-3 tracking-widest uppercase border border-warm-sand">
            STATION STRENGTHS
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold font-serif text-forest-dark tracking-tight">
            ふくろう守山が選ばれる<span className="text-soft-orange">3つの強み</span>
          </h3>
          <div className="w-12 h-1 bg-soft-orange mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 text-sm mt-4 leading-relaxed font-sans">
            私たちは、形式的な「お伺い」をするだけの看護は行いません。精神科ならではの心の葛藤や家族の悩みに、
            名古屋市守山区で一番親しみやすく、一番頼りになるパートナーとして24時間並走します。
          </p>
        </div>

        {/* Strengths Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {strengthsData.map((s, index) => {
            const IconComponent = s.icon;
            return (
              <div
                key={index}
                className="bg-white border-2 border-warm-sand rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between hover:shadow-xl hover:border-forest-light/30 transition-all duration-300 group"
              >
                {/* Visual Number Backdrop */}
                <div className="absolute top-4 right-6 text-7xl font-bold font-serif text-gray-50/70 select-none pointer-events-none group-hover:text-forest-light/10 transition-colors">
                  {s.num}
                </div>

                <div>
                  {/* Icon & Label */}
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${s.themeColor} mb-6`}>
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Title and Sub */}
                  <div className="mb-4">
                    <span className="text-xs font-bold text-soft-orange tracking-wide uppercase block mb-1">
                      {s.sub}
                    </span>
                    <h4 className="text-xl font-bold text-forest-dark font-serif tracking-tight leading-snug">
                      {s.title}
                    </h4>
                  </div>

                  {/* Body description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 font-sans">
                    {s.description}
                  </p>
                </div>

                {/* Sub Bullet verification items */}
                <ul className="space-y-3 bg-gray-50 rounded-2xl p-4 border border-gray-100">
                  {s.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-xs text-gray-600 leading-normal">
                      <CheckCircle className="w-4 h-4 text-forest-medium mt-0.5 shrink-0" />
                      <span className="font-medium">{b}</span>
                    </li>
                  ))}
                </ul>

              </div>
            );
          })}
        </div>

        {/* Quick highlight box for emergency phone numbers */}
        <div className="mt-14 bg-forest-dark text-warm-cream rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-lg">
          <div className="absolute right-0 top-0 w-60 h-60 bg-forest-light/10 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center gap-4 text-left z-10">
            <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-soft-orange shrink-0">
              <Smartphone className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-bold text-soft-orange tracking-wide uppercase">代表直通緊急ホットライン</span>
              <h5 className="text-lg md:text-xl font-bold font-serif text-white tracking-normal mt-0.5">
                070-8940-7117 <span className="text-xs font-normal text-warm-sand/80 font-sans block md:inline md:ml-2">（※夜間・休日でも対応可能です）</span>
              </h5>
            </div>
          </div>
          <div className="z-10 shrink-0 w-full md:w-auto">
            <a
              href="tel:07089407117"
              className="inline-flex justify-center items-center w-full bg-soft-orange text-white font-bold py-3.5 px-6 rounded-2xl border border-soft-orange/30 hover:bg-opacity-95 text-sm my-1 tracking-wider transition-all shadow-md shadow-soft-orange/20"
            >
              携帯へ直接相談してみる
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
