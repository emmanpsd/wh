import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Homepage from './home'
import Nav from './nav'
import Footer from './footer'
import styles from '../styles/Home.module.css'


const Location : NextPage = () =>  {
  return (
    <div>
  <Nav />
    <iframe 
      style={{width:'100%',height:'80vh', border:'none'}} src="https://locatestore.com/mSRGNY" allow="geolocation"></iframe>
      <Footer />
    
      </div>
)

  
}

export default Location