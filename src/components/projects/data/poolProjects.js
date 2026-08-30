const poolFiles = import.meta.glob("../../../assets/Categorise/pool/*.pdf", {
  eager: true,
  import: "default",
});

const poolProjects = Array.from({ length: 32 }, (_, index) => {
  const number = index + 1;

  return {
    id: `pool-${number}`,
    number,
    title: `مشروع حمامات سباحة ${number}`,
    category: "حمامات السباحة",
    file: poolFiles[`../../../assets/Categorise/pool/${number}.pdf`],
    type: "pdf",
  };
});

export default poolProjects;
