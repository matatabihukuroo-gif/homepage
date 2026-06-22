import React from "react";
import { CreditCard, Check, AlertCircle, HelpCircle } from "lucide-react";

export default function CostInfo() {
  return (
    <section id="cost" className="py-20 md:py-28 bg-[#FFFDFB] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-warm-peach/80 text-soft-orange text-xs font-bold rounded mb-3 tracking-widest uppercase border border-warm-sand">
            PRICING & SUBSIDIES
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold font-serif text-forest-dark tracking-tight">
            ご利用料金の目安と<span className="text-soft-orange">各種医療費助成制度</span>
          </h3>
          <div className="w-12 h-1 bg-soft-orange mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 text-sm mt-4 leading-relaxed font-sans">
            精神科訪問看護は「公的医療保険」が適用されます。さらに国の制度である
            「自立支援医療制度」をご利用いただくことで、費用負担が1割（かつ月ごとの上限付き）に大幅軽減されます。
          </p>
          <div className="mt-4 p-3 bg-soft-orange/5 border border-soft-orange/20 rounded-xl inline-flex items-center gap-2 text-left">
            <AlertCircle className="w-4 h-4 text-soft-orange shrink-0 animate-pulse" />
            <p className="text-xs text-[#894D2A] font-bold">
              ※料金は目安です。お住いの市区町村や自治体に確認、もしくはご相談ください。
            </p>
          </div>
        </div>

        {/* 2-Column Comparison Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-12">
          
          {/* Card A: Self-Support Medical Cap (HIGH VALUE SPECIAL FOCUS FOR PSYCH_HOME_NURSE) */}
          <div className="bg-gradient-to-b from-[#FFF2EB] to-white border-2 border-[#FCD9C6] rounded-3xl p-6 sm:p-8 shadow-md relative overflow-hidden flex flex-col justify-between">
            {/* Visual highlight ribbon */}
            <div className="absolute top-0 right-0 bg-soft-orange text-white text-[10px] font-bold py-1 px-4 rounded-bl-xl uppercase tracking-widest">
              ほぼ全員が申請される特例
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-soft-orange/10 flex items-center justify-center text-soft-orange">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-bold text-soft-orange uppercase tracking-wider">国の負担軽免制度</span>
                  <h4 className="text-lg font-bold font-serif text-forest-dark leading-tight">「自立支援医療」を適用される場合</h4>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 text-center font-serif mb-6 border border-[#FCD9C6] shadow-inner">
                <span className="text-sm font-semibold text-soft-orange block mb-1">自己負担は一律</span>
                <span className="text-4xl sm:text-5xl font-bold text-forest-dark tracking-tight">1割負担 <span className="text-sm text-gray-500 font-sans tracking-normal block md:inline md:text-md">（かつ月額負担上限付き）</span></span>
              </div>

              <span className="text-[11px] font-bold text-forest-medium block mb-2">世帯所得に応じた月額自己負担の上限額</span>
              <div className="overflow-x-auto rounded-xl border border-gray-150 mb-4 bg-white">
                <table className="w-full text-[11px] sm:text-xs text-left divide-y divide-gray-150">
                  <thead className="bg-gray-50 text-gray-500 font-sans">
                    <tr>
                      <th className="px-4 py-2 font-bold select-none">世帯区分（住民税）</th>
                      <th className="px-4 py-2 font-bold select-none">月額の支払上限額 / 最大</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-150 text-gray-700">
                    <tr>
                      <td className="px-4 py-2 bg-gray-50/20 font-medium">生活保護受給世帯</td>
                      <td className="px-4 py-2 font-semibold text-forest-medium">0円（すべて公費負担）</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 bg-gray-50/20 font-medium">市民税非課税世帯 (低所得1)</td>
                      <td className="px-4 py-2 font-bold">2,500円 / 月まで</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 bg-gray-50/20 font-medium">市民税非課税世帯 (低所得2)</td>
                      <td className="px-4 py-2 font-bold">5,000円 / 月まで</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 bg-gray-50/20 font-medium">市民税課税（所得割 3.3万円未満）</td>
                      <td className="px-4 py-2 font-bold">5,000円 / 月まで（※重度かつ継続判断）</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 bg-gray-50/20 font-medium">市民税課税（所得割 23.5万円未満）</td>
                      <td className="px-4 py-2 font-bold">10,000円 / 月まで（※重度かつ継続判断）</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 border border-[#FCD9C6]/60 text-xs text-gray-600 leading-relaxed flex items-start gap-2 text-left">
              <AlertCircle className="w-4 h-4 text-soft-orange shrink-0 mt-0.5" />
              <div>
                <strong>【上限に到達した段階でその月の支払いはストップ】</strong>
                <p className="text-[10px] text-gray-500 mt-0.5 font-normal">
                  自立支援医療が適用されると、たとえ月に何度ご利用になっても、上の表の上限金額（例: 市民税非課税世帯なら月2,500円、または5,000円など）を超えて当ステーションに支払う必要は一切なくなります。
                </p>
              </div>
            </div>
          </div>

          {/* Card B: Normal Public Insurance */}
          <div className="bg-white border-2 border-warm-sand rounded-3xl p-6 sm:p-8 hover:border-gray-300 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-700">
                  <CreditCard className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">通常負担</span>
                  <h4 className="text-lg font-bold font-serif text-forest-dark leading-tight">各種健康保険のみご利用の場合</h4>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 text-center font-serif mb-6 border border-gray-100">
                <span className="text-sm font-semibold text-gray-500 block mb-1">自己負担割合</span>
                <span className="text-4xl sm:text-5xl font-bold text-gray-800 tracking-tight">1割 〜 3割</span>
                <span className="text-xs text-gray-400 block mt-2">※お手持ちの保険証の種類（後期高齢者・こくほ・社会保険など）によります。</span>
              </div>

              <ul className="space-y-4 text-sm text-gray-600">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-forest-medium mt-1 shrink-0" />
                  <span>
                    1回（約30分〜1時間）あたりのお支払い目安は、<strong>約800円〜2,500円</strong>前後となります。
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-forest-medium mt-1 shrink-0" />
                  <span>
                    要介護認定が無くても、「医療保険」で週数回、制限なく継続的にご利用いただけます。
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-100/50 rounded-xl p-4 border border-gray-150 text-xs text-gray-500 mt-6 leading-relaxed space-y-1">
              <p>※週何回ご利用になられるか、緊急対応体制をご契約されるか等により、月次での総費用が変わります。詳しくは事前のご面談にて明快にご提示いたします。</p>
              <p className="text-soft-orange font-bold">※料金は目安です。お住いの市区町村や自治体に確認、もしくはご相談ください。</p>
            </div>
          </div>

        </div>

        {/* Specific relief categories with icons */}
        <div className="bg-[#FAF8F5] border border-warm-sand rounded-3xl p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-left">
              <span className="w-8 h-8 rounded-full bg-forest-light/10 text-forest-medium flex items-center justify-center font-bold text-xs mb-3">
                1
              </span>
              <h5 className="font-bold font-serif text-sm text-forest-dark mb-1">
                自己負担額が【0円】になるケース
              </h5>
              <p className="text-xs text-gray-500 leading-normal font-normal">
                名古屋市の重度心身障害者医療費助成を受給されている方、および生活保護を受給されている方は、自己負担金は実質的に0円となります。
              </p>
            </div>

            <div className="text-left border-t md:border-t-0 md:border-l border-gray-200 pt-6 md:pt-0 md:pl-6">
              <span className="w-8 h-8 rounded-full bg-forest-light/10 text-forest-medium flex items-center justify-center font-bold text-xs mb-3">
                2
              </span>
              <h5 className="font-bold font-serif text-sm text-forest-dark mb-1">
                交通費について
              </h5>
              <p className="text-xs text-gray-500 leading-normal font-normal">
                名古屋市守山区鳥羽見二丁目の事業所を拠点としております。通常のサービス提供地域である守山区、北区、東区などの一定の主要範囲に関しましては、訪問に伴うガソリン代・出張費は一切いただいておりません。
              </p>
            </div>

            <div className="text-left border-t md:border-t-0 md:border-l border-gray-200 pt-6 md:pt-0 md:pl-6">
              <span className="w-8 h-8 rounded-full bg-forest-light/10 text-forest-medium flex items-center justify-center font-bold text-xs mb-3">
                3
              </span>
              <h5 className="font-bold font-serif text-sm text-forest-dark mb-1">
                自立支援手帳・申請の代行
              </h5>
              <p className="text-xs text-gray-500 leading-normal font-normal">
                「自立支援医療の制度が難しくて分からない」「区役所の障害福祉課のどこに行けばいいの？」といったご相談、手続きにむけた提出用書類の取得、サポートはすべてお任せください。
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
