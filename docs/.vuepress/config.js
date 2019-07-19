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
                link: 'https://hub.docker.com/r/deployingcraftcms/php'
            },
        ],
        sidebar: [{
                title: 'Getting Started',
                collapsable: false,
                children: [
                    'reference/'
                ]
            },
            {
                title: 'Images',
                collapsable: false,
                children: [
                    'images/'
                ]
            }
        ],
        repo: 'deployingcraftcms/deployingcraftcms.com',
        repoLabel: 'Contribute!',
        docsRepo: 'deployingcraftcms/deployingcraftcms.com',
        docsBranch: 'master',
        editLinks: true,
        editLinkText: 'Help improve this page!',
        lastUpdated: 'Last Updated',
        algolia: {
            apiKey: '0e587fb4c9e3b6e24a05884c703dc685',
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
