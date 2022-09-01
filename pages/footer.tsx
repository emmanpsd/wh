import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Footer: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        
        <title>Waffle House - Good Fast Breakfast</title>
        <meta name="description" content="built with nextjs + typescript" />
        <link rel="icon" href="https://i.ibb.co/6mRdf4V/Wreujwv2.png" />


<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
<link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Staatliches&display=swap" rel="stylesheet"/>
        
      </Head>
         <div className={styles.bottombar}>
        
      </div>

      <div className={styles.footer}>
        <div className={styles.footerleft}> 
          <p>Privacy Notice</p>
          <p>Contact</p>
          <p>FAQ</p>
          <p>Surplus Properties</p>
          <p>Associate Login</p>
        
        </div>
        <div className={styles.footerright}> </div>
      </div>
      </div>
    
    
    
      
  )
}

export default Footer
