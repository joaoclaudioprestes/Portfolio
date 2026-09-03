import type { Locale } from './config'

/**
 * UI chrome only — section labels, buttons, static page copy, error pages.
 * Portfolio *records* (projects, journey) live in `src/content/` as validated,
 * bilingual data. See `src/content/schema.ts`.
 */
export type Dictionary = {
  role: string
  location: string
  nav: { projects: string; stack: string; journey: string; principles: string }
  intro: string[]
  contact: { text: string; cta: string }
  ui: {
    viewRepo: string
    allRepos: string
    now: string
    toggleTheme: string
    toggleLang: string
    langLabel: string
    projectsSoon: string
  }
  stack: { name: string; line: string }[]
  principles: { n: string; title: string; text: string }[]
  errors: {
    unexpected: {
      eyebrow: string
      title: string
      text: string
      retry: string
      home: string
    }
    notFound: { eyebrow: string; title: string; text: string; home: string }
  }
}

const pt: Dictionary = {
  role: 'Full Stack / ML Engineer',
  location: 'Sorocaba, SP · BR',
  nav: {
    projects: 'Projetos',
    stack: 'Stack',
    journey: 'Trajetória',
    principles: 'Princípios',
  },
  intro: [
    'Sou João Claudio Prestes, desenvolvedor de software com foco em Full Stack e Machine Learning. Nos últimos dois anos, na TV TEM, construí aplicações web em produção e pipelines de dados; mais recentemente, entrei na [@Apter](https://apter.com.br) para trabalhar com Python, automação e análise de dados.',
    'Fora do trabalho, estudo machine learning e arquitetura de sistemas. Gosto de entender como as coisas funcionam e de transformar esse conhecimento em soluções práticas.',
    'Ainda estou construindo minha trajetória. **Aqui você pode conhecer um pouco do que já construí e do que estou aprendendo pelo caminho.**',
  ],
  contact: {
    text: 'Aberto a oportunidades, colaborações e boas conversas.',
    cta: 'Manda um e-mail',
  },
  ui: {
    viewRepo: 'Ver no GitHub',
    allRepos: 'Todos os repositórios',
    now: 'Atual',
    toggleTheme: 'Alternar tema',
    toggleLang: 'Mudar idioma',
    langLabel: 'EN',
    projectsSoon: 'Em breve — seção em construção.',
  },
  stack: [
    {
      name: 'Front-end',
      line: 'TypeScript · React · Next.js · Angular · Vue · Tailwind · Sass',
    },
    {
      name: 'Back-end',
      line: 'Node.js · Express · Java · Spring Boot · Kotlin · Python · PHP',
    },
    {
      name: 'Dados & ML',
      line: 'PostgreSQL · MongoDB · MySQL · BigQuery · Redis · Kafka · RabbitMQ · Airflow · dbt · TensorFlow',
    },
    {
      name: 'Infra',
      line: 'Docker · Kubernetes · GitHub Actions · GCP · Linux · Git',
    },
  ],
  principles: [
    {
      n: '01',
      title: 'Entender antes de construir',
      text: 'A parte difícil raramente é o código. Prefiro gastar tempo entendendo o problema a escrever a primeira solução que aparece.',
    },
    {
      n: '02',
      title: 'Código que a próxima pessoa entende',
      text: 'Escrevo pensando em quem vai ler depois, inclusive eu daqui a seis meses. Clareza vale mais que esperteza.',
    },
    {
      n: '03',
      title: 'Aprender em público',
      text: 'Estudo fora do expediente e trago o que aprendo para o trabalho. Ficar parado não é opção.',
    },
  ],
  errors: {
    unexpected: {
      eyebrow: 'Erro inesperado',
      title: 'Algo deu errado',
      text: 'Ocorreu um erro ao carregar esta página. Você pode tentar de novo ou voltar para o início.',
      retry: 'Tentar novamente',
      home: 'Voltar para o início',
    },
    notFound: {
      eyebrow: 'Erro 404',
      title: 'Página não encontrada',
      text: 'A página que você procura não existe ou foi movida.',
      home: 'Voltar para o início',
    },
  },
}

const en: Dictionary = {
  role: 'Full Stack / ML Engineer',
  location: 'Sorocaba, SP · BR',
  nav: {
    projects: 'Projects',
    stack: 'Stack',
    journey: 'Journey',
    principles: 'Principles',
  },
  intro: [
    "I'm João Claudio Prestes, a software developer focused on Full Stack and Machine Learning. Over the last two years at TV TEM I built production web apps and data pipelines; more recently, I joined [@Apter](https://apter.com.br) to work with Python, automation, and data analysis.",
    'Outside work, I study machine learning and systems architecture. I like understanding how things work and turning that knowledge into practical solutions.',
    "I'm still building my path. **Here you can get a sense of what I've built so far and what I'm learning along the way.**",
  ],
  contact: {
    text: 'Open to opportunities, collaborations, and good conversations.',
    cta: 'Send me an email',
  },
  ui: {
    viewRepo: 'View on GitHub',
    allRepos: 'All repositories',
    now: 'Now',
    toggleTheme: 'Toggle theme',
    toggleLang: 'Switch language',
    langLabel: 'PT',
    projectsSoon: 'Coming soon — section under construction.',
  },
  stack: [
    {
      name: 'Frontend',
      line: 'TypeScript · React · Next.js · Angular · Vue · Tailwind · Sass',
    },
    {
      name: 'Backend',
      line: 'Node.js · Express · Java · Spring Boot · Kotlin · Python · PHP',
    },
    {
      name: 'Data & ML',
      line: 'PostgreSQL · MongoDB · MySQL · BigQuery · Redis · Kafka · RabbitMQ · Airflow · dbt · TensorFlow',
    },
    {
      name: 'Infra',
      line: 'Docker · Kubernetes · GitHub Actions · GCP · Linux · Git',
    },
  ],
  principles: [
    {
      n: '01',
      title: 'Understand before building',
      text: 'The hard part is rarely the code. I would rather spend time understanding the problem than ship the first solution that comes to mind.',
    },
    {
      n: '02',
      title: 'Code the next person can read',
      text: 'I write for whoever reads it later, including me six months from now. Clarity beats cleverness.',
    },
    {
      n: '03',
      title: 'Learn in public',
      text: 'I study outside work hours and bring what I learn back to the job. Standing still is not an option.',
    },
  ],
  errors: {
    unexpected: {
      eyebrow: 'Unexpected error',
      title: 'Something went wrong',
      text: 'An error occurred while loading this page. You can try again or go back home.',
      retry: 'Try again',
      home: 'Back to home',
    },
    notFound: {
      eyebrow: 'Error 404',
      title: 'Page not found',
      text: 'The page you are looking for does not exist or has moved.',
      home: 'Back to home',
    },
  },
}

export const dictionaries: Record<Locale, Dictionary> = { pt, en }
