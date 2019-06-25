export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d120874af6ea7bd7c21d670',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-p6aqyjta',
                  apiId: 'cc1a8f62-e19a-41e5-9414-8ca6f5d6687a'
                },
                {
                  buildHookId: '5d1208754808154a2db105b4',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-g4id41oc',
                  apiId: '5e205bf4-a446-480a-9cbf-b279272c0cf7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ggrgovski/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-g4id41oc.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
