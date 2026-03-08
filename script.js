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
    pageTitle: "ALFA | Desenvolvimento Sob Medida",
    brandTag: "Software studio",
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
    pageTitle: "ALFA | Custom Software Development",
    brandTag: "Software studio",
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
const languageToggle = document.getElementById("language-toggle");
const themeToggle = document.getElementById("theme-toggle");
const heroQuoteButton = document.getElementById("hero-quote-button");
const footerQuoteButton = document.getElementById("footer-quote-button");
const floatingWhatsAppButton = document.getElementById("floating-whatsapp-button");
const themeColorMeta = document.getElementById("theme-color-meta");
const installButtonHeader = document.getElementById("install-button-header");
const installButtonHero = document.getElementById("install-button-hero");
const installButtons = [installButtonHeader, installButtonHero].filter(Boolean);
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
  floatingWhatsAppButton.querySelector("span").textContent = copy.floatingWhatsApp;

  if (installHelpPanel && !installHelpPanel.hidden) {
    renderInstallHelp();
  } else if (installHelpCloseIcon) {
    installHelpCloseIcon.setAttribute("aria-label", copy.installHelpClose);
  }

  renderServices();
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
registerInstallExperience();
registerServiceWorker();
