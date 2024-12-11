import React from 'react'
import JobCard from './JobCard';
import jobData from '../../data/jobData';

const CardCommponent = () => {

  return (
 

  <div className='flex justify-center items-center align-center '>
    
    {jobData.map((item) => (    
      <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                
      <svg class="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
           <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
       </svg>
   
       <a href="#">
           <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.Position}</h5>
       </a>
       
       <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.Company}</p>
       <div className='flex items-center my-6'>
       <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2 mx-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
   
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
       </svg>
       <p className='flex items-center font-bold'>Locations : 
       </p>
       <p>{item.Location}</p>
   
       </div>

       <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
           Read more
           <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
           </svg>
       </a>
   </div>
   




    ))}

</div>
  


     
   
    
  );

};

export default CardCommponent



