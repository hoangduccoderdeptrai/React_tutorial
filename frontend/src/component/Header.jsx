import { useState } from 'react'
import {navigation} from '../constants/index.js'
import Button from './button'
import {disablePageScroll,enablePageScroll} from 'scroll-lock'

const Header = () => {
  const [check,setcheck] =useState(false)
  const toggle =()=>{
    if(check){
      setcheck(false)
      enablePageScroll()
    }else{
      setcheck(true)
      disablePageScroll()
    }
  }
  const handleScroll =()=>{
    if(!check)return 
    
    enablePageScroll()
    setcheck(false)
  }

  

  
  const h =()=>(
    <div className={`fixed top-0 right-0 left-0 h-20 z-50 border-b border-gray-600 border-solid flex items-center
         ${check ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"}
      
    `}>
      <div className='cl'>
        <a className=" w-[12rem] ">
          <img src="https://jsm-brainwave.com/assets/brainwave-DM3_Zh2I.svg" alt="Brainwave"></img>
        </a>

        <nav className={`${check?'flex':'hidden'} fixed top-[5rem] left-0 right-0  z-2  flex-col items-center justify-center m-auto lg:flex-row navBar lg:flex lg:top-0 lg:relative lg:mx-auto transition-colors bg-color-3 lg:bg-black`} >

          {navigation.map((item)=>(
            <a key={item.id} href={item.url} className={`block relative font-code text-2xl uppercase text-n-1 
            transition-colors hover:text-color-1 lg:px-6  md:px-4 lg:-mr-0.25 lg:text-xs font-semibold py-6 px-6
            ${item.onlyMobile?'lg:hidden':""}`} onClick={handleScroll}>{item.title}</a>
          ))}
        </nav>
        <a href='#signup' className='mr-8 hidden lg:block text-n-1/50 transition-colors hover:text-n-1'>New account</a>
        <Button className={'hidden lg:flex hover:bg-color-1 transition-colors'}>Sign in</Button>

        <Button className={'lg:hidden flexs text-xl' } onClick={toggle}>
          <i className={`bx bx-menu ${check?'hidden':'block'}`}></i>
          <i className={`bx bx-x ${!check?'hidden':'block'}`}></i>
        </Button>
          
        
      </div>
    </div>
  )
  return h()
  
}

export default Header
