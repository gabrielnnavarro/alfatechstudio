// Número central do WhatsApp usado por todos os pontos de orçamento.
const WHATSAPP_NUMBER = "5511976102377";


// Todo o conteúdo traduzível da interface fica centralizado aqui para manter PT e EN alinhados.
const translations = {
  pt: {
    pageTitle: "ALFA TECH Studio | Produto Digital, Sistemas e Automação Sob Medida",
    pageDescription:
      "ALFA TECH Studio projeta sites, plataformas, apps, automações e integrações com foco em performance, acessibilidade, documentação e escala.",
    brandName: "ALFA TECH Studio",
    brandTag: "Produto digital, automação e escala",
    themeButtonLight: "Modo claro",
    themeButtonDark: "Modo escuro",
    eyebrow: "Engenharia digital para produto, operação e crescimento",
    heroTitle: "Software sob medida para empresas que precisam lançar, integrar e escalar.",
    heroText:
      "Projetamos sites, plataformas, apps, automações e sistemas com arquitetura clara, performance, acessibilidade e documentação para evolução real.",
    heroCta: "Pedir orçamento no WhatsApp",
    heroSecondary: "Ver serviços",
    heroPoint1: "Arquitetura pensada para crescer sem retrabalho",
    heroPoint2: "Comunicação bilíngue para times locais e globais",
    heroPoint3: "Qualidade técnica, handoff e suporte contínuo",
    panelLabel: "Padrão de entrega",
    panelTitle: "Discovery, engenharia e evolução contínua",
    panelText:
      "Pesquisa, UX, arquitetura, desenvolvimento, QA, integrações e observabilidade no mesmo fluxo.",
    miniCard1: "Sites institucionais, portais e produtos digitais",
    miniCard2: "Aplicativos, jornadas mobile e operação em campo",
    miniCard3: "Infraestrutura, APIs, dados e observabilidade",
    miniCard4: "Automação, IA aplicada e ganho de produtividade",
    infoStripTitle: "Estratégia, engenharia e execução no mesmo projeto.",
    infoStripText:
      "Unimos UX, desenvolvimento, cloud, automação e integração para transformar demanda em software sólido, utilizável e fácil de evoluir.",
    priorityEyebrow: "Prioridades",
    priorityTitle: "Escolha o contexto e veja a estrutura técnica recomendada",
    priorityText:
      "Empresas e iniciativas educacionais valorizam leitura rápida, impacto claro e processo consistente. Este mapa resume a combinação de entregas mais adequada para cada cenário.",
    priorityTablistLabel: "Cenários do projeto",
    priorityBadge: "Cenário ativo",
    priorityOutcomesTitle: "Resultados esperados",
    priorityServicesTitle: "Frentes recomendadas",
    priorityModelTitle: "Modelo de execução",
    prioritySignalsTitle: "Padrões valorizados",
    servicesEyebrow: "Serviços",
    servicesTitle: "Frentes que entregam valor em produto, operação e negócio",
    servicesText:
      "Do primeiro site institucional até sistemas críticos com integrações e automação, organizamos a stack pela necessidade real do projeto.",
    featuredEyebrow: "Soluções",
    featuredTitle: "Soluções desenhadas para receita, eficiência e escala",
    featuredText:
      "Cada entrega é organizada conforme operação, meta de negócio, maturidade técnica e necessidade de integração.",
    serviceButton: "Pedir orçamento",
    processEyebrow: "Processo",
    processTitle: "Processo claro para reduzir risco e acelerar decisão",
    processStep1Title: "Diagnóstico",
    processStep1Text:
      "Mapeamos contexto, usuários, restrições, integrações e objetivos de negócio.",
    processStep2Title: "Arquitetura",
    processStep2Text:
      "Definimos stack, experiência, dados, fluxos críticos e estratégia de entrega.",
    processStep3Title: "Execução",
    processStep3Text:
      "Construímos com QA, revisão, responsividade, performance e integrações consistentes.",
    processStep4Title: "Evolução",
    processStep4Text:
      "Publicamos, acompanhamos, documentamos e priorizamos a próxima etapa com segurança.",
    deliveryEyebrow: "Modelos",
    deliveryTitle: "Formatos de execução alinhados à maturidade do projeto",
    deliveryText:
      "A forma de trabalhar muda conforme o momento do negócio, o risco técnico e a velocidade exigida.",
    industriesEyebrow: "Setores",
    industriesTitle: "Contextos em que produto, operação e experiência precisam andar juntos",
    industriesText:
      "Aplicamos o mesmo núcleo de engenharia em cenários comerciais, operacionais e educacionais, adaptando o desenho do sistema ao uso real.",
    stackEyebrow: "Stack",
    stackTitle: "Stack organizada por problema, não por modismo",
    stackText:
      "A tecnologia entra como meio. O que orienta a escolha é manutenção, clareza arquitetural, integração e capacidade de crescimento.",
    aboutEyebrow: "ALFA TECH Studio",
    aboutTitle: "Parceiro técnico para empresas, produtos e iniciativas educacionais",
    aboutText:
      "Atuamos em lançamentos, modernização, automação e evolução contínua, mantendo clareza de arquitetura, documentação e transferência de conhecimento.",
    aboutItem1Title: "Decisão técnica com critério",
    aboutItem1Text:
      "Stack, framework e arquitetura são escolhidos por aderência, manutenção e custo de evolução.",
    aboutItem2Title: "Entrega auditável",
    aboutItem2Text:
      "Organizamos backlog, ambientes, integrações, documentação e handoff para o projeto continuar saudável.",
    aboutItem3Title: "Impacto observável",
    aboutItem3Text:
      "Cada entrega precisa melhorar aquisição, operação, produtividade ou experiência do usuário final.",
    faqEyebrow: "FAQ",
    faqTitle: "Perguntas comuns antes de iniciar um projeto",
    faqText:
      "As respostas abaixo antecipam pontos que empresas, equipes internas e instituições costumam avaliar antes de contratar.",
    briefEyebrow: "Briefing rápido",
    briefTitle: "Envie um briefing estruturado e acelere a análise técnica",
    briefText:
      "Um pedido claro reduz retrabalho, melhora a estimativa inicial e ajuda a priorizar a arquitetura certa desde o começo.",
    briefNameLabel: "Seu nome",
    briefCompanyLabel: "Empresa",
    briefServiceLabel: "Tipo de projeto",
    briefSummaryLabel: "Resumo do que precisa",
    briefNote:
      "O formulário prepara a mensagem no idioma atual com os campos essenciais para uma análise inicial mais rápida.",
    briefSubmit: "Enviar briefing no WhatsApp",
    briefNamePlaceholder: "Ex.: Gabriel Navarro",
    briefCompanyPlaceholder: "Ex.: ALFA TECH Studio",
    briefSummaryPlaceholder:
      "Descreva objetivo, público, funcionalidades, integrações e qualquer restrição importante.",
    briefServicePlaceholder: "Selecione a frente principal do projeto",
    briefMessageIntro:
      "Olá, quero solicitar uma análise e um orçamento com a ALFA TECH Studio. Segue um briefing inicial do projeto:",
    briefMessageName: "Nome",
    briefMessageCompany: "Empresa",
    briefMessageService: "Tipo de projeto",
    briefMessageSummary: "Resumo",
    ctaEyebrow: "Próximo passo",
    ctaTitle: "Descreva o contexto do projeto e receba um direcionamento técnico-comercial",
    ctaText:
      "Seja para empresa, operação interna, produto digital ou iniciativa educacional, a conversa já começa com o contexto certo.",
    ctaButton: "Solicitar orçamento",
    footerLegal: "Todos os direitos reservados.",
    footerText:
      "Desenvolvimento sob medida para web, mobile, sistemas, automação e integração.",
    footerTopLink: "Voltar ao topo",
    footerServicesLink: "Serviços",
    footerFaqLink: "FAQ",
    footerNavAria: "Links do rodapé",
    floatingWhatsApp: "WhatsApp",
    quoteMessage:
      "Olá, quero solicitar uma análise inicial e um orçamento para um projeto com a ALFA TECH Studio.",
    serviceQuoteMessage:
      "Olá, quero solicitar uma análise inicial e um orçamento para o serviço de {service}.",
    languageLabel: "EN",
    themeToggleLabel: "Alternar tema",
    switchLanguageAria: "Switch language to English"
  },
  en: {
    pageTitle: "ALFA TECH Studio | Digital Products, Systems, and Automation",
    pageDescription:
      "ALFA TECH Studio designs websites, platforms, apps, automations, and integrations with focus on performance, accessibility, documentation, and scale.",
    brandName: "ALFA TECH Studio",
    brandTag: "Digital products, automation, and scale",
    themeButtonLight: "Light mode",
    themeButtonDark: "Dark mode",
    eyebrow: "Digital engineering for products, operations, and growth",
    heroTitle: "Custom software for companies that need to launch, integrate, and scale.",
    heroText:
      "We design websites, platforms, apps, automations, and systems with clear architecture, performance, accessibility, and documentation for long-term evolution.",
    heroCta: "Request a quote on WhatsApp",
    heroSecondary: "See services",
    heroPoint1: "Architecture designed to grow without costly rework",
    heroPoint2: "Bilingual communication for local and global teams",
    heroPoint3: "Technical quality, handoff, and continuous support",
    panelLabel: "Delivery standard",
    panelTitle: "Discovery, engineering, and continuous evolution",
    panelText:
      "Research, UX, architecture, development, QA, integrations, and observability in the same delivery flow.",
    miniCard1: "Institutional sites, portals, and digital products",
    miniCard2: "Applications, mobile journeys, and field operations",
    miniCard3: "Infrastructure, APIs, data, and observability",
    miniCard4: "Automation, applied AI, and productivity gains",
    infoStripTitle: "Strategy, engineering, and execution in the same project.",
    infoStripText:
      "We combine UX, development, cloud, automation, and integrations to turn demand into software that is solid, usable, and easy to evolve.",
    priorityEyebrow: "Priorities",
    priorityTitle: "Choose the context and see the recommended technical structure",
    priorityText:
      "Companies and educational initiatives value fast scanning, clear impact, and consistent process. This map summarizes the right mix of deliveries for each scenario.",
    priorityTablistLabel: "Project scenarios",
    priorityBadge: "Active scenario",
    priorityOutcomesTitle: "Expected outcomes",
    priorityServicesTitle: "Recommended workstreams",
    priorityModelTitle: "Delivery model",
    prioritySignalsTitle: "Valued standards",
    servicesEyebrow: "Services",
    servicesTitle: "Workstreams that create value across product, operations, and business",
    servicesText:
      "From a first institutional website to critical systems with integrations and automation, we organize the stack around the real needs of the project.",
    featuredEyebrow: "Solutions",
    featuredTitle: "Solutions designed for revenue, efficiency, and scale",
    featuredText:
      "Each delivery is structured around operations, business goals, technical maturity, and integration needs.",
    serviceButton: "Request quote",
    processEyebrow: "Process",
    processTitle: "A clear process to reduce risk and speed up decisions",
    processStep1Title: "Discovery",
    processStep1Text:
      "We map the context, users, constraints, integrations, and business objectives.",
    processStep2Title: "Architecture",
    processStep2Text:
      "We define the stack, experience, data flows, critical paths, and delivery strategy.",
    processStep3Title: "Execution",
    processStep3Text:
      "We build with QA, review, responsiveness, performance, and reliable integrations.",
    processStep4Title: "Scale",
    processStep4Text:
      "We launch, monitor, document, and prioritize the next step with confidence.",
    deliveryEyebrow: "Models",
    deliveryTitle: "Execution formats aligned with project maturity",
    deliveryText:
      "The way we work changes according to business timing, technical risk, and the speed required.",
    industriesEyebrow: "Industries",
    industriesTitle: "Contexts where product, operations, and experience need to move together",
    industriesText:
      "We apply the same engineering core across commercial, operational, and educational contexts, adapting the system design to the real use case.",
    stackEyebrow: "Stack",
    stackTitle: "A stack organized around the problem, not around hype",
    stackText:
      "Technology is the medium. The main criteria are maintainability, architectural clarity, integration, and room to grow.",
    aboutEyebrow: "ALFA TECH Studio",
    aboutTitle: "A technical partner for companies, products, and educational initiatives",
    aboutText:
      "We work across launches, modernization, automation, and continuous evolution while keeping architecture, documentation, and knowledge transfer clear.",
    aboutItem1Title: "Deliberate technical decisions",
    aboutItem1Text:
      "Stack, framework, and architecture are chosen for fit, maintainability, and the cost of future evolution.",
    aboutItem2Title: "Auditable delivery",
    aboutItem2Text:
      "We organize backlogs, environments, integrations, documentation, and handoff so the project remains healthy.",
    aboutItem3Title: "Observable impact",
    aboutItem3Text:
      "Every delivery should improve acquisition, operations, productivity, or end-user experience.",
    faqEyebrow: "FAQ",
    faqTitle: "Common questions before starting a project",
    faqText:
      "The answers below anticipate points that companies, internal teams, and institutions usually evaluate before hiring.",
    briefEyebrow: "Quick brief",
    briefTitle: "Send a structured brief and speed up the technical assessment",
    briefText:
      "A clear request reduces rework, improves the first estimate, and helps prioritize the right architecture from the start.",
    briefNameLabel: "Your name",
    briefCompanyLabel: "Company",
    briefServiceLabel: "Project type",
    briefSummaryLabel: "Project summary",
    briefNote:
      "This form prepares the message in the current language with the essential fields for a faster initial assessment.",
    briefSubmit: "Send brief on WhatsApp",
    briefNamePlaceholder: "Ex.: Gabriel Navarro",
    briefCompanyPlaceholder: "Ex.: Northwind Operations",
    briefSummaryPlaceholder:
      "Describe goals, users, features, integrations, and any important constraints.",
    briefServicePlaceholder: "Select the main project workstream",
    briefMessageIntro:
      "Hello, I would like to request an initial assessment and a quote from ALFA TECH Studio. Here is a first project brief:",
    briefMessageName: "Name",
    briefMessageCompany: "Company",
    briefMessageService: "Project type",
    briefMessageSummary: "Summary",
    ctaEyebrow: "Next step",
    ctaTitle: "Describe the project context and receive technical-commercial guidance",
    ctaText:
      "Whether this is for a company, an internal operation, a digital product, or an educational initiative, the conversation starts with the right context.",
    ctaButton: "Request a quote",
    footerLegal: "All rights reserved.",
    footerText:
      "Custom development for web, mobile, systems, automation, and integration.",
    footerTopLink: "Back to top",
    footerServicesLink: "Services",
    footerFaqLink: "FAQ",
    footerNavAria: "Footer links",
    floatingWhatsApp: "WhatsApp",
    quoteMessage:
      "Hello, I would like to request an initial assessment and a quote for a project with ALFA TECH Studio.",
    serviceQuoteMessage:
      "Hello, I would like to request an initial assessment and a quote for the {service} service.",
    languageLabel: "PT",
    themeToggleLabel: "Toggle theme",
    switchLanguageAria: "Mudar idioma para português"
  }
};

// Catálogo de serviços renderizado em cards com mensagens localizadas para o WhatsApp.
const services = [
  {
    tag: { pt: "Web", en: "Web" },
    title: { pt: "Sites e Sistemas Web", en: "Websites and Web Systems" },
    description: {
      pt: "Landing pages, portais, áreas logadas, marketplaces, SaaS e sistemas administrativos.",
      en: "Landing pages, portals, authenticated areas, marketplaces, SaaS products, and admin systems."
    },
    stack: {
      pt: "Front-end, back-end e integrações",
      en: "Front-end, back-end, and integrations"
    }
  },
  {
    tag: { pt: "Mobile", en: "Mobile" },
    title: { pt: "Aplicativos Mobile", en: "Mobile Applications" },
    description: {
      pt: "Apps nativos e híbridos para operação interna, vendas, serviços e experiência do cliente.",
      en: "Native and hybrid apps for internal operations, sales, services, and customer experience."
    },
    stack: {
      pt: "iOS, Android e apps híbridos",
      en: "iOS, Android, and hybrid apps"
    }
  },
  {
    tag: { pt: "E-commerce", en: "E-commerce" },
    title: { pt: "Lojas Virtuais", en: "Online Stores" },
    description: {
      pt: "E-commerce sob medida, checkout, catálogo, pagamentos, logística e integrações comerciais.",
      en: "Custom e-commerce, checkout, catalog, payments, logistics, and commercial integrations."
    },
    stack: {
      pt: "Catálogo, pagamento e operação",
      en: "Catalog, payment, and operations"
    }
  },
  {
    tag: { pt: "API", en: "API" },
    title: { pt: "APIs e Integrações", en: "APIs and Integrations" },
    description: {
      pt: "Conectamos ERPs, CRMs, gateways, plataformas legadas e qualquer fluxo entre sistemas.",
      en: "We connect ERPs, CRMs, gateways, legacy platforms, and any workflow between systems."
    },
    stack: {
      pt: "REST, GraphQL, webhooks e middleware",
      en: "REST, GraphQL, webhooks, and middleware"
    }
  },
  {
    tag: { pt: "Automação", en: "Automation" },
    title: { pt: "Automação de Processos", en: "Process Automation" },
    description: {
      pt: "Automatizamos tarefas repetitivas, fluxos operacionais, notificações e rotinas internas.",
      en: "We automate repetitive tasks, operational flows, notifications, and internal routines."
    },
    stack: {
      pt: "Bots, scripts e workflows",
      en: "Bots, scripts, and workflows"
    }
  },
  {
    tag: { pt: "AI", en: "AI" },
    title: { pt: "Soluções com IA", en: "AI Solutions" },
    description: {
      pt: "Assistentes, atendimento inteligente, análise de dados, geração de conteúdo e produtividade.",
      en: "Assistants, smart support, data analysis, content generation, and productivity tools."
    },
    stack: {
      pt: "LLMs, automação e copilots",
      en: "LLMs, automation, and copilots"
    }
  },
  {
    tag: { pt: "Dados", en: "Data" },
    title: { pt: "Dashboards e Dados", en: "Dashboards and Data" },
    description: {
      pt: "KPIs, BI, relatórios executivos, pipelines e visualização para apoiar decisão de negócio.",
      en: "KPIs, BI, executive reports, pipelines, and visualization to support business decisions."
    },
    stack: {
      pt: "ETL, analytics e visualização",
      en: "ETL, analytics, and visualization"
    }
  },
  {
    tag: { pt: "Cloud", en: "Cloud" },
    title: { pt: "Cloud e DevOps", en: "Cloud and DevOps" },
    description: {
      pt: "Deploy, infraestrutura, observabilidade, CI/CD, containers e escalabilidade de ambiente.",
      en: "Deployment, infrastructure, observability, CI/CD, containers, and environment scalability."
    },
    stack: {
      pt: "Infraestrutura e entrega contínua",
      en: "Infrastructure and continuous delivery"
    }
  },
  {
    tag: { pt: "Suporte", en: "Support" },
    title: { pt: "Manutenção e Evolução", en: "Maintenance and Evolution" },
    description: {
      pt: "Correções, melhorias, refatoração, performance e expansão de produtos já existentes.",
      en: "Fixes, improvements, refactoring, performance, and expansion of existing products."
    },
    stack: {
      pt: "Sustentação e modernização",
      en: "Support and modernization"
    }
  }
];

// Blocos de soluções em destaque para complementar a oferta principal.
const featuredSolutions = [
  {
    badge: { pt: "Web & SaaS", en: "Web & SaaS" },
    title: {
      pt: "Plataformas web com operação completa",
      en: "Web platforms with complete operations"
    },
    description: {
      pt: "Estruturamos produtos com painel administrativo, autenticação, áreas logadas, APIs e integrações de negócio.",
      en: "We structure products with admin panels, authentication, private areas, APIs, and business integrations."
    },
    bullets: {
      pt: [
        "Portal institucional, comercial e operacional no mesmo ecossistema",
        "Painéis, permissões, CRM, pagamentos e automações",
        "Arquitetura preparada para evolução contínua"
      ],
      en: [
        "Institutional, commercial, and operational flows in the same ecosystem",
        "Dashboards, permissions, CRM, payments, and automations",
        "Architecture prepared for continuous evolution"
      ]
    },
    tags: {
      pt: ["SaaS", "API", "Admin", "Pagamentos"],
      en: ["SaaS", "API", "Admin", "Payments"]
    }
  },
  {
    badge: { pt: "Mobile & Campo", en: "Mobile & Field" },
    title: {
      pt: "Apps conectados à operação real",
      en: "Apps connected to real operations"
    },
    description: {
      pt: "Criamos aplicativos para força de vendas, atendimento, logística, serviços e experiência do cliente.",
      en: "We build apps for sales teams, support, logistics, services, and customer experience."
    },
    bullets: {
      pt: [
        "Fluxos mobile integrados com sistemas web e ERPs",
        "Sincronização, notificações e rotinas operacionais",
        "Experiência pensada para uso em campo ou backoffice"
      ],
      en: [
        "Mobile flows integrated with web systems and ERPs",
        "Sync, notifications, and operational routines",
        "Experience designed for field or back-office use"
      ]
    },
    tags: {
      pt: ["iOS", "Android", "Notificações", "Integrações"],
      en: ["iOS", "Android", "Notifications", "Integrations"]
    }
  },
  {
    badge: { pt: "Dados & IA", en: "Data & AI" },
    title: {
      pt: "Automação, inteligência e produtividade",
      en: "Automation, intelligence, and productivity"
    },
    description: {
      pt: "Conectamos dados, LLMs, fluxos automáticos e painéis executivos para acelerar decisões e reduzir trabalho manual.",
      en: "We connect data, LLMs, automated flows, and executive dashboards to accelerate decisions and reduce manual work."
    },
    bullets: {
      pt: [
        "Assistentes internos, atendimento e workflows inteligentes",
        "Dashboards, pipelines e leitura operacional de dados",
        "Integração entre cloud, automação e camada de negócio"
      ],
      en: [
        "Internal assistants, support, and intelligent workflows",
        "Dashboards, pipelines, and operational data visibility",
        "Integration across cloud, automation, and business logic"
      ]
    },
    tags: {
      pt: ["LLMs", "BI", "Cloud", "Automação"],
      en: ["LLMs", "BI", "Cloud", "Automation"]
    }
  }
];

// Modelos de contratação para diferentes cenários de execução.
const deliveryModels = [
  {
    kicker: { pt: "Escopo fechado", en: "Fixed scope" },
    title: { pt: "Projeto com objetivo, prazo e entrega definidos", en: "Project with defined scope, timeline, and delivery" },
    description: {
      pt: "Ideal para empresas que já sabem o que precisam construir e querem previsibilidade de execução.",
      en: "Ideal for companies that already know what they need to build and want execution predictability."
    },
    bullets: {
      pt: [
        "Descoberta, escopo e cronograma organizados desde o início",
        "Entregas por etapa com alinhamento comercial e técnico",
        "Boa aderência para sites, sistemas, apps e automações sob medida"
      ],
      en: [
        "Discovery, scope, and timeline organized from the start",
        "Stage-based deliveries with commercial and technical alignment",
        "Strong fit for websites, systems, apps, and custom automations"
      ]
    }
  },
  {
    kicker: { pt: "Time dedicado", en: "Dedicated team" },
    title: { pt: "Squad técnico para acelerar produto e operação", en: "Technical squad to accelerate product and operations" },
    description: {
      pt: "Funciona bem quando a empresa precisa ganhar velocidade de execução e manter fila contínua de evolução.",
      en: "Works well when the company needs more execution speed and a continuous evolution pipeline."
    },
    bullets: {
      pt: [
        "Capacidade contínua de desenvolvimento e priorização",
        "Integração com processo interno, stakeholders e backlog",
        "Boa aderência para produto digital, operação e escala"
      ],
      en: [
        "Continuous development capacity and prioritization",
        "Integration with internal process, stakeholders, and backlog",
        "Strong fit for digital products, operations, and scaling"
      ]
    }
  },
  {
    kicker: { pt: "Evolução contínua", en: "Continuous evolution" },
    title: { pt: "Modernização, manutenção e crescimento do que já existe", en: "Modernization, maintenance, and growth for what already exists" },
    description: {
      pt: "Perfeito para quem já tem sistema, site ou app rodando e precisa melhorar qualidade, performance e capacidade de negócio.",
      en: "Perfect for teams that already have a system, site, or app running and need better quality, performance, and business capacity."
    },
    bullets: {
      pt: [
        "Correções, refatoração, observabilidade e ganho de performance",
        "Integração de novas frentes sem recomeçar do zero",
        "Sustentação técnica com visão comercial de longo prazo"
      ],
      en: [
        "Fixes, refactoring, observability, and performance gains",
        "New integrations without restarting from zero",
        "Technical support with long-term commercial perspective"
      ]
    }
  }
];

// Segmentos e contextos de negócio atendidos com mais frequência.
const industries = [
  {
    kicker: { pt: "Serviços", en: "Services" },
    title: { pt: "Empresas de serviços e operações comerciais", en: "Service companies and commercial operations" },
    description: {
      pt: "Sistemas para orçamento, agendamento, relacionamento, contratos, atendimento e execução operacional.",
      en: "Systems for quoting, scheduling, relationship management, contracts, support, and operational execution."
    },
    tags: {
      pt: ["Orçamento", "Agendamento", "CRM", "Atendimento"],
      en: ["Quoting", "Scheduling", "CRM", "Support"]
    }
  },
  {
    kicker: { pt: "Varejo", en: "Retail" },
    title: { pt: "Varejo, catálogo e e-commerce", en: "Retail, catalog, and e-commerce" },
    description: {
      pt: "Plataformas de venda, catálogos, integrações com pagamento, logística e operação comercial.",
      en: "Sales platforms, catalogs, and integrations with payments, logistics, and commercial operations."
    },
    tags: {
      pt: ["Checkout", "Catálogo", "ERP", "Pagamentos"],
      en: ["Checkout", "Catalog", "ERP", "Payments"]
    }
  },
  {
    kicker: { pt: "Saúde", en: "Health" },
    title: { pt: "Saúde, bem-estar e atendimento recorrente", en: "Health, wellness, and recurring care" },
    description: {
      pt: "Jornadas digitais para agendamento, prontuário operacional, comunicação e retenção de clientes.",
      en: "Digital journeys for scheduling, operational records, communication, and client retention."
    },
    tags: {
      pt: ["Agenda", "Portal", "Comunicação", "Retenção"],
      en: ["Scheduling", "Portal", "Communication", "Retention"]
    }
  },
  {
    kicker: { pt: "Educação", en: "Education" },
    title: { pt: "Educação, treinamento e conteúdo", en: "Education, training, and content" },
    description: {
      pt: "Ambientes de ensino, trilhas, relatórios, automações e experiência digital para alunos e equipes.",
      en: "Learning environments, tracks, reports, automations, and digital experience for students and teams."
    },
    tags: {
      pt: ["LMS", "Relatórios", "Usuários", "Automação"],
      en: ["LMS", "Reports", "Users", "Automation"]
    }
  },
  {
    kicker: { pt: "Backoffice", en: "Back office" },
    title: { pt: "Operações internas e produtividade", en: "Internal operations and productivity" },
    description: {
      pt: "Sistemas internos para reduzir retrabalho, integrar áreas e dar visibilidade a processos críticos.",
      en: "Internal systems to reduce rework, connect teams, and provide visibility into critical processes."
    },
    tags: {
      pt: ["Dashboards", "Fluxos", "Permissões", "KPIs"],
      en: ["Dashboards", "Flows", "Permissions", "KPIs"]
    }
  },
  {
    kicker: { pt: "Logística", en: "Logistics" },
    title: { pt: "Logística, campo e operação distribuída", en: "Logistics, field, and distributed operations" },
    description: {
      pt: "Apps e sistemas para roteiros, equipes externas, monitoramento e comunicação com a operação.",
      en: "Apps and systems for routing, field teams, monitoring, and operational communication."
    },
    tags: {
      pt: ["Mobile", "Roteiros", "Monitoramento", "Notificações"],
      en: ["Mobile", "Routing", "Monitoring", "Notifications"]
    }
  }
];

// Agrupamento das frentes técnicas exibidas na seção de stack.
const stackGroups = [
  {
    label: { pt: "Front-end", en: "Front-end" },
    title: { pt: "Experiência web e interfaces de produto", en: "Web experience and product interfaces" },
    description: {
      pt: "Camadas visuais para site institucional, produto digital, dashboard e portal autenticado.",
      en: "Visual layers for institutional sites, digital products, dashboards, and authenticated portals."
    },
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Vue", "Design systems"]
  },
  {
    label: { pt: "Back-end", en: "Back-end" },
    title: { pt: "Regra de negócio, APIs e integrações", en: "Business logic, APIs, and integrations" },
    description: {
      pt: "Estruturas para autenticação, dados, integrações entre plataformas e processos de negócio.",
      en: "Structures for authentication, data, platform integrations, and business processes."
    },
    items: ["Node.js", "Python", "PHP", "Java", ".NET", "REST", "GraphQL", "Webhooks"]
  },
  {
    label: { pt: "Mobile", en: "Mobile" },
    title: { pt: "Apps, operação em campo e experiência conectada", en: "Apps, field operations, and connected experiences" },
    description: {
      pt: "Soluções móveis integradas com plataformas web, CRM, ERP e comunicação operacional.",
      en: "Mobile solutions integrated with web platforms, CRM, ERP, and operational communication."
    },
    items: ["iOS", "Android", "React Native", "Flutter", "Push", "Offline-first", "Maps", "Device APIs"]
  },
  {
    label: { pt: "Dados & Cloud", en: "Data & Cloud" },
    title: { pt: "Dados, IA, automação e infraestrutura", en: "Data, AI, automation, and infrastructure" },
    description: {
      pt: "Camadas de analytics, IA aplicada, pipelines e infraestrutura para sustentar operação e escala.",
      en: "Analytics, applied AI, pipelines, and infrastructure layers to support operations and scale."
    },
    items: ["SQL", "ETL", "BI", "LLMs", "AWS", "Azure", "CI/CD", "Containers"]
  }
];

// Cenários usados para recomendar uma combinação de serviços e formato de execução.
const priorityScenarios = [
  {
    id: "launch",
    label: { pt: "Lançar um produto", en: "Launch a product" },
    title: {
      pt: "Estrutura ideal para entrar no ar com velocidade e base técnica consistente",
      en: "The ideal setup to launch quickly with a reliable technical foundation"
    },
    description: {
      pt: "Indicado para empresas que precisam apresentar valor com clareza, validar uma proposta e já nascer com espaço para evolução.",
      en: "Best for companies that need to present value clearly, validate an offer, and launch with room to evolve."
    },
    outcomes: {
      pt: [
        "Posicionamento claro para apresentar valor e converter interesse",
        "Arquitetura pronta para receber novas versões sem recomeçar do zero",
        "Integrações, métricas e operação pensadas desde a primeira entrega"
      ],
      en: [
        "Clear positioning to communicate value and convert interest",
        "Architecture ready for new versions without restarting from scratch",
        "Integrations, metrics, and operations considered from the first release"
      ]
    },
    serviceIndexes: [0, 3, 7],
    deliveryModelIndex: 0,
    signals: {
      pt: [
        "UX orientada a conversão",
        "Performance em mobile e desktop",
        "Analytics e documentação desde o início"
      ],
      en: [
        "Conversion-oriented UX",
        "Performance on mobile and desktop",
        "Analytics and documentation from day one"
      ]
    }
  },
  {
    id: "operations",
    label: { pt: "Automatizar a operação", en: "Automate operations" },
    title: {
      pt: "Fluxo recomendado para reduzir retrabalho e ganhar previsibilidade",
      en: "A recommended flow to reduce rework and improve predictability"
    },
    description: {
      pt: "Melhor caminho para times que precisam integrar áreas, remover tarefas manuais e dar visibilidade ao que acontece no dia a dia.",
      en: "The best path for teams that need to connect departments, remove manual work, and gain visibility into daily operations."
    },
    outcomes: {
      pt: [
        "Menos dependência de tarefas repetitivas e planilhas paralelas",
        "Integração entre atendimento, vendas, backoffice e operação",
        "Processos mais rápidos, rastreáveis e consistentes"
      ],
      en: [
        "Less dependence on repetitive work and parallel spreadsheets",
        "Integration across support, sales, back office, and operations",
        "Faster, traceable, and more consistent processes"
      ]
    },
    serviceIndexes: [3, 4, 6],
    deliveryModelIndex: 1,
    signals: {
      pt: [
        "Mapeamento de processo",
        "Dashboards e indicadores operacionais",
        "Permissões, logs e integrações seguras"
      ],
      en: [
        "Process mapping",
        "Dashboards and operational indicators",
        "Permissions, logs, and secure integrations"
      ]
    }
  },
  {
    id: "modernize",
    label: { pt: "Modernizar legado", en: "Modernize legacy" },
    title: {
      pt: "Plano para evoluir sistemas existentes com menor risco operacional",
      en: "A plan to evolve existing systems with lower operational risk"
    },
    description: {
      pt: "Ideal para empresas que já têm site, sistema ou aplicativo rodando e precisam elevar qualidade, estabilidade e capacidade de evolução.",
      en: "Ideal for companies that already have a live site, system, or application and need better quality, stability, and room to evolve."
    },
    outcomes: {
      pt: [
        "Redução de gargalos técnicos e dívida acumulada",
        "Melhor observabilidade, estabilidade e organização de ambiente",
        "Nova capacidade de evolução sem interromper a operação"
      ],
      en: [
        "Reduced technical bottlenecks and accumulated debt",
        "Better observability, stability, and environment organization",
        "New capacity to evolve without interrupting operations"
      ]
    },
    serviceIndexes: [3, 7, 8],
    deliveryModelIndex: 2,
    signals: {
      pt: [
        "Refatoração com continuidade",
        "Deploy, logs e ambientes organizados",
        "Handoff e governança de código"
      ],
      en: [
        "Refactoring with continuity",
        "Deployment, logs, and organized environments",
        "Handoff and code governance"
      ]
    }
  },
  {
    id: "education",
    label: { pt: "Educação e inovação", en: "Education and innovation" },
    title: {
      pt: "Estrutura indicada para laboratórios, cursos, treinamentos e iniciativas híbridas",
      en: "A structure designed for labs, courses, training programs, and hybrid initiatives"
    },
    description: {
      pt: "Boa aderência para instituições, edtechs e núcleos de inovação que precisam unir experiência, conteúdo, dados e acompanhamento.",
      en: "A strong fit for institutions, edtechs, and innovation teams that need to connect experience, content, data, and follow-up."
    },
    outcomes: {
      pt: [
        "Experiência acessível para alunos, equipes e parceiros",
        "Relatórios e jornadas claras de acompanhamento",
        "Base pronta para portais, trilhas, conteúdo e automações"
      ],
      en: [
        "Accessible experiences for students, staff, and partners",
        "Clear reporting and follow-up journeys",
        "A foundation ready for portals, learning paths, content, and automation"
      ]
    },
    serviceIndexes: [0, 1, 6],
    deliveryModelIndex: 0,
    signals: {
      pt: [
        "Acessibilidade e usabilidade",
        "Fluxos de conteúdo e relatórios",
        "Escalabilidade para novos módulos"
      ],
      en: [
        "Accessibility and usability",
        "Content workflows and reporting",
        "Scalability for new modules"
      ]
    }
  }
];

// Perguntas frequentes usadas no accordion comercial.
const faqs = [
  {
    question: {
      pt: "Vocês trabalham com qualquer linguagem e stack?",
      en: "Do you work with any language and stack?"
    },
    answer: {
      pt: "Sim. Trabalhamos com desenvolvimento sob medida e escolhemos a stack conforme objetivo, contexto técnico, escopo e necessidade de evolução do projeto.",
      en: "Yes. We work with custom development and choose the stack according to the project's goals, technical context, scope, and long-term evolution needs."
    }
  },
  {
    question: {
      pt: "Como vocês tratam performance, acessibilidade e responsividade?",
      en: "How do you handle performance, accessibility, and responsiveness?"
    },
    answer: {
      pt: "Esses pontos entram desde o desenho inicial. Trabalhamos com navegação clara, formulários consistentes, contraste adequado, performance em mobile e desktop e revisão contínua dos fluxos principais.",
      en: "These aspects are part of the project from the start. We work with clear navigation, reliable forms, appropriate contrast, performance on mobile and desktop, and continuous review of the core flows."
    }
  },
  {
    question: {
      pt: "Vocês conseguem assumir projetos que já estão em produção?",
      en: "Can you take over projects that are already in production?"
    },
    answer: {
      pt: "Sim. Podemos entrar em sistemas, sites ou aplicativos existentes para corrigir, modernizar, escalar, integrar novas áreas e organizar uma evolução contínua com menor risco operacional.",
      en: "Yes. We can step into existing systems, websites, or apps to fix, modernize, scale, integrate new areas, and organize continuous evolution with lower operational risk."
    }
  },
  {
    question: {
      pt: "Vocês documentam arquitetura, integrações e handoff?",
      en: "Do you document architecture, integrations, and handoff?"
    },
    answer: {
      pt: "Sim. Sempre que o projeto pede, organizamos visão de arquitetura, ambientes, integrações, backlog técnico e orientações de continuidade para reduzir dependência e facilitar evolução.",
      en: "Yes. Whenever the project requires it, we organize architecture views, environments, integrations, technical backlog, and continuity guidance to reduce dependency and make future evolution easier."
    }
  },
  {
    question: {
      pt: "É possível começar por uma fase de descoberta ou diagnóstico?",
      en: "Can a project start with a discovery or diagnostic phase?"
    },
    answer: {
      pt: "Sim. Em muitos casos esse é o caminho mais saudável. A fase inicial ajuda a organizar escopo, prioridades, riscos, integrações e uma estimativa mais confiável antes da construção completa.",
      en: "Yes. In many cases that is the healthiest path. The initial phase helps organize scope, priorities, risks, integrations, and a more reliable estimate before full execution."
    }
  },
  {
    question: {
      pt: "Vocês atendem em português e inglês e continuam no suporte depois da entrega?",
      en: "Do you support clients in Portuguese and English, and do you stay involved after delivery?"
    },
    answer: {
      pt: "Sim. O site, os CTAs e as mensagens comerciais já funcionam nos dois idiomas, e o modelo pode incluir manutenção, evolução contínua, monitoramento e expansão conforme o negócio cresce.",
      en: "Yes. The site, CTAs, and commercial messages already work in both languages, and the model can include maintenance, continuous evolution, monitoring, and expansion as the business grows."
    }
  }
];

// Preferências persistidas do usuário restauradas no carregamento da página.
const state = {
  language: localStorage.getItem("alfa-language") || "pt",
  theme: localStorage.getItem("alfa-theme") || "dark",
  priorityScenario: priorityScenarios[0].id
};


// Referências do DOM usadas em renderização, idioma, tema e ações comerciais.
const servicesGrid = document.getElementById("services-grid");
const featuredGrid = document.getElementById("featured-grid");
const deliveryGrid = document.getElementById("delivery-grid");
const industriesGrid = document.getElementById("industries-grid");
const stackGroupsContainer = document.getElementById("stack-groups");
const priorityTabs = document.getElementById("priority-tabs");
const priorityPanel = document.getElementById("priority-panel");
const faqList = document.getElementById("faq-list");
const languageToggle = document.getElementById("language-toggle");
const themeToggle = document.getElementById("theme-toggle");
const heroQuoteButton = document.getElementById("hero-quote-button");
const footerQuoteButton = document.getElementById("footer-quote-button");
const floatingWhatsAppButton = document.getElementById("floating-whatsapp-button");
const ctaSection = document.querySelector(".cta-section");
const themeColorMeta = document.getElementById("theme-color-meta");
const pageDescriptionMeta = document.getElementById("page-description-meta");
const footerYear = document.getElementById("footer-year");
const briefForm = document.getElementById("brief-form");
const briefNameInput = document.getElementById("brief-name");
const briefCompanyInput = document.getElementById("brief-company");
const briefServiceSelect = document.getElementById("brief-service");
const briefSummaryInput = document.getElementById("brief-summary");


// Monta o link final do WhatsApp com a mensagem já codificada.
function buildWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Mensagem geral de orçamento usada no hero, no rodapé e no botão flutuante.
function getGeneralQuoteMessage(language) {
  return translations[language].quoteMessage;
}

// Personaliza a mensagem do CTA de serviço com o nome do serviço escolhido.
function getServiceQuoteMessage(language, serviceTitle) {
  return translations[language].serviceQuoteMessage.replace("{service}", serviceTitle);
}

// Alterna a visibilidade do botão flutuante quando o CTA principal entra na tela.
function updateFloatingWhatsAppVisibility(shouldHide) {
  if (!floatingWhatsAppButton) {
    return;
  }

  floatingWhatsAppButton.classList.toggle("is-hidden", shouldHide);
}


// Renderiza os cards de serviço sempre que o idioma ativo muda.
function renderServices() {
  if (!servicesGrid) {
    return;
  }

  const language = state.language;

  servicesGrid.innerHTML = services
    .map((service) => {
      const title = service.title[language];
      const message = getServiceQuoteMessage(language, title);

      return `
        <article class="service-card">
          <span class="service-tag">${service.tag[language]}</span>
          <h3>${title}</h3>
          <p>${service.description[language]}</p>
          <div class="service-footer">
            <span class="service-stack">${service.stack[language]}</span>
            <a
              class="service-button"
              href="${buildWhatsAppUrl(message)}"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="${translations[language].serviceButton}: ${title}"
            >
              ${translations[language].serviceButton}
            </a>
          </div>
        </article>
      `;
    })
    .join("");
}

// Renderiza os blocos de soluções em destaque.
function renderFeaturedSolutions() {
  if (!featuredGrid) {
    return;
  }

  const language = state.language;

  featuredGrid.innerHTML = featuredSolutions
    .map(
      (item) => `
        <article class="featured-card">
          <div class="featured-top">
            <span class="featured-badge">${item.badge[language]}</span>
          </div>
          <h3>${item.title[language]}</h3>
          <p>${item.description[language]}</p>
          <ul class="featured-list">
            ${item.bullets[language].map((bullet) => `<li>${bullet}</li>`).join("")}
          </ul>
          <div class="featured-tags">
            ${item.tags[language].map((tag) => `<span class="featured-tag">${tag}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");
}

// Renderiza modelos de atendimento para deixar a oferta comercial mais completa.
function renderDeliveryModels() {
  if (!deliveryGrid) {
    return;
  }

  const language = state.language;

  deliveryGrid.innerHTML = deliveryModels
    .map(
      (item) => `
        <article class="delivery-card">
          <span class="delivery-kicker">${item.kicker[language]}</span>
          <h3>${item.title[language]}</h3>
          <p>${item.description[language]}</p>
          <ul class="delivery-list">
            ${item.bullets[language].map((bullet) => `<li>${bullet}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");
}

// Renderiza os setores atendidos para ampliar clareza comercial do site.
function renderIndustries() {
  if (!industriesGrid) {
    return;
  }

  const language = state.language;

  industriesGrid.innerHTML = industries
    .map(
      (item) => `
        <article class="industry-card">
          <span class="industry-kicker">${item.kicker[language]}</span>
          <h3>${item.title[language]}</h3>
          <p>${item.description[language]}</p>
          <div class="industry-tags">
            ${item.tags[language].map((tag) => `<span class="industry-tag">${tag}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");
}

// Renderiza a organização da stack em grupos para leitura mais rápida.
function renderStackGroups() {
  if (!stackGroupsContainer) {
    return;
  }

  const language = state.language;

  stackGroupsContainer.innerHTML = stackGroups
    .map(
      (group) => `
        <article class="stack-card">
          <span class="stack-group-label">${group.label[language]}</span>
          <h3>${group.title[language]}</h3>
          <p>${group.description[language]}</p>
          <div class="stack-tags">
            ${group.items.map((item) => `<span class="stack-tag">${item}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");
}

// Localiza o cenário ativo e cai no primeiro item caso o identificador esteja ausente.
function getActivePriorityScenario() {
  return (
    priorityScenarios.find((scenario) => scenario.id === state.priorityScenario) ||
    priorityScenarios[0]
  );
}

// Resolve os títulos de serviço a partir dos índices usados pelo mapa de prioridades.
function getPriorityServiceTitles(language, serviceIndexes) {
  return serviceIndexes
    .map((serviceIndex) => services[serviceIndex]?.title[language])
    .filter(Boolean);
}

// Renderiza o mapa de prioridades para conectar contexto, serviços e modelo recomendado.
function renderPriorityPlanner() {
  if (!priorityTabs || !priorityPanel) {
    return;
  }

  const language = state.language;
  const copy = translations[language];
  const activeScenario = getActivePriorityScenario();
  const relatedServices = getPriorityServiceTitles(language, activeScenario.serviceIndexes);
  const relatedModel = deliveryModels[activeScenario.deliveryModelIndex];

  priorityTabs.innerHTML = priorityScenarios
    .map((scenario) => {
      const isActive = scenario.id === activeScenario.id;

      return `
        <button
          class="priority-tab${isActive ? " is-active" : ""}"
          id="priority-tab-${scenario.id}"
          type="button"
          role="tab"
          aria-selected="${isActive}"
          aria-controls="priority-panel"
          tabindex="${isActive ? "0" : "-1"}"
          data-priority-tab="${scenario.id}"
        >
          ${scenario.label[language]}
        </button>
      `;
    })
    .join("");

  priorityPanel.setAttribute("role", "tabpanel");
  priorityPanel.setAttribute("aria-labelledby", `priority-tab-${activeScenario.id}`);
  priorityPanel.innerHTML = `
    <article class="priority-surface">
      <div class="priority-intro">
        <span class="priority-badge">${copy.priorityBadge}</span>
        <h3>${activeScenario.title[language]}</h3>
        <p>${activeScenario.description[language]}</p>
      </div>

      <div class="priority-grid">
        <section class="priority-block">
          <strong>${copy.priorityOutcomesTitle}</strong>
          <ul class="priority-list">
            ${activeScenario.outcomes[language].map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </section>

        <section class="priority-block">
          <strong>${copy.priorityServicesTitle}</strong>
          <ul class="priority-list">
            ${relatedServices.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </section>

        <section class="priority-block priority-block-model">
          <strong>${copy.priorityModelTitle}</strong>
          <span class="priority-model-kicker">${relatedModel.kicker[language]}</span>
          <p class="priority-model-title">${relatedModel.title[language]}</p>
          <p>${relatedModel.description[language]}</p>
        </section>

        <section class="priority-block">
          <strong>${copy.prioritySignalsTitle}</strong>
          <div class="priority-tags">
            ${activeScenario.signals[language]
              .map((item) => `<span class="priority-tag">${item}</span>`)
              .join("")}
          </div>
        </section>
      </div>
    </article>
  `;
}

// Renderiza perguntas frequentes em accordion para reduzir atrito comercial.
function renderFaqs() {
  if (!faqList) {
    return;
  }

  const language = state.language;

  faqList.innerHTML = faqs
    .map(
      (item, index) => `
        <details class="faq-item"${index === 0 ? " open" : ""}>
          <summary>${item.question[language]}</summary>
          <p class="faq-answer">${item.answer[language]}</p>
        </details>
      `
    )
    .join("");
}

// Atualiza os selects e placeholders do briefing no idioma ativo sem perder o estado do formulário.
function renderBriefForm() {
  if (
    !briefForm ||
    !briefNameInput ||
    !briefCompanyInput ||
    !briefServiceSelect ||
    !briefSummaryInput
  ) {
    return;
  }

  const language = state.language;
  const copy = translations[language];
  const previousService = briefServiceSelect.value;
  const serviceOptions = services.map((service, index) => ({
    value: `service-${index}`,
    label: service.title[language]
  }));

  serviceOptions.push({
    value: "discovery",
    label:
      language === "pt"
        ? "Diagnóstico, descoberta ou roadmap"
        : "Discovery, audit, or roadmap"
  });

  serviceOptions.push({
    value: "custom",
    label: language === "pt" ? "Outro projeto sob medida" : "Another custom project"
  });

  briefServiceSelect.innerHTML = [
    `<option value="">${copy.briefServicePlaceholder}</option>`,
    ...serviceOptions.map((option) => `<option value="${option.value}">${option.label}</option>`)
  ].join("");

  briefServiceSelect.value = previousService;

  briefNameInput.placeholder = copy.briefNamePlaceholder;
  briefCompanyInput.placeholder = copy.briefCompanyPlaceholder;
  briefSummaryInput.placeholder = copy.briefSummaryPlaceholder;
}


// Aplica todos os textos dependentes de idioma, labels e links dinâmicos do WhatsApp.
function updateTranslatableContent() {
  const language = state.language;
  const theme = state.theme;
  const copy = translations[language];

  document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
  document.title = copy.pageTitle;

  if (pageDescriptionMeta) {
    pageDescriptionMeta.setAttribute("content", copy.pageDescription);
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;

    if (copy[key]) {
      element.textContent = copy[key];
    }
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const key = element.dataset.i18nAria;

    if (copy[key]) {
      element.setAttribute("aria-label", copy[key]);
    }
  });

  if (languageToggle) {
    languageToggle.textContent = copy.languageLabel;
    languageToggle.setAttribute("aria-label", copy.switchLanguageAria);
  }

  if (priorityTabs) {
    priorityTabs.setAttribute("aria-label", copy.priorityTablistLabel);
  }

  const themeButtonLabel = theme === "dark" ? copy.themeButtonLight : copy.themeButtonDark;
  if (themeToggle) {
    themeToggle.setAttribute("aria-label", copy.themeToggleLabel);

    const themeToggleLabel = themeToggle.querySelector("[data-i18n='themeButton']");

    if (themeToggleLabel) {
      themeToggleLabel.textContent = themeButtonLabel;
    }
  }

  const generalQuoteLink = buildWhatsAppUrl(getGeneralQuoteMessage(language));
  if (heroQuoteButton) {
    heroQuoteButton.href = generalQuoteLink;
  }

  if (footerQuoteButton) {
    footerQuoteButton.href = generalQuoteLink;
  }

  if (floatingWhatsAppButton) {
    floatingWhatsAppButton.href = generalQuoteLink;
    floatingWhatsAppButton.setAttribute("aria-label", copy.floatingWhatsApp);
    floatingWhatsAppButton.setAttribute("title", copy.floatingWhatsApp);

    const floatingWhatsAppLabel = floatingWhatsAppButton.querySelector(".sr-only");

    if (floatingWhatsAppLabel) {
      floatingWhatsAppLabel.textContent = copy.floatingWhatsApp;
    }
  }


  renderServices();
  renderFeaturedSolutions();
  renderDeliveryModels();
  renderIndustries();
  renderStackGroups();
  renderPriorityPlanner();
  renderFaqs();
  renderBriefForm();
}

// Mantém o ano do rodapé atualizado sem exigir edição manual do HTML.
function applyFooterYear() {
  if (!footerYear) {
    return;
  }

  footerYear.textContent = String(new Date().getFullYear());
}

// Persiste o tema ativo e sincroniza a cor da interface do navegador.
function applyTheme(shouldUpdateContent = true) {
  document.body.dataset.theme = state.theme;
  localStorage.setItem("alfa-theme", state.theme);

  if (themeColorMeta) {
    themeColorMeta.setAttribute("content", state.theme === "dark" ? "#0c1220" : "#eff3f7");
  }

  if (shouldUpdateContent) {
    updateTranslatableContent();
  }
}

// Persiste o idioma ativo e atualiza o conteúdo traduzível.
function applyLanguage() {
  localStorage.setItem("alfa-language", state.language);
  updateTranslatableContent();
}

// Remove service workers antigos para garantir que o site funcione apenas como site.
function unregisterLegacyServiceWorkers() {
  if (!("serviceWorker" in navigator)) {
    return;
  }

  window.addEventListener("load", () => {
    if ("caches" in window) {
      caches.keys().then((cacheNames) => {
        cacheNames.forEach((cacheName) => {
          caches.delete(cacheName);
        });
      });
    }

    navigator.serviceWorker
      .getRegistrations()
      .then((registrations) => {
        registrations.forEach((registration) => {
          registration.unregister();
        });
      })
      .catch((error) => {
        console.error("Falha ao limpar service workers antigos:", error);
      });
  });
}


// Monta o briefing estruturado e envia pelo mesmo canal principal de orçamento.
function handleBriefSubmit(event) {
  event.preventDefault();

  if (
    !briefForm ||
    !briefNameInput ||
    !briefCompanyInput ||
    !briefServiceSelect ||
    !briefSummaryInput ||
    !briefForm.reportValidity()
  ) {
    return;
  }

  const language = state.language;
  const copy = translations[language];
  const serviceLabel = briefServiceSelect.options[briefServiceSelect.selectedIndex].textContent;
  const lines = [
    copy.briefMessageIntro,
    "",
    `${copy.briefMessageName}: ${briefNameInput.value.trim()}`
  ];

  if (briefCompanyInput.value.trim()) {
    lines.push(`${copy.briefMessageCompany}: ${briefCompanyInput.value.trim()}`);
  }

  lines.push(
    `${copy.briefMessageService}: ${serviceLabel}`,
    `${copy.briefMessageSummary}: ${briefSummaryInput.value.trim()}`
  );

  const whatsappUrl = buildWhatsAppUrl(lines.join("\n"));
  const openedWindow = window.open(whatsappUrl, "_blank", "noopener,noreferrer");

  if (!openedWindow) {
    window.location.href = whatsappUrl;
  }
}

// Registra o formulário de briefing para transformar o lead em uma mensagem estruturada.
function registerBriefForm() {
  if (!briefForm) {
    return;
  }

  briefForm.addEventListener("submit", handleBriefSubmit);
}

// Permite trocar o cenário ativo por clique ou teclado para manter a navegação acessível.
function registerPriorityPlanner() {
  if (!priorityTabs) {
    return;
  }

  const moveToScenario = (scenarioId) => {
    if (!priorityScenarios.some((scenario) => scenario.id === scenarioId)) {
      return;
    }

    state.priorityScenario = scenarioId;
    renderPriorityPlanner();
  };

  priorityTabs.addEventListener("click", (event) => {
    const targetButton = event.target.closest("[data-priority-tab]");

    if (!targetButton) {
      return;
    }

    moveToScenario(targetButton.dataset.priorityTab);
  });

  priorityTabs.addEventListener("keydown", (event) => {
    const navigationKeys = ["ArrowLeft", "ArrowRight", "Home", "End"];

    if (!navigationKeys.includes(event.key)) {
      return;
    }

    const tabButtons = [...priorityTabs.querySelectorAll("[data-priority-tab]")];
    const currentIndex = tabButtons.findIndex(
      (button) => button.dataset.priorityTab === state.priorityScenario
    );

    if (currentIndex === -1) {
      return;
    }

    event.preventDefault();

    let nextIndex = currentIndex;

    if (event.key === "ArrowRight") {
      nextIndex = (currentIndex + 1) % tabButtons.length;
    }

    if (event.key === "ArrowLeft") {
      nextIndex = (currentIndex - 1 + tabButtons.length) % tabButtons.length;
    }

    if (event.key === "Home") {
      nextIndex = 0;
    }

    if (event.key === "End") {
      nextIndex = tabButtons.length - 1;
    }

    const nextButton = tabButtons[nextIndex];

    if (!nextButton) {
      return;
    }

    moveToScenario(nextButton.dataset.priorityTab);

    const refreshedButton = priorityTabs.querySelector(
      `[data-priority-tab="${nextButton.dataset.priorityTab}"]`
    );

    if (refreshedButton) {
      refreshedButton.focus();
    }
  });
}

// Esconde o botão flutuante quando a seção final de orçamento estiver visível.
function registerFloatingWhatsAppBehavior() {
  if (!floatingWhatsAppButton || !ctaSection) {
    return;
  }

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        updateFloatingWhatsAppVisibility(entry.isIntersecting);
      },
      {
        threshold: 0.2
      }
    );

    observer.observe(ctaSection);
    return;
  }

  const onScroll = () => {
    const rect = ctaSection.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    updateFloatingWhatsAppVisibility(isVisible);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}


// Controles do usuário para idioma e tema.
if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    state.language = state.language === "pt" ? "en" : "pt";
    applyLanguage();
  });
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    state.theme = state.theme === "dark" ? "light" : "dark";
    applyTheme();
  });
}

// Inicialização da página.
applyTheme(false);
applyLanguage();
applyFooterYear();
unregisterLegacyServiceWorkers();
registerBriefForm();
registerPriorityPlanner();
registerFloatingWhatsAppBehavior();
