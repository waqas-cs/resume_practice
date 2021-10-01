import React from 'react'
import styles from './About.module.css'
import aboutImage from '../../assets/images/aboutImage.png'
import line from '../../assets/images/line.png'
const About = () => {
    return (
        <div className={styles.about}>
            <div className="container">
                <div className={styles.aboutWrap}>
                    <div className={styles.aboutHeading}>
                        <h3>About Me </h3>
                        <img className={styles.aboutLine} src={line}/>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                            commodo consequat

                            <br/><br/>
                        
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                            dolore eu fugiat nulla pariatur.
                        </p>
                        <button>Download CV</button>
                    </div>
                    <div className={styles.aboutImage}>
                        <img className={styles.aboutImg} src={aboutImage}/>
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default About
