import React, { useState } from 'react'
import Image from 'next/image'

function DesignType({selectedDesignType}) {
    const Designs=[
        {
            name:'Modern',
            image:'/modern.png',
        },
        {
            name:'Industrial',
            image:'/industrial.png',
        },
        {
            name:'Sporty',
            image:'/sporty.png',
        },
        {
            name:'Tech',
            image:'/tech.png',
        },
        {
            name:'Minimalistic',
            image:'/minimalist.png',
        },
    ]
    const [selectedOption, setSelectedOption]=useState();
  return (
    <div className='mt-5'>
      <label className='text-gray-500'>Design Type</label>
      <div className='grid mt-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {Designs.map((design,index)=>(
            <div key={index} onClick={()=>{setSelectedOption(design.name);selectedDesignType(design.name)}}>
                <Image src={design.image} width={100} height={100} className='h-[70px] rounded-md hover:scale-125 transition-all cursor-pointer'/>
                <h2>{design.name}</h2>
            </div>
        ))}
      </div>
    </div>
  )
}

export default DesignType
