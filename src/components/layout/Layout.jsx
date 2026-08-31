import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { FaWhatsapp } from "react-icons/fa";

export default function Layout() {
  const whatsappNumber = "201009498294";

  const whatsappMessage = "مرحباً، أريد الاستفسار عن خدمات الصيانة";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  return (
    <div>
      <Header />

      <Outlet />

      <Footer />

      {/* WhatsApp Floating Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل معنا عبر واتساب"
        className="
          fixed
          bottom-6
          right-6
          z-[9999]
          w-14
          h-14
          sm:w-16
          sm:h-16
          rounded-full
          bg-[#25D366]
          text-white
          flex
          items-center
          justify-center
          shadow-lg
          transition-all
          duration-300
          hover:scale-110
          hover:shadow-2xl
        "
      >
        <FaWhatsapp className="w-4 h-4 sm:w-9 sm:h-9" />
      </a>
    </div>
  );
}
