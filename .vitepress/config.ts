import { defineConfig } from 'vitepress'
import { navbar, navbar_zh } from './navbar'
import { sidebar, sidebar_zh } from './sidebar'

export default defineConfig({
    // These are app level configs.
    title: 'kbyakuya',
    description: 'kbyakuya',
    base: "/",
    lastUpdated: true,
    cleanUrls: true,
    head: [
        ['link', {
            rel: 'icon',
            href: '/favicon.ico',
        }],
        ["link", {
            rel: "stylesheet",
            href: "//unpkg.com/heti/umd/heti.min.css",
        },],
        ['meta', { name: 'theme-color', content: '#3c8772' }],
        // ['meta', { name: 'theme-color', content: '#ff64b9' }],
    ],
    themeConfig: {
        logo: '/logo/logo.jpg',
        nav: navbar,
        sidebar: sidebar,
        socialLinks: [
            { icon: 'github', link: 'https://github.com/kbyakuya/kbyakuya.github.io' },
        ],
        editLink: {
            pattern: 'https://github.com/kbyakuya/kbyakuya.github.io/tree/master/article/:path',
            text: 'Suggest changes to this page',
        },
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2023-present kbyakuya'
        },

    },
    locales: {
        root: {
            label: 'English',
            lang: 'en'
        },
        zh: {
            label: '中文',
            lang: 'zh', // optional, will be added  as `lang` attribute on `html` tag
            link: '/zh/', // default /fr/ -- shows on navbar translations menu, can be external

            // other locale specific properties...
            themeConfig: {
                nav: navbar_zh,
                sidebar: sidebar_zh,
                editLink: {
                    pattern: 'https://github.com/kbyakuya/kbyakuya.github.io/tree/master/article/:path',
                    text: '在 Github 编辑',
                },
                lastUpdatedText: '上次更新',
                docFooter: {
                    prev: '上一页',
                    next: '下一页'
                },
                darkModeSwitchLabel: '主题色切换',
                sidebarMenuLabel: '菜单',
                returnToTopLabel: '返回顶部',
                langMenuLabel: '切换语言',
                outlineTitle: '本页内容',
            }

        }
    },
})
