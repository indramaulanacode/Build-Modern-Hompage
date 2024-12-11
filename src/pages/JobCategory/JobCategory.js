import React from 'react'
import CardJobCategory from '../commponent/CardJobCategory' 
import categoryData from '../../data/categoryData'

const JobCategory = () => {
  return (



<section className='flex justify-center align-center w-full'>



    <span className='inline-grid grid-cols-3 gap-3'>
        {categoryData.map((items) => (
            <CardJobCategory className='' name={items.name} info={items.info}/>
        ))}
    </span>

</section>
    

    

  )
}

export default JobCategory
