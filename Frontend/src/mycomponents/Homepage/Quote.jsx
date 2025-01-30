'use client'

export default function Quote() {
  return (
    <section id="quote" className="my-16">
      <div className="container mx-auto px-4">
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="relative z-10 md:w-1/2 p-8 lg:p-12" data-aos="fade-right">
              <h2 className="text-3xl font-bold mb-6">Transform Your Space Today!</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-600">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-600">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-600">Company Name</label>
                  <input 
                    type="text" 
                    id="company" 
                    name="company" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    required 
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
                >
                  Get Your Free Quote
                </button>
              </form>
            </div>
            <div 
              className="absolute inset-0 md:relative md:w-1/2 bg-cover bg-center"
              style={{
                backgroundImage: `url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202025-01-29%2019-15-57-Pl4dySzenjKfTurUuB4ARbdjYtY4EV.png")`,
                opacity: '0.15',
                filter: 'brightness(0.7)'
              }}
            >
              <div className="absolute inset-0 bg-blue-600/10 md:bg-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
