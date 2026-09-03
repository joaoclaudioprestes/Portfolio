import { type JourneyEntry, journeyEntrySchema } from './schema'

/** Career + education timeline. Add a row = add an object here. */
export const journey: JourneyEntry[] = [
  journeyEntrySchema.parse({
    order: 1,
    ongoing: true,
    range: { pt: '2026 – hoje', en: '2026 – now' },
    role: { pt: 'System Analyst II', en: 'System Analyst II' },
    company: { pt: 'Apter', en: 'Apter' },
    location: 'Sorocaba, BR',
    mode: 'hybrid',
    description: [
      {
        pt: 'Desenvolvo e valido soluções em Python para automação, preparação e análise de dados.',
        en: 'Build and validate Python solutions for automation, data preparation, and analysis.',
      },
      {
        pt: 'Valido estatisticamente bases de dados e apoio aplicações de inteligência artificial.',
        en: 'Statistically validate datasets and support artificial-intelligence applications.',
      },
      {
        pt: 'Atuo como referência técnica da equipe, responsável pela qualidade das entregas e pela revisão de código.',
        en: "Act as the team's technical reference, owning delivery quality and code review.",
      },
      {
        pt: 'Conduzo kick-offs internos sob SCRUM e sou ponto focal operacional junto aos clientes.',
        en: 'Run internal SCRUM kick-offs and act as the operational point of contact for clients.',
      },
    ],
  }),
  journeyEntrySchema.parse({
    order: 2,
    ongoing: true,
    range: { pt: '2023 – hoje', en: '2023 – now' },
    role: { pt: 'Ciência da Computação', en: 'Computer Science' },
    company: { pt: 'Universidade Paulista', en: 'Universidade Paulista' },
    location: 'Sorocaba, BR',
    mode: 'onsite',
    description: [
      {
        pt: 'Algoritmos, estruturas de dados, programação (C, Java, Python) e paradigmas de desenvolvimento.',
        en: 'Algorithms, data structures, programming (C, Java, Python), and development paradigms.',
      },
      {
        pt: 'Engenharia de software, banco de dados, sistemas operacionais e redes de computadores.',
        en: 'Software engineering, databases, operating systems, and computer networks.',
      },
      {
        pt: 'Matemática para computação: cálculo, álgebra linear, probabilidade e estatística.',
        en: 'Mathematics for computing: calculus, linear algebra, probability, and statistics.',
      },
      {
        pt: 'Projetos práticos aplicando desenvolvimento de sistemas a problemas reais.',
        en: 'Hands-on projects applying systems development to real-world problems.',
      },
    ],
  }),
  journeyEntrySchema.parse({
    order: 3,
    range: { pt: '2025 – 2026', en: '2025 – 2026' },
    role: { pt: 'Desenvolvedor de Software', en: 'Software Developer' },
    company: { pt: 'TV TEM', en: 'TV TEM' },
    location: 'Sorocaba, BR',
    mode: 'onsite',
    description: [
      {
        pt: 'Desenvolvi aplicações web com React, Next.js e PHP, contribuindo em projetos digitais da emissora, incluindo Cidade Limpa e Experiência.',
        en: 'Developed web applications using React, Next.js, and PHP, contributing to digital projects for the broadcaster, including Cidade Limpa and Experiência.',
      },
      {
        pt: 'Contribuí para o desenvolvimento, manutenção e evolução de aplicações que apoiavam diferentes áreas e requisitos de negócio.',
        en: 'Contributed to the development, maintenance, and evolution of applications supporting different business areas and requirements.',
      },
      {
        pt: 'Colaborei em projetos de software, implementando novas funcionalidades, corrigindo problemas e melhorando continuamente as aplicações existentes.',
        en: 'Collaborated across software projects, implementing new features, fixing issues, and continuously improving existing applications.',
      },
    ],
  }),
  journeyEntrySchema.parse({
    order: 4,
    range: { pt: '2024 – 2025', en: '2024 – 2025' },
    role: {
      pt: 'Estágio em Engenharia de Software',
      en: 'Software Engineer Intern',
    },
    company: { pt: 'TV TEM', en: 'TV TEM' },
    location: 'Sorocaba, BR',
    mode: 'onsite',
    description: [
      {
        pt: 'Desenvolvi e mantive sistemas internos e aplicações web com React, Next.js e PHP, atuando em múltiplos projetos e necessidades de negócio da emissora.',
        en: 'Developed and maintained internal systems and web applications using React, Next.js, and PHP, working across multiple projects and business needs within the broadcaster.',
      },
      {
        pt: 'Liderei o design e o desenvolvimento do Data Lakehouse da emissora, construindo pipelines e processos de ingestão, transformação e disponibilização de dados.',
        en: "Led the design and development of the broadcaster's Data Lakehouse, building data pipelines and processes for data ingestion, transformation, and availability.",
      },
      {
        pt: 'Desenvolvi soluções de dados com Python, Apache Airflow, dbt, BigQuery e serviços do Google Cloud Platform (GCP).',
        en: 'Developed data solutions using Python, Apache Airflow, dbt, BigQuery, and Google Cloud Platform (GCP) services.',
      },
      {
        pt: 'Automatizei processos operacionais com scripts, RPA e integrações entre sistemas, reduzindo trabalho manual e aumentando a eficiência dos fluxos internos.',
        en: 'Automated operational processes through scripts, RPA, and system integrations, reducing manual work and improving the efficiency of internal workflows.',
      },
      {
        pt: 'Atuei de ponta a ponta nas soluções de software, da arquitetura e implementação à manutenção, melhoria contínua e automação.',
        en: 'Worked end-to-end on software solutions, from architecture and implementation to maintenance, continuous improvement, and automation.',
      },
    ],
  }),
  journeyEntrySchema.parse({
    order: 5,
    range: { pt: '2023 – 2024', en: '2023 – 2024' },
    role: { pt: 'Estágio em TI', en: 'IT Intern' },
    company: {
      pt: 'Prefeitura de Araçoiaba da Serra',
      en: 'Araçoiaba da Serra City Hall',
    },
    location: 'Araçoiaba da Serra, BR',
    mode: 'onsite',
    description: [
      {
        pt: 'Realizei manutenção e suporte a sistemas e infraestrutura de TI, garantindo estabilidade operacional.',
        en: 'Performed maintenance and provided support for systems and IT infrastructure, ensuring operational stability.',
      },
      {
        pt: 'Colaborei na configuração e administração de redes e servidores, otimizando desempenho e confiabilidade.',
        en: 'Collaborated in the configuration and administration of networks and servers, optimizing performance and reliability.',
      },
      {
        pt: 'Participei de testes e documentação de soluções para melhorar a eficiência de sistemas e processos.',
        en: 'Participated in testing and documentation of solutions to improve system efficiency and processes.',
      },
    ],
  }),
  journeyEntrySchema.parse({
    order: 6,
    range: { pt: '2020 – 2022', en: '2020 – 2022' },
    role: {
      pt: 'Técnico em Administração',
      en: 'Technical Degree in Business Administration',
    },
    company: { pt: 'ETEC Fernando Prestes', en: 'ETEC Fernando Prestes' },
    location: 'Sorocaba, BR',
    mode: 'onsite',
    description: [
      {
        pt: 'Curso técnico integrado ao ensino médio, com foco em gestão organizacional.',
        en: 'Technical program integrated with high school, focused on organizational management.',
      },
      {
        pt: 'Rotinas administrativas, gestão de processos, finanças, custos e recursos humanos.',
        en: 'Administrative routines, process management, finance, costs, and human resources.',
      },
      {
        pt: 'Marketing, logística, legislação empresarial e elaboração de plano de negócios.',
        en: 'Marketing, logistics, business law, and building a business plan.',
      },
      {
        pt: 'Base em empreendedorismo e organização de projetos, que depois levei para a tecnologia.',
        en: 'Grounding in entrepreneurship and project organization, later carried into tech.',
      },
    ],
  }),
]
