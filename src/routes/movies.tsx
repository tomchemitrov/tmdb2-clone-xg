import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/movies')({
    component: MoviesComponent,
})

function MoviesComponent() {
    return <div>Hello "/movies"!</div>
}