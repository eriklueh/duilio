"use client";

import { useState } from "react";
import Image from "next/image";
import { Instagram } from "lucide-react";
import { Button } from "~/components/ui/button";
import { ScrollArea } from "~/components/ui/scroll-area";
import { Dialog, DialogContent, DialogTrigger } from "~/components/ui/dialog";
import { portfolioImages, specialties } from "./data";
import { PortfolioImage } from "~/components/portfolio-image";
import { ContactForm } from "~/components/contact-form";

export function PhotographerPortfolio() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="flex h-screen flex-col bg-background text-foreground">
      <header className="flex items-center justify-between p-6">
        <h1 className="text-2xl font-bold">Duilio</h1>
      </header>

      <main className="container mx-auto grid flex-grow grid-cols-1 gap-8 px-4 py-5 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-1">
          <Image
            src="/img.png"
            alt="Main portfolio image"
            width={600}
            height={400}
            className="w-full rounded-lg object-cover"
          />
          <div className="flex flex-wrap gap-2">
            {specialties.map((specialty) => (
              <Button
                key={specialty}
                variant="outline"
                className="h-auto rounded-full px-3 py-1 text-sm font-normal"
              >
                {specialty}
              </Button>
            ))}
          </div>
          <div>
            <h2 className="mb-2 text-xl font-semibold">About Me</h2>
            <p className="text-muted-foreground">
              I'm a passionate photographer capturing the beauty of the world
              through my lens. I specialize in equestrian photography, creating
              unique and timeless images that tell a story.
            </p>
          </div>
          <Button variant="outline" className="w-full">
            <Instagram className="mr-2 h-4 w-4" />
            Follow on Instagram
          </Button>
          <div className="flex justify-center">
            <Image
              src="/signature.png"
              alt="Photographer's signature"
              width={300}
              height={200}
              className="object-contain"
            />
          </div>
        </div>

        <ScrollArea className="hide-scrollbar h-[calc(100vh-12rem)] lg:col-span-2">
          <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 sm:p-10 md:grid-cols-3">
            {portfolioImages.map((image, index) => (
              <PortfolioImage key={index} image={image} index={index} />
            ))}
          </div>
        </ScrollArea>
      </main>

      <footer className="border-t border-muted-foreground/20">
        <div className="container mx-auto flex flex-col items-center justify-between px-4 py-6 sm:flex-row">
          <p className="mb-4 text-sm text-muted-foreground sm:mb-0">
            &copy; {new Date().getFullYear()} Photographer Name. All rights
            reserved.
          </p>
          <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
            <DialogTrigger asChild>
              <Button>Contact Me</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <ContactForm onClose={() => setIsContactOpen(false)} />
            </DialogContent>
          </Dialog>
        </div>
      </footer>
    </div>
  );
}
