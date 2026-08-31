import { useState } from "react";
import projects from "./data/projects";

export default function Allprojects() {
  const [activeCategory, setActiveCategory] = useState("الكل");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  // عدد المشاريع في كل صفحة
  const projectsPerPage = 8;

  // ================= CATEGORIES =================

const categories = [
  "الكل",
  "الأعمال الصحية",
  "الديكور",
  "الأعمال الكهربائية",
  "حمامات السباحة",
];

  // ================= FILTER =================

  const filteredProjects =
    activeCategory === "الكل"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  // ================= PAGINATION =================

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const lastIndex = currentPage * projectsPerPage;
  const firstIndex = lastIndex - projectsPerPage;

  const currentProjects = filteredProjects.slice(firstIndex, lastIndex);

  // تغيير الكاتيجوري
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  // تغيير الصفحة
  const handlePageChange = (page) => {
    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // الصفحة السابقة
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  // الصفحة التالية
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  return (
    <>
      <section dir="rtl" className="min-h-screen bg-[#F8F8F8] pb-20 pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* ================= HEADER ================= */}

          <div className="mx-auto mb-10 max-w-2xl text-center">
            <span className="mb-3 inline-block text-sm font-bold text-[#B37202]">
              أعمالنا
            </span>

            <h1 className="mb-4 text-3xl font-bold text-[#0D1927] sm:text-4xl lg:text-5xl">
              مشاريعنا
              <span className="text-[#B37202]"> المميزة</span>
            </h1>

            <p className="text-sm leading-7 text-gray-500 sm:text-base">
              تصفح مجموعة من مشاريعنا في مختلف التخصصات.
            </p>
          </div>

          {/* ================= CATEGORIES ================= */}

          <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => handleCategoryChange(category)}
                className={`
                  rounded-full
                  border
                  px-5
                  py-2.5
                  text-sm
                  font-semibold
                  transition-all
                  duration-300
                  ${
                    activeCategory === category
                      ? `
                        border-[#B37202]
                        bg-[#B37202]
                        text-white
                        shadow-md
                      `
                      : `
                        border-gray-200
                        bg-white
                        text-gray-600
                        hover:border-[#B37202]
                        hover:text-[#B37202]
                      `
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>

          {/* ================= COUNT ================= */}

          <div className="mb-6 text-center">
            <p className="text-sm text-gray-500">
              عدد المشاريع:
              <span className="mr-2 font-bold text-[#B37202]">
                {filteredProjects.length}
              </span>
            </p>
          </div>

          {/* ================= PROJECTS ================= */}

          <div
            className="
              grid
              grid-cols-1
              gap-6
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
            "
          >
            {currentProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="
                  group
                  cursor-pointer
                  overflow-hidden
                  rounded-2xl
                  border
                  border-gray-200
                  bg-white
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#B37202]/40
                  hover:shadow-xl
                "
              >
                {/* Preview */}

                <div className="relative h-[280px] overflow-hidden bg-gray-100">
                  {project.type === "image" ? (
                    <img
                      src={project.file}
                      alt={project.title}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-105
                      "
                    />
                  ) : (
                    <object
                      data={`${project.file}#page=1&toolbar=0&navpanes=0&scrollbar=0`}
                      type="application/pdf"
                      aria-label={project.title}
                      className="
                        pointer-events-none
                        h-full
                        w-full
                        border-0
                        bg-white
                      "
                    />
                  )}

                  {/* Hover Overlay */}

                  <div
                    className="
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                      bg-[#0D1927]/0
                      transition-all
                      duration-300
                      group-hover:bg-[#0D1927]/45
                    "
                  >
                    <span
                      className="
                        translate-y-4
                        rounded-full
                        bg-[#B37202]
                        px-5
                        py-2.5
                        text-sm
                        font-semibold
                        text-white
                        opacity-0
                        transition-all
                        duration-300
                        group-hover:translate-y-0
                        group-hover:opacity-100
                      "
                    >
                      عرض المشروع
                    </span>
                  </div>

                  {/* Category */}

                  <span
                    className="
                      absolute
                      right-3
                      top-3
                      rounded-full
                      bg-[#B37202]
                      px-3
                      py-1.5
                      text-xs
                      font-semibold
                      text-white
                      shadow-md
                    "
                  >
                    {project.category}
                  </span>
                </div>

                {/* Content */}

                <div className="p-5">
                  <p className="mb-2 text-xs font-semibold text-[#B37202]">
                    {project.category}
                  </p>

        

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-gray-400">عرض التفاصيل</span>

                    <span
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        bg-[#B37202]/10
                        text-[#B37202]
                        transition-all
                        duration-300
                        group-hover:bg-[#B37202]
                        group-hover:text-white
                      "
                    >
                      ←
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ================= EMPTY ================= */}

          {filteredProjects.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-gray-500">
                لا توجد مشاريع في هذا القسم حالياً.
              </p>
            </div>
          )}

          {/* ================= PAGINATION ================= */}

          {totalPages > 1 && (
            <div
              className="
                mt-14
                flex
                flex-wrap
                items-center
                justify-center
                gap-2
              "
            >
              {/* Previous */}

              <button
                type="button"
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className="
                  flex
                  h-11
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-gray-200
                  bg-white
                  px-4
                  text-sm
                  font-semibold
                  text-[#0D1927]
                  transition-all
                  duration-300
                  hover:border-[#B37202]
                  hover:text-[#B37202]
                  disabled:cursor-not-allowed
                  disabled:opacity-40
                "
              >
                السابق
              </button>

              {/* Page Numbers */}

              {Array.from({ length: totalPages }, (_, index) => {
                const page = index + 1;

                return (
                  <button
                    key={page}
                    type="button"
                    onClick={() => handlePageChange(page)}
                    className={`
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-lg
                        border
                        text-sm
                        font-bold
                        transition-all
                        duration-300
                        ${
                          currentPage === page
                            ? `
                              border-[#B37202]
                              bg-[#B37202]
                              text-white
                              shadow-md
                            `
                            : `
                              border-gray-200
                              bg-white
                              text-gray-600
                              hover:border-[#B37202]
                              hover:text-[#B37202]
                            `
                        }
                      `}
                  >
                    {page}
                  </button>
                );
              })}

              {/* Next */}

              <button
                type="button"
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="
                  flex
                  h-11
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-gray-200
                  bg-white
                  px-4
                  text-sm
                  font-semibold
                  text-[#0D1927]
                  transition-all
                  duration-300
                  hover:border-[#B37202]
                  hover:text-[#B37202]
                  disabled:cursor-not-allowed
                  disabled:opacity-40
                "
              >
                التالي
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ================= MODAL ================= */}

      {selectedProject && (
        <div
          dir="rtl"
          onClick={() => setSelectedProject(null)}
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            bg-black/80
            p-3
            backdrop-blur-sm
            sm:p-6
          "
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="
              flex
              h-[92vh]
              w-full
              max-w-6xl
              flex-col
              overflow-hidden
              rounded-2xl
              bg-white
              shadow-2xl
            "
          >
            {/* ================= MODAL HEADER ================= */}

            <div
              className="
                flex
                items-center
                justify-between
                gap-4
                border-b
                border-gray-200
                px-4
                py-4
                sm:px-6
              "
            >
              <div>
                <p className="mb-1 text-xs font-semibold text-[#B37202]">
                  {selectedProject.category}
                </p>

                <h2 className="text-lg font-bold text-[#0D1927] sm:text-xl">
                  {selectedProject.title}
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-gray-100
                  text-xl
                  text-gray-600
                  transition-all
                  duration-300
                  hover:bg-[#B37202]
                  hover:text-white
                "
              >
                ✕
              </button>
            </div>

            {/* ================= PROJECT VIEW ================= */}

            <div className="min-h-0 flex-1 overflow-hidden bg-gray-200 p-2">
              {selectedProject.type === "image" ? (
                <div
                  className="
                    flex
                    h-full
                    w-full
                    items-center
                    justify-center
                    overflow-auto
                  "
                >
                  <img
                    src={selectedProject.file}
                    alt={selectedProject.title}
                    className="
                      max-h-full
                      max-w-full
                      object-contain
                    "
                  />
                </div>
              ) : (
                <object
                  data={`${selectedProject.file}#toolbar=1&navpanes=0`}
                  type="application/pdf"
                  aria-label={selectedProject.title}
                  className="
                    h-full
                    w-full
                    border-0
                    bg-white
                  "
                >
                  <div className="flex h-full items-center justify-center p-5">
                    <p className="text-center text-gray-500">
                      تعذر عرض ملف المشروع.
                    </p>
                  </div>
                </object>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
