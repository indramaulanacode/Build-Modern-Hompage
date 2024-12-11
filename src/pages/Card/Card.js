import React from 'react'
import { Link } from 'react-router-dom'
import CardCommponent from '../commponent/CardCommponent'

 
const Card = () => {
  
  return (
   
    <section className=" flex justify-center w-full h-full bg-slate-200 " >
      <div className='m-40 flex justify-center aglign-center'>
      <CardCommponent className ="flex m-10 p-52 py-20 m-16" />
      </div>
    </section>
  )
}

export default Card
