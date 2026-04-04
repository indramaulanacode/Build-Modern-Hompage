import React from 'react'

const TestimoniCard = (props) => {
  return (
 

    <div className='flex w-auto h-auto justify-center items-center position-fixed'>
    <a href="#" class="block max-w-sm p-6 bg-white  rounded-xl  hover:bg-gray-100">
    <p class="font-normal text-gray-700 dark:text-gray-400">{props.data}</p>

    <ul className='mt-5 flex-shrink-0 justify-center items-center'>
            <div className='flex justify-start items-center'>
            <li className="flex w-10 h-10 rounded-full overflow-hidden">
  <img 
    src={props.image} 
    alt="profile"
    className="w-full h-full object-cover"
  />
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
