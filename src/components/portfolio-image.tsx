"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface PortfolioImageProps {
  image: {
    src: string;
    location: string;
    date: string;
  };
  index: number;
}

export function PortfolioImage({ image, index }: PortfolioImageProps) {
  const randomRotation = Math.random() * 6 - 3;

  return (
    <motion.div
      className="space-y-2 rounded-lg bg-muted p-4 shadow-md"
      initial={{ rotate: randomRotation }}
      whileHover={{
        scale: 1.05,
        rotate: -randomRotation,
        zIndex: 1,
        transition: { duration: 0.2 },
      }}
    >
      <Image
        src={image.src}
        alt={`Portfolio image of ${image.location}`}
        width={300}
        height={200}
        className="h-40 w-full rounded-lg object-cover"
      />
      <p className="font-semibold">{image.location}</p>
      <p className="text-sm text-muted-foreground">{image.date}</p>
    </motion.div>
  );
}
