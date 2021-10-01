import React from 'react'
import styles from './Footer.module.css'
import logo from '../../assets/images/logo.png'
import behance from '../../assets/images/behance.png'
import dribbble from '../../assets/images/dribbble.png'
import insta from '../../assets/images/insta.png'
import linkedIn from '../../assets/images/linkedIn.png'
import pinterest from '../../assets/images/pinterest.png'
const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className={styles.footerWrap}>
                    <span className={styles.footerSpan}></span>
                    <img src={logo}/>
                </div>
                <div className={styles.footerPara}>
                    <p>About | Portfolio | Contact</p>
                    <p>NY / +1 123456 7890 / hello@graphics.studio.com</p>
                    <div className={styles.socialMedia}>
                        <img src={behance}/>
                        <img src={dribbble}/>
                        <img src={insta}/>
                        <img src={linkedIn}/>
                        <img src={pinterest}/>
                    </div>
                </div>
            </div>
            <hr/>
            <div className={styles.copyright}>
                <p>Copyright &copy; 2019 Graphics Studio | All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer
