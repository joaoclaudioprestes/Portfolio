import { projectSchema } from '../schema'

export default projectSchema.parse({
  slug: 'jordan',
  name: 'Air Jordan',
  repo: 'jordan-shoes-codelab',
  tags: ['Vue'],
  order: 3,
  summary: {
    pt: 'Landing page de produto, exercício de tipografia e composição.',
    en: 'Product landing page, an exercise in type and composition.',
  },
  problem: {
    pt: 'Um exercício deliberado de detalhe visual: quanta presença uma landing page consegue ter só com layout e tipografia?',
    en: 'A deliberate exercise in visual detail: how much presence can a landing page have using layout and typography alone?',
  },
  did: {
    pt: 'Trabalhei composição, ritmo tipográfico e proporção em Vue, sem biblioteca de UI. O foco era treinar o olho para espaçamento e hierarquia.',
    en: 'Worked on composition, typographic rhythm, and proportion in Vue, with no UI library. The point was training my eye for spacing and hierarchy.',
  },
})
