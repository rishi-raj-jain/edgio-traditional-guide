import { Router } from '@layer0/core/router'
import { publicPaths } from './publicPaths'

const router = new Router()

router.prerender(publicPaths)

router.match('/', ({ redirect }) => {
  redirect('/getting-started/installation')
})

router.match('/directory-structure/', ({ redirect }) => {
  redirect('/directory-structure/layer0')
})

router.match('/directory-structure/src', ({ redirect }) => {
  redirect('/directory-structure/src/browser')
})

router.static('dist', ({ cache }) => {
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

router.fallback(({ serveStatic }) => {
  serveStatic('dist/index.html')
})

export default router
