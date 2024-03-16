import React from 'react'
import styles from './Blog.module.css'

const Blog = () => {
  return (
    <section className={styles.blog}>

        <h4 data-aos="fade-up" data-aos-duration="1500">Latest Updates <br />  <span>From My Blog</span></h4>


        <div className={styles.readblog}>

        <a href='https://medium.com/@noumanshahid7777/how-to-make-a-responsive-website-3fdc75eaa772'>

            <img src="images/myblog.png" alt="" data-aos="fade-right" data-aos-duration="1500" />
            </a>

            <a href='https://medium.com/@noumanshahid7777/how-to-make-a-responsive-website-3fdc75eaa772'>

                <button data-aos="fade-left" data-aos-duration="1500" >Read Full Blog</button>
            </a>
        </div>
    

       <a href='https://medium.com/@nouman-shahid' className={styles.follow}><h4>Follow me on Medium for updates.</h4> </a> 
      
    </section>
  )
}

export default Blog
