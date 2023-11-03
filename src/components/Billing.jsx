import React from 'react'
import { apple, bill, goggle, google } from '../assets'
import styles, { layout } from '../style'


const Billing = () => {
  return (
    <section id="product" className={`${layout.sectionReverse}`}>
      <div className={`${layout.sectionImgReverse}`}>

      <img src={bill} alt="" className={`w-[100%] h-[100%] relative z-[5]`} />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={`text-white ${styles.heading2}`}>
          Easily control your <br  className='sm:block hidden' />
          billing & invoicing.
        </h2>

        <p className={`${styles.paragraph} max-w-[600px] mt-4`}>
          Elis enum sed massa ethan. Maris eu adipiscing 
          ultrices ametodio aenean neque. Fusce ipsum orci 
          rhoncus aliporttitor integer platea placerat.
        </p>

        <div className='flex flex-row flex-wrap mt-6 sm:mt-10'>
          <img src={google} alt="" className=' w-[128px] h-[42px] object-contain mr-5 cursor-pointer' />
          <img src={apple} alt="" className=' w-[128px] h-[42px] object-contain mr-5 cursor-pointer' />
        </div>

      </div>

    </section>
  )
}

export default Billing
