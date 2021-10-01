import React from 'react'
import styles from './Nav.module.css'
import logo from '../../assets/images/logo.png'
import heroDottedImage from '../../assets/images/heroDottedImage1.png'

const Nav = () => {
    return (
        <div className={styles.header}>
            <div className={styles.heroDottedImage}>
                <img src={heroDottedImage}/>
            </div>
            <div className="container"></div>
            <div className="container">
                <div className={styles.navbarWrap}>
                    <div className={styles.logo}>
                        <img src={logo}/>
                    </div>
                    <ul className={styles.navLinks}>
                        <li id={styles.about} className={styles.navList}>About</li>
                        <li id={styles.portfolio} className={styles.navList}>Portfolio</li>
                        <li id={styles.contact} className={styles.navList}>Contact</li>
                        <li id={styles.getStated} className={styles.navList}>Get Started</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nav
