import React, { useState } from "react";
import emailjs from "@emailjs/browser";

import {
  FiArrowLeft,
  FiCheckCircle,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
  FiUser,
} from "react-icons/fi";

const SERVICE_ID = "service_263mspt";
const TEMPLATE_ID = "template_s01hgba";
const PUBLIC_KEY = "aJTEAmM_vCrvGIz45";

export default function Contactus() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSuccess("");
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.phone.trim() ||
      !formData.message.trim()
    ) {
      setError("من فضلك املأ الاسم ورقم الهاتف وتفاصيل المشروع.");
      return;
    }

    setLoading(true);
    setSuccess("");
    setError("");

    const templateParams = {
      from_name: formData.name.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
    };

    console.log("EMAIL DATA =>", templateParams);

    try {
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        {
          publicKey: PUBLIC_KEY,
        },
      );

      console.log("EMAILJS SUCCESS =>", response);

      setSuccess(
        "تم إرسال طلبك بنجاح، وسيتواصل معك فريق Golden Coast في أقرب وقت.",
      );

      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error("EMAILJS ERROR =>", err);

      setError("حدث خطأ أثناء إرسال الطلب، برجاء المحاولة مرة أخرى.");
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      id: 1,
      icon: FiPhone,
      title: "اتصل بنا",
      value: "+20 100 9498294",
      href: "tel:+201009498294",
    },
    {
      id: 2,
      icon: FiMail,
      title: "البريد الإلكتروني",
      value: "goldencoast40@gmail.com",
      href: "mailto:goldencoast40@gmail.com",
    },
    {
      id: 3,
      icon: FiMapPin,
      title: "موقعنا",
      value: "القاهرة، مصر",
    },
  ];

  return (
    <section
      dir="rtl"
      className="relative overflow-hidden bg-[#F9F7F3] py-20 lg:py-28"
    >
      {/* Background */}
      <div className="pointer-events-none absolute -right-40 top-0 h-[450px] w-[450px] rounded-full bg-[#B37202]/5 blur-[100px]" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#B37202]/5 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-[2px] w-9 bg-[#B37202]" />

            <span className="text-sm font-bold tracking-wide text-[#B37202]">
              تواصل معنا
            </span>

            <span className="h-[2px] w-9 bg-[#B37202]" />
          </div>

          <h2 className="mb-5 text-3xl font-bold leading-tight text-[#101C2C] sm:text-4xl lg:text-[48px]">
            لديك فكرة؟
            <span className="text-[#B37202]"> دعنا نحولها إلى واقع</span>
          </h2>

          <p className="mx-auto max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            سواء كنت تخطط لمشروع جديد أو ترغب في تطوير مساحة قائمة، فريق Golden
            Coast جاهز لمساعدتك من الفكرة الأولى وحتى التنفيذ.
          </p>
        </div>

        {/* Main */}
        <div className="overflow-hidden rounded-[32px] bg-white shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            {/* Contact info */}
            <div className="relative overflow-hidden bg-[#101C2C] p-7 text-white sm:p-10 lg:p-12">
              <div className="pointer-events-none absolute -right-24 -top-24 h-[300px] w-[300px] rounded-full border border-[#B37202]/20" />

              <div className="pointer-events-none absolute -right-10 -top-10 h-[180px] w-[180px] rounded-full border border-[#B37202]/20" />

              <div className="pointer-events-none absolute -bottom-24 -left-24 h-[280px] w-[280px] rounded-full bg-[#B37202]/10 blur-[80px]" />

              <div className="relative z-10">
                <div className="mb-8">
                  <span className="mb-3 block text-xs font-bold tracking-[3px] text-[#DCA755]">
                    GOLDEN COAST
                  </span>

                  <h3 className="mb-4 text-2xl font-bold sm:text-3xl">
                    بيانات التواصل
                  </h3>

                  <p className="max-w-md text-sm leading-7 text-white/50">
                    تواصل معنا وسنكون سعداء بالإجابة على استفساراتك ومناقشة
                    تفاصيل مشروعك.
                  </p>
                </div>

                <div className="space-y-4">
                  {contactInfo.map((item) => {
                    const Icon = item.icon;

                    const content = (
                      <div className="group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.04] p-4 transition-all duration-300 hover:border-[#B37202]/40 hover:bg-white/[0.07]">
                        <div className="flex h-12 w-12 min-w-12 items-center justify-center rounded-xl bg-[#B37202]/15 text-[#DCA755] transition duration-300 group-hover:bg-[#B37202] group-hover:text-white">
                          <Icon size={19} />
                        </div>

                        <div>
                          <p className="mb-1 text-xs text-white/35">
                            {item.title}
                          </p>

                          <p
                            dir={item.id === 1 || item.id === 2 ? "ltr" : "rtl"}
                            className="text-sm font-medium text-white/80"
                          >
                            {item.value}
                          </p>
                        </div>
                      </div>
                    );

                    return item.href ? (
                      <a key={item.id} href={item.href}>
                        {content}
                      </a>
                    ) : (
                      <div key={item.id}>{content}</div>
                    );
                  })}
                </div>

                <div className="mt-10 border-r-2 border-[#B37202] pr-4">
                  <p className="text-sm leading-7 text-white/50">
                    التفاصيل الجيدة تصنع فرقًا كبيرًا، ونحن هنا لنساعدك في كل
                    خطوة.
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="p-7 sm:p-10 lg:p-12">
              <div className="mb-8">
                <div className="mb-3 flex items-center gap-3">
                  <span className="h-[2px] w-7 bg-[#B37202]" />

                  <span className="text-xs font-bold text-[#B37202]">
                    ابدأ الآن
                  </span>
                </div>

                <h3 className="mb-2 text-2xl font-bold text-[#101C2C] sm:text-3xl">
                  أخبرنا عن مشروعك
                </h3>

                <p className="text-sm leading-7 text-gray-500">
                  املأ البيانات وسيتواصل معك فريقنا في أقرب وقت.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name + phone */}
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#101C2C]">
                      الاسم *
                    </label>

                    <div className="group relative">
                      <FiUser className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition group-focus-within:text-[#B37202]" />

                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="اكتب اسمك"
                        required
                        className="h-14 w-full rounded-xl border border-gray-200 bg-[#FAFAF9] pr-12 pl-4 text-sm text-[#101C2C] outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#B37202] focus:bg-white focus:ring-4 focus:ring-[#B37202]/5"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#101C2C]">
                      رقم الهاتف *
                    </label>

                    <div className="group relative">
                      <FiPhone className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition group-focus-within:text-[#B37202]" />

                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="01xxxxxxxxx"
                        dir="rtl"
                        required
                        className="h-14 w-full rounded-xl border border-gray-200 bg-[#FAFAF9] pr-12 pl-4 text-sm text-[#101C2C] outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#B37202] focus:bg-white focus:ring-4 focus:ring-[#B37202]/5"
                      />
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#101C2C]">
                    البريد الإلكتروني
                  </label>

                  <div className="group relative">
                    <FiMail className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition group-focus-within:text-[#B37202]" />

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@email.com"
                      className="h-14 w-full rounded-xl border border-gray-200 bg-[#FAFAF9] pr-12 pl-4 text-sm text-[#101C2C] outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#B37202] focus:bg-white focus:ring-4 focus:ring-[#B37202]/5"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#101C2C]">
                    تفاصيل المشروع *
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="حدثنا عن المشروع أو الخدمة التي تحتاجها..."
                    rows="5"
                    required
                    className="w-full resize-none rounded-xl border border-gray-200 bg-[#FAFAF9] p-4 text-sm leading-7 text-[#101C2C] outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#B37202] focus:bg-white focus:ring-4 focus:ring-[#B37202]/5"
                  />
                </div>

                {/* Success */}
                {success && (
                  <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                    ✅ {success}
                  </div>
                )}

                {/* Error */}
                {error && (
                  <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                    ❌ {error}
                  </div>
                )}

                {/* Footer */}
                <div className="flex flex-col gap-5 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <FiCheckCircle className="text-[#B37202]" />

                    <span>سيتم التعامل مع بياناتك بسرية تامة</span>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="group inline-flex min-w-[170px] items-center justify-center gap-3 rounded-xl bg-[#B37202] px-7 py-4 text-sm font-bold text-white shadow-[0_12px_30px_rgba(179,114,2,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#925c00] hover:shadow-[0_18px_35px_rgba(179,114,2,0.25)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                  >
                    {loading ? (
                      "جاري الإرسال..."
                    ) : (
                      <>
                        إرسال الطلب
                        <FiSend className="transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 flex flex-col items-center justify-between gap-5 rounded-[22px] border border-[#B37202]/10 bg-[#B37202]/[0.04] px-6 py-5 sm:flex-row">
          <div>
            <p className="mb-1 font-bold text-[#101C2C]">
              تفضل التواصل بشكل مباشر؟
            </p>

            <p className="text-sm text-gray-500">
              فريق Golden Coast جاهز لمساعدتك ومناقشة تفاصيل مشروعك.
            </p>
          </div>

          <a
            href="tel:+201009498294"
            className="group inline-flex items-center gap-3 text-sm font-bold text-[#B37202]"
          >
            تحدث معنا الآن
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#B37202] text-white transition-transform duration-300 group-hover:-translate-x-1">
              <FiArrowLeft />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
