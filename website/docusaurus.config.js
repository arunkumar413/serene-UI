// @ts-check
import path from 'path';
import {fileURLToPath} from 'url';
import {themes as prismThemes} from 'prism-react-renderer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Serene UI',
  tagline: 'A simple CSS library for composing HTML components',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://serene-ui.vercel.app',
  baseUrl: '/',

  organizationName: 'arunkumar413',
  projectName: 'serene-UI',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/normalize.css@8.0.1/normalize.css',
    },
    {
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
      type: 'text/css',
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'docs',
          editUrl:
            'https://github.com/arunkumar413/serene-UI/tree/main/website/',
        },
        blog: false,
        theme: {
          customCss: [
            path.resolve(__dirname, '../packages/css/dist/serene.css'),
            './src/css/custom.css',
          ],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/ser-ui-ver2.png',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Serene UI',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docs',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/arunkumar413/serene-UI',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting started',
                to: '/docs/getting-started',
              },
              {
                label: 'Buttons',
                to: '/docs/components/buttons',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/arunkumar413/serene-UI',
              },
              {
                label: 'jsDelivr',
                href: 'https://cdn.jsdelivr.net/npm/serene-ui@2/dist/serene.min.css',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Serene UI.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
