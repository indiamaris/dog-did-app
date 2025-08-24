import { createFileRoute } from '@tanstack/react-router'
import SignIn from './SignIn'

export const Route = createFileRoute('/sigin')({
  component: SignIn,
});
