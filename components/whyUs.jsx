import React from 'react'
import Image from 'next/image'
import pic from '../public/why.jpg'
const whyUs = () => {
  return (
    <div className='  lg:p-[100px] p-[25px] w-screen lg:ml-[-100px] ml-[-20px]'>
                         <h1 className='font-bold  text-5xl'>Why us?</h1>
        <div className="lg:flex justify-between">
        <div className="lg:max-w-[500px]">
                 <br />
        <p className='text-[#575252] text-xl'>
        Welcome to our online school! Our courses are high-quality, flexible, and affordable. Our experienced educators use the latest technologies and teaching methods to provide you with the best possible learning experience. Whether you're looking to improve your skills for personal or professional development, or simply want to learn something new, our courses will help you achieve your goals.
        <br />
        <span className='text-main font-bold text-2xl '> Join us today and start your journey towards a brighter future!</span> 
        </p>
        </div>
        <Image className='w-[600px] rounded-md lg:mt-[-50px] rounded-tl-[150px] h-[400px] object-cover' src={pic} width={700} height={800}></Image>
   
        </div>
       
    </div>
  )
}

export default whyUs