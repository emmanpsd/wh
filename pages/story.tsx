import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Nav from './nav'
import styles from '../styles/Home.module.css'
import Footer from './footer'


const Story: NextPage = () => {
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
      <div>
        <div className={styles.storyHero}>
        
     </div>
        <div>
          <div className={styles.storycontainer}>
            <h2 className={styles.storyh2} >OUR STORY</h2>
            <p className={styles.storyp}>In 1955, two Georgia neighbors opened up a restaurant that would change the world.  Joe Rogers Sr. and Tom Forkner were living in Avondale Estates, GA, when they decided to open a 24-hour, sit-down restaurant for their friends and neighbors, focused on people on both sides of the counter.  That first restaurant opened the door to create the Waffle House brand that you see today.

As this movement began to expand, new restaurants were built in Georgia as well as neighboring states, and the “Yellow Sign” soon became a familiar landmark along city streets and interstate highways across the country.  Today, the Waffle House system is more than 1,900 locations in 25 states.  All open 24-hours a day, seven days a week.

But more than that, Waffle House has always been about the people Joe and Tom cared about in 1955 – our Associates and Customers.  Waffle House was founded on the principals of providing the friendliest service in town, while also offering the opportunity for rewarding and quality careers.  Today, Waffle House continues to provide great career opportunities for more than 40,000 Associates.  These Associates are “Waffle House” to their Customers.  They provide their Customers with a unique experience that keeps them coming back for more.

Whether you are a Waffle House Regular, or this is your first time experiencing our restaurant, we welcome you with open arms.  You are now a part of our Waffle House Family!

“We aren’t in the food business.  We’re in the people business.”<br /><br /> – Joe Rogers, Sr.</p>
          </div>
        </div>
        
      </div>
     <Footer />
      </div>
    




      )
}

      export default Story
