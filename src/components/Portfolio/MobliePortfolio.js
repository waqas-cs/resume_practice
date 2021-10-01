import React from 'react'
import styles from './Portfolio.module.css'
import nalie from '../../assets/images/nalie.png'
import mob from '../../assets/images/mob.png'

const MobliePortfolio = () => {
    return (
        <div className={styles.tabContentMob}>
            <div className={styles.tabContentImage}>
                <img src={nalie}/>
                <div className={styles.content}>
                    <div>
                        <h4>Malie</h4><br/>
                        <p>Branding, Mobile Design</p>
                    </div>
                </div>
            </div>
            <div className={styles.tabContentImage}>
                <img src={mob}/>
                <div className={styles.content}>
                    <div>
                        <h4>Mob</h4><br/>
                        <p>Branding, Mobile Design</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobliePortfolio
