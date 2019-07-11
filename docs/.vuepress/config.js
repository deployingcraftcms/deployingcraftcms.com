module.exports = {
    title: 'Deploying Craft CMS',
    description: 'Docker images, tutorials, and best practices for deploying Craft CMS',
    themeConfig: {
        displayAllHeaders: true,
        sidebarDepth: 1,
        nav: [{
                text: 'Home',
                link: '/'
            },
            {
                text: 'Tutorials',
                link: '/tutorials/'
            },
            {
                text: 'Docker Hub',
                link: 'https://google.com'
            },
        ],
        sidebar: ['/', 'images/', 'tutorials/', 'reference/'],
        repo: 'deployingcraftcms/deployingcraftcms.com',
        repoLabel: 'Contribute!',
        docsRepo: 'deployingcraftcms/deployingcraftcms.com',
        docsBranch: 'master',
        editLinks: true,
        editLinkText: 'Help improve this page!',
        lastUpdated: 'Last Updated',
        algolia: {
            apiKey: '64e043c4e6e36a70fe9c5819c0cb102a',
            indexName: 'deployingcraftcms'
        }
    },
    plugins: [
        [
            '@vuepress/google-analytics',
            {
                'ga': 'UA-143687854-1'
            }
        ]
    ]
}
