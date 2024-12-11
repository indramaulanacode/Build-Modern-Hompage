import React from 'react'

const dataImage = [
  {

      image:"https://images.pexels.com/photos/3184303/pexels-photo-3184303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      image2:"https://images.pexels.com/photos/3182782/pexels-photo-3182782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bg:"/Img/Ellipse 1.jpg"
   
  },

];
const Strategy = () => {
  return (
    <section className="justify-center w-full aglign-center h-full mx-50 ">
      <img src="/Img/Ellipse 1.jpg" className='bg-center flex absolute z-[-1] justify-center aglign-center w-full '></img>
      <div className='justify-center w-full aglign-center'>
        <ul className='flex justify-center my-50 pt-20'>
            <h1 className='text-2xl font-bold mt30 text-black
            '>
            Our Solutions Cover a Wide Range of Industries
            </h1>
        </ul>
       <div className='py-20'>

        {/* Chart Solusi */}

{/* Opsi Solusi */}

{dataImage.map((item,i) => (
  
<div class="gap-16 items-center py-8 px-20 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">

<div class="grid grid-cols-1 gap-4 mt-8 md:grid ">
        <img class="w-full rounded-lg" src={item.image} alt="office content 1"></img>
        <img class="mt-4 w-full lg:mt-10 rounded-lg" src={item.image2} alt="office content 2"></img>
        </div>

        <div class="font-light text-white sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-black">We didn't reinvent the wheel</h2>
            <p class="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
            <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
            <div className='mt-10'>
        <button type="button" class="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default</button>
        </div>
        </div>

 </div>
 ))}
</div>
</div>
<div>
</div>
</section>

  )
}

export default Strategy
