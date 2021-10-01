import React from 'react'
import styles from './Portfolio.module.css'
import apri from '../../assets/images/apri.png'
import bane from '../../assets/images/bane.png'

const WebsitePortfolio = () => {
    return (
        <div className={styles.tabContentWeb}>
            <div className={styles.tabContentImage}>
                <img src={apri}/>
                <div className={styles.content}>
                    <div>
                        <h4>Apri</h4>
                        <p>Branding, Web Design</p>
                    </div>
                </div>
            </div>
            <div className={styles.tabContentImage}>
                <img src={bane}/>
                <div className={styles.content}>
                    <div>
                        <h4>Bane</h4>
                        <p>Branding, Web Design</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WebsitePortfolio
