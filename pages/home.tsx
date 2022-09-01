import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Nav from './nav'
import Footer from './footer'
import styles from '../styles/Home.module.css'

const Homepage: NextPage = () => {
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
     <Nav />
       <div className={styles.hero}>
        
     </div>
      <main className={styles.main}>
       
        <div className={styles.featured}>
          <h1></h1>
            
          </div>
      <div className={styles.blogsec}>
        
        <div className={styles.blogpost}>
          <img className={styles.blogimg} src="https://www.wafflehouse.com/wp-content/uploads/2019/03/all-star.jpg" />
          <h3>THE GREATEST OF ALL TIME</h3>
          <p></p>
          <button className={styles.blogbtn}>ALL STAR SPECIAL</button>
        </div>

        <div className={styles.blogpost}>
          <img className={styles.blogimg} src="https://www.wafflehouse.com/wp-content/uploads/2019/03/pecanwaffle@2x.jpg" />
          <h3>TRY OUR PECAN WAFFLE</h3>
          <p></p>
          <button className={styles.blogbtn}>ALL DAY, EVERY DAY</button>
        </div>

        <div className={styles.blogpost}>
          <img className={styles.blogimg} src="https://www.wafflehouse.com/wp-content/uploads/2020/11/BlueberryWaffle2020_WebsiteImage_460x350.jpg" />
          <h3>BLUEBERRY WAFFLE! ITS BACK!</h3>
          <p></p>
          <button className={styles.blogbtn}>SMOTHER YOUR HUNGER</button>
        </div>
        </div>
        
     </main>
      <div className={styles.breakfast}>
        <div>
          <h1>Breakfast Favorites</h1>
          <button>ALL DAY, EVERY DAY</button>
        </div>
      </div>
       <div className={styles.lunch}>
        <div>
          <h1>Lunch & Dinner Favorites</h1>
          <button>SMOTHER YOUR HUNGER</button>
          <div></div>
        </div>
      </div>
      
        <div className={styles.record}>
          
        <div className={styles.recordleft}>
          <h2>WAFFLE RECORDS</h2>
          <p>As classic as our waffle.  As sweet as our pie.</p>
          <div className={styles.recorddiv}>
          
          </div>
       </div>

          
        <div className={styles.recordright}>
          <h2>REGULARS GET THE BEST PERKS</h2>
          <p>For special offers, become a member of our Regulars Club.</p>
          
          <div className={styles.recordpercs}>
            <form  className={styles.form} action="/send-data-here" method="post">
              
  <label   for="first">First name:</label>
  <input   className={styles.br} type="text" id="first" name="first" />
              <br  />
  <label for="last">Last name:</label>
  <input className={styles.br} type="text" id="last" name="last" />
               <br  />
  <label for="last">Last name:</label>
  <input   className={styles.br}type="text" id="last" name="last" />
              <br />
  <button  type="submit">Submit</button>
</form>
          </div>
        </div>
           </div>
      
      
   <div>
      <script src="https://apps.elfsight.com/p/platform.js" defer></script>
<div class="elfsight-app-7fd6dff3-ae46-4641-bc31-c52c755d5145"></div>
    </div>
    </div>
    
    
    
      
  )
}

export default Homepage
