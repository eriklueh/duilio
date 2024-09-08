'use client'


import { GalleryImage } from "~/components/gallery_image";

const galleryImages = [
  { img: '/img.png', place: 'Buenos Aires', date: '2023-05-15' },
  { img: '/img.png', place: 'Córdoba', date: '2023-06-22' },
  { img: '/img.png', place: 'Mendoza', date: '2023-07-10' },
  { img: '/img.png', place: 'Bariloche', date: '2023-08-05' },
  { img: '/img.png', place: 'Salta', date: '2023-09-18' },
  { img: '/img.png', place: 'Ushuaia', date: '2023-10-30' },
]

export function Gallery() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
      {galleryImages.map((image, i) => (
        <GalleryImage key={i} image={image} index={i} />
      ))}
    </div>
  )
}