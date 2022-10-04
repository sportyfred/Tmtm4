export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '633c82c5479b010ccd7f2d26',
                  title: 'Sanity Studio',
                  name: 'tmtm-4-studio',
                  apiId: '62cea78a-ebfa-4f9b-852b-3f1b56597ee0'
                },
                {
                  buildHookId: '633c82c53df2c80cc11a3034',
                  title: 'Blog Website',
                  name: 'tmtm-4',
                  apiId: '98649d46-0847-438d-9fc0-71374d7dbe7f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sportyfred/Tmtm4',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://tmtm-4.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
