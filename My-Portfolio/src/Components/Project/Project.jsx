import React from 'react'
import styles from './Project.module.css'

const Project = () => {
  return (
    <>



      <section className={styles.project}>

      <h3 data-aos="fade-up" data-aos-duration="1500"> Testimonial Of  <br /> <span>My Learning</span></h3>



        <div className={styles.container}>


          <div className={styles.intro} data-aos="zoom-in-right" data-aos-duration="2000">

            <h2>Project Variety</h2>

            <p>My portfolio includes diverse projects, such as Android and iOS apps, including calculators, YouTube, Instagram clones, 2D mobile games, and weather and food apps.</p>

            <p>I started making websites and games. I built a YouTube-like site, created games using React.js, and designed a responsive clothing e-commerce website. It's all about learning and getting better at what I do.</p>

            <a href='https://instagram.com/numan.shahid_?igshid=OGQ5ZDc2ODk2ZA=='><button>See all Projects</button></a>
          </div>

          <img src="images/pic2.gif" className={styles.codingimg} data-aos="zoom-in-left" data-aos-duration="2000"/>

        </div>



        <div class="row row-cols-1 row-cols-md-3 g-4 px-4">
        <div class="col col-md-9 col-lg-5 mx-auto my-3" data-aos="zoom-out" data-aos-duration="1500" >
            <div class="card h-100  dark-card">
              <video src="videos/yt.mp4" controls class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Youtube Website Clone</h5>
                <p class="card-text"> I am proud to present my YouTube clone website, built with PHP, SQL, HTML, and CSS.</p>
              </div>
              <div class="card-footer">
                <p>Posted this . Jul 2023</p>
              </div>
            </div>
          </div>
          <div class="col col-md-9 col-lg-5 mx-auto my-3" data-aos="zoom-out" data-aos-duration="1500" >
            <div class="card h-100 dark-card" >
              <video src="videos/bullet.mp4" controls class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Bullet Hop 2d Game</h5>
                <p class="card-text">I've developed a 2D web-based game called 'Bullet Hop' using a combination of JavaScript, HTML, and CSS.</p>
              </div>
              <div class="card-footer">
                <p>Posted this . Aug 2023</p>
              </div>
            </div>
          </div>
          <div class="col col-md-9 col-lg-5 mx-auto my-3" data-aos="zoom-out" data-aos-duration="1500" >
            <div class="card h-100  dark-card">
              <video src="videos/sword.mp4" controls class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Sword & Shield 2d Game</h5>
                <p class="card-text">I've developed a web-based game called 'Sword & Shield.' It's a 2D adventure where you control a character to defeat enemies.I used React.js to build it.</p>
              </div>
              <div class="card-footer">
                <p>Posted this . Aug 2023</p>
              </div>
            </div>
          </div>
          <div class="col col-md-9 col-lg-5 mx-auto my-3" data-aos="zoom-out" data-aos-duration="1500" >
            <div class="card h-100  dark-card">
              <video src="videos/zombie.mp4" controls class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Zombie Slayer 2d Game</h5>
                <p class="card-text">I made a 2D game called 'Zombie Slayer.' In the game, you need to protect your character from zombies. I used React.js to create it.</p>
              </div>
              <div class="card-footer">
                <p  >Posted this . Sep 2023</p>
              </div>
            </div>
          </div>
        </div>


      </section>
    </>
  )
}

export default Project
