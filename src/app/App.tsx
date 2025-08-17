
import { createRoot } from 'react-dom/client'
import './global.css'
import router  from '@router/router.tsx'
import { RouterProvider } from '@tanstack/react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const queryClient = new QueryClient()
createRoot(document.getElementById('root')!).render(

  <QueryClientProvider client={queryClient}>
      <RouterProvider router={router(queryClient)} />
    </QueryClientProvider>,


)
