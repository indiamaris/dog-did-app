import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/packs/showPacks')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/packs/Packs"!</div>
}
