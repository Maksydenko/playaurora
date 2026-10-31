import type { JSX } from 'react'

import {
  createRouter,
  RouterProvider as RouterClientProvider
} from '@tanstack/react-router'

// Import the generated route tree
import { routeTree } from '@/routeTree.gen'

// Create a new router instance
const router = createRouter({
  context: {},
  defaultPreload: 'intent',
  defaultPreloadStaleTime: 0,
  defaultStructuralSharing: true,
  routeTree,
  scrollRestoration: true
})

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export const RouterProvider = (): JSX.Element => (
  <RouterClientProvider router={router} />
)
