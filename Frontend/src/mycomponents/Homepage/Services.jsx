"use client"

import {Link} from "react-router-dom"
import { ArrowRight } from "lucide-react"

export default function Services() {
  const services = [
    {
      title: "Residential Cleaning",
      description: "Professional home cleaning services tailored to your needs.",
      image: "/Main/people-taking-care-office-cleaning.jpg",
    },
    {
      title: "Commercial Cleaning",
      description: "Keep your business spotless with our commercial cleaning solutions.",
      image: "Main/full-shot-men-cleaning-office.jpg",
    },
    {
      title: "Specialized Cleaning",
      description: "Expert cleaning for specific needs like post-construction or deep cleaning.",
      image: "Main/specialized cleaning.jpg",
    },
  ]

  return (
    <section className="my-16 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 max-w-screen-2xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8" data-aos="fade-up">
        Our Services
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="flex flex-col h-full">
              <div className="relative w-full h-96">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
                <div className="mt-4">
                  <Link
                    to="/services"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
                  >
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

