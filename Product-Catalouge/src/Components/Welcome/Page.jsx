import React from 'react';
import styles from './Page.module.css';
import { useAuth0 } from "@auth0/auth0-react";

const Page = ({ products, addtocart }) => {

  const { isAuthenticated } = useAuth0();

  const watchesData = [
    { name: 'Phantom-502', image: 'images/watch_images/watch2.png' },
    { name: 'Mystique-Zent', image: 'images/watch_images/watch7.png' },
    { name: 'Sleekwave-G55', image: 'images/watch_images/watch8.png' },
    { name: 'Zyphorix-Vortex', image: 'images/watch_images/watch13.png' },
    { name: 'Military-RS7', image: 'images/watch_images/watch14.png' },
  ];

  return (
    <>


      <section className={styles.welcome}>

        <div className={styles.box1} >

          <div className={styles.content} data-aos="fade-right" data-aos-duration="2000">

            <h1>Discover Our newest <span>Watches</span>  Collection </h1>

            <p>The harmoniously designed chronograph with its peripheral scale
              &  recessed totalizers has been most coveted member of the
              portuigese family since 1968.
            </p>

            <button>Get Started</button>

          </div>

          <img src='images/watch_images/watches.gif' data-aos="fade-left" data-aos-duration="2000" />


        </div>

        <label>Most Purchased</label>

        <div className={styles.box2}>

          <div className={styles.left} data-aos="fade-right" data-aos-duration="2000">


            <div className={styles.lefttext} >
              <h4>Bertix-1978</h4>
              <h5>Silver/Black</h5>

              <h4>price: $100.00 USD</h4>
              <p>Dial of this watch measures 45mm of diameter.The movement of this watch works with a
                quartz battery. This watch is water resistant up to 30 meters.
              </p>
              <button>Purchase</button>
            </div>

            <img src="images/watch_images/watch1.png" alt="" />
          </div>

          <div className={styles.right}>

            <div className={styles.box} data-aos="fade-up" data-aos-duration="2000">
              <div className={styles.content}>

                <h4>Coltz-1993</h4>

                <p>Coltz-1993 is the classical wrist watch for men. The dial of Coltz-1993 measures 45mm of diameter.
                  This watch is water resistant up to 30 meters. </p>
                <button>Purchase</button>
              </div>

              <img src="images/watch_images/watch2.png" alt="" />

            </div>

            <div className={styles.box} data-aos="fade-down" data-aos-duration="2000">
              <img src="images/watch_images/watch5.png" alt="" />

              <div className={styles.content}>

                <h4>Depta-2001</h4>

                <p>Depta-2001 is the Decent wrist watch for men. The dial of Depta-2001 measures 35mm of diameter.
                  This watch is water resistant up to 30 meters.</p>
                <button>Purchase</button>
              </div>
            </div>

          </div>



        </div>

        <label>New Arrival</label>

        <div className={styles.box3} >
          {watchesData.map((watch, index) => (
            <div key={index} className={styles.box} data-aos="flip-right" data-aos-duration="2000">
              <img src={watch.image} alt="" />
              <div className={styles.content}>
                <h4>{watch.name}</h4>
                <button>Purchase</button>
              </div>
            </div>
          ))}
        </div>


        <label > For You</label>


        <div className={styles.box4}>
          {products.map((watch, index) => (
            <div key={index} className={styles.box} data-aos="zoom-out-up" data-aos-duration="2000">
              <img src={watch.imageSrc} />
              <h3>{watch.name}</h3>
              <h4>{watch.description}</h4>
              <h3>price : ${watch.price}</h3>
              <button onClick={() => {
                addtocart(watch);
                isAuthenticated ? alert("Item Added to Shopping Cart") : 
                alert("Inorder to purchase the watch, you must first log in.");
              }}>Add to Cart</button>

            </div>
          ))}
        </div>



      </section>

    </>
  )
}

export default Page
