'use client'

import Image from 'next/image'
import { Card, CardContent } from '~/components/ui/card'

export function GalleryImage({ image, index }: { image: { img: string; place: string; date: string }; index: number }) {
  return (
    <Card className="overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-300 bg-gray-100 dark:bg-background border-gray-200 shadow-md">
      <CardContent className="p-3">
        <div className="aspect-[3/2] relative overflow-hidden mb-2 ">
          <Image
            src={image.img}
            alt={`Gallery image ${index + 1}`}
            layout="fill"
            objectFit="cover"

          />
        </div>
        <div className="font-handwriting text-left">
          <p className="text-xs text-gray-700 dark:text-gray-300">{image.place}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">{image.date}</p>
        </div>
      </CardContent>
    </Card>
  )
}