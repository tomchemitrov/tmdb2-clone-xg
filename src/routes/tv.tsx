import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/tv')({
  component: TVComponent,
})

function TVComponent() {
  return <div>Hello "/tv"!</div>
}