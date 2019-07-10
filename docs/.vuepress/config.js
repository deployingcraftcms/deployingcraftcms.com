module.exports = {
    title: 'Deploying Craft CMS',
    description: 'Docker images, tutorials, and best practices for deploying Craft CMS',
    themeConfig: {
        displayAllHeaders: true,
        sidebarDepth: 2,
        sidebar: ['/'],
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
