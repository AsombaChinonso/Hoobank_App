import React from 'react'
import { features } from '../constants'
import { layout } from '../style'
import styles from '../style'
import Button from './Button'
import FeedbackCard from './FeedbackCard'

const FeaturedCard = ({icon, title, content, index}) => {
  return (
    <div className={` flex flex-row p-6 rounded-[20px] ${index !== features.length - 1  ? "mb-6 ": "mb-0"} feature-card`}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img src={icon} alt="feature_icon" className='h-[50%] w-[50%] object-contain' />
      </div>

      <div className="flex-1 flex flex-col ml-3">
        <h4 className={`font-poppins font-semibold text-white text-[18px] leading-[23px]`}>{title}</h4>
        <p className={`${styles.paragraph} font-poppins `}>{content}</p>
      </div>
    </div>
  )
}

const Business = () => {
  return (
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`text-white ${styles.heading2}`}>
        You do the business, <br className='sm:block hidden' />
        we ll handle the money.
        </h2>

        <p className={`${styles.paragraph} max-w-[600px] mt-4`}>
          With the right credit card, you can improve your financial life 
          by building credit, earning rewards and saving money. But 
          with hundreds of credit cards on the market.
        </p>

        <Button styles="mt-10" />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeaturedCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Business
