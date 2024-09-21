// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

const common = require("./common.js");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: common.title,
  tagline: common.description,
  favicon: common.icon,

  // Set the production url of your site here
  // TODO: Change this part
  url: "https://localhost:3000/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/osu-dictionary/",

  // GitHub pages deployment config.
  organizationName: "osu-atri", // Usually your GitHub org/user name.
  projectName: "osu-dictionary", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // The base URL to the project root.
          editUrl: "https://github.com/osu-atri/osu-dictionary/tree/main/",
        },
        blog: {
          showReadingTime: true,
          readingTime: ({ content, frontMatter, defaultReadingTime }) =>
            frontMatter.hide_reading_time
              ? undefined
              : defaultReadingTime({
                  content,
                  options: { wordsPerMinute: 450 },
                }),
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        // The application ID provided by Algolia
        appId: "E7I49QQPLB",

        // Public API key: it is safe to commit it
        apiKey: "8fe508be7b99bdde81af89a9d31d4592",

        indexName: "osu-atriio",

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: "external\\.com|domain\\.com",

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: "search",

        // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
        insights: false,

        //... other Algolia params
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      // Social card image
      image: common.cardbanner,
      navbar: {
        title: common.title,
        logo: {
          alt: "osu!dictionary Logo",
          src: common.icon,
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "mainSidebar",
            position: "left",
            label: "文档",
          },
          { to: "/docs/termtable", label: "术语表", position: "left" },
          // Must specify "index" since we use README.md
          {
            to: "/docs/lazer/index",
            label: "osu!lazer 指南",
            position: "left",
          },
          { to: "/blog", label: "新闻", position: "left" },
          {
            href: common.src,
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "文档",
            items: [
              {
                label: "术语表",
                to: "/docs",
              },
              {
                label: "新闻翻译",
                to: "/blog",
              },
            ],
          },
          {
            title: "关于我们",
            items: [
              {
                label: "GitHub",
                href: common.contact.github_org,
              },
              {
                label: "哔哩哔哩",
                href: common.contact.bilibili,
              },
              {
                label: "加入我们",
                href: common.contact.github_join,
              },
            ],
          },
          {
            title: "友情链接",
            items: [
              {
                label: "osu!wiki",
                href: "https://osu.ppy.sh/wiki",
              },
              {
                label: "藕酥汉化组",
                href: "https://github.com/osu-translate-zh",
              },
            ],
          },
        ],
        copyright:
          "This work is licensed under CC BY-NC 4.0, Built with Docusaurus.",
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ["csharp", "bash"],
      },
    }),
};

export default config;
