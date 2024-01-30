import React from 'react'
import Container from './Container'
import Flex from './Flex'
const Track = () => {
    return (
        <section className='bg-royal-blue pt-[90px] px-[110px]'>
            <Container>
            <Flex>
        <div className='w-7/12 pl-[68px] pb-[75px]'>
            <h3 className='font-manrope font-extrabold text-[18px] text-white'>Why Choose Us</h3>
             <h1 className='font-manrope font-bold text-[50px] leading-[56px] mt-[25px] mb-[35px] w-[528px] text-white'>Track your crytpo portfolio on the best way possible</h1>
             <p className='font-manrope font-normal leading-[26px] text-[18px] text-white mb-[27px] w-[446px]'>End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
        </div>
        <div className='w-5/12'>
        <h4 className='font-manrope font-extrabold text-[18px] text-royal-blue'>Get Started for Free</h4>
          <form>
            <input className='inline-block font-manrope w-[356px] py-[18px] px-[12px] bg-[#F2F3F4] outline-none border-none rounded-[5px] placeholder:text[20px] placeholder:text-hash mt-[24px] mb-[24px]  opacity-[0.2] ' type="email" name="" id="" placeholder='Email Address' />
            <input className='inline-block font-manrope w-[356px] py-[18px] px-[12px] bg-[#F2F3F4] outline-none border-none rounded-[5px] placeholder:text[20px] placeholder:text-hash mt-[24px] mb-[24px] opacity-[0.2]' type="password" name="" id="" placeholder='Password Address' />
            <button className='inline-block w-[356px] px-125px] py-[18px]
            text-white font-manrope text-[16px] font-bold bg-orange rounded-[5px] shadow-btn-org-shadow '>Get Started</button>
          </form>
        </div>
    </Flex>
            </Container>
        </section>
    )
}

export default Track