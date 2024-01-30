import React, { useEffect, useState } from 'react'
import Container from './Container'
import { FetchApi } from '../FetchApi'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Flex from './Flex';
import { Rate } from 'antd';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
const Client = () => {
    const [client, setClient] = useState({})
    useEffect(() => {
        const getClient = async () => {
            const clientData = await FetchApi("https://bwfc-api.vercel.app/client")
            setClient(clientData.data)
        }
        getClient()
    }, [])
    return (
        <section>
            <Container>
                <h3 className='font-manrope font-extrabold text-[14px] text-royal-blue'>{client.subTitle}</h3>
                <h1 className='font-manrope font-bold text-[50px] leading-[56px] mt-[25px] mb-[35px] w-[548px]'>{client.title}</h1>
                <div>
                    <Swiper navigation={{
                        nextEl: '.button-next-slide',
                        prevEl: '.button-prev-slide',
                    }} modules={[Navigation]} className="mySwiper">
                        {client.sliderItem?.map((item, i) => (
                            <SwiperSlide>
                                <Flex className='justify-center gap-[52px]'>
                                    <div className='w-7/12'>
                                        <img key={i} src={item.image} alt="" />
                                    </div>
                                    <div className='5/12'>
                                        <h3 className='text-[40px] text-orange'>{item.symbol}</h3>
                                        <h1 className='font-manrope font-extrabold text-[20px] leading-[20px] w-[290px]'>{item.heading}</h1>
                                        <p className='font-manrope font-normal text-[16px] leading-[24px] w-[444px] text-hash' dangerouslySetInnerHTML={{ __html: item.paragraph }} />
                                        <div className='mt-8'>
                                            <Rate disabled allowHalf defaultValue={item.rating} />
                                        </div>
                                        <h4 className='font-manrope font-extrabold text-[16px] leading-[30px] mt-2'>{item.name}</h4>
                                        <h5 className='font-manrope font-normal text-[14px] text-hash mt-1 leading-[24px]'>{item.designation}</h5>
                                    </div>
                                </Flex>
                            </SwiperSlide>
                        ))}
                        <div className='flex gap-2'>
                            <div className="button-next-slide w-[34px] h-[34px] text-white bg-royal-blue rounded-full flex  items-center justify-center">
                          
                            <FaArrowLeft />
                            </div>
                            <div className="button-prev-slide w-[34px] h-[34px] flex  items-center justify-center">
                            <FaArrowRight />
                            </div>
                        </div>
                    </Swiper>
                </div>
            </Container>
        </section>
    )
}

export default Client