import { defineConfig } from 'vitepress'
import { navbar } from './navbar'
import { sidebar } from './sidebar'

export default defineConfig({
    // These are app level configs.
    title: 'kbyakuya',
    description: 'kbyakuya',
    base: "/",
    lastUpdated: true,
    cleanUrls: 'without-subfolders',
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

    }
})
