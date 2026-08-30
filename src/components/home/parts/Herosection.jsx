import heroSection from "../../../assets/herosection.jpg";

export default function HeroSection() {
  return (
    <section
      dir="rtl"
      style={{
        backgroundImage: `url(${heroSection})`,
      }}
      className="
        min-h-[100svh]
        bg-center
        bg-no-repeat
        bg-cover
        bg-black/50
        bg-blend-multiply
        flex
        items-center
        justify-center
      "
    >
      <div
        className="
          w-full
          max-w-screen-xl
          mx-auto
          px-5
          pt-20
          sm:pt-20
          pb-12
          text-center
          sm:px-6
          md:px-8
        "
      >
        {/* Title */}
        <h1
          className="
            mx-auto
            mb-5
            max-w-4xl
            text-3xl
            font-bold
            leading-tight
            tracking-tight
            text-white
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
          "
        >
          نحن نبني لك
          <span className="text-[#B37202]"> مساحة أحلامك</span>
        </h1>

        {/* Description */}
        <p
          className="
            mx-auto
            mb-8
            max-w-2xl
            text-sm
            font-normal
            leading-7
            text-gray-200
            sm:text-base
            md:text-lg
            lg:text-xl
          "
        >
          نقدم حلول تشطيب متكاملة بتنفيذ احترافي، وتصميم عصري، واهتمام بأدق
          التفاصيل لتحويل رؤيتك إلى واقع.
        </p>

        {/* Buttons */}
        <div
          className="
            flex
            flex-col
            items-center
            justify-center
            gap-4
            sm:flex-row
          "
        >
          {/* Primary Button */}
          <button
            type="button"
            className="
              inline-flex
              w-fit
              min-w-[160px]
              items-center
              justify-center
              rounded
              border-2
              border-[#B37202]
              bg-[#B37202]
              px-7
              py-3
              text-sm
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-transparent
              hover:text-[#B37202]
              sm:text-base
            "
          >
            ابدأ الآن
            <svg
              className="me-2 h-4 w-4 rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
          </button>

          {/* Secondary Button */}
          <button
            type="button"
            className="
              w-fit
              min-w-[160px]
              rounded
              border-2
              border-[#B37202]
              bg-transparent
              px-7
              py-3
              text-sm
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-[#B37202]
              hover:text-white
              sm:text-base
            "
          >
            اعرف المزيد
          </button>
        </div>
      </div>
    </section>
  );
}
