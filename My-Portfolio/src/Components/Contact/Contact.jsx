import React from 'react'
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <>
      <section className={styles.contact}>
        <h3 data-aos="fade-up" data-aos-duration="1500"> Feel Free To <br /> <span>Contact Me</span></h3>



        <div className={styles.container}>


          <div className={styles.intro} data-aos="zoom-in-right"  data-aos-duration="1500">
            <h2>Availability </h2>

            <p>Please feel free to reach out to me via the provided email address or phone number. My availability hours are from 10 am to 8 pm. If you need to get in touch with me, don't hesitate to use the contact information below.</p>


            <p> <img src="images/location-icon.png"  alt="Location " /> : Lahore, Pakistan</p>
            <p> <img src="images/phone-icon.png" alt="Phone " /> :  +92 321 4032373</p>
            <p><img src="images/email-icon.png" alt="Email " />  : noumanshahid2580@gmail.com</p>
          </div>

          <img src="images/pic3.gif" alt="" className={styles.introimage} data-aos="zoom-in-left"  data-aos-duration="1500"/>

        </div>


      </section>
      <footer >
        <p>Copyright @ 2023 Numan Shahid</p>


        <div >

          <a href="https://www.facebook.com/nouman.shahid.773?mibextid=D4KYlr"><img src="images/facebook.png" alt="" /></a>
          <a href="http://www.linkedin.com/in/me-numan"><img src="images/linkedin.png" alt="" /></a>
          <a href="https://instagram.com/numan.shahid_?igshid=OGQ5ZDc2ODk2ZA=="><img src="images/instagram.png" alt="" /></a>
        </div>


      </footer>
    </>
  )
}

export default Contact
