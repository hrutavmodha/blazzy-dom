import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
const config: Config = {
    title: 'Blazzy DOM',
    tagline: 'A library for building user interfaces',
    future: {
        v4: true
    },
    url: 'https://hrutavmodha.github.io/',
    baseUrl: '/',
    projectName: '/documentation/frontend/',
    organizationName: 'hrutavmodha',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    routeBasePath: '/',
                    sidebarPath: './sidebars.ts'
                }
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        navbar: {
            title: 'Blazzy DOM'
        },
        footer: {
            style: 'dark',
            copyright: `&copy; ${new Date().getFullYear()} Blazzy DOM`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};
export default config;