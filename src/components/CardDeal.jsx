import React from 'react'
import styles, { layout } from '../style'
import { card } from '../assets'
import Button from './Button'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`text-white ${styles.heading2}`}>
          Find a better card deal <br className='sm:block hidden' />
          in few easy steps.
        </h2>

        <p className={`${styles.paragraph} max-w-[600px] mt-4`}>
          Arcu tortor, purus in mattis at sed integer faucibus.
          Aliquet quis aliquet eget mauris tortor.ç Aliquet
          ultrices ac, ametau
        </p>

        <Button styles="mt-10" />
      </div>

      <div className={`${layout.sectionImgReverse}`}>

        <img src={card} alt="" className={`w-[100%] h-[100%] relative z-[5]`} />

      </div>
    </section>
  )
}

export default CardDeal
