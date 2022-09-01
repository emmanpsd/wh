import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Homepage from './home'
import Story from './story'
import Careers from './careers'
import Nav from './nav'
import Location from './location'
import Footer from './footer'
import styles from '../styles/Home.module.css'
import Link from 'next/link';


const Home: NextPage = () => {
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
        
      <Homepage />
      <Footer />
    </div>
    


  )
}

export default Home
