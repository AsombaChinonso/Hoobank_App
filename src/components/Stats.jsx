import React from 'react'
import { stats } from '../constants'
import styles from '../style'

const Stats = () => {
  return (
    <section className={`${styles.flexCenter} `}>
      {stats.map((stats) => (
        <div key={stats.id} className='flex-1 flex items-center justify-start flex-row m-3'>
          <h4 className='font-poppins font-semibold xs:text-[40px]
           text-[30px] text-white xs-leading-[53px] leading-[43px]  '>{stats.value}</h4>
          <p className='font-poppins font-normal xs:text-[20px]
           text-[15px] text-white xs-leading-[26px] leading-[21px] text-gradient uppercase ml-3'>{stats.title}</p>
        </div>
      ))}
    </section>
  )
}

export default Stats
