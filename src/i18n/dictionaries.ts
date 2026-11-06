import type { Locale } from './config'

/**
 * UI chrome only: section labels, buttons, static page copy, error pages.
 * Portfolio *records* (projects, journey) live in `src/content/` as validated,
 * bilingual data. See `src/content/schema.ts`.
 */
export type Dictionary = {
  role: string
  location: string
  nav: {
    repos: string
    stack: string
    journey: string
    education: string
    principles: string
    github: string
  }
  intro: string[]
  contact: { text: string; cta: string }
  ui: {
    allRepos: string
    now: string
    cv: string
    latest: string
    nowDoing: string
    toggleTheme: string
    toggleLang: string
    langLabel: string
    updated: string
    contributions: string
    less: string
    more: string
  }
  stack: { name: string; items: string[] }[]
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
  role: 'Engenheiro de Software (Full Stack) · ML Engineer',
  location: 'Sorocaba, SP · BR',
  nav: {
    repos: 'Repositórios recentes',
    stack: 'Stack',
    journey: 'Experiência',
    education: 'Formação',
    principles: 'Princípios',
    github: 'Atividade no GitHub',
  },
  intro: [
    'Sou João Claudio Prestes, **engenheiro de software full stack e ML Engineer**. Nos últimos dois anos, na [@TV TEM](https://redeglobo.globo.com/sp/tvtem/), **afiliada Globo**, coloquei aplicações web em produção e construí os pipelines de dados da emissora. Hoje, na [@Apter](https://apter.com.br), atuo em projetos de **AI enablement**, ajudando clientes a colocar IA para funcionar no dia a dia com Python, automação e dados.',
    'Fora do trabalho, dedico meu tempo a estudar machine learning e arquitetura de sistemas. Tenho interesse real em entender como as coisas funcionam por dentro e em aplicar isso na prática.',
  ],
  contact: {
    text: 'Aberto a oportunidades, colaborações e boas conversas.',
    cta: 'Manda um e-mail',
  },
  ui: {
    allRepos: 'Todos os repositórios',
    now: 'Atual',
    cv: 'Currículo',
    latest: 'Mais recente',
    nowDoing: 'Agora: AI enablement na Apter',
    toggleTheme: 'Alternar tema',
    toggleLang: 'Mudar idioma',
    langLabel: 'EN',
    updated: 'atualizado em',
    contributions: 'contribuições em',
    less: 'Menos',
    more: 'Mais',
  },
  stack: [
    {
      name: 'Front-end',
      items: [
        'TypeScript',
        'React',
        'Next.js',
        'Angular',
        'Vue',
        'Tailwind',
        'Sass',
      ],
    },
    {
      name: 'Back-end',
      items: [
        'Node.js',
        'Express',
        'Fastify',
        'Java',
        'Spring Boot',
        'Spring Security',
        'Kotlin',
        'Python',
        'PHP',
        'Zod',
        'Drizzle',
        'Swagger',
      ],
    },
    {
      name: 'Dados',
      items: [
        'PostgreSQL',
        'MongoDB',
        'MySQL',
        'BigQuery',
        'Redis',
        'Kafka',
        'RabbitMQ',
        'Airflow',
        'dbt',
        'Spark',
        'Power BI',
        'Looker',
      ],
    },
    {
      name: 'ML & IA',
      items: [
        'pandas',
        'Jupyter',
        'scikit-learn',
        'TensorFlow',
        'Google ADK',
        'MCP',
      ],
    },
    {
      name: 'Testes',
      items: ['pytest', 'Vitest', 'Testcontainers'],
    },
    {
      name: 'Infra',
      items: [
        'Docker',
        'Kubernetes',
        'GitHub Actions',
        'GCP',
        'Vercel',
        'Railway',
        'OpenTelemetry',
        'Grafana',
        'Micrometer',
        'Linux',
        'Git',
      ],
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
  role: 'Software Engineer (Full Stack) · ML Engineer',
  location: 'Sorocaba, SP · BR',
  nav: {
    repos: 'Recent repositories',
    stack: 'Stack',
    journey: 'Experience',
    education: 'Education',
    principles: 'Principles',
    github: 'GitHub Activity',
  },
  intro: [
    "I'm João Claudio Prestes, a **full stack software engineer and ML Engineer**. Over the last two years at [@TV TEM](https://redeglobo.globo.com/sp/tvtem/), a **Globo affiliate**, I shipped web applications to production and built the broadcaster's data pipelines. I'm now at [@Apter](https://apter.com.br), working on **AI enablement** projects, helping clients put AI to work day to day with Python, automation, and data.",
    'Outside work, I spend my time studying machine learning and systems architecture. I have a real interest in understanding how things work underneath and in putting that into practice.',
  ],
  contact: {
    text: 'Open to opportunities, collaborations, and good conversations.',
    cta: 'Send me an email',
  },
  ui: {
    allRepos: 'All repositories',
    now: 'Now',
    cv: 'Résumé',
    latest: 'Latest',
    nowDoing: 'Now: AI enablement at Apter',
    toggleTheme: 'Toggle theme',
    toggleLang: 'Switch language',
    langLabel: 'PT',
    updated: 'updated',
    contributions: 'contributions in',
    less: 'Less',
    more: 'More',
  },
  stack: [
    {
      name: 'Frontend',
      items: [
        'TypeScript',
        'React',
        'Next.js',
        'Angular',
        'Vue',
        'Tailwind',
        'Sass',
      ],
    },
    {
      name: 'Backend',
      items: [
        'Node.js',
        'Express',
        'Fastify',
        'Java',
        'Spring Boot',
        'Spring Security',
        'Kotlin',
        'Python',
        'PHP',
        'Zod',
        'Drizzle',
        'Swagger',
      ],
    },
    {
      name: 'Data',
      items: [
        'PostgreSQL',
        'MongoDB',
        'MySQL',
        'BigQuery',
        'Redis',
        'Kafka',
        'RabbitMQ',
        'Airflow',
        'dbt',
        'Spark',
        'Power BI',
        'Looker',
      ],
    },
    {
      name: 'ML & AI',
      items: [
        'pandas',
        'Jupyter',
        'scikit-learn',
        'TensorFlow',
        'Google ADK',
        'MCP',
      ],
    },
    {
      name: 'Testing',
      items: ['pytest', 'Vitest', 'Testcontainers'],
    },
    {
      name: 'Infra',
      items: [
        'Docker',
        'Kubernetes',
        'GitHub Actions',
        'GCP',
        'Vercel',
        'Railway',
        'OpenTelemetry',
        'Grafana',
        'Micrometer',
        'Linux',
        'Git',
      ],
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
