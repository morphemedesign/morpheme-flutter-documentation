// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Morpheme Flutter",
  tagline: "Create modular and scalable Flutter project with ease",
  url: "https://morphemedesign.github.io/",
  baseUrl: "/morpheme-flutter-documentation/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "morphemedesign", // Usually your GitHub org/user name.
  projectName: "morpheme-flutter-documentation", // Usually your repo name.
  deploymentBranch: "gh-pages",
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      prism: {
        additionalLanguages: ["dart"],
      },
      navbar: {
        title: "Morpheme Flutter",
        logo: {
          alt: "Morpheme",
          src: "img/logo.png",
        },
        items: [
          {
            to: "/docs/quick_start",
            activeBasePath: "docs/quick_satrt",
            position: "right",
            label: "Quick Start",
          },
          {
            to: "/docs/morpheme_cli/started",
            activeBasePath: "docs/morpheme_cli",
            position: "right",
            label: "CLI",
          },
          {
            to: "/docs/starter_kit/introduction",
            activeBasePath: "docs/starter_kit",
            position: "right",
            label: "Starter Kit",
          },
          {
            to: "/docs/morpheme_library/introduction",
            activeBasePath: "docs/morpheme_library",
            position: "right",
            label: "Library",
          },
          // {
          //   href: "https://gitsindonesia.github.io/flutter-ui-component/",
          //   position: "right",
          //   label: "UI Components",
          // },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Quick Start",
                to: "/docs/quick_start",
              },
              {
                label: "Morpheme CLI",
                to: "/docs/morpheme_cli/started",
              },
              {
                label: "Morpheme Flutter Starter Kit",
                to: "/docs/starter_kit/introduction",
              },
              {
                label: "Morpheme Library",
                to: "/docs/morpheme_library/introduction",
              },
            ],
          },
          {
            title: "Contact Us",
            items: [
              {
                label: "Morpheme Official Website",
                href: "https://morpheme.design/",
              },
            ],
          },
          {
            title: "Repositories",
            items: [
              {
                label: "Morpheme Flutter CLI",
                href: "https://github.com/morphemedesign/morpheme-flutter-cli",
              },
              {
                label: "Morpheme Flutter Library",
                href: "https://github.com/morphemedesign/morpheme-flutter-library",
              },
              {
                label: "Morpheme Flutter Starter Kit",
                href: "https://github.com/morphemedesign/morpheme-flutter",
              },
              {
                label: "Morpheme Flutter Documentation",
                href: "https://github.com/morphemedesign/morpheme-flutter-documentation",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Morpheme Design, Documentation built with Docusaurus.`,
      },
      // prism: {
      //   theme: lightCodeTheme,
      //   darkTheme: darkCodeTheme,
      // },
    }),
  plugins: [require.resolve("docusaurus-lunr-search")],
};

module.exports = config;
