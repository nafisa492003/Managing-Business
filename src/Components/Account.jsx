import React, { useEffect, useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import { FetchApi } from '../FetchApi'

const Account = () => {
    const [account, setAccount]=useState({})
    useEffect(()=>{
     const getAccount = async() =>{
        const accountData = await FetchApi ("https://bwfc-api.vercel.app/account")
        setAccount(accountData.data)
     }
     getAccount()
    },[])
  return (
  <section>
    <Container>
        <Flex>
            <div className='w-1/2'>
            <h3 className='font-manrope font-extrabold text-[18px] text-royal-blue'>{account.subTitle}</h3>
         <h1 className='font-manrope font-bold text-[50px] leading-[56px] mt-[25px] mb-[35px] w-[548px]'>{account.title}</h1>
         <p className='font-manrope font-normal leading-[26px] text-[18px] text-hash mb-[27px] w-[514px]'>{account.paragraph}</p>
         <a className='px-[35px] py-[15px] bg-royal-blue text-white rounded-[7px] inline-block shadow-btn-shadow' href={account.button?.link}>{account.button?.text}</a>
            </div>
            <div className='w-1/2'>
          <img src={account.accountImage} alt="" />
            </div>
        </Flex>
    </Container>
  </section>
  )
}

export default Account