import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FiArrowLeft,
  FiArrowRight,
  FiArrowUpLeft,
  FiCheck,
} from "react-icons/fi";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

/*
|--------------------------------------------------------------------------
| CATEGORY IMAGES
|--------------------------------------------------------------------------
*/

// ================= DECORATION =================

const decorationImages = Object.values(
  import.meta.glob(
    "../../../assets/Categorise/decoration/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
    {
      eager: true,
      import: "default",
    },
  ),
);

// ================= HEALTH CARE =================

const healthCareImages = Object.values(
  import.meta.glob(
    "../../../assets/Categorise/health-care/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
    {
      eager: true,
      import: "default",
    },
  ),
);

// ================= ELECTRICAL =================

const electricalImages = Object.values(
  import.meta.glob(
    "../../../assets/Categorise/electronic/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
    {
      eager: true,
      import: "default",
    },
  ),
);

// ================= POOL =================

const poolImages = Object.values(
  import.meta.glob(
    "../../../assets/Categorise/pool/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
    {
      eager: true,
      import: "default",
    },
  ),
);

export default function Categorise() {
  const navigate = useNavigate();

  /*
  |--------------------------------------------------------------------------
  | CATEGORIES
  |--------------------------------------------------------------------------
  */

  const categories = [
    {
      id: 1,

      number: "01",

      title: "الديكور",

      filterCategory: "الديكور",

      smallTitle: "Interior Design",

      description:
        "نقدم حلول ديكور وتصميم داخلي متكاملة تجمع بين الأناقة والعملية، مع الاهتمام بأدق التفاصيل واختيار الخامات المناسبة.",

      image: decorationImages[0],

      images: decorationImages.slice(0, 4),

      features: [
        "تصميمات عصرية",
        "اختيار خامات مميزة",
        "استغلال مثالي للمساحات",
        "تنفيذ احترافي",
      ],
    },

    {
      id: 2,

      number: "02",

      title: "الأعمال الصحية",

      filterCategory: "الأعمال الصحية",

      smallTitle: "Plumbing Works",

      description:
        "تنفيذ متكامل للأعمال الصحية وشبكات المياه والصرف بأعلى معايير الجودة والدقة لضمان الكفاءة والاستدامة.",

      image: healthCareImages[0],

      images: healthCareImages.slice(0, 4),

      features: [
        "شبكات المياه",
        "شبكات الصرف",
        "تركيب الأدوات الصحية",
        "تنفيذ واختبار الشبكات",
      ],
    },

    {
      id: 3,

      number: "03",

      title: "الأعمال الكهربائية",

      filterCategory: "الأعمال الكهربائية",

      smallTitle: "Electrical Works",

      description:
        "ننفذ الأعمال الكهربائية بمستوى احترافي بداية من تأسيس الشبكات وحتى التركيبات النهائية مع الاهتمام بعوامل الأمان والجودة.",

      image: electricalImages[0],

      images: electricalImages.slice(0, 4),

      features: [
        "تأسيس الكهرباء",
        "لوحات التوزيع",
        "أنظمة الإضاءة",
        "تنفيذ آمن واحترافي",
      ],
    },

    {
      id: 4,

      number: "04",

      title: "حمامات السباحة",

      filterCategory: "حمامات السباحة",

      smallTitle: "Swimming Pools",

      description:
        "تصميم وتنفيذ حمامات السباحة بداية من الأعمال الإنشائية وحتى التشطيبات وأنظمة التشغيل للحصول على مشروع متكامل.",

      image: poolImages[0],

      images: poolImages.slice(0, 4),

      features: [
        "تصميم حمامات السباحة",
        "الأعمال الإنشائية",
        "أنظمة الفلترة",
        "التشطيبات النهائية",
      ],
    },
  ];

  /*
  |--------------------------------------------------------------------------
  | STATE
  |--------------------------------------------------------------------------
  */

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const [selectedImage, setSelectedImage] = useState(categories[0].image);

  /*
  |--------------------------------------------------------------------------
  | HANDLERS
  |--------------------------------------------------------------------------
  */

  const handleCategory = (category) => {
    setSelectedCategory(category);

    setSelectedImage(category.image);
  };

  const handleViewProjects = () => {
    navigate(
      `/projects?category=${encodeURIComponent(
        selectedCategory.filterCategory,
      )}`,
    );
  };

  return (
    <section
      dir="rtl"
      className="
        relative
        overflow-hidden
        bg-[#F9F7F3]
        py-20
        lg:py-28
      "
    >
      {/* ================= DECORATIONS ================= */}

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-0
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#B37202]/5
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          -left-40
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#B37202]/5
          blur-[120px]
        "
      />

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div
          className="
            mb-12
            flex
            flex-col
            gap-7
            md:flex-row
            md:items-end
            md:justify-between
          "
        >
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#B37202]" />

              <span className="text-sm font-bold text-[#B37202]">مشاريعنا</span>
            </div>

            <h2
              className="
                mb-4
                text-3xl
                font-bold
                leading-tight
                text-[#101C2C]
                sm:text-4xl
                lg:text-[46px]
              "
            >
              اكتشف
              <span className="text-[#B37202]"> مجالات أعمالنا</span>
            </h2>

            <p
              className="
                max-w-xl
                text-sm
                leading-7
                text-gray-500
                sm:text-base
              "
            >
              اختر نوع المشروع للتعرف على تفاصيله واستكشف مجموعة من أعمال Golden
              Coast في كل مجال.
            </p>
          </div>

          {/* ================= SLIDER NAVIGATION ================= */}

          <div
            dir="ltr"
            className="
              flex
              items-center
              justify-center
              gap-3
              md:justify-start
            "
          >
            <button
              type="button"
              className="
                categories-prev
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-gray-200
                bg-white
                text-[#101C2C]
                transition-all
                duration-300
                hover:border-[#B37202]
                hover:bg-[#B37202]
                hover:text-white
              "
            >
              <FiArrowLeft size={19} />
            </button>

            <button
              type="button"
              className="
                categories-next
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-gray-200
                bg-white
                text-[#101C2C]
                transition-all
                duration-300
                hover:border-[#B37202]
                hover:bg-[#B37202]
                hover:text-white
              "
            >
              <FiArrowRight size={19} />
            </button>
          </div>
        </div>

        {/* =====================================================
            CATEGORIES SLIDER
        ===================================================== */}

        <Swiper
          dir="rtl"
          modules={[Autoplay, Navigation]}
          spaceBetween={18}
          slidesPerView={1.25}
          loop={true}
          speed={800}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            nextEl: ".categories-next",
            prevEl: ".categories-prev",
          }}
          breakpoints={{
            480: {
              slidesPerView: 1.7,
            },

            640: {
              slidesPerView: 2.2,
            },

            768: {
              slidesPerView: 2.7,
            },

            1024: {
              slidesPerView: 3.5,
            },

            1280: {
              slidesPerView: 4,
            },
          }}
          className="!overflow-visible"
        >
          {categories.map((category) => {
            const active = selectedCategory.id === category.id;

            return (
              <SwiperSlide key={category.id}>
                <button
                  type="button"
                  onClick={() => handleCategory(category)}
                  className={`
                    group
                    relative
                    block
                    h-[340px]
                    w-full
                    overflow-hidden
                    rounded-[24px]
                    text-right
                    transition-all
                    duration-500

                    ${active ? "shadow-[0_20px_50px_rgba(15,23,42,0.18)]" : ""}
                  `}
                >
                  {/* ================= IMAGE ================= */}

                  <img
                    src={category.image}
                    alt={category.title}
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-110
                    "
                  />

                  {/* ================= OVERLAY ================= */}

                  <div
                    className={`
                      absolute
                      inset-0
                      transition-all
                      duration-500

                      ${
                        active
                          ? "bg-gradient-to-t from-[#101C2C] via-[#101C2C]/30 to-transparent"
                          : "bg-gradient-to-t from-[#101C2C]/95 via-[#101C2C]/20 to-transparent"
                      }
                    `}
                  />

                  {/* ================= BORDER ================= */}

                  <div
                    className={`
                      pointer-events-none
                      absolute
                      inset-0
                      rounded-[24px]
                      border-2
                      transition-all
                      duration-300

                      ${
                        active
                          ? "border-[#B37202]"
                          : "border-transparent group-hover:border-[#B37202]/50"
                      }
                    `}
                  />

                  {/* ================= NUMBER ================= */}

                  <span
                    className="
                      absolute
                      left-5
                      top-5
                      text-4xl
                      font-black
                      text-white/20
                    "
                  >
                    {category.number}
                  </span>

                  {/* ================= ACTIVE ICON ================= */}

                  {active && (
                    <div
                      className="
                        absolute
                        right-5
                        top-5
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        bg-[#B37202]
                        text-white
                      "
                    >
                      <FiCheck size={17} />
                    </div>
                  )}

                  {/* ================= CONTENT ================= */}

                  <div
                    className="
                      absolute
                      bottom-0
                      right-0
                      w-full
                      p-6
                    "
                  >
                    <span
                      className="
                        mb-2
                        block
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[3px]
                        text-[#DCA755]
                      "
                    >
                      {category.smallTitle}
                    </span>

                    <h3
                      className="
                        text-xl
                        font-bold
                        text-white
                        sm:text-2xl
                      "
                    >
                      {category.title}
                    </h3>

                    <div
                      className={`
                        mt-4
                        h-[2px]
                        bg-[#B37202]
                        transition-all
                        duration-500

                        ${active ? "w-14" : "w-7 group-hover:w-14"}
                      `}
                    />
                  </div>
                </button>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* =====================================================
            SELECTED CATEGORY DETAILS
        ===================================================== */}

        <div
          key={selectedCategory.id}
          className="
            mt-14
            overflow-hidden
            rounded-[32px]
            border
            border-gray-100
            bg-white
            shadow-[0_25px_70px_rgba(15,23,42,0.06)]
          "
        >
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            {/* =================================================
                IMAGES
            ================================================= */}

            <div
              className="
                relative
                min-w-0
                bg-[#101C2C]
                p-3
                sm:p-5
              "
            >
              {/* ================= MAIN IMAGE ================= */}

              <div
                className="
                  relative
                  h-[360px]
                  overflow-hidden
                  rounded-[24px]
                  sm:h-[450px]
                  lg:h-[520px]
                "
              >
                <img
                  key={selectedImage}
                  src={selectedImage}
                  alt={selectedCategory.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    animate-[categoryFade_.5s_ease]
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#101C2C]/70
                    via-transparent
                    to-transparent
                  "
                />

                {/* Image Title */}

                <div className="absolute bottom-6 right-6">
                  <span
                    className="
                      mb-2
                      block
                      text-xs
                      font-semibold
                      tracking-[3px]
                      text-[#DCA755]
                    "
                  >
                    GOLDEN COAST
                  </span>

                  <h3
                    className="
                      text-2xl
                      font-bold
                      text-white
                      sm:text-3xl
                    "
                  >
                    {selectedCategory.title}
                  </h3>
                </div>
              </div>

              {/* ================= THUMBNAILS ================= */}

              <div
                className="
                  mt-3
                  grid
                  grid-cols-4
                  gap-2
                  sm:mt-4
                  sm:gap-3
                "
              >
                {selectedCategory.images.map((image, index) => {
                  const imageActive = selectedImage === image;

                  return (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setSelectedImage(image)}
                      className={`
                          relative
                          h-[70px]
                          overflow-hidden
                          rounded-xl
                          border-2
                          transition-all
                          duration-300
                          sm:h-[90px]

                          ${
                            imageActive
                              ? "border-[#B37202]"
                              : "border-transparent opacity-60 hover:opacity-100"
                          }
                        `}
                    >
                      <img
                        src={image}
                        alt={`${selectedCategory.title} ${index + 1}`}
                        className="
                            h-full
                            w-full
                            object-cover
                          "
                      />

                      {imageActive && (
                        <div
                          className="
                              absolute
                              inset-0
                              bg-[#B37202]/10
                            "
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* =================================================
                DETAILS
            ================================================= */}

            <div
              className="
                flex
                flex-col
                justify-center
                p-7
                sm:p-10
                lg:p-12
              "
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#B37202]" />

                <span
                  dir="ltr"
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[3px]
                    text-[#B37202]
                  "
                >
                  {selectedCategory.smallTitle}
                </span>
              </div>

              <span
                className="
                  mb-2
                  text-sm
                  font-bold
                  text-[#B37202]
                "
              >
                {selectedCategory.number}
              </span>

              <h3
                className="
                  mb-5
                  text-3xl
                  font-bold
                  text-[#101C2C]
                  sm:text-4xl
                "
              >
                {selectedCategory.title}
              </h3>

              <p
                className="
                  mb-8
                  text-sm
                  leading-8
                  text-gray-500
                  sm:text-base
                "
              >
                {selectedCategory.description}
              </p>

              {/* ================= FEATURES ================= */}

              <div
                className="
                  mb-9
                  grid
                  gap-3
                  sm:grid-cols-2
                "
              >
                {selectedCategory.features.map((feature, index) => (
                  <div
                    key={index}
                    className="
                        flex
                        items-center
                        gap-3
                        rounded-xl
                        border
                        border-gray-100
                        bg-[#FAF9F7]
                        px-4
                        py-3
                      "
                  >
                    <span
                      className="
                          flex
                          h-7
                          w-7
                          min-w-7
                          items-center
                          justify-center
                          rounded-full
                          bg-[#B37202]/10
                          text-[#B37202]
                        "
                    >
                      <FiCheck size={13} />
                    </span>

                    <span
                      className="
                          text-sm
                          font-medium
                          text-[#101C2C]
                        "
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* ================= BUTTON ================= */}

              <button
                type="button"
                onClick={handleViewProjects}
                className="
                  group
                  flex
                  w-fit
                  items-center
                  gap-3
                  rounded-xl
                  bg-[#101C2C]
                  px-6
                  py-4
                  text-sm
                  font-bold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#B37202]
                "
              >
                شاهد جميع مشاريع {selectedCategory.title}
                <FiArrowUpLeft
                  size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ================= ANIMATION ================= */}

      <style>{`
        @keyframes categoryFade {
          from {
            opacity: 0;
            transform: scale(1.03);
          }

          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}
