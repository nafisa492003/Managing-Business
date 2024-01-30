import React from 'react'
import Container from './Container'
import Flex from './Flex'

const Footer = () => {
  return (
    <section className='bg-black pt-[111px]'>
    <Container>
        <Flex>
            <div className='w-1/2'>
                <h1 className='font-manrope font-bold text-[20px] text-white mb-[18px]'>BWFC</h1>
                <p className='font-manrope font-medium text-[16px] text-white leading-[26px] mb-[200px] w-[520px] opacity-[0.4]'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.</p>
            </div>
            <div className='w-1/2 flex '>
                <div className='w-4/12'>
                <h2 className='font-manrope font-bold text-[21px] text-white leading-[24px] mb-[35px]'>Company</h2>
              <ul>
                <li className='font-manrope font-medium text-[16px] text-white leading-[24px] mb-[18px]'>About Us</li>
                <li className='font-manrope font-medium text-[16px] text-white leading-[24px] mb-[18px]'>Careers</li>
                <li className='font-manrope font-medium text-[16px] text-white leading-[24px] mb-[18px]'>Blog</li>
                <li className='font-manrope font-medium text-[16px] text-white leading-[24px] mb-[18px]'>Pricing</li>
              </ul>
                </div>
                <div className='w-4/12'>
                <h2 className='font-manrope font-bold text-[21px] text-white leading-[24px] mb-[35px]'>Product</h2>
              <ul>
                <li className='font-manrope font-medium text-[16px] text-white leading-[24px] mb-[18px]'>Invoicing Platform</li>
                <li className='font-manrope font-medium text-[16px] text-white leading-[24px] mb-[18px]'>Accounting Plateform</li>
                <li className='font-manrope font-medium text-[16px] text-white leading-[24px] mb-[18px]'>Create Proposal</li>
                <li className='font-manrope font-medium text-[16px] text-white leading-[24px] mb-[18px]'>Contracts</li>
              </ul>
                </div>
                <div className='w-4/12'>
                <h2 className='font-manrope font-bold text-[21px] text-white leading-[24px] mb-[35px]'>Resources</h2>
              <ul>
                <li className='font-manrope font-medium text-[16px] text-white leading-[24px] mb-[18px]'>Proposal Template</li>
                <li className='font-manrope font-medium text-[16px] text-white leading-[24px] mb-[18px]'>Invoice Template</li>
                <li className='font-manrope font-medium text-[16px] text-white leading-[24px] mb-[18px]'>Tuturoial</li>
                <li className='font-manrope font-medium text-[16px] text-white leading-[24px] mb-[18px]'>How to write a contract</li>
              </ul>  
                </div>
                
            </div>
        </Flex>
    </Container>
    <div className='w-full h-[1px] bg-[#404444]'></div>
    <Container>
        <div className='bg-black py-[19px]'>
         <Flex className='justify-between'>
            <h4 className='font-manrope font-normal text-white text-[12px] leading-[26px]'>2024 NAFISA. All rights reserved. -- Privacy Policy - Terms of Services</h4>
            <h5 className='font-manrope font-normal text-white text-[12px] leading-[26px]'>Supported by Microsoft Startup</h5>
         </Flex>
        </div>
    </Container>
    </section>
  )
}

export default Footer