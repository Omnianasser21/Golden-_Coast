import React from "react";
import { NavLink } from "react-router-dom";
import {
  FiArrowUpLeft,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";

import goldenlogo from "../../assets/logo (2).png";
import { FaTiktok } from "react-icons/fa";

export default function Footer() {
  const quickLinks = [
    { name: "الرئيسية", path: "/" },
    { name: "من نحن", path: "/about" },
    { name: "المشاريع", path: "/projects" },
    { name: "تواصل معنا", path: "/contact" },
  ];

  const services = [
    "التصميم الداخلي",
    "التشطيبات",
    "إدارة المشاريع",
    "الاستشارات الهندسية",
  ];

  const socialLinks = [
    {
      icon: FiFacebook,
      href: "https://www.facebook.com/people/%D8%AC%D9%88%D9%84%D8%AF%D9%86-%D9%83%D9%88%D8%B3%D8%AA-%D9%84%D9%84%D8%AA%D8%AC%D8%A7%D8%B1%D8%A9-%D8%A7%D9%84%D8%B9%D8%A7%D9%85%D9%87/100065607004984/?mibextid=wwXIfr&rdid=yYgKRxDqLiFKgnmZ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F17xsCx4AFK%2F%3Fmibextid%3DwwXIfr",
      label: "Facebook",
    },
    {
      icon: FiInstagram,
      href: "#",
      label: "Instagram",
    },
    {
      icon: FaTiktok,
      href: "https://www.tiktok.com/@goldencost5?_r=1&_t=ZS-99IBzj4x8pI",
      label: "TikTok",
    },
  ];

  return (
    <footer
      dir="rtl"
      className="relative overflow-hidden bg-[#0D1927] text-white"
    >
      {/* Decorative Glow */}
      <div className="pointer-events-none absolute -right-32 top-0 h-[400px] w-[400px] rounded-full bg-[#B37202]/10 blur-[120px]" />

      <div className="pointer-events-none absolute -bottom-32 -left-32 h-[350px] w-[350px] rounded-full bg-[#B37202]/10 blur-[120px]" />

      {/* Gold top line */}
      <div className="h-[2px] w-full bg-gradient-to-l from-transparent via-[#B37202] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {/* ================= TOP AREA ================= */}

        <div className="grid gap-12 text-center md:grid-cols-2 lg:grid-cols-4 lg:text-right">
          {/* ================= BRAND ================= */}

          <div className="flex flex-col items-center lg:items-start lg:col-span-1">
            <NavLink to="/" className="mb-5 inline-flex justify-center">
              <img
                src={goldenlogo}
                alt="Golden Coast"
                className="h-20 w-auto object-contain"
              />
            </NavLink>

            <p className="max-w-sm text-sm leading-7 text-white/55">
              في Golden Coast نصنع مساحات تجمع بين الأناقة والجودة والتفاصيل
              المدروسة لنحول رؤيتك إلى واقع يعكس شخصيتك.
            </p>

            {/* Social */}
            <div className="mt-7 flex items-center justify-center gap-3 lg:justify-start">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;

                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="
                      group
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.04]
                      text-white/60
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-[#B37202]
                      hover:bg-[#B37202]
                      hover:text-white
                    "
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* ================= QUICK LINKS ================= */}

          <div className="flex flex-col items-center lg:items-start">
            <div className="mb-6 flex items-center justify-center gap-3 lg:justify-start">
              <span className="h-[2px] w-7 bg-[#B37202]" />

              <h3 className="text-lg font-bold">روابط سريعة</h3>
            </div>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className="
                      group
                      inline-flex
                      items-center
                      justify-center
                      gap-2
                      text-sm
                      text-white/55
                      transition-all
                      duration-300
                      hover:text-[#DCA755]
                      lg:justify-start
                    "
                  >
                    <FiArrowUpLeft size={14} className="text-[#B37202]" />

                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= SERVICES ================= */}

          <div className="flex flex-col items-center lg:items-start">
            <div className="mb-6 flex items-center justify-center gap-3 lg:justify-start">
              <span className="h-[2px] w-7 bg-[#B37202]" />

              <h3 className="text-lg font-bold">خدماتنا</h3>
            </div>

            <ul className="space-y-4">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="
                    group
                    flex
                    cursor-pointer
                    items-center
                    justify-center
                    gap-2
                    text-sm
                    text-white/55
                    transition
                    duration-300
                    hover:text-[#DCA755]
                    lg:justify-start
                  "
                >
                  <span className="h-[5px] w-[5px] rounded-full bg-[#B37202]" />

                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* ================= CONTACT ================= */}

          <div className="flex flex-col items-center lg:items-start">
            <div className="mb-6 flex items-center justify-center gap-3 lg:justify-start">
              <span className="h-[2px] w-7 bg-[#B37202]" />

              <h3 className="text-lg font-bold">تواصل معنا</h3>
            </div>

            <div className="w-full max-w-xs space-y-5">
              {/* Phone */}
              <a
                href="tel:+201000000000"
                className="
                  group
                  flex
                  items-center
                  justify-center
                  gap-4
                  lg:justify-start
                "
              >
                <div
                  className="
                    flex
                    h-10
                    w-10
                    min-w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#B37202]/10
                    text-[#DCA755]
                    transition-all
                    duration-300
                    group-hover:bg-[#B37202]
                    group-hover:text-white
                  "
                >
                  <FiPhone size={17} />
                </div>

                <div className="text-center lg:text-right">
                  <p className="mb-1 text-xs text-white/35">الهاتف</p>

                  <p
                    dir="ltr"
                    className="text-sm text-white/65 transition group-hover:text-white"
                  >
                    +20 100 9498294
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@goldencoast.com"
                className="
                  group
                  flex
                  items-center
                  justify-center
                  gap-4
                  lg:justify-start
                "
              >
                <div
                  className="
                    flex
                    h-10
                    w-10
                    min-w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#B37202]/10
                    text-[#DCA755]
                    transition-all
                    duration-300
                    group-hover:bg-[#B37202]
                    group-hover:text-white
                  "
                >
                  <FiMail size={17} />
                </div>

                <div className="text-center lg:text-right">
                  <p className="mb-1 text-xs text-white/35">
                    البريد الإلكتروني
                  </p>

                  <p className="text-sm text-white/65 transition group-hover:text-white">
                  goldencoast40@gmail.com
                  </p>
                </div>
              </a>

              {/* Location */}
              <div
                className="
                  group
                  flex
                  items-center
                  justify-center
                  gap-4
                  lg:justify-start
                "
              >
                <div
                  className="
                    flex
                    h-10
                    w-10
                    min-w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#B37202]/10
                    text-[#DCA755]
                  "
                >
                  <FiMapPin size={17} />
                </div>

                <div className="text-center lg:text-right">
                  <p className="mb-1 text-xs text-white/35">العنوان</p>

                  <p className="text-sm leading-6 text-white/65">
                    القاهرة، مصر
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= DIVIDER ================= */}

        <div className="my-12 h-px w-full bg-gradient-to-l from-transparent via-white/10 to-transparent" />

        {/* ================= CTA ================= */}

        <div
          className="
            mb-12
            rounded-[26px]
            border
            border-white/10
            bg-white/[0.035]
            p-6
            text-center
            backdrop-blur-sm
            md:flex
            md:items-center
            md:justify-between
            md:p-8
            md:text-right
          "
        >
          <div>
            <span className="mb-2 block text-xs font-bold tracking-widest text-[#DCA755]">
              GOLDEN COAST
            </span>

            <h3 className="text-xl font-bold sm:text-2xl">
              عندك فكرة لمشروع جديد؟
            </h3>

            <p className="mt-2 text-sm text-white/45">
              خلينا نحول فكرتك لمساحة مميزة بتفاصيل تعكس رؤيتك.
            </p>
          </div>

          <NavLink
            to="/contact"
            className="
              group
              mx-auto
              mt-6
              inline-flex
              items-center
              justify-center
              gap-3
              rounded-xl
              bg-[#B37202]
              px-6
              py-3.5
              text-sm
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-[#DCA755]
              md:mx-0
              md:mt-0
            "
          >
            ابدأ مشروعك
            <FiArrowUpLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
          </NavLink>
        </div>

        {/* ================= BOTTOM ================= */}

   
      </div>
    </footer>
  );
}
