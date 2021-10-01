import React from 'react'
import styles from './Hero.module.css'
import heroImage from '../../assets/images/heroImage.png'
import behance from '../../assets/images/behance.png'
import dribbble from '../../assets/images/dribbble.png'
import insta from '../../assets/images/insta.png'
import linkedIn from '../../assets/images/linkedIn.png'
import pinterest from '../../assets/images/pinterest.png'
import heroDottedSideImage from '../../assets/images/heroDottedSideImage.png'

const Hero = () => {
    return (
        <div className={styles.heroMain}>
            <div className="container">
                <div className={styles.heroWrap}>
                    <div className={styles.heroHeading}>
                        <div className={styles.heroheadingWrap}>
                            <h4>Hello, I am</h4>
                            <h1>Mark Reccardo</h1>
                            <p>A young <span>UI/UX</span> designer with crazy for mobile & web design</p>
                            <p className={styles.findmePara}>Find Me on </p>
                            <div className={styles.socialMedia}>
                                <img src={behance}/>
                                <img src={dribbble}/>
                                <img src={insta}/>
                                <img src={linkedIn}/>
                                <img src={pinterest}/>
                            </div>
                            <div className={styles.heroButtons}>
                                <button>Hire Me</button>
                                <button>Portfolio</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.heroImage}>
                        <img src={heroImage}/>
                    </div>
                </div>
            </div>
            <div className={styles.heroSideBar}>
                <ul>
                    <li>01</li>
                    <li>02</li>
                    <li>03</li>
                    <li>04</li>
                </ul>
                <img src={heroDottedSideImage}/>
            </div>
        </div>
    )
}

export default Hero