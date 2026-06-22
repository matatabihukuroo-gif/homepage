import React, { useState } from "react";
import { Mail, Phone, Calendar, Send, CheckCircle2, AlertCircle, RefreshCw, Bookmark } from "lucide-react";
import { ContactFormData } from "../types";

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    kana: "",
    relation: "家族",
    phone: "",
    email: "",
    message: "",
    preferredContact: "either"
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Field validation
  const validateForm = () => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
    if (!formData.name.trim()) newErrors.name = "お名前を入力してください";
    if (!formData.kana.trim()) newErrors.kana = "ふりがなを入力してください";
    if (!formData.phone.trim()) {
      newErrors.phone = "電話番号を入力してください";
    } else if (!/^\d[-0-9]{9,14}$/.test(formData.phone.trim())) {
      newErrors.phone = "有効な電話番号を入力してください（ハイフン可）";
    }
    if (!formData.email.trim()) {
      newErrors.email = "メールアドレスを入力してください";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "有効なメールアドレスを入力してください";
    }
    if (!formData.message.trim()) newErrors.message = "ご相談内容を入力してください";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear specific error on change
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleRadioChange = (val: 'phone' | 'email' | 'either') => {
    setFormData(prev => ({ ...prev, preferredContact: val }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate real API dispatch latency to feel polished and premium
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      kana: "",
      relation: "家族",
      phone: "",
      email: "",
      message: "",
      preferredContact: "either"
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FFFDFB] scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-3 py-1 bg-warm-peach/80 text-soft-orange text-xs font-bold rounded mb-3 tracking-widest uppercase border border-warm-sand">
            CONTACT & INQUIRY
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold font-serif text-forest-dark tracking-tight">
            無料オンライン相談・<span className="text-soft-orange">お問い合わせ窓口</span>
          </h3>
          <div className="w-12 h-1 bg-soft-orange mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 text-sm mt-4 leading-relaxed font-sans">
            精神疾患やご自宅での生活保護、退院調整、デイケア検討、自立支援申請の疑問など、
            どんな些細なことでもお答えします。秘密は絶対厳守いたします。
          </p>
        </div>

        {/* Rapid telephone consultation notice */}
        <div className="mb-10 bg-forest-light/5 border border-forest-light/20 rounded-2xl p-5 text-left flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex gap-3 items-center">
            <span className="w-10 h-10 rounded-full bg-forest-light/10 text-forest-medium flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5" />
            </span>
            <div>
              <span className="text-xs text-forest-medium font-bold block">お急ぎ・当日中のご相談ならお電話を</span>
              <span className="text-sm font-bold text-gray-800">
                ステーション: <a href="tel:0527687910" className="text-forest-light font-extrabold font-serif underline hover:text-forest-medium">052-768-7910</a>
              </span>
            </div>
          </div>
          <div className="text-xs font-medium text-gray-400 font-sans md:text-right border-t md:border-t-0 border-warm-sand/50 pt-2.5 md:pt-0 w-full md:w-auto">
            (受付時間: 平日 9:00〜18:00 / 代表携帯: 24時間いつでも可能)
          </div>
        </div>

        {/* Main interactive area */}
        <div className="bg-white border-2 border-warm-sand rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
          
          {isSubmitted ? (
            /* Success confirmation panel */
            <div className="py-8 text-center flex flex-col items-center animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center mb-6 shadow-inner">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <h4 className="text-xl sm:text-2xl font-bold font-serif text-forest-dark mb-3">
                お問い合わせを受け付けました
              </h4>
              <p className="text-gray-500 text-sm max-w-xl leading-relaxed mb-8">
                ご送信いただき、ありがとうございます。ご入力いただきました内容は株式会社またたびの管理者（佐々木）および代表（石崎）に安全に送信されました。
                通常<strong>12〜24時間以内</strong>に、ご希望のご連絡方法にて必ずご連絡を差し上げます。
              </p>

              {/* Submitted summaries */}
              <div className="bg-gray-50 rounded-2xl p-5 text-left w-full max-w-md border border-gray-150 mb-8 space-y-2.5 text-xs sm:text-sm">
                <div className="flex justify-between border-b pb-2">
                  <span className="font-bold text-gray-500">お名前</span>
                  <span className="font-semibold text-gray-800">{formData.name} 様</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-bold text-gray-500">ご関係</span>
                  <span className="font-semibold text-gray-800">{formData.relation}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-bold text-gray-500">希望連絡方法</span>
                  <span className="font-semibold text-gray-800">
                    {formData.preferredContact === 'phone' ? 'お電話のみ' : formData.preferredContact === 'email' ? 'メールのみ' : 'お電話・メールどちらでも'}
                  </span>
                </div>
                <div className="pt-2 text-gray-500">
                  <span className="font-bold text-gray-500 block mb-1">メッセージ内容</span>
                  <p className="text-gray-700 bg-white p-3 rounded-lg border leading-relaxed text-xs max-h-24 overflow-y-auto">
                    {formData.message}
                  </p>
                </div>
              </div>

              <button
                onClick={resetForm}
                className="inline-flex items-center gap-2 bg-forest-medium hover:bg-forest-dark text-white font-bold py-3.5 px-8 rounded-xl text-sm transition-all shadow-md cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" />
                新しく別の問い合わせをする
              </button>
            </div>
          ) : (
            /* Traditional Inputs form */
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              
              {/* Name & Kana fields inside responsive row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-forest-dark mb-1.5 flex items-center gap-1.5 select-none">
                    お名前 <span className="text-[10px] bg-soft-orange text-white py-0.5 px-1.5 rounded font-bold">必須</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="例: 佐藤 太郎"
                    className={`w-full bg-white border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-forest-light/40 transition-all ${
                      errors.name ? "border-red-500 focus:ring-red-500/20" : "border-warm-sand"
                    }`}
                  />
                  {errors.name && (
                    <span className="text-xs text-red-500 flex items-center gap-1 mt-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-bold text-forest-dark mb-1.5 flex items-center gap-1.5 select-none">
                    ふりがな <span className="text-[10px] bg-soft-orange text-white py-0.5 px-1.5 rounded font-bold">必須</span>
                  </label>
                  <input
                    type="text"
                    name="kana"
                    value={formData.kana}
                    onChange={handleChange}
                    placeholder="例: さとう たろう"
                    className={`w-full bg-white border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-forest-light/40 transition-all ${
                      errors.kana ? "border-red-500 focus:ring-red-500/20" : "border-warm-sand"
                    }`}
                  />
                  {errors.kana && (
                    <span className="text-xs text-red-500 flex items-center gap-1 mt-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.kana}
                    </span>
                  )}
                </div>
              </div>

              {/* Relationship dropdown */}
              <div>
                <label className="block text-xs sm:text-sm font-bold text-forest-dark mb-1.5 flex items-center gap-1.5 select-none">
                  ご連絡者様とのご関係 <span className="text-[10px] bg-soft-orange text-white py-0.5 px-1.5 rounded font-bold">必須</span>
                </label>
                <div className="relative">
                  <select
                    name="relation"
                    value={formData.relation}
                    onChange={handleChange}
                    className="w-full bg-white border border-warm-sand rounded-xl px-4 py-3 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-forest-light/40 transition-all font-medium text-gray-700"
                  >
                    <option value="本人局">ご本人（利用者様）</option>
                    <option value="家族">ご家族様・親族様</option>
                    <option value="ケアマネジャー">担当ケアマネジャー様</option>
                    <option value="医療機関">病院・クリニック（MWS・ナース・医師）様</option>
                    <option value="相談支援員">相談支援専門員様</option>
                    <option value="その他">その他（行政機関など）</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Contacts row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-forest-dark mb-1.5 flex items-center gap-1.5 select-none">
                    電話番号 <span className="text-[10px] bg-soft-orange text-white py-0.5 px-1.5 rounded font-bold">必須</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="例: 052-768-7910"
                    className={`w-full bg-white border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-forest-light/40 transition-all ${
                      errors.phone ? "border-red-500 focus:ring-red-500/20" : "border-warm-sand"
                    }`}
                  />
                  {errors.phone && (
                    <span className="text-xs text-red-500 flex items-center gap-1 mt-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-bold text-forest-dark mb-1.5 flex items-center gap-1.5 select-none">
                    メールアドレス <span className="text-[10px] bg-soft-orange text-white py-0.5 px-1.5 rounded font-bold">必須</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="例: support@example.com"
                    className={`w-full bg-white border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-forest-light/40 transition-all ${
                      errors.email ? "border-red-500 focus:ring-red-500/20" : "border-warm-sand"
                    }`}
                  />
                  {errors.email && (
                    <span className="text-xs text-red-500 flex items-center gap-1 mt-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Preferred method */}
              <div>
                <label className="block text-xs sm:text-sm font-bold text-forest-dark mb-2.5 select-none">
                  ご希望の連絡方法
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <div
                    onClick={() => handleRadioChange("either")}
                    className={`border rounded-xl p-3 text-center cursor-pointer text-xs sm:text-sm font-semibold transition-all ${
                      formData.preferredContact === 'either'
                        ? "border-forest-medium bg-forest-light/5 text-forest-medium"
                        : "border-warm-sand text-gray-500 bg-white hover:bg-gray-50"
                    }`}
                  >
                    どちらでも可
                  </div>
                  <div
                    onClick={() => handleRadioChange("phone")}
                    className={`border rounded-xl p-3 text-center cursor-pointer text-xs sm:text-sm font-semibold transition-all ${
                      formData.preferredContact === 'phone'
                        ? "border-forest-medium bg-forest-light/5 text-forest-medium"
                        : "border-warm-sand text-gray-500 bg-white hover:bg-gray-50"
                    }`}
                  >
                    お電話
                  </div>
                  <div
                    onClick={() => handleRadioChange("email")}
                    className={`border rounded-xl p-3 text-center cursor-pointer text-xs sm:text-sm font-semibold transition-all ${
                      formData.preferredContact === 'email'
                        ? "border-forest-medium bg-forest-light/5 text-forest-medium"
                        : "border-warm-sand text-gray-500 bg-white hover:bg-gray-50"
                    }`}
                  >
                    メール
                  </div>
                </div>
              </div>

              {/* Message field */}
              <div>
                <label className="block text-xs sm:text-sm font-bold text-forest-dark mb-1.5 flex items-center gap-1.5 select-none">
                  ご相談内容・メッセージ <span className="text-[10px] bg-soft-orange text-white py-0.5 px-1.5 rounded font-bold">必須</span>
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="例: 退院を予定しているのですが、不眠や薬の管理が不安です。利用までの流れ詳細をお聞きできますか？"
                  className={`w-full bg-white border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-forest-light/40 transition-all ${
                    errors.message ? "border-red-500 focus:ring-red-500/20" : "border-warm-sand"
                  }`}
                />
                {errors.message && (
                  <span className="text-xs text-red-500 flex items-center gap-1 mt-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
                  </span>
                )}
              </div>

              {/* Secure statement */}
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex items-start gap-2.5 text-[11px] sm:text-xs text-gray-400">
                <Bookmark className="w-4 h-4 shrink-0 text-gray-400 mt-0.5" />
                <p className="leading-relaxed">
                  ※お送りいただきました内容、ならびにご本人様やご家族様の個人情報は「個人情報保護法」その他法令に基づき、株式会社またたびが社内にて安全に厳格に一元管理いたします。医師や医療カンファレンス以外の第三者に漏洩することはございません。
                </p>
              </div>

              {/* Submit CTA */}
              <div className="text-center pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 bg-soft-orange hover:bg-opacity-95 text-white font-bold py-4 px-10 rounded-xl text-sm sm:text-base tracking-wider transition-all disabled:opacity-50 w-full sm:w-auto shadow-md shadow-soft-orange/15 hover:scale-[1.01] cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      送信中...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      無料相談メールを送る
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
