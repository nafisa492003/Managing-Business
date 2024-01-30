import  Container  from './Container'
import React, { useEffect, useState } from 'react'
import Flex from './Flex'
import { FetchApi } from '../FetchApi'
import { FaChevronDown } from "react-icons/fa6";

const Nav = () => {
  const[navbar,setNavbar] =useState({});
  useEffect(()=>{
    const getData = async ()=>{
      const navData = await FetchApi("https://bwfc-api.vercel.app/navbar")
      setNavbar(navData.data)
    }
    getData();
  },[]);
 
  return (
    <div className='mt-[28px]'>
        <Container>
     <Flex className="items-center justify-between">
     <img src={navbar.logo} alt={navbar.logo} />
     <ul className='flex items-center justify-center gap-[27px]'>
      {navbar.navItems?.map((menu,i) => (
     <li className=' relative group' key={i}>
      <a className='font-manrope font-light text-[14px] text-black flex items-center justify-center gap-[12px]' href="">
        <span className='hover:text-royal-blue'>{menu.item}
      </span>
      {menu.dropDown && <FaChevronDown />}
    </a>
    {menu.dropDown &&
     <ul className='absolute top-7 duration-150 scale-y-0 origin-top group-hover:scale-y-100'>
      {menu.dropDownItem?.map((sub_menu ,i)=>(
      <li key={i}>
       {sub_menu.dropItem}
      </li>
      ))}
       
        
        </ul>}
      </li>
     ))}</ul>
     <div>
      {navbar.buttonOne?.visibility && <a href={navbar.buttonOne.link} className='font-manrope font-light text-[14px] px-[35px] py-[17px] '>{navbar.buttonOne.text}</a>}
      {navbar.buttonTwo?.visibility && <a href={navbar.buttonTwo.link} className='font-manrope font-semibold text-[14px] px-[35px] py-[17px] text-white bg-royal-blue rounded-[7px] shadow-btn-shadow'>{navbar.buttonTwo.text}</a>}
      {navbar.buttonThree?.visibility && <a href={navbar.buttonThree.link} className='font-manrope font-light text-[14px] px-[35px] py-[17px]'>{navbar.buttonThree.text}</a>}
     </div>
     </Flex>
        </Container>
    </div>
  )
}

export default Nav