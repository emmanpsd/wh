import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Homepage from './home'
import Story from './story'
import Careers from './careers'

import Location from './location'
import Footer from './footer'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

const Nav: NextPage = () => {
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
       <div className={styles.navtop}> 
         <p><strong>GOOD FOOD FAST.® </strong>Join Our Regulars Club  and Get a Free Order of Hashbrowns!🥔
     </p>
         </div>
      <div className={styles.nav}> 
        <div>
          <a href="/"><img className={styles.logo}  src="https://www.wafflehouse.com/wp-content/themes/wahotheme/assets/waffle-house-logo.svg" /></a>
        </div>
        <div className={styles.right}>
        <p> <Link href="/location">Find a Store</Link></p>
         <p><Link href="/story">Our Story</Link></p>
         <p><Link href="/careers">Careers</Link></p>
         <p><a href="https://shop.wafflehouse.com/" target="_blank">Shop</a></p> 
         <p><Link href="/food">Food</Link></p>  
         
        </div>
      </div>
    </div>
    
    
    
      
  )
}

export default Nav
