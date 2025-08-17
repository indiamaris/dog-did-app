import { createRoot } from 'react-dom/client';
import './global.css';
import router from '@router/router.tsx';
import { RouterProvider } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { darkTheme } from '@theme/theme';

const queryClient = new QueryClient();
createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={darkTheme}>
      <RouterProvider router={router(queryClient)} />
      <CssBaseline />
    </ThemeProvider>
  </QueryClientProvider>,
);
