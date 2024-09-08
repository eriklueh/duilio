'use client'

import Image from 'next/image'
import { Instagram } from 'lucide-react'
import { Button } from '~/components/ui/button'
import { Card, CardContent } from '~/components/ui/card'
import { Badge } from '~/components/ui/badge'

const tags = ['Equestrian', 'Polo', 'Nature', 'Events']

export function ProfileCard() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="mb-6">
          <Image
            src="/img.png"
            alt="Photographer"
            width={300}
            height={300}
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline">{tag}</Badge>
          ))}
        </div>
        <h2 className="text-xl font-semibold mb-4">About Me</h2>
        <p className="text-muted-foreground mb-6">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          I'm a passionate photographer capturing the beauty of the world through my lens. I specialize in equestrian photography, creating unique and timeless images that tell a story.
        </p>
        <div className="space-y-2">
          <Button className="w-full">Contact Me</Button>
          <Button variant="outline" className="w-full">
            <Instagram className="mr-2" size={20} />
            Follow on Instagram
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}