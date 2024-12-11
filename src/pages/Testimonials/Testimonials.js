import React from 'react'
import TestimoniCard from '../Card/TestimoniCard'
import testimonialData from '../../data/testimonialData'

const Testimonials = () => {
 
const estimoniCard = testimonialData.map(item =>
    <TestimoniCard data={item.data} nama={item.nama} username={item.username} image={item.image} />
)   

  return (

  <section className='justify-center w-full aglign-center bg-slate-50 h-full  h-50 mx-0 lg:w-auto'>
    <div className='justify-center w-full aglign-center bg-slate-50 h-full'>

      <div className='justify-center w-full aglign-center bg-slate-50 h-full'>
                
   <div className='flex justify-center aglign-center  list-none mx-20 inline-block align-middle'>
        <li className='items-center my-20 text-center inline-block align-middl px-10'>
    
            <h1 className='text-2xl font-bold font-weights mb-5'>
            Testimonials
            </h1>
            <p className='line-clamp-3 lg:line-clamp-none'>
            We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.
            </p>
            </li>
    </div>

     

<div className='grid justify-center justify-items-center grid-rows-1 gap-5 gap-x-10 gap-y-20 md:grid-cols-2 lg:grid-cols-4 xl:mx-80 xl:py-10 lg:mx-0 lg:py-0 visibiloi'>

{estimoniCard}

</div>

</div>

<div>
</div>
</div>

   </section>
   
  )
}

export default Testimonials
