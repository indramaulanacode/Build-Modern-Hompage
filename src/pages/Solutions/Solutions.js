import React from 'react'


const dataImage = [
    {
 
        image:"https://images.pexels.com/photos/3184303/pexels-photo-3184303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        image2:"https://images.pexels.com/photos/3182782/pexels-photo-3182782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
     
    },
  
];

const cardData = [

    {
        icon:"Img/Group 144.png",
        nama:"Design",
        deskripsi:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
        icon:"/Img/Group 151-1.png",
        nama:"Design",
        deskripsi:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
        icon:"/Img/Group 115.png",
        nama:"Design",
        deskripsi:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    }


];

const solutions = () => {
  return (

    <section className='justify-center w-full aglign-center bg-white h-full  mx-50'>
      <div className='justify-center w-full aglign-center bg-slate-50  h-full'>

           
   <div className='flex justify-center aglign-center  list-none'>
        <li className='items-center mt-20 text-center'>
    <p className='flex-row'>
            Why Choose SalyBuild?
            </p>
            <h1 className='text-2xl font-bold mt30'>
            Our Soluti ons Cover a Wide Range of Industries
            </h1>
            </li>
    </div>
       

       <div className='py-10'>

  

        {/* Chart Solusi */}



    

       
<div className='grid grid-cols-2 gap-1 gap-x- gap-y-5 md:grid-cols-2 lg:grid-cols-3 justify-center  py-5 mx-10 lg:flex lg:flex-row'>
{cardData.map((item,) => (
    <div className='bg-white flex rounded-2xl mx-10 '>
        <div className='p-5 flex bgjustify-start w-full '>
      
        <div className='w-full p-2'>

            <div className='flex flex-wrap justify-start aglign-center'>
                <ul className='mr-6'>
                    <img src={item.icon} className='w-10'></img>
                </ul>
                <h1 className='text-2xl font-bold '>
                    {item.nama}
                </h1>
            </div>
        <div className='mt-5'>
            <p1 className='mt-10 text-slate-500'>
            {item.deskripsi}
            </p1>
         </div>
        </div>
        </div>
    </div>  
))}      
</div>



{/* Opsi Solusi */}

{dataImage.map((item,i) => (
  


<div class="gap-16 items-center py-8 px-20 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6 ">
        <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-black">We didn't reinvent the wheel</h2>
            <p class="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
            <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-8 ">
      
        <img class="w-full rounded-lg" src={item.image} alt="office content 1"></img>
        <img class="mt-4 w-full lg:mt-10 rounded-lg" src={item.image2} alt="office content 2"></img>
        </div>

        <div>
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default</button>
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

export default solutions
