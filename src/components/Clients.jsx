import React from 'react'
import { clients } from '../constants'
import styles from '../style'

const Clients = () => {
  return (
    <section id='clients' className={`${styles.flexCenter}`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client)=>(
          <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px]`}>
            <img src={client.logo} alt="client_logo" className={`sm:w-[192px] w-[100px] object-contain`} />
          </div>
        ))}
      </div>
      
    </section>
  )
}

export default Clients
