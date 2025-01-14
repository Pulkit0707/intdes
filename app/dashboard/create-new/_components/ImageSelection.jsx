"use client"

import React, { useState } from 'react'
import Image from 'next/image'

function ImageSelection({selectedImage}) {
    const [file,setFile]=useState();
    const onFileSelected=(event)=>{
        console.log(event.target.files[0]);
        setFile(event.target.files[0]);
        selectedImage(event.target.files[0])
    }
  return (
    <div>
        <label>Select Image of your room</label>
        <div className='mt-3'>
            <label htmlFor='upload-image'>
                <div className={`p-28 border rounded-xl border-dotted flex justify-center border-primary bg-slate-200 cursor-pointer hover:shadow`}>
                    {!file? <Image src={'/upload_image.png'} width={70} height={70}/>:<Image src={URL.createObjectURL(file)} width={300} height={300} className='object-cover'/>}
                </div>
            </label>
            <input type='file' accept='image/*' id='upload-image' style={{display:'none'}} onChange={onFileSelected}/>
        </div>
    </div>
  )
}

export default ImageSelection
