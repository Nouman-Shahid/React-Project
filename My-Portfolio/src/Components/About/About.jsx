import React from 'react'
import styles from './About.module.css'



const About = () => {
  const educationData = [
    {
      title: "BSSE from UCP",
      year: "2021-2025",
      description: "Presently pursuing a Software Engineering degree (BSSE) at the University of Central Punjab with a scholarship.",
    },
    {
      title: "FSc from PGC",
      year: "2019-2021",
      description: "I did Intermediate in Pre.Engineering from Punjab College,and I studied there with a scholarship.",
    },
    {
      title: "Matric from APS",
      year: "2017-2019",
      description: "I did my matriculation in Computer Science from Army Public School.",
    },

  ];

  const experienceData = [
    {
      title: "Laravel Developer",
      date: "Aug 2024 - Present",
      description: "I began my internship at TriCloud, where I’m currently working as a backend developer with the Laravel framework.",
    },
    {
      title: "React/Next Developer",
      date: "Feb 2023 - Present",
      description: "Enhancing my skills in creating web apps with ReactJS and NextJS.",
    },
    {
      title: "Mobile Developement",
      date: "July 2022 - Feb 2023",
      description: "Since July 2022, I've gained mobile app insights and honed my Android studio and Flutter skills.",
    },

  ];

  return (
    <>

      <section className={styles.about}>

        <h3 className={styles.h3} data-aos="fade-up" data-aos-duration="1500"> Profile And    <br /> <span>Experience</span></h3>
        <div className={styles.container}>
          <img src="images/pic1.gif" className={styles.codingimg} data-aos="zoom-out-right" data-aos-duration="1000" />
          <div className={styles.intro} data-aos="zoom-out-left" data-aos-duration="1000">
            <h2>Introduction</h2>
            <p>Hi! My name is Numan Shahid. I am a Web developer, and I'm very passionate and dedicated to my work. I really enjoy making and programming things with computers.</p>
            <p>I'm always learning and trying new things in the world of software. When I'm not doing that, I like to explore new tech ideas and solve fun coding puzzles. I'm excited about where my software journey will take me.</p>
            <a href='cv/cv.pdf' download><button>Download CV</button></a>
          </div>
        </div>
        <h3 className={styles.h3}> More About Me  </h3>
        <div className={styles.container}>
          <div className={styles.education}>
            <h2>Education</h2>
            <ul>
              {educationData.map((item, index) => (
                <li key={index} data-aos="zoom-in-right" data-aos-duration="1500">
                  <div className={styles.head}>
                    <img src="images/education-icon.png" />
                    <h3>{item.title}</h3>
                  </div>
                  <div className={styles.des}>
                    <p>{item.description}</p>
                    <p className={styles.date}>( {item.year} )</p>
                  </div>
                </li>
              ))}

            </ul>
          </div>
          <div className={styles.education}>
            <h2>Experience</h2>
            <ul>
              {experienceData.map((item, index) => (
                <li key={index} data-aos="zoom-in-left" data-aos-duration="1500">
                  <div className={styles.head}>
                    <img src="images/case-icon.png" />
                    <h3>{item.title}</h3>
                  </div>
                  <div className={styles.des}>
                    <p>{item.description}</p>
                    <p className={styles.date}>( {item.date} )</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </section>


    </>
  );
};

export default About;
