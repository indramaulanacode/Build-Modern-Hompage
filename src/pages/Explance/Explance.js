import React from 'react'

const Explance = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      
      {/* BACKGROUND IMAGE */}
      <img
        src="/Img/Hero.png"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      {/* CONTENT */}
      <div className="relative z-10 flex justify-center w-full">
        
        <div className="flex flex-col items-center text-center py-16 px-4 mx-auto max-w-screen-xl 
                        lg:grid lg:grid-cols-2 lg:gap-10 lg:text-left lg:py-16 lg:px-6">
          
          {/* TEXT */}
          <div className="font-light text-slate-950 sm:text-lg">
            <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
              Business Solutions
            </h2>

            <p className="mb-4 text-black text-sm sm:text-base">
              Our team of experienced professionals works closely with you to ensure that your vision becomes a reality.
              Whether you’re looking to build a powerful online presence, optimize your website for better performance,
              or implement marketing strategies that generate leads, your business is in good hands.
            </p>

            <p className="mb-4 text-sm sm:text-base">
              We are strategists, designers and developers. Innovators and problem solvers.
              Small enough to be simple and quick.
            </p>

            <button className="mt-4 px-5 py-2.5 text-sm sm:text-base text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition">
              Default
            </button>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center lg:justify-end mt-10 lg:mt-0">
            <img
              src="/Img/pngegg (2).png"
              alt="illustration"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
            />
          </div>

        </div>
      </div>

    </section>
  )
}

export default Explance