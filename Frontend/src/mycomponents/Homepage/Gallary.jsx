// import Image from "next/image"
import React from "react"
import { Image } from "lucide-react"

export default function Gallery() {
  const images = [
    "/placeholder.svg?height=200&width=300",
    "/placeholder.svg?height=200&width=300",
    "/placeholder.svg?height=200&width=300",
    "/placeholder.svg?height=200&width=300",
  ]

  return (
    <section className="my-16">
      <h2 className="text-3xl font-bold text-center mb-8" data-aos="fade-up">
        Our Work
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div key={index} className="relative h-48" data-aos="zoom-in" data-aos-delay={index * 100}>
            <Image
              src={src || "/placeholder.svg"}
              alt={`Gallery image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

