import React from "react";
import {
  FiAward,
  FiHome,
  FiLayers,
  FiMessageSquare,
  FiShield,
  FiTarget,
} from "react-icons/fi";

export default function Ourfeatures() {
  const features = [
    {
      id: 1,
      icon: FiHome,
      title: "خبرة في العقارات",
      description:
        "خبرة تساعدنا على تقديم حلول عقارية مناسبة لمختلف احتياجات العملاء.",
    },
    {
      id: 2,
      icon: FiLayers,
      title: "تشطيبات متكاملة",
      description:
        "نقدم حلول تشطيب متكاملة تجمع بين الجودة والتصميم والتنفيذ الدقيق.",
    },
    {
      id: 3,
      icon: FiAward,
      title: "جودة في التنفيذ",
      description:
        "نهتم بكل التفاصيل لضمان مستوى تنفيذ يحقق أعلى معايير الجودة.",
    },
    {
      id: 4,
      icon: FiTarget,
      title: "تصميم عصري",
      description:
        "نقدم أفكارًا وتصميمات عصرية تناسب طبيعة كل مشروع واحتياجاته.",
    },
    {
      id: 5,
      icon: FiMessageSquare,
      title: "استشارات عقارية",
      description:
        "نساعدك على اتخاذ القرار المناسب من خلال استشارات واضحة ومدروسة.",
    },
    {
      id: 6,
      icon: FiShield,
      title: "ثقة ما بعد التسليم",
      description:
        "نحرص على استمرار علاقتنا مع عملائنا وتقديم الدعم حتى بعد التسليم.",
    },
  ];

  return (
    <section
      dir="rtl"
      className="relative overflow-hidden bg-white py-20 lg:py-28"
    >
      {/* subtle background */}
      <div className="pointer-events-none absolute -right-32 top-20 h-[300px] w-[300px] rounded-full bg-[#B37202]/5 blur-[100px]" />

      <div className="pointer-events-none absolute -left-32 bottom-0 h-[300px] w-[300px] rounded-full bg-[#B37202]/5 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= TITLE ================= */}

        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#B37202]" />

            <span className="text-sm font-bold text-[#B37202]">لماذا نحن؟</span>

            <span className="h-px w-8 bg-[#B37202]" />
          </div>

          <h2 className="mb-4 text-3xl font-bold text-[#101C2C] sm:text-4xl">
            مميزاتنا
          </h2>

          <p className="mx-auto max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
            نقدم أفضل الحلول العقارية والتشطيبات باهتمام كامل بالجودة والتفاصيل
            لنضمن لك تجربة متكاملة من البداية وحتى التسليم.
          </p>
        </div>

        {/* ================= FEATURES ================= */}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                className="
                  group
                  relative
                  min-h-[210px]
                  overflow-hidden
                  border
                  border-[#EEEAE4]
                  bg-white
                  px-6
                  py-8
                  text-center
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#B37202]/40
                  hover:shadow-[0_15px_45px_rgba(15,23,42,0.07)]
                "
              >
                {/* top decorative line */}
                <span
                  className="
                    absolute
                    left-1/2
                    top-0
                    h-[2px]
                    w-0
                    -translate-x-1/2
                    bg-[#B37202]
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />

                {/* icon */}
                <div
                  className="
                    mx-auto
                    mb-5
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    border
                    border-[#B37202]/15
                    bg-[#B37202]/5
                    text-[#B37202]
                    transition-all
                    duration-300
                    group-hover:bg-[#B37202]
                    group-hover:text-white
                  "
                >
                  <Icon size={24} strokeWidth={1.6} />
                </div>

                {/* title */}
                <h3 className="mb-3 text-[17px] font-bold text-[#101C2C]">
                  {feature.title}
                </h3>

                {/* description */}
                <p className="mx-auto max-w-[280px] text-sm leading-7 text-gray-500">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
