module.exports = {
    title: 'Deploying Craft CMS',
    description: 'Docker images, tutorials, and best practices for deploying Craft CMS',
    themeConfig: {
        displayAllHeaders: true,
        sidebarDepth: 2,
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
        sidebar: ['/', 'reference/', 'images/', 'tutorials/'],
        repo: 'deployingcraftcms/deployingcraftcms.com',
        repoLabel: 'Contribute!',
        docsRepo: 'deployingcraftcms/deployingcraftcms.com',
        docsBranch: 'master',
        editLinks: true,
        editLinkText: 'Help improve this page!'
    },
    plugins: [
        [
            '@vuepress/google-analytics',
            {
                'ga': ''
            }
        ]
    ]
}
