import { Router } from '@layer0/core/router'

export default new Router()
  .match('/', ({ redirect }) => {
    redirect('/getting-started/installation')
  })
  .match('/directory-structure/', ({ redirect }) => {
    redirect('/directory-structure/layer0')
  })
  .match('/directory-structure/src', ({ redirect }) => {
    redirect('/directory-structure/src/browser')
  })
  .static('dist', ({ cache }) => {
    cache({
      edge: {
        maxAgeSeconds: 60 * 60 * 24 * 365,
        forcePrivateCaching: true,
      },
      browser: {
        serviceWorkerSeconds: 60 * 60 * 24 * 365,
      },
    })
  })
  .fallback(({ serveStatic }) => {
    serveStatic('dist/index.html')
  })
