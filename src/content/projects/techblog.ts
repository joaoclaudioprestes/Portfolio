import { projectSchema } from '../schema'

export default projectSchema.parse({
  slug: 'techblog',
  name: 'TechBlog',
  repo: 'techblog-codelab',
  tags: ['TypeScript', 'React'],
  order: 1,
  summary: {
    pt: 'Blog de tecnologia com foco total na leitura.',
    en: 'A tech blog built entirely around reading.',
  },
  problem: {
    pt: 'Blogs de tecnologia costumam afogar o texto em banners, sidebars e sugestões. Eu queria o oposto: um lugar onde ler é a única coisa a fazer.',
    en: 'Tech blogs tend to drown the text in banners, sidebars, and suggestions. I wanted the opposite: a place where reading is the only thing to do.',
  },
  did: {
    pt: 'Construí a listagem e a página de leitura em TypeScript e React, com hierarquia tipográfica cuidada e uma linha de leitura confortável em qualquer tela.',
    en: 'Built the listing and reading view in TypeScript and React, with careful typographic hierarchy and a comfortable measure on any screen.',
  },
})
