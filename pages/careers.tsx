import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Nav from './nav'
import styles from '../styles/Home.module.css'
import Footer from './footer'

const Careers: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>

        <title>Waffle House - Good Fast Breakfast</title>
        <meta name="description" content="built with nextjs + typescript" />
        <link rel="icon" href="https://i.ibb.co/6mRdf4V/Wreujwv2.png" />


        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Staatliches&display=swap" rel="stylesheet" />

      </Head>
      <Nav />
      
        <div className={styles.careersHero}>
        
     </div> <div>
          <div className={styles.storycontainer}>
            <h2 className={styles.storyh2} >Careers</h2>
            <p className={styles.storyp}>Whether it is as a Server, Cook, Host, Shift Supervisor or Restaurant Manager, working at Waffle House is a fulfilling, fun, and rewarding career.

“We are not in the food business; we are in the people business” – Founder Joe Rogers, Sr.

Ever since we opened our doors in 1955, Waffle House® restaurants have been a great career choice for thousands of Associates.  Thank you for taking the time to learn more about Waffle House and our careers.

We hope to see you soon “Under the Yellow Sign®”!<br /><br /><strong><a href="#">CLICK to hear our Associates tell you why Waffle House is America’s Place to Work®</a></strong></p>
            <a href="https://info.wafflehouse.com/FastApplications/HourlyAppPart1/SearchUnit" target="_blank"> <button className={styles.careerbtn}>Apply Now</button></a>
          </div>
       </div>
      <Footer />
        </div>
     
       

    




      )
}

      export default Careers