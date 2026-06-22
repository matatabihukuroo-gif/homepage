import React from "react";
import { User, Quote, Goal, Flame, HelpCircle, Bike, Heart } from "lucide-react";

function getStaffAvatar(name: string) {
  if (name === "石崎 祐也") {
    return (
      <svg viewBox="0 0 100 100" className="w-full h-full rounded-full" xmlns="http://www.w3.org/2000/svg">
        {/* Background */}
        <circle cx="50" cy="50" r="48" fill="#FDF3EE" />
        
        {/* Suit body */}
        <path d="M20 95 C 20 80, 30 70, 50 70 C 70 70, 80 80, 80 95 Z" fill="#2D3748" />
        <path d="M42 70 L50 82 L58 70 Z" fill="#FFFFFF" />
        <path d="M48 78 L52 78 L53 95 L47 95 Z" fill="#3B82F6" />
        <path d="M28 72 L42 78 L41 85 Z" fill="#1A202C" />
        <path d="M72 72 L58 78 L59 85 Z" fill="#1A202C" />

        {/* Neck */}
        <rect x="43" y="58" width="14" height="15" fill="#EAAA8A" rx="2" />

        {/* Head/Face */}
        <circle cx="50" cy="42" r="22" fill="#FDBA74" />

        {/* Hair */}
        <path d="M26 38 C 26 24, 34 18, 50 18 C 66 18, 74 24, 74 38 C 74 38, 70 28, 50 28 C 30 28, 26 38, 26 38 Z" fill="#1E293B" />
        <path d="M26 38 C 24 38, 24 44, 28 44 C 28 44, 28 38, 26 38 Z" fill="#1E293B" />
        <path d="M74 38 C 76 38, 76 44, 72 44 C 72 44, 72 38, 74 38 Z" fill="#1E293B" />

        {/* Eyes (Smiling narrow curved eyes - "目は小さめ") */}
        <path d="M38 41 Q 42 38, 45 42" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M55 41 Q 58 38, 62 42" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" fill="none" />

        {/* Cheeks blush */}
        <circle cx="36" cy="46" r="3" fill="#F06060" opacity="0.25" />
        <circle cx="64" cy="46" r="3" fill="#F06060" opacity="0.25" />

        {/* Eyebrows */}
        <path d="M36 34 Q 41 32, 45 35" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M55 35 Q 59 32, 64 34" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" fill="none" />

        {/* Nose */}
        <path d="M50 43 L48 48 L52 48" stroke="#DD6B20" strokeWidth="1.5" strokeLinecap="round" fill="none" />

        {/* Smile */}
        <path d="M42 50 Q 50 58, 58 50" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      </svg>
    );
  } else if (name === "佐々木 一憲") {
    return (
      <svg viewBox="0 0 100 100" className="w-full h-full rounded-full" xmlns="http://www.w3.org/2000/svg">
        {/* Background */}
        <circle cx="50" cy="50" r="48" fill="#EEF9F5" />

        {/* Nurse uniform body */}
        <path d="M22 95 C 22 81, 31 71, 50 71 C 69 71, 78 81, 78 95 Z" fill="#0D9488" />
        <path d="M43 71 L50 81 L57 71 Z" fill="#EEF9F5" />
        <rect x="60" y="80" width="10" height="12" fill="#0F766E" rx="1" />
        <rect x="63" y="78" width="4" height="2" fill="#E2E8F0" />

        {/* Neck */}
        <rect x="44" y="58" width="12" height="15" fill="#885A35" rx="1" />

        {/* Head/Face (Tan skin tone - "色黒") */}
        <path d="M50 20 C 37 20, 31 30, 31 43 C 31 55, 38 61, 50 61 C 62 61, 69 55, 69 43 C 69 30, 63 20, 50 20 Z" fill="#9C6E4A" />

        {/* Spiky Short Hair */}
        <path d="M30 38 Q 28 28, 36 24 Q 42 16, 50 18 Q 58 16, 64 24 Q 72 28, 70 38 L 71 34 Q 65 24, 50 24 Q 35 24, 29 34 Z" fill="#1E293B" />
        <path d="M42 18 L 45 12 L 48 18" fill="#1E293B" />
        <path d="M48 18 L 51 11 L 54 18" fill="#1E293B" />
        <path d="M53 18 L 57 13 L 60 19" fill="#1E293B" />

        {/* Eyes (Energetic, healthy gaze) */}
        <circle cx="41" cy="40" r="3" fill="#1E293B" />
        <circle cx="59" cy="40" r="3" fill="#1E293B" />
        <circle cx="42.2" cy="38.8" r="1" fill="#FFFFFF" />
        <circle cx="60.2" cy="38.8" r="1" fill="#FFFFFF" />

        {/* Eyebrows */}
        <path d="M36 32 Q 41 30, 45 32" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M55 32 Q 59 30, 64 32" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" fill="none" />

        {/* Nose */}
        <path d="M50 41 L48 48 L52 48" stroke="#6F4423" strokeWidth="1.5" strokeLinecap="round" fill="none" />

        {/* Confident healthy smile */}
        <path d="M42 51 Q 50 56, 58 51" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      </svg>
    );
  } else {
    return (
      <svg viewBox="0 0 100 100" className="w-full h-full rounded-full" xmlns="http://www.w3.org/2000/svg">
        {/* Background */}
        <circle cx="50" cy="50" r="48" fill="#F0F7FF" />

        {/* Hair Back */}
        <path d="M24 45 C 24 55, 26 70, 32 75 C 34 70, 32 45, 32 45 Z" fill="#5F3415" />
        <path d="M76 45 C 76 55, 74 70, 68 75 C 66 70, 68 45, 68 45 Z" fill="#5F3415" />

        {/* Blouse body (Soft clean medical scrub/pink uniform) */}
        <path d="M22 95 C 22 81, 31 71, 50 71 C 69 71, 78 81, 78 95 Z" fill="#F472B6" />
        <path d="M42 71 C 42 71, 50 77, 58 71 C 58 71, 55 90, 45 90 Z" fill="#FBCFE8" />

        {/* Neck */}
        <rect x="44" y="58" width="12" height="15" fill="#FDBA74" rx="1" />

        {/* Head/Face */}
        <circle cx="50" cy="42" r="21" fill="#FFD0B4" />

        {/* Hair Front */}
        <path d="M27 38 C 27 22, 38 18, 50 18 C 62 18, 73 22, 73 38 C 73 44, 76 48, 72 49 C 68 50, 71 42, 71 38 C 71 28, 64 24, 50 24 C 36 24, 29 28, 29 38 C 29 42, 32 50, 28 49 C 24 48, 27 44, 27 38 Z" fill="#7C411C" />
        <path d="M35 24 Q 43 28, 46 25 Q 54 28, 65 24" stroke="#7C411C" strokeWidth="3" strokeLinecap="round" fill="none" />

        {/* Sparkling warm friendly eyes */}
        <path d="M37 41 Q 41 43, 45 41" stroke="#4A1D11" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M55 41 Q 59 43, 63 41" stroke="#4A1D11" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        {/* Eyebrows */}
        <path d="M36 34 Q 41 33, 44 35" stroke="#7C411C" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M56 35 Q 59 33, 64 34" stroke="#7C411C" strokeWidth="1.5" strokeLinecap="round" fill="none" />

        {/* Rosy Cheeks */}
        <circle cx="34" cy="46" r="4.5" fill="#F43F5E" opacity="0.3" />
        <circle cx="66" cy="46" r="4.5" fill="#F43F5E" opacity="0.3" />

        {/* Charming smile */}
        <path d="M40 48 Q 50 59, 60 48 Z" fill="#991B1B" />
        <path d="M43 49 C 45 51, 55 51, 57 49 Z" fill="#FFFFFF" />
        <path d="M39 48 Q 50 50, 61 48" stroke="#7C2D12" strokeWidth="1.5" fill="none" />
      </svg>
    );
  }
}

export default function Staff() {
  const staffMembers = [
    {
      name: "石崎 祐也",
      kana: "いしざき ゆうや",
      role: "代表取締役 / 看護師",
      quote: "「病気」を看るのではなく、住み慣れた地域でクラス「あなた」を支えたい。",
      career: [
        "内科急性期病棟、ICU（集中治療室）での勤務を経て「心の治療・メンタルケア」の大切さを深く痛感。",
        "精神科単科病院の急性期閉鎖病棟、および慢性期病棟の主任看護師として、最前線から長期療法まで実務を網走。",
        "退院後の地域連携（ハブ機能）や、ご本人様を取り巻くご家族の孤立に強い危機感を抱き、株式会社またたびを設立。"
      ],
      hobbies: ["ゴルフ（守山区の早朝練習によく行きます）", "サウナ（心身のリセットに欠かせません）"],
      bgColor: "from-[#FDF3EE] to-[#FAF6F0]",
      accentColor: "border-soft-orange text-soft-orange",
      avatarInitials: "代表 石崎",
      gender: "male"
    },
    {
      name: "佐々木 一憲",
      kana: "ささき かずのり",
      role: "管理者 / 看護師 (エキスパート)",
      quote: "長年の経験をもとに、焦らず一歩ずつ、安心した今日を作れるよう努めます。",
      career: [
        "脳神経外科病棟での過酷な急性期勤務を経て、精神精神科特別医療の世界へ。",
        "精神科単科専門病院にて、超急性期から保護病棟、認知症高齢者フロアまで全領域をカバーした「エキスパートナース」。",
        "どんな精神状態の患者様に対しても動じることなく、やさしく落ち着いた安心感を与えるベテラン管理者。"
      ],
      hobbies: ["自転車（週末は愛車でマウンテンロードを爽快に走ります）"],
      bgColor: "from-[#EEF9F5] to-[#FAF6F0]",
      accentColor: "border-forest-light text-forest-medium",
      avatarInitials: "管理者 佐々木",
      gender: "male"
    },
    {
      name: "山北 志穂",
      kana: "やまきた しほ",
      role: "看護師 (精神科キャリア10年以上)",
      quote: "女性特有のお悩みや、繊細な家庭環境をきめ細かく、あたたかくフォローアップします。",
      career: [
        "女性専用閉鎖病棟、男女救急急性期、および長期慢性期療養病棟での広範な実績。",
        "精神科経験年数10年を超えるプロフェッショナルで、思春期のデリケートなケアも得意。",
        "家庭環境、育児、家事との両立に苦しむ女性患者様への生活改善アドバイスのオーソリティ。"
      ],
      hobbies: ["お散歩（休日に四季の植物を観察するのが楽しみです）"],
      bgColor: "from-blue-50/40 to-[#FAF6F0]",
      accentColor: "border-blue-300 text-blue-700",
      avatarInitials: "看護 山北",
      gender: "female"
    }
  ];

  return (
    <section id="staff" className="py-20 md:py-28 bg-[#FFFDFB] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-warm-peach/80 text-soft-orange text-xs font-bold rounded mb-3 tracking-widest uppercase border border-warm-sand">
            OUR TRUSTED STAFF
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold font-serif text-forest-dark tracking-tight">
            頼りになる、<span className="text-soft-orange">私たちのスタッフ紹介</span>
          </h3>
          <div className="w-12 h-1 bg-soft-orange mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 text-sm mt-4 leading-relaxed font-sans">
            精神科だからこそ、看護師の「人間性」や「経験」がもっとも大切です。
            私たちは全員が専門病院での豊かな医療キャリアを有し、皆様の悩みに寄り添います。
          </p>
        </div>

        {/* Staff Cards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {staffMembers.map((member, mIdx) => (
            <div
              key={mIdx}
              className={`bg-gradient-to-b ${member.bgColor} border border-warm-sand/80 rounded-3xl p-6 sm:p-8 hover:shadow-xl hover:border-forest-light/20 transition-all duration-300 relative flex flex-col justify-between`}
            >
              <div>
                {/* Upper representation icon / Initial badge */}
                <div className="flex items-center gap-4 mb-6">
                  {/* Styled avatar box */}
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center shrink-0 border shadow-md ${member.accentColor} bg-white overflow-hidden`}>
                    {getStaffAvatar(member.name)}
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 font-medium tracking-wide">
                      {member.kana}
                    </span>
                    <h4 className="text-xl font-bold text-forest-dark font-serif tracking-tight leading-snug">
                      {member.name}
                    </h4>
                    <span className={`inline-block text-[11px] font-bold px-2 py-0.5 rounded-md border mt-1.5 bg-white ${member.accentColor}`}>
                      {member.role}
                    </span>
                  </div>
                </div>

                {/* Philosophic quote */}
                <div className="relative pl-7 mb-6 text-gray-700 italic text-sm font-medium leading-relaxed bg-white/60 p-3 rounded-2xl border border-warm-sand/30">
                  <Quote className="w-5 h-5 text-soft-orange/30 absolute left-2.5 top-2.5" />
                  「{member.quote}」
                </div>

                {/* Profile career history */}
                <div className="mb-6">
                  <span className="text-[11px] font-bold text-forest-medium tracking-wider uppercase block mb-2.5">
                    経歴・キャリア
                  </span>
                  <ul className="space-y-4">
                    {member.career.map((car, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-2 text-xs leading-relaxed text-gray-600">
                        <span className="w-1.5 h-1.5 bg-forest-light rounded-full mt-1.5 shrink-0" />
                        <span>{car}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Hobbies to make it human-centric */}
              <div className="border-t border-warm-sand/50 pt-4 mt-6">
                <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase block mb-2">
                  プライベート（趣味）
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {member.hobbies.map((hob, hIdx) => (
                    <span
                      key={hIdx}
                      className="inline-flex items-center gap-1.5 bg-white/90 border border-warm-sand px-3 py-1 rounded-full text-xs font-medium text-gray-600"
                    >
                      {hob.includes("ゴルフ") && <Goal className="w-3.5 h-3.5 text-emerald-600" />}
                      {hob.includes("サウナ") && <Flame className="w-3.5 h-3.5 text-soft-orange" />}
                      {hob.includes("自転車") && <Bike className="w-3.5 h-3.5 text-blue-500" />}
                      {hob.includes("散歩") && <Heart className="w-3.5 h-3.5 text-rose-400" />}
                      {hob}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Reassuring note on our team cohesion */}
        <div className="mt-12 bg-white/75 border border-dashed border-warm-sand rounded-3xl p-6 md:p-8 max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-6">
          <div className="w-14 h-14 rounded-2xl bg-forest-light/5 text-forest-medium flex items-center justify-center border border-forest-light/10 shrink-0">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </div>
          <div className="text-left">
            <h5 className="text-sm font-bold text-forest-dark font-serif tracking-tight mb-1">
              多様なケースに対応できる、強いリレーション体制
            </h5>
            <p className="text-xs text-gray-500 leading-normal">
              「株式会社またたび」の訪問看護ステーションふくろう守山では、スタッフ間で毎日綿密なミーティングを行い、ご本人様の容態の変化や最適な声掛けについてカンファレンスを行っています。誰か一人が抱え込む医療ではなく、30代・40代の男女スタッフ全員が一丸となって多角的にサポートする体制を確立しています。
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
