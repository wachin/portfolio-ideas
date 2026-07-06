export default {
  title: "Portfolio Ideas",
  description: "Una recopilación de excelentes portafolios para inspirarte",

  themeConfig: {
    logo: "/logo.svg",
    siteTitle: "Portfolio Ideas",
    nav: [
      { text: "Portafolios", link: "/portfolio" },
      { text: "Guía", link: "/guide" },
      { text: "Colaboradores", link: "/contributors" },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/Evavic44/portfolio-ideas" }],
    footer: {
      message: "Publicado bajo la licencia MIT.",
      copyright: "Copyright © 2022-presente Victor Eke | Portfolio Ideas",
    },
    markdown: {
      theme: "material-palenight",
      lineNumbers: true,
    },
  },
};
