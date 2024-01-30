import React, { useEffect, useState } from 'react'
import Container from './Container'
import { FetchApi } from '../FetchApi'
import Flex from './Flex'


const Residence = () => {
    const [residence,setResidence] =useState({})
    useEffect(()=>{
    const getresidence = async ()=>{
    const resindenceData = await FetchApi ('https://bwfc-api.vercel.app/residence')
    setResidence(resindenceData.data)
    }
   getresidence()
    },[])
  return (
   <section>
    <Container>
        <div className='px-[28px] py-[40px] border-[1px] border-[#DEE1E6] rounded-[15px] mt-[63px] mb-[114px]'>
      <Flex className='justify-center items-center'>
        <div className='w-9/12'>
          <h1 className='font-manrope font-normal text-[22px] leading-[32px] tracking-[-0.44px] text-hash w-[795px]'>{residence.text}</h1>
        </div>
        <div className='w-3/12'>
          <a className='w-[224px] py-[16px] px-[62px] bg-orange shadow-btn-org-shadow text-white font-manrope font text-[16px] leading-[30px] tracking-[-0.32px] rounded-[47px]' href={residence.button?.link}>{residence.button?.text}</a>
        </div>
      </Flex>
        </div>
    </Container>
   </section>
  )
}

export default Residence