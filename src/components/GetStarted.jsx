import React from 'react'
import styles from '../style';
import { arrowUp } from '../assets';

const  GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] bg-blue-gradient rounded-full p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] 
      h-[100%] rounded-full hover:bg-white`}>
        <div className={`${styles.flexStart} flex-row  `}>
          <p className='font-poppins font-medium text-[18px] leading-[23px]'>
            <span  className='text-gradient flex '>Get 
            <img src={arrowUp} alt="" className='ml-2 object-contain h-[23px] w-[23px]'/></span>
            <span  className='text-gradient'>Started</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default GetStarted
