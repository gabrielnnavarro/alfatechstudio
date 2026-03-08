// Nome versionado do cache para invalidar arquivos antigos em atualizações futuras.
const CACHE_NAME = "alfa-static-v1";

// App shell mínimo necessário para iniciar offline e acelerar visitas futuras.
const APP_SHELL = [
  "./",
  "./index.html",
  "./styles.css",
  "./script.js",
  "./manifest.webmanifest",
  "./icons/icon.svg",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/apple-touch-icon.png"
];

// Faz o pré-cache do app shell durante a instalação.
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(APP_SHELL);
    })
  );

  self.skipWaiting();
});

// Remove caches antigos e assume o controle assim que for ativado.
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName))
      );
    })
  );

  self.clients.claim();
});

// Usa network-first para navegação e cache-first para arquivos da mesma origem.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  const requestUrl = new URL(event.request.url);
  const isSameOrigin = requestUrl.origin === self.location.origin;

  // Navegações HTML tentam a rede primeiro e usam o shell em cache como fallback.
  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match("./index.html");
      })
    );
    return;
  }

  if (!isSameOrigin) {
    return;
  }

  // Arquivos estáticos da mesma origem vêm primeiro do cache e depois atualizam pela rede.
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request)
        .then((networkResponse) => {
          if (!networkResponse || networkResponse.status !== 200) {
            return networkResponse;
          }

          const responseClone = networkResponse.clone();

          // Salva respostas válidas para uso offline e recarregamentos mais rápidos.
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });

          return networkResponse;
        })
        .catch(() => {
          if (event.request.destination === "document") {
            return caches.match("./index.html");
          }

          // Arquivo de fallback para imagens e ícones quando estiver offline.
          return caches.match("./icons/icon-192.png");
        });
    })
  );
});
