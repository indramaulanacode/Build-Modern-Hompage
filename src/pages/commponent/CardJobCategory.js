import React from 'react'

const CardJobCategory = (props) => {

  return (
   
<span className='m-12'>

<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.name}</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">{props.info}</p>
</a>

</span>

  )
}

export default CardJobCategory
