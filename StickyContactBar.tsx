import React from "react";
import { Landmark, Phone, Printer, Smartphone, Mail, MapPin, ExternalLink, Compass } from "lucide-react";

export default function StationOverview() {
  const tableData = [
    { label: "運営会社", value: "株式会社またたび" },
    { label: "事業所名", value: "訪問看護ステーションふくろう守山" },
    { label: "所在地", value: "〒463-0012 名古屋市守山区鳥羽見二丁目16番8号-1 TRYⅠ鳥羽見101号" },
    { label: "代表取締役", value: "石崎 祐也（看護師）" },
    { label: "管理者", value: "佐々木 一憲（看護師）" },
    { label: "電話番号", value: "052-768-7910", isPhone: true },
    { label: "FAX番号", value: "052-768-7911" },
    { label: "代表携帯", value: "070-8940-7117", isPhone: true },
    { label: "メールアドレス", value: "matatabi.hukuroo@gmail.com", isEmail: true },
    { label: "サービス提供範囲", value: "名古屋市守山区、北区、東区、千種区、尾張旭市、春日井市、瀬戸市（※他地域も調整可能です。お気軽にご相談ください）" },
    { label: "営業時間", value: "月曜日 〜 金曜日: 9:00 〜 18:00（※緊急コール受付・対応は24時間365日可能です）" }
  ];

  return (
    <section id="overview" className="py-20 md:py-28 bg-[#FAF8F5] border-y border-warm-sand/50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-emerald-50 text-forest-medium text-xs font-bold rounded mb-3 tracking-widest uppercase border border-emerald-100">
            STATION OVERVIEW
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold font-serif text-forest-dark tracking-tight">
            事業所概要・<span className="text-forest-medium">アクセス</span>
          </h3>
          <div className="w-12 h-1 bg-forest-light mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 text-sm mt-4 leading-relaxed font-sans">
            私たちは名古屋市守山区鳥羽見を拠点とし、地域の医療機関や
            区役所、相談支援専門員と密接に連携を図りながら活動しています。
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Block: Table Specs */}
          <div className="lg:col-span-6 bg-white border border-warm-sand rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-forest-light/5 text-forest-medium flex items-center justify-center border border-forest-light/10">
                  <Landmark className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold font-serif text-forest-dark">ステーション詳細情報</h4>
              </div>

              <div className="divide-y divide-gray-100">
                {tableData.map((row, rIdx) => (
                  <div key={rIdx} className="py-3.5 flex flex-col sm:flex-row sm:items-start gap-1.5 sm:gap-4 text-xs sm:text-sm">
                    <span className="font-bold sm:w-1/3 text-forest-dark/85 shrink-0 select-none">
                      {row.label}
                    </span>
                    <span className="text-gray-600 sm:w-2/3 break-all font-medium leading-relaxed">
                      {row.isPhone ? (
                        <a href={`tel:${row.value.replace(/-/g, '')}`} className="text-forest-light hover:text-forest-medium underline font-bold flex items-center gap-1">
                          <Phone className="w-3.5 h-3.5" />
                          {row.value}
                        </a>
                      ) : row.isEmail ? (
                        <a href={`mailto:${row.value}`} className="text-forest-light hover:text-forest-medium underline font-bold flex items-center gap-1">
                          <Mail className="w-3.5 h-3.5" />
                          {row.value}
                        </a>
                      ) : (
                        row.value
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Minor owl logo/signet footer in grid helper */}
            <div className="mt-6 pt-6 border-t border-gray-100 flex items-center gap-3 text-xs text-gray-500 font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-forest-medium shrink-0" />
              <span>管理者・看護スタッフが笑顔で守山区鳥羽見エリアを巡回ケアしております。</span>
            </div>
          </div>

          {/* Right Block: Map and Travel Information */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            {/* Map Frame wrapper */}
            <div className="bg-white border border-warm-sand rounded-3xl p-3 shadow-sm overflow-hidden flex-grow flex flex-col h-[400px] lg:h-auto min-h-[350px]">
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-warm-sand/50">
                <iframe
                  title="訪問看護ステーションふくろう守山 所在地マップ"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3260.6725357917!2d136.95874251147514!3d35.18970515671174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6003719582d1c79f%3A0xc6cb691ee9ebbc34!2z44CSNDYzLTAwMTIg5oSb55-l55yM5ZCN5Y-k5bGL5biC5a6I5bGx5Yy66bOl57696KaL5LqM5LiB55uuMTYtOC0x!5e0!3m2!1sja!2sjp!4v1703200000000!5m2!1sja!2sjp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>

            {/* Travel instruction text boxes */}
            <div className="bg-white border border-warm-sand rounded-3xl p-6 shadow-sm">
              <div className="flex items-center gap-2.5 mb-3.5 text-forest-dark">
                <Compass className="w-5 h-5 text-soft-orange" />
                <h5 className="font-bold font-serif text-sm">交通アクセス・アクセス目安</h5>
              </div>

              <div className="space-y-3.5 text-xs text-gray-600">
                <div className="flex items-start gap-2.5">
                  <span className="px-2 py-0.5 bg-blue-100 text-blue-800 font-bold rounded text-[10px] shrink-0 uppercase tracking-widest mt-0.5">
                    電車
                  </span>
                  <div>
                    <span className="font-bold text-gray-800 block">JR中央本線 「新守山駅」 から徒歩約10分</span>
                    <p className="text-gray-400 text-[10px] mt-0.5 font-normal">
                      瀬戸街道近く、鳥羽見公園付近にございます。お車でのご来訪も駐車場の手配を致します。
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 border-t border-gray-100 pt-3">
                  <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 font-bold rounded text-[10px] shrink-0 uppercase tracking-widest mt-0.5">
                    お車
                  </span>
                  <div>
                    <span className="font-bold text-gray-800 block">瀬戸街道（鳥羽見交差点）より北へ3分</span>
                    <p className="text-gray-400 text-[10px] mt-0.5 font-normal">
                      近隣にコインパーキングやお越し頂く際の一時スペースを用意しております。事前にご連絡ください。
                    </p>
                  </div>
                </div>
              </div>

              {/* View larger map link */}
              <div className="mt-5 text-right">
                <a
                  href="https://maps.google.com/?q=名古屋市守山区鳥羽見二丁目16番8号-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-forest-light hover:text-forest-medium font-bold underline cursor-pointer"
                >
                  Google Mapでルートを検索する
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
