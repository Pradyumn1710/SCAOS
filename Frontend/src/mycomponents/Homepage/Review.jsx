import { Star } from "lucide-react"

export default function Review() {
  const reviews = [
    {
      author: "Prashant K.",
      text: "Excellent service! The attention to detail was impressive. Affordable and reliable.",
      rating: 5,
      image: "/Letters/P.png",
    },
    {
      author: "Akshita S.",
      text: "Professional and thorough. Highly recommended! ",
      rating: 4,
      image: "/Letters/A.png",
    },
    {
      author: "Tanisha R.",
      text: "Will use again! The team was punctual and very polite.",
      rating: 5,
      image: "/Letters/T.png",
    },
  ]

  return (
    <section className="my-16 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 max-w-screen-2xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8" data-aos="fade-up">
        Customer Reviews
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="flex items-center mb-4">
              <img
                src={review.image || "/placeholder.svg"}
                alt={review.author}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-semibold">{review.author}</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill={i < review.rating ? "gold" : "none"}
                      stroke={i < review.rating ? "gold" : "currentColor"}
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600 italic mb-4">"{review.text}"</p>
          </div>
        ))}
      </div>
    </section>
  )
}