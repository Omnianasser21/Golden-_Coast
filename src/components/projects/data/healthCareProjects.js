const healthCareFiles = import.meta.glob(
  "../../../assets/Categorise/health-care/*.pdf",
  {
    eager: true,
    import: "default",
  },
);

const healthCareProjects = Object.entries(healthCareFiles)
  .map(([path, file]) => {
    const fileName = path.split("/").pop();

    const number = parseInt(fileName.replace(".pdf", ""), 10);

    return {
      id: `health-${number}`,
      number,
      title: `مشروع أعمال صحية ${number}`,
      category: "الأعمال الصحية",
      file,
      type: "pdf",
    };
  })
  .sort((a, b) => a.number - b.number);

export default healthCareProjects;
