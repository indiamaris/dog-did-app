import { createFileRoute } from '@tanstack/react-router';
import Home from './Home';

export const Route = createFileRoute('/home')({
  component: Home,
});

