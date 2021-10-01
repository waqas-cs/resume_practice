import React from 'react'
import styles from './Portfolio.module.css'
import abad from '../../assets/images/abad.png'
import SedutPerspiciatis from '../../assets/images/SedutPerspiciatis.png'


const LogoPortfolio = () => {
    return (
        <div className={styles.tabContentLogo}>
            <div className={styles.tabContentImage}>
                <img src={abad}/>
                <div className={styles.content}>
                    <div>
                        <h4>Abad</h4>
                        <p>Branding, Logo Design</p>
                    </div>
                </div>
            </div>
            <div className={styles.tabContentImage}>
                <img src={SedutPerspiciatis}/>
                <div className={styles.content}>
                    <div>
                        <h4>sedut</h4>
                        <p>Branding, Logo Design</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogoPortfolio
