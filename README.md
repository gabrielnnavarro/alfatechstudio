# Agencia ALFA

Site institucional da Agencia ALFA para captacao de clientes e apresentacao de servicos de desenvolvimento sob medida.

## Visao geral

O projeto apresenta a empresa, seus servicos e canais de contato, com foco em conversao comercial e compatibilidade ampla entre navegadores e dispositivos.

## Recursos

- Interface bilingue em portugues e ingles
- Tema claro e escuro com persistencia local
- Botoes de WhatsApp com mensagem geral e mensagens personalizadas por servico
- Layout responsivo para desktop, tablet e mobile
- PWA instalavel com manifesto, service worker e icones
- Fluxo de instalacao com fallback para iOS, `file://` e navegadores sem suporte

## Estrutura

- `index.html`: estrutura principal do site
- `styles.css`: layout, tema, responsividade e componentes visuais
- `script.js`: idioma, tema, servicos, links do WhatsApp e instalacao do app
- `manifest.webmanifest`: configuracao do PWA
- `service-worker.js`: cache offline e estrategia de carregamento
- `serve-local.ps1`: servidor local simples para testes via HTTP
- `icons/`: icones usados pelo PWA e atalhos do dispositivo

## Execucao local

Para testar localmente com recursos de PWA ativos:

```powershell
.\serve-local.ps1
```

Depois abra:

```text
http://127.0.0.1:4173
```

## Publicacao

O projeto esta configurado para funcionar como site estatico na Netlify.

Configuracao recomendada na Netlify:

- Branch: `main`
- Build command: vazio
- Publish directory: `.`

## Repositorio

- GitHub: `https://github.com/gabrielnnavarro/agencia-alfa-acessoria`

## Observacao

O nome atual do repositorio e da URL publicada usa `acessoria`. Se a marca final for `assessoria`, a correcao pode ser feita depois no GitHub, na Netlify e, se desejar, no dominio publico.
