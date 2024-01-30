import React, { useEffect, useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import { FetchApi } from '../FetchApi'

const Feature = () => {
    const [feature,setFeature] =useState({})
    useEffect(()=>{
     const getfeature = async()=>{
        const featureData =await FetchApi("https://bwfc-api.vercel.app/feature")
        setFeature(featureData.data)
     }
    getfeature()
    },[])
  return (
   <section className='bg-no-repeat bg-cover w-full mt-[94px]'
   style={{backgroundImage :`url(${feature.featureShape})`}}
   >
    <Container>
     <Flex>
        <div className='w-1/2'>
      <img className='mt-[95px] scale-[1.2]' src={feature.featureImage} alt={feature.featureImage} />
        </div>
        <div className='w-1/2'>
         <h3 className='font-manrope font-extrabold text-[18px] text-royal-blue'>{feature.subTitle}</h3>
         <h1 className='font-manrope font-bold text-[50px] leading-[56px] mt-[25px] mb-[35px]'>{feature.title}</h1>
         <p className='font-manrope font-normal leading-[26px] text-[18px] text-hash mb-[27px] w-[514px]'>{feature.paragraph}</p>
         <a className='px-[35px] py-[15px] bg-royal-blue text-white rounded-[7px] inline-block shadow-btn-shadow' href={feature.button?.link}>{feature.button?.text}</a>
        </div>
     </Flex>
    </Container>
   </section>
  )
}

export default Feature