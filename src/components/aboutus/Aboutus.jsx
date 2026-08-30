import { useState } from "react";
import {
  FiAward,
  FiCheckCircle,
  FiFileText,
  FiHome,
  FiMaximize2,
  FiShield,
  FiX,
} from "react-icons/fi";

import img from "../../assets/Aboutus.png";

import taxRegistration from "../../assets/1.jpeg";
import taxCard from "../../assets/2.jpeg";
import commercialRegister from "../../assets/3.jpeg";
import commercialRegister2 from "../../assets/4.jpeg";
import commercialRegister3 from "../../assets/5.jpeg";

export default function Aboutus() {
  const [selectedDocument, setSelectedDocument] = useState(null);

  const documents = [
    {
      id: 4,
      title: "السجل التجاري",
      subtitle: "Commercial Register",
      image: commercialRegister2,
      icon: FiCheckCircle,
    },
    {
      id: 5,
      title: "السجل التجاري",
      subtitle: "Commercial Register",
      image: commercialRegister3,
      icon: FiCheckCircle,
    },
    {
      id: 1,
      title: "شهادة التسجيل الضريبي",
      subtitle: "Tax Registration Certificate",
      image: taxRegistration,
      icon: FiFileText,
    },
    {
      id: 2,
      title: "البطاقة الضريبية",
      subtitle: "Tax Card",
      image: taxCard,
      icon: FiShield,
    },
    {
      id: 3,
      title: "السجل التجاري",
      subtitle: "Commercial Register",
      image: commercialRegister,
      icon: FiCheckCircle,
    },
  ];

  return (
    <>
      <section dir="rtl" className="relative overflow-hidden bg-[#F9F7F3]">
        {/* ======================================================
            ABOUT US
        ====================================================== */}

        <div className="relative py-20 lg:py-28">
          {/* Decorative Background */}
          <div className="pointer-events-none absolute -right-32 top-0 h-[420px] w-[420px] rounded-full bg-[#B37202]/5 blur-3xl" />

          <div className="pointer-events-none absolute -left-32 bottom-0 h-[350px] w-[350px] rounded-full bg-[#B37202]/5 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
              {/* ================= IMAGE SIDE ================= */}

              <div className="relative order-2 lg:order-1">
                {/* Gold Background */}
                <div className="absolute -bottom-5 -left-5 h-[78%] w-[68%] rounded-[32px] bg-[#B37202]/15" />

                {/* Decorative Border */}
                <div className="absolute -bottom-8 right-8 h-[200px] w-[200px] rounded-[30px] border border-[#B37202]/30" />

                {/* Main Image */}
                <div className="group relative z-10 overflow-hidden rounded-[32px] shadow-[0_25px_70px_rgba(16,28,44,0.15)]">
                  <img
                    src={img}
                    alt="Golden Coast Interior"
                    className="h-[520px] w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1927]/75 via-[#0D1927]/5 to-transparent" />

                  {/* Bottom Content */}
                  <div className="absolute bottom-0 right-0 p-7 sm:p-9">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="h-[2px] w-8 bg-[#DCA755]" />

                      <p className="text-xs font-semibold tracking-[3px] text-white/70">
                        GOLDEN COAST
                      </p>
                    </div>

                    <h3 className="max-w-sm text-2xl font-bold leading-relaxed text-white sm:text-3xl">
                      نصنع مساحات تجمع بين
                      <span className="text-[#DCA755]"> الجمال والراحة</span>
                    </h3>
                  </div>
                </div>

                {/* Experience Card */}
                <div className="absolute -right-3 top-10 z-20 rounded-2xl border border-white/70 bg-white/95 px-5 py-4 shadow-xl backdrop-blur-md sm:-right-7 sm:px-6 sm:py-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#B37202]/10">
                      <FiAward className="text-xl text-[#B37202]" />
                    </div>

                    <div>
                      <h4 className="text-2xl font-bold text-[#101C2C]">+10</h4>

                      <p className="text-xs text-gray-500 sm:text-sm">
                        سنوات من الخبرة
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ================= CONTENT SIDE ================= */}

              <div className="order-1 lg:order-2">
                {/* Small Heading */}
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-[2px] w-10 bg-[#B37202]" />

                  <span className="text-sm font-bold tracking-wide text-[#B37202]">
                    مــن نــحــن
                  </span>
                </div>

                {/* Heading */}
                <h2 className="mb-6 text-3xl font-bold leading-[1.5] text-[#101C2C] sm:text-4xl lg:text-[46px]">
                  نصنع مساحات
                  <br />
                  <span className="relative text-[#B37202]">
                    تحكي قصتك
                    <span className="absolute -bottom-2 right-0 h-[5px] w-[55%] rounded-full bg-[#B37202]/20" />
                  </span>
                </h2>

                {/* Description */}
                <p className="mb-5 max-w-xl text-base leading-8 text-gray-600">
                  في{" "}
                  <span className="font-bold text-[#101C2C]">Golden Coast</span>{" "}
                  نؤمن أن التصميم المميز يبدأ بفهم احتياجات العميل، لذلك نصنع
                  مساحات تجمع بين الأناقة، العملية والتفاصيل المدروسة لتقديم
                  تجربة متكاملة تعكس رؤيتك.
                </p>

                <p className="mb-9 max-w-xl text-base leading-8 text-gray-500">
                  من الفكرة الأولى وحتى التنفيذ، نعمل على تحويل كل مساحة إلى
                  مكان استثنائي يحمل طابعًا خاصًا ويحقق أعلى معايير الجودة.
                </p>

                {/* Features */}
                <div className="grid gap-4 sm:grid-cols-2">
                  {/* Feature */}
                  <div className="group flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#B37202]/30 hover:shadow-lg">
                    <div className="flex h-11 min-w-11 items-center justify-center rounded-xl bg-[#B37202]/10 text-[#B37202] transition duration-300 group-hover:bg-[#B37202] group-hover:text-white">
                      <FiHome size={20} />
                    </div>

                    <div>
                      <h3 className="mb-1 font-bold text-[#101C2C]">
                        تصميم متكامل
                      </h3>

                      <p className="text-sm leading-6 text-gray-500">
                        حلول مصممة بعناية لتناسب كل مساحة.
                      </p>
                    </div>
                  </div>

                  {/* Feature */}
                  <div className="group flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#B37202]/30 hover:shadow-lg">
                    <div className="flex h-11 min-w-11 items-center justify-center rounded-xl bg-[#B37202]/10 text-[#B37202] transition duration-300 group-hover:bg-[#B37202] group-hover:text-white">
                      <FiAward size={20} />
                    </div>

                    <div>
                      <h3 className="mb-1 font-bold text-[#101C2C]">
                        جودة في التفاصيل
                      </h3>

                      <p className="text-sm leading-6 text-gray-500">
                        نهتم بكل تفصيلة من البداية للنهاية.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================
            OFFICIAL DOCUMENTS
        ====================================================== */}

        <div className="relative py-20 lg:py-28">
          {/* Decorative Golden Glow */}
          <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-[#B37202]/10 blur-[120px]" />

          <div className="pointer-events-none absolute -bottom-24 left-0 h-[300px] w-[300px] rounded-full bg-[#B37202]/10 blur-[100px]" />

          {/* Decorative Lines */}
          <div className="pointer-events-none absolute right-[7%] top-0 h-full w-px bg-gradient-to-b from-transparent via-white/5 to-transparent" />

          <div className="pointer-events-none absolute left-[7%] top-0 h-full w-px bg-gradient-to-b from-transparent via-white/5 to-transparent" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <div className="mb-5 flex items-center justify-center gap-3">
                <span className="h-px w-9 bg-[#B37202]" />

                <span className="text-sm font-bold tracking-wider text-[#101C2C] ">
                  الثقة والشفافية
                </span>

                <span className="h-px w-9 bg-[#B37202]" />
              </div>

              <h2 className="mb-5 text-3xl font-bold text-[#101C2C]  sm:text-4xl lg:text-[44px]">
                وثائقنا
                <span className="text-[#DCA755]"> الرسمية</span>
              </h2>

              <p className="mx-auto max-w-xl text-sm leading-7 text-white/55 sm:text-base">
                نضع بين يديك مستندات Golden Coast الرسمية تأكيدًا على التزامنا
                بالشفافية والمصداقية في جميع تعاملاتنا.
              </p>
            </div>

            {/* Documents */}
            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {documents.map((document, index) => {
                const Icon = document.icon;

                return (
                  <div
                    key={document.id}
                    className={`
                      group relative
                      ${index === 1 ? "lg:-translate-y-5" : ""}
                    `}
                  >
                    {/* Gold Shadow */}
                    <div className="absolute -inset-[1px] rounded-[26px] bg-gradient-to-br from-[#B37202]/70 via-transparent to-[#B37202]/10 opacity-40 transition duration-500 group-hover:opacity-100" />

                    {/* Card */}
                    <div className="relative overflow-hidden rounded-[25px] border border-white/10 bg-[#162437] p-3 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_25px_70px_rgba(0,0,0,0.35)]">
                      {/* Image */}
                      <div
                        onClick={() => setSelectedDocument(document)}
                        className="relative h-[390px] cursor-pointer overflow-hidden rounded-[20px] bg-[#F2EEE7]"
                      >
                        <img
                          src={document.image}
                          alt={document.title}
                          className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.04]"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#101C2C]/80 via-transparent to-transparent opacity-40 transition duration-500 group-hover:opacity-70" />

                        {/* Number */}
                        <span className="absolute right-5 top-5 text-5xl font-black text-[#101C2C]/10">
                          0{index + 1}
                        </span>

                        {/* Zoom */}
                        <div className="absolute left-4 top-4 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-white text-[#101C2C] opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                          <FiMaximize2 size={18} />
                        </div>

                        {/* Verified */}
                        <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full border border-white/20 bg-[#101C2C]/80 px-3 py-2 backdrop-blur-md">
                          <FiCheckCircle className="text-[#DCA755]" />

                          <span className="text-xs font-medium text-white">
                            مستند رسمي
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex items-center justify-between gap-4 px-3 pb-3 pt-6">
                        <div className="flex items-center gap-3">
                          <div className="flex h-12 w-12 min-w-12 items-center justify-center rounded-xl bg-[#B37202]/15 text-[#DCA755]">
                            <Icon size={21} />
                          </div>

                          <div>
                            <h3 className="mb-1 font-bold text-white">
                              {document.title}
                            </h3>

                            <p
                              dir="ltr"
                              className="text-left text-xs tracking-wide text-white/40"
                            >
                              {document.subtitle}
                            </p>
                          </div>
                        </div>

                        <button
                          onClick={() => setSelectedDocument(document)}
                          className="flex h-10 w-10 min-w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition duration-300 hover:border-[#B37202] hover:bg-[#B37202] hover:text-white"
                          aria-label="عرض المستند"
                        >
                          <FiMaximize2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Trust Bottom */}
            <div className="mt-14 flex justify-center">
              <div className="inline-flex items-center gap-4 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 backdrop-blur-sm">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#B37202]/15">
                  <FiShield className="text-[#DCA755]" />
                </div>

                <p className="text-xs text-white/55 sm:text-sm">
                  نلتزم بالمعايير الرسمية لضمان تجربة موثوقة لعملائنا
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          DOCUMENT MODAL
      ====================================================== */}

      {selectedDocument && (
        <div
          dir="rtl"
          onClick={() => setSelectedDocument(null)}
          className="
            fixed inset-0 z-[9999]
            flex items-center justify-center
            bg-[#08111D]/95
            p-4
            backdrop-blur-md
          "
        >
          {/* Close */}
          <button
            onClick={() => setSelectedDocument(null)}
            className="
              absolute
              left-5
              top-5
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/10
              text-white
              transition
              hover:bg-[#B37202]
            "
          >
            <FiX size={22} />
          </button>

          {/* Modal */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="
              relative
              max-h-[90vh]
              w-full
              max-w-4xl
              overflow-hidden
              rounded-[28px]
              border
              border-white/10
              bg-[#101C2C]
              shadow-2xl
            "
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
              <div>
                <p className="mb-1 text-xs font-semibold text-[#DCA755]">
                  GOLDEN COAST
                </p>

                <h3 className="text-lg font-bold text-white">
                  {selectedDocument.title}
                </h3>
              </div>

              <div className="flex items-center gap-2 rounded-full bg-[#B37202]/10 px-3 py-2">
                <FiCheckCircle className="text-[#DCA755]" />

                <span className="text-xs text-white/70">مستند رسمي</span>
              </div>
            </div>

            {/* Image */}
            <div className="max-h-[75vh] overflow-y-auto bg-[#EAE7E1] p-3 sm:p-6">
              <img
                src={selectedDocument.image}
                alt={selectedDocument.title}
                className="mx-auto h-auto max-w-full rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
