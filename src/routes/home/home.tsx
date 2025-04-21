import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/test')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='text-red-400'>Hello "/home/home"!</div>
}
