import React, { useState, useEffect } from "react";
import styles from "./Project.module.css";
import Carousel from "react-elastic-carousel";

const Project = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const breakpoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 700, itemsToShow: 3 },
    { width: 1400, itemsToShow: 4 },
  ];

  let carousel = [
    {
      video: "videos/facebook-clone.mp4",
      title: "Facebook Clone",
      desc: `Built a ReactJS Facebook clone app with user profile generation and article fetching APIs.`,
      date: "Posted this . Apr 2024",
      poster: "thumbnails/fb-poster.png",
    },
    {
      video: "videos/weather.mp4",
      title: "Weather App",
      desc: `I made a weather app with JavaScript that gets its info from an API. It gives pretty good predictions`,
      date: "Posted this . Mar 2024",
      poster: "thumbnails/weather-poster.png",
    },
    {
      video: "videos/mega-jumps.mp4",
      title: "Mega Jumps",
      desc: `I created a 2D web game called Mega Jumps using React.js. It's inspired by Super Mario, featuring a parallax background, object collisions, and gravity.`,
      date: "Posted this . Dec 2023",
      poster: "thumbnails/megajumps-poster.png",
    },
    {
      video: "videos/yt.mp4",
      title: "Youtube Clone",
      desc: "I am proud to present my YouTube clone website, built with PHP, SQL, HTML, and CSS.",
      date: "Posted this . Jul 2023",
      poster: "thumbnails/yt-poster.png",
    },
    {
      video: "videos/zombie.mp4",
      title: "Zombie Slayer",
      desc: `I made a 2D game called 'Zombie Slayer.' In the game, you need to protect your character.I used React.js to create it.`,
      date: "Posted this . Sep 2023",
      poster: "thumbnails/zombie-poster.png",
    },
    {
      video: "videos/bullet.mp4",
      title: "Bullet Hop",
      desc: `I've developed a 2D web-based game called 'Bullet Hop' using a combination of JavaScript, HTML and CSS.`,
      date: "Posted this . Aug 2023",
      poster: "thumbnails/bullet-poster.png",
    },
    {
      video: "videos/sword.mp4",
      title: "Sword & Shield",
      desc: `I've developed a web-based game called 'Sword & Shield.' I used React.js to build it.`,
      date: "Posted this . Aug 2023",
      poster: "thumbnails/sword-poster.png",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className={styles.project}>
      <h3 data-aos="fade-up" data-aos-duration="1500">
        {" "}
        Testimonial Of <br /> <span>My Learning</span>
      </h3>
      <div className={styles.container}>
        <div
          className={styles.intro}
          data-aos="zoom-in-right"
          data-aos-duration="2000"
        >
          <h2>Project Variety</h2>
          <p>
            My portfolio includes diverse projects, such as Android and iOS
            apps, including calculators, YouTube, Instagram clones, 2D mobile
            games, and weather and food apps.
          </p>
          <p>
            I started making websites and games. I built a YouTube-like site,
            created games using React.js, and designed a responsive clothing
            e-commerce website. It's all about learning and getting better at
            what I do.
          </p>
          <a href="https://instagram.com/numan.shahid_?igshid=OGQ5ZDc2ODk2ZA==">
            <button>See all Projects</button>
          </a>
        </div>
        <img
          src="images/pic2.gif"
          className={styles.codingimg}
          data-aos="zoom-in-left"
          data-aos-duration="2000"
        />
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 px-3">
        <Carousel breakpoints={breakpoints} showArrows={false}>
          {carousel.map((item, index) => (
            <div
              key={index}
              className="col col-md-9 col-lg-5 mx-3 my-3"
              data-aos="zoom-out"
              data-aos-duration="1500"
              style={{ maxHeight: "90vh" }}
            >
              <div className="card h-100 dark-card">
                <video
                  src={item.video}
                  controls
                  className="card-img-top"
                  style={{ minHeight: "10vh" }}
                  poster={item.poster}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  {windowWidth > 560 && (
                    <p className="card-text">{item.desc}</p>
                  )}
                </div>
                <div className="card-footer">
                  <p>{item.date}</p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Project;
