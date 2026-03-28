import React from 'react'
import TestimoniCard from '../Card/TestimoniCard'
import testimonialData from '../../data/testimonialData'

const Testimonials = () => {

  const estimoniCard = testimonialData.map((item, i) => (
    <TestimoniCard
      key={i}
      data={item.data}
      nama={item.nama}
      username={item.username}
      image={item.image}
    />
  ))

  return (
    <section className="w-full bg-slate-50 py-16 px-4">
      
      {/* HEADER */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-2xl md:text-3xl font-bold mb-5">
          Testimonials
        </h1>

        <p className="text-sm md:text-base text-gray-600">
          We are strategists, designers and developers. Innovators and problem solvers. 
          Small enough to be simple and quick, but big enough to deliver the scope you want 
          at the pace you need.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid gap-6 
                      sm:grid-cols-1 
                      md:grid-cols-2 
                      lg:grid-cols-3 
                      xl:grid-cols-4">
        
        {estimoniCard}

      </div>

    </section>
  )
}

export default Testimonials