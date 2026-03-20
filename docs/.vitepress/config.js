export default {
  title: "公众号文章导航",
  description: "我的公众号内容索引",

  themeConfig: {
    nav: [
      { text: "首页", link: "/" }
    ],

    sidebar: [
      {
        text: "文章目录",
        items: [
          { text: "全部文章", link: "/" }
        ]
      }
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/njuentrepreneurshipinstitute" }
    ]
  }
}