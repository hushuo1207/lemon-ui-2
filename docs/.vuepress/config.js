module.exports = {
  base:'/lemon-ui-2/',
  title: "Lemon-UI",
  description: "一个好用的UI框架",
  themeConfig: {
    logo: "/lemon.png",
    nav: [
      { text: "主页", link: "/" },
      { text: "文档", link: "/start/" },
      { text: "交流", link: "/https://google.com" },
    ],
    displayAllHeaders: true,
    sidebar: [ 
      {
        title: "入门", // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: [
          "/install/", 
          "/start/"
        ],
      },
      {
        title: "组件",
        collapsable: false,
        sidebarDepth: 0, 
        children: [
          "/components/buttondemo",
          "/components/tabsdemo",
          "/components/inputdemo",
          "/components/griddemo",
          "/components/layoutdemo",
          "/components/toastdemo",
          "/components/collapsedemo",
          "/components/popoverdemo",
        ],
      },
    ],
  },
};
