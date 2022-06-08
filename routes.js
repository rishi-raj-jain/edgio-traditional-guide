import { Router } from '@layer0/core/router'

export default new Router().static('dist', ({ cache }) => {
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
