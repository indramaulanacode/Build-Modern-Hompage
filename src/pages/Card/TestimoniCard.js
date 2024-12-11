import React from 'react'

const TestimoniCard = (props) => {
  return (
 

    <div>
    <a href="#" class="block max-w-sm p-6 bg-white  rounded-xl  hover:bg-gray-100">
    <p class="font-normal text-gray-700 dark:text-gray-400">{props.data}</p>

    <ul className='mt-5 flex-shrink-0 justify-start items-center'>
            <div className='flex justify-start items-center'>
            <li className='flex '>
                <img src={props.image} className="w-10 h-10 bg-co rounded-full">
                </img>
            </li>
         

            <div className='ml-3'>
            <li className='font-bold text-lg'>
                {props.nama}
            </li>
            <li className='text-slate-500 text-lg'>
               {props.username}
            </li>
            </div>
               </div>
        </ul>
    </a>
</div>

  )
}

export default TestimoniCard
