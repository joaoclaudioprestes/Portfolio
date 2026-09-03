import { projectSchema } from '../schema'

export default projectSchema.parse({
  slug: 'login',
  name: 'Login UI',
  repo: 'login-codelab',
  tags: ['CSS'],
  order: 5,
  summary: {
    pt: 'Tela de autenticação construída só com CSS.',
    en: 'Authentication screen built with CSS alone.',
  },
  problem: {
    pt: 'Autenticação é a primeira tela que o usuário vê e quase sempre a mais descuidada. Quis fazer uma que respeitasse esse momento.',
    en: 'Auth is the first screen a user sees and almost always the most neglected. I wanted to make one that respected that moment.',
  },
  did: {
    pt: 'Construí a tela inteira em CSS puro, sem framework, explorando centralização, estados de foco e responsividade.',
    en: 'Built the whole screen in pure CSS, no framework, exploring centering, focus states, and responsive behaviour.',
  },
})
