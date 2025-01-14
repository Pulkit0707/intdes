"use client"

import React, { useState } from 'react'
import ImageSelection from './_components/ImageSelection'
import RoomType from './_components/RoomType'
import DesignType from './_components/DesignType'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { storage } from '@/config/firebaseConfig'

function CreateNew() {
    const [formData,setFormData]=useState();
    const onHandleInputChange=(value,fieldName)=>{
        setFormData(prev=>({
            ...prev,
            [fieldName]:[value]
        }))
    }
    const GenAiImage=async()=>{
        const rawImgUrl=await saveRawImgToFireBase(); 
        const result=await axios.post('/api/redesign-room',{
            imageUrl: rawImgUrl,
            roomType: formData?.roomType,
            designType: formData?.designType,
        })
    }
    const saveRawImgToFireBase=async()=>{
        const fileName=Date.now()+"_raw.png";
        const imgRef=ref(storage,'room-redesign/'+fileName);
        await uploadBytes(imgRef,formData.image);
        const downloadUrl=await getDownloadURL(imgRef);
        return downloadUrl;
    }
  return (
    <div>
        <h2 className='font-bold text-4xl text-primary text-center'>Wagwan G</h2>
        <p className='text-center text-gray-500'>Design your room with a single click</p>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-10 mt-10'>
            <ImageSelection selectedImage={(value)=>onHandleInputChange(value,'image')}/>
                <div>
                    <RoomType selectedRoomType={(value)=>onHandleInputChange(value,'roomType')}/>
                    <DesignType selectedDesignType={(value)=>onHandleInputChange(value,'designType')}/>
                    <Button className="w-full mt-5" onClick={GenAiImage}>Generate</Button>
                    <p className='text-sm text-gray-400 mb-52 mt-2'>1 credit will be charged for every generated design</p>
                </div>
        </div>
    </div>
  )
}

export default CreateNew
