"use client"

import { Link } from "react-router-dom"

const services = [
  {
    title: "Residential Cleaning",
    subtitle: "Your Home, Our Care",
    description:
      "We offer comprehensive residential cleaning services tailored to your specific needs. From regular maintenance to deep cleaning, we ensure your home is always at its best.",
    image: "/Main/Residential_cleaning.jpg",
    // priceRange: "$100 - $300",
    details: [
      "Dusting and vacuuming",
      "Kitchen and bathroom sanitization",
      "Floor mopping and polishing",
      "Window cleaning",
      "Laundry and linen change (optional)",
    ],
  },
  {
    title: "Commercial Cleaning",
    subtitle: "Professional Spaces, Spotless Results",
    description:
      "Keep your business environment clean, hygienic, and impressive with our commercial cleaning solutions. We cater to offices, retail spaces, and industrial facilities.",
    image: "/Main/commercial_cleaning.jpg",
    // priceRange: "$200 - $1000",
    details: [
      "Daily janitorial services",
      "Floor care and maintenance",
      "Window and glass cleaning",
      "Restroom sanitation",
      "Trash removal and recycling",
    ],
  },
  {
    title: "Specialized Cleaning",
    subtitle: "Expert Solutions for Unique Needs",
    description:
      "From post-construction cleanup to biohazard remediation, our specialized cleaning services address your most challenging cleaning requirements.",
    image: "/Main/specialized_cleaning.jpg",
    // priceRange: "$300 - $2000",
    details: [
      "Post-construction cleanup",
      "Carpet and upholstery deep cleaning",
      "High-rise window cleaning",
      "Biohazard and trauma scene cleanup",
      "Mold remediation",
    ],
  },
  {
    title: "House Keeping",
    subtitle: "Your Home, Our Care",
    description:
      "We offer comprehensive residential cleaning services tailored to your specific needs. From regular maintenance to deep cleaning, we ensure your home is always at its best.",
    image: "/Main/house_keeping.jpg",
    // priceRange: "$300 - $2000",
    details: [
      "Dusting and vacuuming",
      "Kitchen and bathroom sanitization",
      "Floor mopping and polishing",
      "Window cleaning",
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        <div className="space-y-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                <img
  className="h-full w-full md:w-48 object-cover object-center"
  src={service.image || "/placeholder.svg"}
  alt={service.title}
/>

                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    {service.subtitle}
                  </div>
                  <h2 className="block mt-1 text-2xl leading-tight font-medium text-black">{service.title}</h2>
                  <p className="mt-2 text-gray-500">{service.description}</p>
                  {/* <p className="mt-2 text-gray-700 font-semibold">Price Range: {service.priceRange}</p> */}
                  <ul className="mt-4 list-disc list-inside text-gray-600">
                    {service.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Link
                      to="/#quote"
                      className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300"
                    >
                      Get a Quote
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

