import React, { useEffect, useState } from 'react'
import Container from './Container'
import { FetchApi } from '../FetchApi'
import { Flex } from 'antd'

const Choose = () => {
    const [choose,setChoose] =useState({})
    useEffect(()=>{
    const getChoose = async ()=>{
        const chooseData = await FetchApi('https://bwfc-api.vercel.app/choose')
        setChoose(chooseData.data)
    }
    getChoose()
    },[])

  return (
    <Container>
        <div className='px-[81px] py-[58px] w-full bg-[#F3F7FA] rounded-[20px] mb-[100px]'>
            <h3 className='font-manrope font-extrabold text-[18px] text-royal-blue text-center mb-[14px] uppercase'>{choose.subTitle}</h3>
            <h1 className='font-manrope font-bold text-[50px] leading-[69px] tracking-[-1.5px] text-center mb-[69px]'>{choose.title}</h1>
           <Flex className='flex-wrap gap-[40px]'>
            {choose.items?.map((item , i)=>(
              <div key={i} className={`w-[484px] bg-white rounded-[20px] px-[30px] py-[59px] ${item.visibility? "flex" : "hidden"} `}>
            <div className='w-2/12'>
              <div className='w-[58px] h-[58px] rounded-full'
              style={{backgroundColor : item.circleColor}}
              ></div>
            </div>
            <div className='w-10/12'>
              <h2 className='font-manrope font-extrabold text-[24px] mb-[22px]'>{item.title}</h2>
              <p className='font-manrope font-normal leading-[30px]text-[18px] text-hash tracking-[-0.36px] w-[286px]'>{item.details}</p>
            </div>
            </div>
            ))}
            
           
           </Flex>
        </div>
    </Container>
  )
}

export default Choose