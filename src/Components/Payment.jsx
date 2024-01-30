import React, { useEffect, useState } from 'react'
import Container from './Container'
import { FetchApi } from '../FetchApi'
import Flex from './Flex'

const Payment = () => {
    const [payment,setPayment]=useState({})
    useEffect(()=>{
    const getPayment = async () =>{
        const paymentData = await FetchApi("https://bwfc-api.vercel.app/payment")
        setPayment(paymentData.data)
    }
    getPayment()
    },[])
  return (
  <section>
  <Container>
    <div className='bg-soft-blue pt-[75px] rounded-[20px] relative mb-[106px]'>
    <Flex>
        <div className='w-7/12 pl-[68px] pb-[75px]'>
            <h3 className='font-manrope font-extrabold text-[18px] text-royal-blue'>{payment.subTitle}</h3>
             <h1 className='font-manrope font-bold text-[50px] leading-[56px] mt-[25px] mb-[35px]'>{payment.title}</h1>
             <p className='font-manrope font-normal leading-[26px] text-[18px] text-hash mb-[27px] w-[514px]'>{payment.paragraph}</p>
        </div>
        <div className='w-5/12'>
        <h4 className='font-manrope font-extrabold text-[18px] text-royal-blue'>Get Started for Free</h4>
          <form>
            <input className='inline-block font-manrope w-[356px] py-[18px] px-[12px] bg-white outline-none border-none rounded-[5px] placeholder:text[20px] placeholder:text-hash mt-[24px] mb-[24px] ' type="email" name="" id="" placeholder='Email Address' />
            <input className='inline-block font-manrope w-[356px] py-[18px] px-[12px] bg-white outline-none border-none rounded-[5px] placeholder:text[20px] placeholder:text-hash mt-[24px] mb-[24px] ' type="password" name="" id="" placeholder='Password Address' />
            <button className='inline-block w-[356px] px-125px] py-[18px]
            text-white font-manrope text-[16px] font-bold bg-orange rounded-[5px] shadow-btn-org-shadow '>Get Started</button>
          </form>
        </div>
    </Flex>
      <img className='absolute top-[-22px] right-[-31px]' src={payment.paymentShape} alt="" />
    </div>
  </Container>
  </section>
  )
}

export default Payment