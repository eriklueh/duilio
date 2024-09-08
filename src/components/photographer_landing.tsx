'use client'


import { ProfileCard } from "~/components/profile_card";
import { Header } from "~/components/header";
import { Gallery } from "~/components/gallery";

export function PhotographerLanding() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <ProfileCard />
          </div>
          <div className="md:w-2/3">
            <Gallery />
          </div>
        </div>
      </main>
    </div>
  )
}