import React from 'react'
import styles from '../style'
import Button from './Button'
// Button

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow` }>
      <div className={` flex flex-1 flex-col`}>
        <h2 className={`${styles.heading2}`}>Let s try our service now!</h2>
        <p className={`${styles.paragraph} max-w-[600px] mt-4`}>Everything you need to accept card payments 
        and grow your business anywhere on the planet</p>
      </div>

      <Button className={`sm:ml-10 ml-10 sm:mt:0 mt:10`}>Get Started</Button>
    </section>
  )
}

export default CTA
