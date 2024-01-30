import React, { useEffect, useState } from 'react'
import Container from './Container'
import { FetchApi } from '../FetchApi'
import Flex from './Flex'

const Sponsor = () => {
    const [sponsor, setSponsor] = useState({})
    useEffect(()=>{
     const getsponsor =async ()=>{
        const sopnsorData =await FetchApi("https://bwfc-api.vercel.app/sponsor")
        setSponsor(sopnsorData.data)
     }
     getsponsor()
    },[])
  return (
   <section className='mt-[71px]'>
    <Container>
     <h1 className='font-manrope font-normal text-[22px] text-center mb-[36px]'>{sponsor.title}</h1>
     <Flex className='items-center justify-between'>
      {sponsor.logos?.map((logo,i)=>(
        <img key={i} src={logo.src} alt="" />
      ))}
     </Flex>
    </Container>
   </section>
  )
}

export default Sponsor