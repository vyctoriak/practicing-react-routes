import React from 'react'
import styles from './Contato.module.css'
import photo from '../assets/contato.jpg'
import Head from './Head'  

const Contato = () => {
  return (
    <section className={`${styles.contact} animeLeft`}>
      <Head title="Ranek | Contact" description="Get in touch with us" />
      <img src={photo} alt="typewriter" />
      <div>
        <h1>Contact us</h1>
        <ul className={styles.data}>
          <li>john@doe.com</li>
          <li>+00 000 000000</li>
          <li>Somewhere over the rainbow</li>
        </ul>
      </div>
    </section>
  )
}

export default Contato