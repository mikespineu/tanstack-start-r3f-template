import { createFileRoute } from '@tanstack/react-router'
import { SpinningCube } from '../components/SpinningCube'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center gap-8">
      <h1 className="text-4xl font-bold tracking-tight">TanStack Start + R3F</h1>
      <div className="w-96 h-96 rounded-2xl overflow-hidden ring-1 ring-white/10">
        <SpinningCube />
      </div>
      <p className="text-gray-400 text-sm">Three.js · React Three Fiber · TailwindCSS</p>
    </div>
  )
}
