import { projectSchema } from '../schema'

export default projectSchema.parse({
  slug: 'ghibli',
  name: 'Studio Ghibli',
  repo: 'studio-ghibli-codelab',
  tags: ['TypeScript', 'REST API'],
  order: 2,
  summary: {
    pt: 'Explorador de filmes consumindo a API pública do estúdio.',
    en: 'Film explorer consuming the studio public API.',
  },
  problem: {
    pt: 'Eu queria entender de verdade como consumir uma API externa: paginação, estados de carregamento, erro. Não só ler sobre isso.',
    en: 'I wanted to really understand how to consume an external API: pagination, loading states, errors. Not just read about it.',
  },
  did: {
    pt: 'Integrei a API com tratamento de carregamento e erro, e montei a navegação entre filmes e personagens. Foi aqui que os estados assíncronos fizeram sentido para mim.',
    en: 'Integrated the API with loading and error handling, and built navigation across films and characters. This is where async state clicked for me.',
  },
})
