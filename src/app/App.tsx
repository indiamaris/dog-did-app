
import { createRoot } from 'react-dom/client'
import './global.css'
import{ router } from './router/router'
import { RouterProvider } from '@tanstack/react-router'


// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

createRoot(document.getElementById('root')!).render(
  <>
    <RouterProvider router={router} />

  </>
)
