import { createRouter } from '@tanstack/react-router';
import { routeTree } from '../../routeTree.gen';

const router = (queryClient) =>
  createRouter({
    routeTree,
    context: {
      queryClient,
    },
    defaultPreload: 'intent',
    defaultPreloadStaleTime: 0,
    scrollRestoration: true,
  });

export default router;
