import React from 'react'
import optionsData from '../../data/optionData'

const Options = () => {
  return (
    <section className='justify-center w-full aglign-center bg-slate-50 h-full  h-50 mx-50 lg:w-auto'>
    <div className='justify-center w-full aglign-center bg-slate-50 h-full'>
      <div className='justify-center w-full aglign-center bg-slate-50 h-full'>
        <ul className='flex justify-center my-50 pt-20 '>
            <h1 className='text-2xl font-bold mt30'>
            Key Features of Our Business Solutions
            </h1>
        </ul>

       <div className='py-20'>

<div className='grid justify-center grid-rows-1 gap-1 gap-x- gap-y-5 md:grid-cols-2 lg:grid-cols-3 xl:mx-80 xl:py-20 lg:mx-0 lg:py-0 '>

  {optionData.map((items,i) => (

<div class="max-w-sm p-6 lg:w-auto bg-white rounded-2xl m-10 shadow-blue-500/50 hover:bg-gray-100">
  
      <img src={items.Icon} className='w-20' alt='image'></img>

    
    <a href="#">
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{items.title}</h5>
    </a>
    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">{items.deskription}</p>
    <a href="#" class="inline-flex font-medium items-center text-blue-600 hover:underline">
       Read More
        <svg class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
        </svg>
    </a>

</div>

))}
           
</div>
</div>
<div>
</div>
</div>
</div>
   </section>
  )
}

export default Options
