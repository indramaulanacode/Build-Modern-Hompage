import React from 'react'

const Explance = () => {
  return (
    <section className="w-full bg-white py-16 px-4">
      
      <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-2 items-center">
        
        {/* TEXT */}
        <div>
          <h2 className="mb-4 text-3xl md:text-4xl font-extrabold text-gray-900">
            Business Solutions
          </h2>

          <p className="mb-4 text-gray-700">
            Our team of experienced professionals works closely with you to ensure that your vision becomes a reality. 
            Whether you’re looking to build a powerful online presence, optimize your website for better performance, 
            or implement marketing strategies that generate leads, your business is in good hands.
          </p>

          <p className="mb-6 text-gray-600">
            We are strategists, designers and developers. Innovators and problem solvers. 
            Small enough to be simple and quick.
          </p>

          <button className="px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition">
            Get Started
          </button>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="/Img/pngegg (2).png"
            alt="Business Illustration"
            className="w-full max-w-md md:max-w-lg"
          />
        </div>

      </div>

      {/* BACKGROUND IMAGE */}
      <div className="mt-10">
        <img
          src="/Img/Hero.png"
          alt="Background"
          className="w-full object-cover rounded-xl"
        />
      </div>

    </section>
  )
}

export default Explance