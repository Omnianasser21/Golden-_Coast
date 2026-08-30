const electricalFiles = import.meta.glob(
  "/src/assets/Categorise/electronic/*",
  {
    eager: true,
    import: "default",
  },
);

const allowedExtensions = ["pdf", "jpg", "jpeg", "png", "webp"];

const electricalProjects = Object.entries(electricalFiles)
  .filter(([path]) => {
    const extension = path.split(".").pop()?.toLowerCase();

    return allowedExtensions.includes(extension);
  })
  .map(([path, file], index) => {
    const fileName = path.split("/").pop();

    const extension = fileName.split(".").pop().toLowerCase();

    const nameWithoutExtension = fileName.replace(/\.[^/.]+$/, "");

    const parsedNumber = parseInt(nameWithoutExtension, 10);

    const number = Number.isNaN(parsedNumber) ? index + 1 : parsedNumber;

    return {
      id: `electrical-${index + 1}`,

      number,

      title: `مشروع أعمال كهربائية ${index + 1}`,

      category: "الأعمال الكهربائية",

      file,

      type: extension === "pdf" ? "pdf" : "image",
    };
  })
  .sort((a, b) => a.number - b.number);

console.log("Electrical Files =>", electricalFiles);
console.log("Electrical Projects =>", electricalProjects);

export default electricalProjects;
