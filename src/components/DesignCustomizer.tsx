import React, { useState } from "react";
import { Sparkles, Check, Info, Palette, Copy, CheckCircle, ChevronRight, ChevronLeft, Settings2, Type, Layers } from "lucide-react";

export interface VisualTheme {
  id: string;
  name: string;
  jpConcept: string;
  tagline: string;
  psychology: string;
  targetGroup: string;
  cream: string;
  sand: string;
  peach: string;
  orange: string;
  forestLight: string;
  forestMedium: string;
  forestDark: string;
  fontClass: string;
  fontLabel: string;
  cardRadius: string;
  shadowStyle: string;
}

export const themes: VisualTheme[] = [
  {
    id: "owl-forest",
    name: "① ふくろうの静かな森",
    jpConcept: "深緑と安らぎの森林セラピー",
    tagline: "夜の不安や高鳴る焦燥を鎮める、王道のナチュラル医療カラー",
    psychology: "深緑（フォレストグリーン）は視覚刺激を最も和らげ、興奮を鎮静化する副交感神経を刺激します。温かなカッパーオレンジを加えることで『孤独感』をケアし、自然豊かな森で見守られているような絶対的安全性を表現します。",
    targetGroup: "万全の安心感を求めたい・不眠や重い不安感を和らげたい方向け",
    cream: "#FAF9F6", // 優しいシルクホワイト
    sand: "#E4EDE7", // 木漏れ日を帯びた淡いグリーンベージュ
    peach: "#E9F2EE", // 爽やかなリーフペール
    orange: "#DC8A5B", // 心を灯すカッパーオレンジ
    forestLight: "#4A8B71", // 若草のヒーリンググリーン
    forestMedium: "#2A6247", // 頼りがいのある中深緑
    forestDark: "#153325", // 安眠をうながす静かな夜の森色
    fontClass: "font-sans",
    fontLabel: "スタンダード丸ゴシック系",
    cardRadius: "rounded-3xl",
    shadowStyle: "shadow-lg shadow-forest-dark/5"
  },
  {
    id: "hidamari-cafe",
    name: "② ひだまりカフェの午後",
    jpConcept: "心がポカポカ温まるテラコッタ",
    tagline: "アパシー（無気力）や意欲低下をやさしく刺激する活動回復カラー",
    psychology: "カフェラテのようなベージュと陽だまりオレンジの組み合わせは、血流や代謝を良くする温熱効果を感じさせます。他者に閉ざしがちな心を開き、食欲や外出意欲を高めるセラピー効果が期待できるぬくもりカラーです。",
    targetGroup: "うつ傾向・アパシー（無気力）・お部屋に引きこもりがちな方向け",
    cream: "#FCFAF7", // ぬくもりラテホワイト
    sand: "#F5ECE3", // クッキーの焼き色
    peach: "#FFEFE5", // 完熟アプリコットピーチ
    orange: "#FF7322", // はつらつ太陽オレンジ
    forestLight: "#A16F1D", // 落ち着いた秋の麦穂金
    forestMedium: "#9E643B", // 親しみ深いキャラメルブラウン
    forestDark: "#4D2E1C", // 包容力のある深煎り珈琲
    fontClass: "font-sans",
    fontLabel: "フレンドリー和風ポップ",
    cardRadius: "rounded-[2rem]",
    shadowStyle: "shadow-md shadow-amber-900/5"
  },
  {
    id: "sakura-terrace",
    name: "③ さくらテラスの春風",
    jpConcept: "細やかな愛と寄り添い",
    tagline: "トラウマや心の傷をあたたかく包み込み、自己肯定感を育むガーリーピンク",
    psychology: "彩度を落としたくすみダスティピンク（ローズ）は、守られている優しさと母性を感じさせ、オキシトシン（愛のホルモン）の分泌を活性化します。女性患者様やデリケートなトラウマをお抱えの方に緊張を解く最高の色です。",
    targetGroup: "PTSD・DVトラウマ・女性特有のお悩みをケアしたい方向け",
    cream: "#FAF7F7", // もちもち桜ホワイト
    sand: "#EADBDC", // さくらの古木グレーピンク
    peach: "#FFF0F2", // ほのかに色づく桃ミルク
    orange: "#E25A70", // 優しい愛のハートチェリー
    forestLight: "#F472B6", // 可憐なつつじピンク
    forestMedium: "#A33E53", // 知的な深赤カシス
    forestDark: "#3E1821", // 落ち着きを与えるあずき色
    fontClass: "font-serif",
    fontLabel: "繊細な明朝体（情緒・信頼）",
    cardRadius: "rounded-2xl",
    shadowStyle: "shadow-xl shadow-rose-950/5"
  },
  {
    id: "olive-wood",
    name: "④ オリーブの癒やし木陰",
    jpConcept: "知性と調和を約束するオリーブ",
    tagline: "感情の乱れや双極性の波をサポータティブに受け止める大人カラー",
    psychology: "アースカラーであるオリーブグリーンは『調和と中立』を表します。脳への視覚刺激が最も少ない静かな色彩で、感情の激しい高まり（躁状態）や激しい落ち込み（鬱状態）を一定に保つセルフガードを支援します。",
    targetGroup: "双極性障害（躁うつ）・パニック・感情をコントロールしたい方に",
    cream: "#FCFAF6", // 高級キナリホワイト
    sand: "#ECE8DC", // オリーブの木肌
    peach: "#F4F2E9", // そよ風に揺れる若葉
    orange: "#D97706", // 黄金の実のゴールデンオリーブ
    forestLight: "#7A8B6E", // 賢者のシルバーオリーブ
    forestMedium: "#536446", // 深い対話のハーブティ
    forestDark: "#222B1C", // 静寂を重んじる深緑苔色
    fontClass: "font-sans",
    fontLabel: "モダンで美しいゴシック",
    cardRadius: "rounded-xl",
    shadowStyle: "shadow-sm border border-warm-sand/80"
  },
  {
    id: "sunny-harvest",
    name: "⑤ 黄金（こがね）色のともしび",
    jpConcept: "未来をポジティブに照らす光",
    tagline: "認知バイアス（思考の偏り）を和らげ、視野を広く保つゴールドイエロー",
    psychology: "イエローは脳の左半球を刺激し、論理的思考やポジティブなひらめきをもたらします。不安で凝り固まった思考に『明るい出口がある』という認知を無意識に促し、前向きな一歩を強力に支える希望の花びらの色です。",
    targetGroup: "思考がネガティブにループしがち・一歩前に進みたい元気向け",
    cream: "#FCFBF3", // はちみつミルク
    sand: "#F1ECD8", // お日様に干した小麦わら
    peach: "#FEF9E6", // 明るい朝霧イエロー
    orange: "#D97706", // 実りのシトラスアンバー
    forestLight: "#D99B26", // 大地のゴールド
    forestMedium: "#85540E", // 信頼を築く枯木茶
    forestDark: "#3A2109", // 深い根のあるローストビーンズ
    fontClass: "font-sans",
    fontLabel: "クラシック太ゴシック",
    cardRadius: "rounded-3xl",
    shadowStyle: "shadow-lg shadow-amber-950/5"
  },
  {
    id: "lavender-rest",
    name: "⑥ ラベンダーの静かな夜明け",
    jpConcept: "脳疲労と不眠を忘れる空間",
    tagline: "過覚醒（脳の興奮）を静め、深いリラックスを促すアロマバイオレット",
    psychology: "ラベンダーはリラックス脳波であるα波を誘発することが医学的に知られています。思考が忙しすぎる統合失調症や脅迫性不安に対し、脳のオーバーヒートを防ぎ、心地よく眠るための安全なサンクチュアリを提供します。",
    targetGroup: "統合失調症の幻聴幻覚・強迫観念・深刻な不眠オーバーワークに",
    cream: "#F9F8FC", // ラベンダーホワイト
    sand: "#EDEBF4", // 静寂のアロマクレイ
    peach: "#F4EBFA", // 夢見るライラックフラワー
    orange: "#BE185D", // 夜明けのプラムローズ
    forestLight: "#9333EA", // 癒やしのインディゴバイオレット
    forestMedium: "#6B21A8", // 高貴な安眠エッセンス
    forestDark: "#1E112C", // 悪い夢を追い払う夜明け前の藍暗色
    fontClass: "font-sans",
    fontLabel: "スタイリッシュ・スリープ",
    cardRadius: "rounded-2xl",
    shadowStyle: "shadow-2xl shadow-purple-950/2"
  },
  {
    id: "cozy-cocoa",
    name: "⑦ 大地のココアベージュ",
    jpConcept: "大地のようにブレない絶対的包容力",
    tagline: "愛着不安や家族の孤立に働きかけ、どっしりとした所属感を与える土色",
    psychology: "ブラウン（茶色）は最も『家庭的・心理的基盤』を安定させる色です。幼少期の愛着問題や、家族の慢性的な疲弊感に対し、動じない頑丈な土のように包み込み、日々の規則正しい豊かな衣食住を取り戻す手助けをします。",
    targetGroup: "発達障害（ASD/ADHD）・家族ケアの慢性疲弊・生活習慣を正したい方",
    cream: "#FAF6F2", // マシュマロキナリ
    sand: "#EFE3D5", // ぬくもり満ちる和み土
    peach: "#FFF1E2", // とろけるホットココア
    orange: "#BA4C2D", // 大地を潤すテラコッタ
    forestLight: "#8C624E", // 頑丈なウォルナット
    forestMedium: "#6E473B", // おだやか大樹の幹
    forestDark: "#331D17", // 親身に伴走するショコラ
    fontClass: "font-sans",
    fontLabel: "絵本のようなやさしいゴシック",
    cardRadius: "rounded-3xl",
    shadowStyle: "shadow-md shadow-amber-950/10"
  },
  {
    id: "sky-breeze",
    name: "⑧ そよ風のスカイブルー",
    jpConcept: "澄み切った思考とクリーンな呼吸",
    tagline: "抑うつ・心身症・希死念慮のモヤを吹き去る、クリーンで明晰な知性",
    psychology: "ライトブルーは心拍数を落とし、深く爽快な呼吸を喚起します。また、暗く澱んだ脳内のマイナス思考をクリアにし、名古屋市守山区の広い青空を思い浮かべるような爽快感で、お部屋の空気を優しく入れ替えます。",
    targetGroup: "パニック障害・過呼吸・気分が重く暗くなりやすい方に",
    cream: "#F7F9FB", // クリスタルブルーホワイト
    sand: "#E6ECEF", // せせらぎの小石色
    peach: "#EFF6FF", // 晴れ渡るライトブルー
    orange: "#E2536A", // 太陽を思わせるアネモネ
    forestLight: "#0284C7", // 知性あふれるサファイア
    forestMedium: "#0369A1", // 爽快なスカイブルー
    forestDark: "#112433", // 深い信頼と安全を誓う深海ネイビー
    fontClass: "font-sans",
    fontLabel: "清潔でクリーンな知的ゴシック",
    cardRadius: "rounded-xl",
    shadowStyle: "shadow-md shadow-sky-950/2"
  },
  {
    id: "mint-mimosa",
    name: "⑨ ミモザとハーブティー",
    jpConcept: "心やすらぐ最先端テイスト",
    tagline: "地域介護ハブとの協調を喜ぶ、センス良く爽やか＆クリーンなハーブグリーン",
    psychology: "ミントティールとミモザイエローの調和は、医療ステーションとしての清潔感に加え、親しみやすい高感度を最大化。ケアマネジャーやご家族が紹介したくなる、瑞々しさと頼もしさを高次元で両立します。",
    targetGroup: "ケアマネや相談支援専門員に好印象を与えたい・明るく清潔な看護に",
    cream: "#F8FAF8", // フレッシュハーブ水
    sand: "#EBF2EE", // 若すりおろしのハーブ緑
    peach: "#F1FAF6", // 優しいローズマリー
    orange: "#F59E0B", // 喜びきらめくミモザゴールド
    forestLight: "#0FA28F", // すがすがしいターコイズ葉緑
    forestMedium: "#0F766E", // 知的なティールグリーン
    forestDark: "#083B38", // 揺るぎない熱帯雨林うるおいグリーン
    fontClass: "font-sans",
    fontLabel: "洗練されたトレンディゴシック",
    cardRadius: "rounded-[2.2rem]",
    shadowStyle: "shadow-lg shadow-teal-950/5"
  },
  {
    id: "mellow-twilight",
    name: "⑩ まどろみの夕和み（ゆうなごみ）",
    jpConcept: "一日の終わりに安らぐトワイライト",
    tagline: "緊張に満ちた活動モードから、ゆったり和らぐ睡眠へと導く夕焼けグラデ",
    psychology: "パープルピンクにアプリコットを滲ませた極上の黄昏カラー。緊張交感神経を一日の終わりにリフレッシュさせ、自律神経の働きをゆるやかに『夜の安息・守護ふくろう』へと移行させる、優雅で温かいトワイライトヨガの世界です。",
    targetGroup: "夕方に不安が一気に強まる（夕暮れ症候群）・更年期障害の自律神経症状に",
    cream: "#FCF6F6", // まどろみのミルクティ
    sand: "#EADBDD", // 暮れゆく夕暮れダスト
    peach: "#FFF2F2", // ふんわり夕映え雲ピンク
    orange: "#C92DEE", // 幻想的な夕焼けバイオレット
    forestLight: "#B05B73", // やわらかな夕顔かすみ
    forestMedium: "#88243C", // 母性のワインバーガンディ
    forestDark: "#2F1118", // 安眠をもたらすナイトプラム
    fontClass: "font-serif",
    fontLabel: "ノスタルジック和風モダン明朝",
    cardRadius: "rounded-3xl",
    shadowStyle: "shadow-xl shadow-pink-950/5"
  }
];

interface DesignCustomizerProps {
  currentTheme: VisualTheme;
  onThemeChange: (theme: VisualTheme) => void;
  radiusStyle: string;
  onRadiusStyleChange: (style: string) => void;
  fontStyle: string;
  onFontStyleChange: (style: string) => void;
}

export default function DesignCustomizer({
  currentTheme,
  onThemeChange,
  radiusStyle,
  onRadiusStyleChange,
  fontStyle,
  onFontStyleChange
}: DesignCustomizerProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [showConfig, setShowConfig] = useState(false);
  const [copied, setCopied] = useState(false);

  // Handle color token configuration copying
  const copyColorTokens = () => {
    const configText = `【コーポレートカラーFigma用トークン設計】
デザイン案名: ${currentTheme.name} (${currentTheme.jpConcept})
心理効果背景: ${currentTheme.psychology}
推奨患者層: ${currentTheme.targetGroup}

[Color Palette Hex Values]
■ 地メイン背景(暖クリーム): ${currentTheme.cream}
■ 境界・カード帯(サンド灰): ${currentTheme.sand}
■ バッジ・アクセント後景(薄桃桃): ${currentTheme.peach}
■ 主役シンボル・暖色(ふくろうオレンジ): ${currentTheme.orange}
■ 看護師シンボル・緑弱(森林ライト): ${currentTheme.forestLight}
■ 主力メニュー・緑中(森林ミディアム): ${currentTheme.forestMedium}
■ フッター・最強黒(森林ダーク): ${currentTheme.forestDark}

[デザイン形状パラメータ]
■ 角丸半径(Border-Radius): ${radiusStyle}
■ 適用フォント(Font-Family): ${fontStyle === "font-sans" ? "Noto Sans JP / Gothic" : "Noto Serif JP / Mincho"}
■ カラーグラデーション: ${currentTheme.orange} から ${currentTheme.forestMedium} への温もり遷移`;

    navigator.clipboard.writeText(configText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div className="fixed top-24 right-4 z-50 transition-all duration-300 pointer-events-none max-w-[400px] w-full px-2" id="design-customizer-root">
      {/* Absolute Toggle Trigger on Desktop (A cozy owl widget) */}
      <div className="flex justify-end pointer-events-auto">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center gap-2 px-4 py-3 rounded-full shadow-2xl border transition-all cursor-pointer ${
            isOpen
              ? "bg-forest-dark text-white border-forest-light/60"
              : "bg-white text-forest-dark border-warm-sand md:translate-x-0"
          }`}
          title="10つの温かみデザイン案を切り替え"
          id="customizer-toggle-btn"
        >
          <Palette className={`w-5 h-5 ${isOpen ? "animate-spin-slow text-soft-orange" : "text-forest-medium"}`} />
          <span className="text-xs font-bold leading-none tracking-wide">
            {isOpen ? "プレビューを閉じる" : "10種のデザイン案を切り替え"}
          </span>
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-soft-orange opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-soft-orange"></span>
          </span>
        </button>
      </div>

      {isOpen && (
        <div className="mt-2.5 bg-white/95 backdrop-blur-md rounded-2xl border border-warm-sand shadow-2xl p-4 pointer-events-auto flex flex-col gap-4 animate-in fade-in slide-in-from-right-4 duration-300 max-h-[80vh] overflow-y-auto">
          {/* Header Title */}
          <div className="flex items-center justify-between border-b border-gray-100 pb-2.5">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-soft-orange fill-soft-orange/25" />
              <div>
                <h4 className="text-sm font-black text-forest-dark leading-none">
                  10種のデザイン案スタジオ
                </h4>
                <p className="text-[10px] text-gray-400 font-bold mt-1">
                  医療サイトらしい温かみ豊かな10パターン
                </p>
              </div>
            </div>
          </div>

          {/* Quick instructions */}
          <div className="p-2.5 bg-warm-cream/50 rounded-xl border border-dashed border-warm-sand text-[11px] text-gray-600 leading-normal">
            名古屋市守山区の訪問看護ステーション「ふくろう守山」用に作成した<strong>10種類の温もりコンセプト案</strong>です。クリックするだけでWEBサイト全体の色・雰囲気・角丸が連動して変化します。
          </div>

          {/* 10 Theme Dropdown Select or List */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-extrabold text-forest-medium flex items-center gap-1.5 uppercase tracking-wider">
              <Palette className="w-3.5 h-3.5 text-soft-orange" />
              クリックしてデザイン案を切り替え ({currentTheme.name.split(" ")[0]})
            </label>
            
            {/* Scrollable grid for selecting themes */}
            <div className="grid grid-cols-2 gap-1.5" id="theme-selector-grid">
              {themes.map((t) => {
                const isActive = t.id === currentTheme.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => {
                      onThemeChange(t);
                      onFontStyleChange(t.fontClass);
                      onRadiusStyleChange(t.cardRadius);
                    }}
                    className={`text-left p-2 rounded-xl border text-[11px] font-bold transition-all relative flex flex-col justify-between cursor-pointer ${
                      isActive
                        ? "bg-forest-dark text-white border-forest-medium shadow-sm ring-1 ring-forest-light"
                        : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-warm-peach/30 hover:border-warm-sand"
                    }`}
                    id={`theme-btn-${t.id}`}
                  >
                    <span className="truncate leading-none block mb-1">{t.name}</span>
                    <span className={`text-[9px] ${isActive ? "text-soft-orange/90" : "text-gray-400"} truncate block font-medium`}>
                      {t.jpConcept}
                    </span>
                    
                    {/* Visual Color Dots */}
                    <div className="flex gap-1 mt-1.5">
                      <span className="w-2.5 h-2.5 rounded-full border border-gray-300" style={{ backgroundColor: t.cream }} />
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: t.orange }} />
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: t.forestMedium }} />
                    </div>

                    {isActive && (
                      <span className="absolute top-1 right-1 bg-soft-orange text-white p-0.5 rounded-full">
                        <Check className="w-2 h-2 stroke-[3]" />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Theme Spec Card */}
          <div className="bg-gradient-to-br from-warm-peach/40 to-white border border-warm-sand/80 rounded-xl p-3.5 relative overflow-hidden" id="active-theme-spec">
            <div className="absolute right-[-10px] bottom-[-10px] w-14 h-14 bg-soft-orange/10 rounded-full blur-xl" />
            
            <div className="flex items-center gap-1.5 text-xs font-bold text-soft-orange uppercase tracking-wider mb-1">
              <Info className="w-4 h-4" />
              デザイン提案の色彩心理と解説
            </div>
            
            <h5 className="text-sm font-bold text-forest-dark font-serif tracking-tight">
              {currentTheme.name}
              <span className="block text-xs text-forest-medium font-normal font-sans py-0.5">
                〜 {currentTheme.jpConcept} 〜
              </span>
            </h5>

            <p className="text-[11px] text-gray-400 mt-1.5 font-bold leading-tight">
              【対象の心理効果】{currentTheme.tagline}
            </p>

            <p className="text-[11px] text-gray-600 mt-2 leading-relaxed">
              {currentTheme.psychology}
            </p>

            <div className="bg-white/80 border border-warm-sand rounded-lg p-2.5 mt-3 space-y-1 text-[10px] text-gray-500">
              <span className="font-bold text-forest-dark block mb-1">配色パレット詳細コード:</span>
              <div className="grid grid-cols-2 gap-1.5">
                <div className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded-md border" style={{ backgroundColor: currentTheme.cream }} />
                  <span>メイン背景: {currentTheme.cream}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded-md" style={{ backgroundColor: currentTheme.orange }} />
                  <span>イメージ橙: {currentTheme.orange}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded-md" style={{ backgroundColor: currentTheme.forestMedium }} />
                  <span>ふくろう緑: {currentTheme.forestMedium}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded-md" style={{ backgroundColor: currentTheme.forestDark }} />
                  <span>安心の夜黒: {currentTheme.forestDark}</span>
                </div>
              </div>
            </div>

            <div className="mt-2.5 p-2 bg-emerald-50 text-emerald-800 rounded-lg text-[10px] leading-relaxed border border-emerald-100 flex gap-1.5 items-start">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong>お勧め患者様:</strong> {currentTheme.targetGroup}
              </div>
            </div>
          </div>

          {/* Typography and Border Adjusters */}
          <div className="border-t border-gray-100 pt-3 space-y-2.5">
            <div className="flex justify-between gap-3 text-[11px]">
              <div className="w-1/2 space-y-1">
                <label className="font-extrabold text-[#79808a] flex items-center gap-1">
                  <Settings2 className="w-3 h-3" />
                  フォント（書体）
                </label>
                <select
                  value={fontStyle}
                  onChange={(e) => onFontStyleChange(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg p-1.5 bg-gray-50 text-[11px] font-bold focus:outline-none focus:border-forest-light cursor-pointer"
                  id="font-select-field"
                >
                  <option value="font-sans">丸ゴシック（親しみ）</option>
                  <option value="font-serif">日本語明朝（信頼・上質）</option>
                </select>
              </div>

              <div className="w-1/2 space-y-1">
                <label className="font-extrabold text-[#79808a] flex items-center gap-1">
                  <Layers className="w-3 h-3" />
                  柔らかさ（角丸）
                </label>
                <select
                  value={radiusStyle}
                  onChange={(e) => onRadiusStyleChange(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg p-1.5 bg-gray-50 text-[11px] font-bold focus:outline-none focus:border-forest-light cursor-pointer"
                  id="radius-select-field"
                >
                  <option value="rounded-3xl">丸っこい（安心感大）</option>
                  <option value="rounded-2xl">標準（洗練カワイイ）</option>
                  <option value="rounded-xl">クリーン（信頼感・医療）</option>
                  <option value="rounded-none">シャープ（硬調・真面目）</option>
                </select>
              </div>
            </div>
          </div>

          {/* Copy tokens helper */}
          <div className="flex gap-2">
            <button
              onClick={copyColorTokens}
              className={`w-full py-2.5 rounded-xl border font-bold text-xs flex justify-center items-center gap-2 transition-all cursor-pointer ${
                copied
                  ? "bg-emerald-600 text-white border-emerald-600"
                  : "bg-white text-forest-medium border-forest-medium/30 hover:bg-forest-light/5"
              }`}
              id="copy-tokens-btn"
            >
              <Copy className="w-3.5 h-3.5" />
              {copied ? "カラー設定をFigma用にコピー済！" : "カラー情報・設計をコピー"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
