'use client'

import { ThemeToggle } from '~/components/common/mode-toggle'

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Photographer Name</h1>
        <ThemeToggle />
      </div>
    </header>
  )
}