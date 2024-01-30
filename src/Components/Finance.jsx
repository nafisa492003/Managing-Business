import React, { useEffect, useState } from 'react'
import { FetchApi } from '../FetchApi'
import Container from './Container'
import Flex from './Flex'
const Finance = () => {
    const [finance,setFinance] = useState({})
    useEffect(()=>{
        const getFinance = async ()=>{
        const financeData = await FetchApi('https://bwfc-api.vercel.app/finance')
        setFinance(financeData.data)
        }
        getFinance()
    },[])
    
  return (
    <Container>
        <Flex>
            <div className='w-1/2'>
            <h3 className='font-manrope font-extrabold text-[18px] text-royal-blue'>{finance.sunbTitle}</h3>
         <h1 className='font-manrope font-bold text-[50px] leading-[56px] mt-[25px] mb-[35px] w-[548px]'>{finance.heading}</h1>
         <p className='font-manrope font-normal leading-[26px] text-[18px] text-hash mb-[27px] w-[514px]'>{finance.paragraph}</p>
         <a className='px-[35px] py-[15px] bg-royal-blue text-white rounded-[7px] inline-block shadow-btn-shadow' href={finance.button?.link}>{finance.button?.text}</a>
            </div>
            <div className='w-1/2'>
          <img src={finance.image} alt="" />
            </div>
        </Flex>
    </Container>
  )
}

export default Finance