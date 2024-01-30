import React, { useEffect, useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import { FetchApi } from '../FetchApi'
import { FaPlay } from "react-icons/fa6";

const Banner = () => {
  const [banner, setBanner] = useState({})
  useEffect(() => {
    const getBanner = async () => {
      const bannerData = await FetchApi("https://bwfc-api.vercel.app/banner")
      setBanner(bannerData.data)
    }
    getBanner()
  }, [])
  return (
    <div className='bg-no-repeat bg-cover w-full'
      style={{ backgroundImage: `url(${banner.bannerbgshape})` }}
    >
      <Container>
        <Flex>
          <div className='w-1/2 mt-[178px]'>
           <h1 className='font-manrope font-extrabold text-[60px] leading-[80px] tracking-[-3%]'>{banner.bannerheading}</h1>
           <p className='font-manrope font-normal leading[30px]  text-hash text[20px] w-[375px] mt-[22px]'>{banner.bannerparagraph}</p>
           <div className='flex items-center justify-start gap-[50px] mt-[26px]'>
            <a className='px-[35px] py-[15px] bg-royal-blue text-white rounded-[47px] inline-block shadow-btn-shadow' href={banner.bannerButton?.link}>{banner.bannerButton?.text}</a>
             <a className='flex justify-center items-center gap-[11px]' href={banner.video?.link}>
            <div className='w-[60px] h-[60px] rounded-[100%] p-[18px]  bg-green shadow-btn-green-shadow'><FaPlay size={24} className='text-white' /></div>
            <span className='font-manrope font-semibold leading-[30px] text-[17px] text-royal-blue'>{banner.video?.text}</span>
             </a>
           </div>
          </div>
          <div className='w-1/2'>
            <img className='w-[542px] mt-[85px] scale-[1.3]' src={banner.bannerrightimg} alt={banner.bannerrightimg} />
          </div>
        </Flex>
      </Container>
    </div>
  )
}

export default Banner