// Número central do WhatsApp usado por todos os pontos de orçamento.
const WHATSAPP_NUMBER = "5511978190028";

// Cenários de fallback suportados pelo modal de ajuda de instalação.
const INSTALL_HELP_CONTEXTS = {
  ios: "ios",
  file: "file",
  unsupported: "unsupported"
};

// Todo o conteúdo traduzível da interface fica centralizado aqui para manter PT e EN alinhados.
const translations = {
  pt: {
    pageTitle: "ALFA Engenharia de Software | Desenvolvimento Sob Medida",
    brandName: "ALFA Engenharia de Software",
    brandTag: "Soluções digitais sob medida",
    themeButtonLight: "Modo claro",
    themeButtonDark: "Modo escuro",
    eyebrow: "Desenvolvimento sem limite de stack",
    heroTitle: "Criamos software para qualquer tipo de serviço digital.",
    heroText:
      "Sites, sistemas, apps, APIs, automações, IA, dashboards, integrações e qualquer solução de desenvolvimento que sua empresa precisar.",
    heroCta: "Pedir orçamento no WhatsApp",
    heroSecondary: "Ver serviços",
    heroPoint1: "Projetos sob medida para qualquer porte",
    heroPoint2: "Atendimento em português e inglês",
    heroPoint3: "Entrega focada em resultado e manutenção contínua",
    panelLabel: "Cobertura completa",
    panelTitle: "Do briefing ao deploy",
    panelText:
      "Arquitetura, design, desenvolvimento, integração, performance, suporte e evolução.",
    miniCard1: "Plataformas, landing pages e sistemas internos",
    miniCard2: "Apps nativos, híbridos e produtos conectados",
    miniCard3: "Infraestrutura, APIs, dados e automação",
    miniCard4: "Assistentes, fluxos inteligentes e produtividade",
    infoStripTitle: "Qualquer linguagem. Qualquer escopo.",
    infoStripText:
      "Trabalhamos com front-end, back-end, mobile, desktop, low-code, cloud e integrações para transformar necessidade de negócio em software funcional.",
    servicesEyebrow: "Serviços",
    servicesTitle: "O que podemos desenvolver para sua empresa",
    servicesText:
      "Se envolve software, nós atendemos. Abaixo estão as frentes mais pedidas.",
    featuredEyebrow: "Soluções",
    featuredTitle: "Entregas completas para diferentes tipos de operação",
    featuredText:
      "Empresas de desenvolvimento mais completas costumam destacar projetos, arquitetura e resultados esperados. Aqui mostramos esse mesmo nível de clareza.",
    serviceButton: "Pedir orçamento",
    processEyebrow: "Processo",
    processTitle: "Um fluxo simples para tirar a ideia do papel",
    processStep1Title: "Diagnóstico",
    processStep1Text:
      "Entendemos objetivo, prazo, integrações e nível de complexidade.",
    processStep2Title: "Estratégia",
    processStep2Text:
      "Definimos stack, arquitetura, cronograma e plano de entrega.",
    processStep3Title: "Construção",
    processStep3Text:
      "Desenvolvemos, testamos e refinamos com foco em performance e clareza.",
    processStep4Title: "Evolução",
    processStep4Text:
      "Entregamos com suporte, manutenção e melhorias contínuas.",
    deliveryEyebrow: "Modelos",
    deliveryTitle: "Modelos de atendimento para diferentes momentos do negócio",
    deliveryText:
      "Além de construir software, também estruturamos a forma de execução conforme a necessidade da sua empresa.",
    industriesEyebrow: "Setores",
    industriesTitle: "Setores e contextos que atendemos com frequência",
    industriesText:
      "O mesmo núcleo técnico pode ser adaptado para operações comerciais, internas e digitais de diferentes segmentos.",
    stackEyebrow: "Stack",
    stackTitle: "Tecnologias e frentes que conseguimos conectar em um projeto",
    stackText:
      "Sites completos de software costumam mostrar stack, arquitetura e ecossistema técnico. Organizamos isso em grupos para facilitar a leitura.",
    aboutEyebrow: "ALFA",
    aboutTitle: "Tecnologia sob medida para operações reais",
    aboutText:
      "Atuamos como parceiro técnico para empresas que precisam construir, modernizar ou automatizar produtos e processos com velocidade e critério.",
    aboutItem1Title: "Amplitude técnica",
    aboutItem1Text:
      "Escolhemos a linguagem e a arquitetura pelo problema, não por preferência fixa.",
    aboutItem2Title: "Execução completa",
    aboutItem2Text:
      "Podemos atuar do protótipo ao ambiente produtivo, incluindo integrações e suporte.",
    aboutItem3Title: "Foco comercial",
    aboutItem3Text:
      "O objetivo não é só código: é entregar algo útil para vender, operar ou escalar.",
    faqEyebrow: "FAQ",
    faqTitle: "Perguntas frequentes antes de pedir um orçamento",
    faqText:
      "As empresas mais completas normalmente antecipam dúvidas comerciais e técnicas. Esta seção foi pensada com esse objetivo.",
    briefEyebrow: "Briefing rápido",
    briefTitle: "Monte um resumo do projeto e envie pelo WhatsApp",
    briefText:
      "Em vez de mandar só uma mensagem genérica, você pode enviar um briefing estruturado com contexto, prazo e faixa de investimento.",
    briefNameLabel: "Seu nome",
    briefCompanyLabel: "Empresa",
    briefServiceLabel: "Tipo de projeto",
    briefBudgetLabel: "Faixa de investimento",
    briefTimelineLabel: "Prazo desejado",
    briefSummaryLabel: "Resumo do que precisa",
    briefNote:
      "Esse formulário abre o WhatsApp com a mensagem pronta no idioma atual do site.",
    briefSubmit: "Enviar briefing no WhatsApp",
    briefNamePlaceholder: "Ex.: Gabriel Navarro",
    briefCompanyPlaceholder: "Ex.: ALFA Assessoria",
    briefSummaryPlaceholder:
      "Descreva o objetivo, funcionalidades, integrações e qualquer contexto importante.",
    briefServicePlaceholder: "Selecione o tipo de projeto",
    briefBudgetPlaceholder: "Selecione a faixa de investimento",
    briefTimelinePlaceholder: "Selecione o prazo desejado",
    briefMessageIntro:
      "Olá, quero solicitar um orçamento com a ALFA Engenharia de Software. Segue um briefing rápido do projeto:",
    briefMessageName: "Nome",
    briefMessageCompany: "Empresa",
    briefMessageService: "Tipo de projeto",
    briefMessageBudget: "Faixa de investimento",
    briefMessageTimeline: "Prazo desejado",
    briefMessageSummary: "Resumo",
    ctaEyebrow: "Próximo passo",
    ctaTitle: "Conte o que você precisa e montamos o orçamento",
    ctaText:
      "Fale pelo WhatsApp em português ou inglês. A mensagem já sai pronta com o contexto correto.",
    ctaButton: "Solicitar orçamento",
    floatingWhatsApp: "WhatsApp",
    installApp: "Instalar app",
    installAppShort: "Instalar",
    installHelpTitle: "Como instalar o app",
    installHelpIos:
      "No iPhone ou iPad, a instalação é feita manualmente pelo Safari usando o menu de compartilhamento.",
    installHelpFile:
      "Para instalar o app, abra este site por HTTP local em vez de file://. O prompt de instalação não funciona quando o arquivo é aberto direto do disco.",
    installHelpUnsupported:
      "Este navegador não exibiu o prompt automático de instalação. Use um navegador compatível ou a opção de instalação do próprio navegador.",
    installHelpSteps: {
      ios: [
        "Abra este site no Safari do iPhone ou iPad.",
        "Toque em Compartilhar na barra do navegador.",
        "Escolha Adicionar à Tela de Início.",
        "Confirme para instalar o app."
      ],
      file: [
        "Na pasta do projeto, execute .\\serve-local.ps1.",
        "Abra http://127.0.0.1:4173 no navegador.",
        "Clique novamente em Instalar app para usar o prompt nativo."
      ],
      unsupported: [
        "Abra este site no Chrome ou Edge no desktop ou Android.",
        "Use o endereço http://127.0.0.1:4173 ou o domínio publicado.",
        "Se o navegador oferecer instalação pelo menu, use essa opção."
      ]
    },
    installHelpClose: "Fechar",
    quoteMessage:
      "Olá, quero criar um orçamento para um projeto de desenvolvimento com a ALFA.",
    serviceQuoteMessage:
      "Olá, quero solicitar um orçamento para o serviço de {service}.",
    languageLabel: "EN",
    themeToggleLabel: "Alternar tema",
    switchLanguageAria: "Switch language to English"
  },
  en: {
    pageTitle: "ALFA Engenharia de Software | Custom Software Development",
    brandName: "ALFA Engenharia de Software",
    brandTag: "Tailored digital solutions",
    themeButtonLight: "Light mode",
    themeButtonDark: "Dark mode",
    eyebrow: "Development without stack limits",
    heroTitle: "We build software for any kind of digital service.",
    heroText:
      "Websites, systems, apps, APIs, automations, AI, dashboards, integrations, and any development solution your business needs.",
    heroCta: "Request a quote on WhatsApp",
    heroSecondary: "See services",
    heroPoint1: "Custom projects for any company size",
    heroPoint2: "Support in Portuguese and English",
    heroPoint3: "Delivery focused on results and ongoing maintenance",
    panelLabel: "Complete coverage",
    panelTitle: "From briefing to deployment",
    panelText:
      "Architecture, design, development, integration, performance, support, and continuous evolution.",
    miniCard1: "Platforms, landing pages, and internal systems",
    miniCard2: "Native apps, hybrid apps, and connected products",
    miniCard3: "Infrastructure, APIs, data, and automation",
    miniCard4: "Assistants, intelligent flows, and productivity",
    infoStripTitle: "Any language. Any scope.",
    infoStripText:
      "We work across front-end, back-end, mobile, desktop, low-code, cloud, and integrations to turn business needs into working software.",
    servicesEyebrow: "Services",
    servicesTitle: "What we can build for your company",
    servicesText:
      "If it involves software, we can deliver it. These are the most requested workstreams.",
    featuredEyebrow: "Solutions",
    featuredTitle: "Complete delivery formats for different kinds of operations",
    featuredText:
      "The most complete development companies usually highlight projects, architecture, and expected outcomes. We bring that same level of clarity here.",
    serviceButton: "Request quote",
    processEyebrow: "Process",
    processTitle: "A simple flow to turn an idea into a shipped product",
    processStep1Title: "Discovery",
    processStep1Text:
      "We understand goals, deadlines, integrations, and the level of complexity.",
    processStep2Title: "Strategy",
    processStep2Text:
      "We define the stack, architecture, roadmap, and delivery plan.",
    processStep3Title: "Build",
    processStep3Text:
      "We develop, test, and refine with focus on performance and clarity.",
    processStep4Title: "Scale",
    processStep4Text:
      "We deliver with support, maintenance, and continuous improvements.",
    deliveryEyebrow: "Models",
    deliveryTitle: "Engagement models for different business moments",
    deliveryText:
      "Beyond building software, we also structure the execution format according to your company's needs.",
    industriesEyebrow: "Industries",
    industriesTitle: "Industries and operating contexts we frequently support",
    industriesText:
      "The same technical core can be adapted for commercial, internal, and digital operations across different segments.",
    stackEyebrow: "Stack",
    stackTitle: "Technologies and workstreams we can connect within one project",
    stackText:
      "Complete software websites usually show stack, architecture, and the technical ecosystem. We organize that into groups for easier scanning.",
    aboutEyebrow: "ALFA",
    aboutTitle: "Tailored technology for real operations",
    aboutText:
      "We act as a technical partner for companies that need to build, modernize, or automate products and processes with speed and rigor.",
    aboutItem1Title: "Broad technical range",
    aboutItem1Text:
      "We choose the language and architecture based on the problem, not on a fixed preference.",
    aboutItem2Title: "Full execution",
    aboutItem2Text:
      "We can work from prototype to production, including integrations and support.",
    aboutItem3Title: "Commercial focus",
    aboutItem3Text:
      "The goal is not just code. It is something useful to sell, operate, or scale.",
    faqEyebrow: "FAQ",
    faqTitle: "Frequently asked questions before requesting a quote",
    faqText:
      "The most complete companies usually anticipate commercial and technical questions. This section was designed for that.",
    briefEyebrow: "Quick brief",
    briefTitle: "Build a project summary and send it on WhatsApp",
    briefText:
      "Instead of sending only a generic message, you can send a structured brief with context, timeline, and budget range.",
    briefNameLabel: "Your name",
    briefCompanyLabel: "Company",
    briefServiceLabel: "Project type",
    briefBudgetLabel: "Budget range",
    briefTimelineLabel: "Desired timeline",
    briefSummaryLabel: "Project summary",
    briefNote:
      "This form opens WhatsApp with the message already prepared in the current site language.",
    briefSubmit: "Send brief on WhatsApp",
    briefNamePlaceholder: "Ex.: Gabriel Navarro",
    briefCompanyPlaceholder: "Ex.: ALFA Advisory",
    briefSummaryPlaceholder:
      "Describe the goal, features, integrations, and any important context.",
    briefServicePlaceholder: "Select the project type",
    briefBudgetPlaceholder: "Select the budget range",
    briefTimelinePlaceholder: "Select the desired timeline",
    briefMessageIntro:
      "Hello, I would like to request a quote from ALFA Engenharia de Software. Here is a quick project brief:",
    briefMessageName: "Name",
    briefMessageCompany: "Company",
    briefMessageService: "Project type",
    briefMessageBudget: "Budget range",
    briefMessageTimeline: "Desired timeline",
    briefMessageSummary: "Summary",
    ctaEyebrow: "Next step",
    ctaTitle: "Tell us what you need and we will prepare the quote",
    ctaText:
      "Reach out on WhatsApp in Portuguese or English. The message already opens with the right context.",
    ctaButton: "Request a quote",
    floatingWhatsApp: "WhatsApp",
    installApp: "Install app",
    installAppShort: "Install",
    installHelpTitle: "How to install the app",
    installHelpIos:
      "On iPhone or iPad, installation is done manually in Safari using the share menu.",
    installHelpFile:
      "To install the app, open this site over local HTTP instead of file://. The install prompt does not work when the file is opened directly from disk.",
    installHelpUnsupported:
      "This browser did not show the automatic install prompt. Use a compatible browser or the browser's own install option.",
    installHelpSteps: {
      ios: [
        "Open this site in Safari on your iPhone or iPad.",
        "Tap Share in the browser bar.",
        "Choose Add to Home Screen.",
        "Confirm to install the app."
      ],
      file: [
        "Run .\\serve-local.ps1 in the project folder.",
        "Open http://127.0.0.1:4173 in your browser.",
        "Click Install app again to use the native prompt."
      ],
      unsupported: [
        "Open this site in Chrome or Edge on desktop or Android.",
        "Use http://127.0.0.1:4173 or the published domain.",
        "If your browser offers installation from its menu, use that option."
      ]
    },
    installHelpClose: "Close",
    quoteMessage:
      "Hello, I would like to create a quote for a software development project with ALFA.",
    serviceQuoteMessage:
      "Hello, I would like to request a quote for the {service} service.",
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

// Blocos adicionais inspirados em funcionalidades comuns de sites de empresas de software.
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

const faqs = [
  {
    question: {
      pt: "Vocês trabalham com qualquer linguagem e stack?",
      en: "Do you work with any language and stack?"
    },
    answer: {
      pt: "Sim. O site já comunica essa proposta porque a empresa foi posicionada para desenvolvimento sob medida. A stack é escolhida conforme objetivo, contexto técnico, orçamento e necessidade de evolução.",
      en: "Yes. The site is already positioned that way because the company focuses on custom development. The stack is chosen according to goals, technical context, budget, and long-term evolution needs."
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
      pt: "O orçamento é feito só para projeto fechado ou também para time dedicado?",
      en: "Is the quote only for fixed-scope projects or also for dedicated teams?"
    },
    answer: {
      pt: "Os dois formatos são possíveis. O orçamento pode ser montado para uma entrega fechada, para uma fase inicial de descoberta, para sustentação contínua ou para uma capacidade técnica recorrente.",
      en: "Both formats are possible. The quote can be prepared for a fixed delivery, an initial discovery phase, continuous support, or recurring technical capacity."
    }
  },
  {
    question: {
      pt: "Vocês atendem em português e inglês?",
      en: "Do you support clients in Portuguese and English?"
    },
    answer: {
      pt: "Sim. O site, os CTAs e as mensagens do WhatsApp já funcionam em português e inglês para manter a comunicação comercial coerente com o idioma ativo.",
      en: "Yes. The site, CTAs, and WhatsApp messages already work in Portuguese and English to keep commercial communication aligned with the active language."
    }
  },
  {
    question: {
      pt: "Vocês fazem só site institucional ou também sistema completo?",
      en: "Do you only build institutional websites or also full systems?"
    },
    answer: {
      pt: "Fazemos desde landing pages e sites institucionais até plataformas completas com login, painel, integrações, dados, automação, IA e infraestrutura de publicação.",
      en: "We build everything from landing pages and institutional websites to full platforms with login, dashboards, integrations, data, automation, AI, and production infrastructure."
    }
  },
  {
    question: {
      pt: "Depois da entrega vocês continuam dando suporte?",
      en: "Do you continue to support the project after delivery?"
    },
    answer: {
      pt: "Sim. O modelo pode incluir manutenção, evolução contínua, monitoramento, ajustes de performance, novas integrações e expansão funcional conforme o negócio cresce.",
      en: "Yes. The model can include maintenance, continuous evolution, monitoring, performance improvements, new integrations, and functional expansion as the business grows."
    }
  }
];

const budgetOptions = [
  { value: "up-to-5k", label: { pt: "Até R$ 5 mil", en: "Up to BRL 5k" } },
  { value: "5k-15k", label: { pt: "De R$ 5 mil a R$ 15 mil", en: "BRL 5k to BRL 15k" } },
  { value: "15k-30k", label: { pt: "De R$ 15 mil a R$ 30 mil", en: "BRL 15k to BRL 30k" } },
  { value: "30k-60k", label: { pt: "De R$ 30 mil a R$ 60 mil", en: "BRL 30k to BRL 60k" } },
  { value: "60k-plus", label: { pt: "Acima de R$ 60 mil", en: "Above BRL 60k" } }
];

const timelineOptions = [
  { value: "urgent", label: { pt: "Urgente (até 2 semanas)", en: "Urgent (up to 2 weeks)" } },
  { value: "short", label: { pt: "Curto prazo (até 30 dias)", en: "Short term (up to 30 days)" } },
  { value: "mid", label: { pt: "Médio prazo (1 a 3 meses)", en: "Mid term (1 to 3 months)" } },
  { value: "long", label: { pt: "Longo prazo (3 a 6 meses)", en: "Long term (3 to 6 months)" } },
  { value: "flexible", label: { pt: "Flexível / a definir", en: "Flexible / to be defined" } }
];

// Preferências persistidas do usuário restauradas no carregamento da página.
const state = {
  language: localStorage.getItem("alfa-language") || "pt",
  theme: localStorage.getItem("alfa-theme") || "dark"
};

// Estado de execução usado pelo prompt de instalação e pelo modal de ajuda.
const installState = {
  deferredPrompt: null,
  helpContext: null,
  installed: false,
  lastFocusedElement: null
};

// Cache de referências do DOM usadas com frequência.
const servicesGrid = document.getElementById("services-grid");
const featuredGrid = document.getElementById("featured-grid");
const deliveryGrid = document.getElementById("delivery-grid");
const industriesGrid = document.getElementById("industries-grid");
const stackGroupsContainer = document.getElementById("stack-groups");
const faqList = document.getElementById("faq-list");
const languageToggle = document.getElementById("language-toggle");
const themeToggle = document.getElementById("theme-toggle");
const heroQuoteButton = document.getElementById("hero-quote-button");
const footerQuoteButton = document.getElementById("footer-quote-button");
const floatingWhatsAppButton = document.getElementById("floating-whatsapp-button");
const ctaSection = document.querySelector(".cta-section");
const themeColorMeta = document.getElementById("theme-color-meta");
const installButtonHeader = document.getElementById("install-button-header");
const installButtonHero = document.getElementById("install-button-hero");
const installButtons = [installButtonHeader, installButtonHero].filter(Boolean);
const briefForm = document.getElementById("brief-form");
const briefNameInput = document.getElementById("brief-name");
const briefCompanyInput = document.getElementById("brief-company");
const briefServiceSelect = document.getElementById("brief-service");
const briefBudgetSelect = document.getElementById("brief-budget");
const briefTimelineSelect = document.getElementById("brief-timeline");
const briefSummaryInput = document.getElementById("brief-summary");
const installHelpPanel = document.getElementById("install-help-panel");
const installHelpTitle = document.getElementById("install-help-title");
const installHelpText = document.getElementById("install-help-text");
const installHelpSteps = document.getElementById("install-help-steps");
const installHelpCloseButton = document.getElementById("install-help-close-button");
const installHelpCloseIcon = document.getElementById("install-help-close");
const installCloseTriggers = Array.from(document.querySelectorAll("[data-install-close]"));
const displayModeQuery =
  typeof window.matchMedia === "function"
    ? window.matchMedia("(display-mode: standalone)")
    : null;

// Detecta se o site já está rodando como aplicativo instalado.
function isStandaloneMode() {
  return Boolean((displayModeQuery && displayModeQuery.matches) || window.navigator.standalone);
}

// O iPadOS pode se identificar como Mac, então maxTouchPoints também é verificado.
function isIOSDevice() {
  return /iPad|iPhone|iPod/.test(window.navigator.userAgent) ||
    (window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
}

// As instruções manuais de instalação se aplicam ao Safari no iOS e iPadOS.
function isIOSSafari() {
  return (
    isIOSDevice() &&
    /Safari/i.test(window.navigator.userAgent) &&
    !/CriOS|FxiOS|EdgiOS|OPiOS|YaBrowser|DuckDuckGo/i.test(window.navigator.userAgent)
  );
}

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

// Alterna a visibilidade do botao flutuante quando o CTA principal entra na tela.
function updateFloatingWhatsAppVisibility(shouldHide) {
  if (!floatingWhatsAppButton) {
    return;
  }

  floatingWhatsAppButton.classList.toggle("is-hidden", shouldHide);
}

// Retorna o conteúdo localizado do modal para o cenário ativo de ajuda de instalação.
function getInstallHelpContent(language, context) {
  const copy = translations[language];

  switch (context) {
    case INSTALL_HELP_CONTEXTS.ios:
      return {
        title: copy.installHelpTitle,
        text: copy.installHelpIos,
        steps: copy.installHelpSteps.ios
      };
    case INSTALL_HELP_CONTEXTS.file:
      return {
        title: copy.installHelpTitle,
        text: copy.installHelpFile,
        steps: copy.installHelpSteps.file
      };
    default:
      return {
        title: copy.installHelpTitle,
        text: copy.installHelpUnsupported,
        steps: copy.installHelpSteps.unsupported
      };
  }
}

// Renderiza os cards de serviço sempre que o idioma ativo muda.
function renderServices() {
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
              rel="noreferrer"
            >
              ${translations[language].serviceButton}
            </a>
          </div>
        </article>
      `;
    })
    .join("");
}

// Renderiza blocos de solução inspirados em áreas normalmente destacadas por empresas do mesmo setor.
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
  if (!briefForm || !briefServiceSelect || !briefBudgetSelect || !briefTimelineSelect) {
    return;
  }

  const language = state.language;
  const copy = translations[language];
  const previousService = briefServiceSelect.value;
  const previousBudget = briefBudgetSelect.value;
  const previousTimeline = briefTimelineSelect.value;
  const serviceOptions = services.map((service, index) => ({
    value: `service-${index}`,
    label: service.title[language]
  }));

  serviceOptions.push({
    value: "custom",
    label: language === "pt" ? "Outro projeto sob medida" : "Another custom project"
  });

  briefServiceSelect.innerHTML = [
    `<option value="">${copy.briefServicePlaceholder}</option>`,
    ...serviceOptions.map((option) => `<option value="${option.value}">${option.label}</option>`)
  ].join("");

  briefBudgetSelect.innerHTML = [
    `<option value="">${copy.briefBudgetPlaceholder}</option>`,
    ...budgetOptions.map(
      (option) => `<option value="${option.value}">${option.label[language]}</option>`
    )
  ].join("");

  briefTimelineSelect.innerHTML = [
    `<option value="">${copy.briefTimelinePlaceholder}</option>`,
    ...timelineOptions.map(
      (option) => `<option value="${option.value}">${option.label[language]}</option>`
    )
  ].join("");

  briefServiceSelect.value = previousService;
  briefBudgetSelect.value = previousBudget;
  briefTimelineSelect.value = previousTimeline;

  briefNameInput.placeholder = copy.briefNamePlaceholder;
  briefCompanyInput.placeholder = copy.briefCompanyPlaceholder;
  briefSummaryInput.placeholder = copy.briefSummaryPlaceholder;
}

// Preenche o modal de ajuda de instalação com o conteúdo localizado correto.
function renderInstallHelp() {
  if (!installHelpPanel || !installState.helpContext) {
    return;
  }

  const content = getInstallHelpContent(state.language, installState.helpContext);
  const copy = translations[state.language];

  installHelpTitle.textContent = content.title;
  installHelpText.textContent = content.text;
  installHelpSteps.innerHTML = content.steps.map((step) => `<li>${step}</li>`).join("");
  installHelpCloseButton.textContent = copy.installHelpClose;
  installHelpCloseIcon.setAttribute("aria-label", copy.installHelpClose);
}

// Abre o modal e guarda o elemento disparador para restaurar o foco depois.
function openInstallHelp(context) {
  if (!installHelpPanel) {
    return;
  }

  installState.helpContext = context;
  installState.lastFocusedElement = document.activeElement;
  renderInstallHelp();
  installHelpPanel.hidden = false;
  installHelpPanel.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  window.setTimeout(() => {
    installHelpCloseButton.focus();
  }, 0);
}

// Fecha o modal e, opcionalmente, restaura o foco do teclado.
function closeInstallHelp(restoreFocus = true) {
  if (!installHelpPanel || installHelpPanel.hidden) {
    return;
  }

  installHelpPanel.hidden = true;
  installHelpPanel.setAttribute("aria-hidden", "true");
  installState.helpContext = null;
  document.body.classList.remove("modal-open");

  if (
    restoreFocus &&
    installState.lastFocusedElement &&
    typeof installState.lastFocusedElement.focus === "function"
  ) {
    installState.lastFocusedElement.focus();
  }
}

// Oculta os botões de instalação quando o site já está rodando como app instalado.
function updateInstallButtons() {
  installState.installed = isStandaloneMode();

  if (installState.installed) {
    closeInstallHelp(false);
  }

  installButtons.forEach((button) => {
    button.hidden = installState.installed;
  });
}

// Dispara o prompt nativo de instalação do navegador quando disponível.
async function promptInstall() {
  if (!installState.deferredPrompt) {
    return;
  }

  const promptEvent = installState.deferredPrompt;
  installState.deferredPrompt = null;

  try {
    await promptEvent.prompt();
    await promptEvent.userChoice;
  } catch (error) {
    console.error("Install prompt failed:", error);
  }

  updateInstallButtons();
}

// Direciona o CTA de instalação para o prompt nativo ou para o modal de fallback adequado.
async function handleInstallButtonClick() {
  if (installState.installed) {
    return;
  }

  if (installState.deferredPrompt) {
    await promptInstall();
    return;
  }

  if (window.location.protocol === "file:") {
    openInstallHelp(INSTALL_HELP_CONTEXTS.file);
    return;
  }

  if (isIOSSafari()) {
    openInstallHelp(INSTALL_HELP_CONTEXTS.ios);
    return;
  }

  openInstallHelp(INSTALL_HELP_CONTEXTS.unsupported);
}

// Aplica todos os textos dependentes de idioma, labels e links dinâmicos do WhatsApp.
function updateTranslatableContent() {
  const language = state.language;
  const theme = state.theme;
  const copy = translations[language];

  document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
  document.title = copy.pageTitle;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;

    if (copy[key]) {
      element.textContent = copy[key];
    }
  });

  languageToggle.textContent = copy.languageLabel;
  languageToggle.setAttribute("aria-label", copy.switchLanguageAria);

  const themeButtonLabel = theme === "dark" ? copy.themeButtonLight : copy.themeButtonDark;
  themeToggle.setAttribute("aria-label", copy.themeToggleLabel);
  themeToggle.querySelector("[data-i18n='themeButton']").textContent = themeButtonLabel;

  const generalQuoteLink = buildWhatsAppUrl(getGeneralQuoteMessage(language));
  heroQuoteButton.href = generalQuoteLink;
  footerQuoteButton.href = generalQuoteLink;
  floatingWhatsAppButton.href = generalQuoteLink;
  floatingWhatsAppButton.setAttribute("aria-label", copy.floatingWhatsApp);
  floatingWhatsAppButton.setAttribute("title", copy.floatingWhatsApp);

  const floatingWhatsAppLabel = floatingWhatsAppButton.querySelector(".sr-only");

  if (floatingWhatsAppLabel) {
    floatingWhatsAppLabel.textContent = copy.floatingWhatsApp;
  }

  if (installHelpPanel && !installHelpPanel.hidden) {
    renderInstallHelp();
  } else if (installHelpCloseIcon) {
    installHelpCloseIcon.setAttribute("aria-label", copy.installHelpClose);
  }

  renderServices();
  renderFeaturedSolutions();
  renderDeliveryModels();
  renderIndustries();
  renderStackGroups();
  renderFaqs();
  renderBriefForm();
}

// Persiste o tema ativo e sincroniza a cor da interface do navegador.
function applyTheme() {
  document.body.dataset.theme = state.theme;
  localStorage.setItem("alfa-theme", state.theme);

  if (themeColorMeta) {
    themeColorMeta.setAttribute("content", state.theme === "dark" ? "#0c1220" : "#eff3f7");
  }

  updateTranslatableContent();
}

// Persiste o idioma ativo e atualiza o conteúdo traduzível.
function applyLanguage() {
  localStorage.setItem("alfa-language", state.language);
  updateTranslatableContent();
}

// Registra o service worker apenas quando o contexto suporta esse recurso.
function registerServiceWorker() {
  if (!("serviceWorker" in navigator) || !/^https?:$/.test(window.location.protocol)) {
    return;
  }

  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch((error) => {
      console.error("Service worker registration failed:", error);
    });
  });
}

// Monta o briefing estruturado e envia pelo mesmo canal principal de orçamento.
function handleBriefSubmit(event) {
  event.preventDefault();

  if (!briefForm || !briefForm.reportValidity()) {
    return;
  }

  const language = state.language;
  const copy = translations[language];
  const serviceLabel = briefServiceSelect.options[briefServiceSelect.selectedIndex].textContent;
  const budgetLabel = briefBudgetSelect.options[briefBudgetSelect.selectedIndex].textContent;
  const timelineLabel =
    briefTimelineSelect.options[briefTimelineSelect.selectedIndex].textContent;
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
    `${copy.briefMessageBudget}: ${budgetLabel}`,
    `${copy.briefMessageTimeline}: ${timelineLabel}`,
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

// Esconde o botao flutuante quando a secao final de orcamento estiver visivel.
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

// Conecta o fluxo de instalação, os controles do modal e os listeners de estado.
function registerInstallExperience() {
  installButtons.forEach((button) => {
    button.addEventListener("click", handleInstallButtonClick);
  });

  installCloseTriggers.forEach((element) => {
    element.addEventListener("click", closeInstallHelp);
  });

  if (installHelpCloseButton) {
    installHelpCloseButton.addEventListener("click", closeInstallHelp);
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeInstallHelp();
    }
  });

  if (displayModeQuery) {
    const onDisplayModeChange = () => {
      updateInstallButtons();
    };

    if (typeof displayModeQuery.addEventListener === "function") {
      displayModeQuery.addEventListener("change", onDisplayModeChange);
    } else if (typeof displayModeQuery.addListener === "function") {
      displayModeQuery.addListener(onDisplayModeChange);
    }
  }

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    installState.deferredPrompt = event;
    updateInstallButtons();
  });

  window.addEventListener("appinstalled", () => {
    installState.deferredPrompt = null;
    installState.installed = true;
    updateInstallButtons();
  });

  updateInstallButtons();
}

// Controles do usuário para idioma e tema.
languageToggle.addEventListener("click", () => {
  state.language = state.language === "pt" ? "en" : "pt";
  applyLanguage();
});

themeToggle.addEventListener("click", () => {
  state.theme = state.theme === "dark" ? "light" : "dark";
  applyTheme();
});

// Inicialização da página.
applyTheme();
applyLanguage();
registerBriefForm();
registerFloatingWhatsAppBehavior();
registerInstallExperience();
registerServiceWorker();
