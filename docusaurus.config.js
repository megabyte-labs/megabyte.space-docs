const path = require('path');
const prismic = require('@prismicio/client');
const fetch = require('node-fetch');
const fs = require('fs')

const BASE_URL = '/docs';

module.exports = {
  title: 'Megabyte Labs Documentation',
  tagline:
    'Documentation for projects encompassed in the Megabyte Labs eco-system',
  url: 'https://megabyte.space',
  baseUrl: `${BASE_URL}/`,
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    localeConfigs: {
      en: { label: 'English' },
    },
  },
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/meta/favicon.png',
  organizationName: 'megabyte-labs',
  projectName: 'megabyte.space-docs',
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
    },
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: 'Megabyte Labs logo',
        src: `/logos/megabyte-labs-text-docs-light.svg`,
        srcDark: `/logos/megabyte-labs-text-docs-dark.svg`,
        href: 'https://megabyte.space',
        target: '_self',
        width: 200,
        height: 24,
      },
      items: [
        {
          type: 'doc',
          docId: 'index',
          label: 'Docs',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'code',
          label: 'Code',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'cli/index',
          label: 'CLI',
          position: 'left',
        },
        {
          type: 'search',
          position: 'right',
        },
        {
          label: 'Support',
          position: 'right',
          items: [
            {
              href: 'https://megabyte.space/blog',
              label: 'Blog',
              target: '_self'
            },
            {
              href: 'https://megabyte.space/community',
              label: 'Community',
              target: '_self'
            },
            {
              href: 'https://megabyte.space/enterprise',
              label: 'Enterprise',
              target: '_self'
            }
          ],
          className: 'navbar__link--support',
        },
        {
          type: 'separator',
          position: 'right',
        },
        {
          type: 'iconLink',
          position: 'right',
          icon: {
            alt: 'Twitter logo',
            src: `/logos/twitter.svg`,
            href: 'https://twitter.com/MegabyteLabs',
            target: '_blank',
          },
        },
        {
          type: 'iconLink',
          position: 'right',
          icon: {
            alt: 'GitHub logo',
            src: `/logos/github.svg`,
            href: 'https://github.com/megabyte-labs',
            target: '_blank',
          },
        },
        {
          type: 'iconLink',
          position: 'right',
          icon: {
            alt: 'Discord logo',
            src: `/logos/discord.svg`,
            href: 'https://discord.com/channels/1077138419953713222/1078553488642027550',
            target: '_blank',
          },
        }
      ],
    },
    tagManager: {
      trackingID: 'GTM-NK36DH9',
    },
    prism: {
      theme: { plain: {}, styles: [] },
      // https://github.com/FormidableLabs/prism-react-renderer/blob/master/src/vendor/prism/includeLangs.js
      additionalLanguages: ['shell-session', 'http'],
    },
    algolia: {
      appId: '8BZ7E9LDWG',
      apiKey: '8c756cf51eeb75eae046480ad3d179e4',
      indexName: 'megabyte-labs',
      contextualSearch: true,
    },
  },
  plugins: [
    // 'docusaurus-plugin-sass',
    [
      'docusaurus-plugin-module-alias',
      {
        alias: {
          'styled-components': path.resolve(__dirname, './node_modules/styled-components'),
          react: path.resolve(__dirname, './node_modules/react'),
          'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
          '@components': path.resolve(__dirname, './src/components'),
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        routeBasePath: '/',
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: ({ versionDocsDirPath, docPath, locale }) => {
          if (locale != 'en') {
            return 'https://crowdin.com/project/megabyte-labs-docs';
          }
          if ((match = docPath.match(/apis\/(.*)\.md/)) != null) {
            if (match[1] === 'cookies' || match[1] === 'http') {
              return `https://github.com/megabyte-labs/megabyte.space-docs/edit/master/docs/apis/${match[1]}.md`;
            }
            return `https://github.com/megabyte-labs/megabyte.space-docs/edit/master/${match[1]}/README.md`;
          }
          if ((match = docPath.match(/cli\/commands\/(.*)\.md/)) != null) {
            return `https://github.com/megabyte-labs/megabyte.space-docs/edit/master/docs/cli/commands/${match[1].replace(
              '-',
              '/'
            )}.md`;
          }
          if ((match = docPath.match(/native\/(.*)\.md/)) != null) {
            return `https://github.com/megabyte-labs/megabyte.space-docs/edit/master/src/@awesome-cordova-plugins/plugins/${match[1]}/index.ts`;
          }
          return `https://github.com/megabyte-labs/megabyte.space-docs/edit/master/${versionDocsDirPath}/${docPath}`;
        },
        exclude: ['README.md'],
        lastVersion: 'current',
        versions: {
          current: {
            label: 'v1',
            banner: 'none',
          },
        },
      },
    ],
    '@docusaurus/plugin-content-pages',
    process.env.NODE_ENV === 'production' && '@docusaurus/plugin-debug',
    '@docusaurus/plugin-sitemap',
    '@ionic-internal/docusaurus-plugin-tag-manager',
    function (context, options) {
      return {
        name: 'ionic-docs-ads',
        async loadContent() {
          const repoName = 'ionicframeworkcom';
          const endpoint = prismic.getEndpoint(repoName);
          const client = prismic.createClient(endpoint, {
            fetch,
          });

          if (fs.existsSync('./local/docsad.prismic.json')) {
            const prismic = fs.readFileSync('./local/docsad.prismic.json')
            return JSON.parse(prismic.toString())
          } else {
            const docsAd = await client.getByType('docs_ad')
            fs.writeFileSync('./local/docsad.prismic.json', JSON.stringify(docsAd))
            return docsAd
          }
        },
        async contentLoaded({ content, actions: { setGlobalData, addRoute } }) {
          return setGlobalData({ prismicAds: content.results });
        },
      };
    },
    function(_, {id, ...options}) {
      return {
        name: 'docusaurus-plugin-sass-builtin',
        configureWebpack(_, isServer, utils) {
          const { getStyleLoaders } = utils;
          const isProd = process.env.NODE_ENV === 'production';
          return {
            module: {
              rules: [{
                test: /\.s[ca]ss$/,
                oneOf: [{
                  test: /\.module\.s[ca]ss$/,
                  use: [
                    ...getStyleLoaders(isServer, {
                      modules: {
                        localIdentName: isProd
                          ? `[local]_[hash:base64:4]`
                          : `[local]_[path][name]`,
                        exportOnlyLocals: isServer,
                      },
                      importLoaders: 2,
                      sourceMap: !isProd,
                    }), {
                      loader: 'sass-loader',
                      options: options || {}
                    }
                  ]
                }, {
                  use: [
                    ...getStyleLoaders(isServer), {
                      loader: 'sass-loader',
                      options: options || {}
                    }
                  ]
                }]
              }]
            }
          };
        }
      };
    }
  ].filter(Boolean),
  themes: [
    [
      //overriding the standard docusaurus-theme-classic to provide custom schema
      path.resolve(__dirname, 'docusaurus-theme-classic'),
      {
        customCss: [
          require.resolve('./node_modules/modern-normalize/modern-normalize.css'),
          require.resolve('./src/styles/custom.scss'),
        ],
      },
    ],
    path.resolve(__dirname, './node_modules/@docusaurus/theme-search-algolia'),
  ],
  customFields: {},
};
