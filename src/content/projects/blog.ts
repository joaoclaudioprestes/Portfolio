import { projectSchema } from '../schema'

export default projectSchema.parse({
  slug: 'blog',
  name: 'Blog',
  repo: 'blog-codelab',
  tags: ['Vue'],
  order: 4,
  summary: {
    pt: 'Base de blog reaproveitável, com feed e navegação limpos.',
    en: 'Reusable blog base with a clean feed and navigation.',
  },
  problem: {
    pt: 'Eu precisava de uma base que desse para reaproveitar, sem reinventar tudo a cada projeto.',
    en: 'I needed a base I could reuse without reinventing everything each project.',
  },
  did: {
    pt: 'Montei o feed de posts e a navegação em Vue, com a estrutura de componentes pensada para reúso.',
    en: 'Built the post feed and navigation in Vue, structuring components for reuse.',
  },
})
