import React from 'react'
import styles from './Portfolio.module.css'
import abad from '../../assets/images/abad.png'
import apri from '../../assets/images/apri.png'
import bane from '../../assets/images/bane.png'
import nalie from '../../assets/images/nalie.png'
import SedutPerspiciatis from '../../assets/images/SedutPerspiciatis.png'
import mob from '../../assets/images/mob.png'

const AllProtfolio = () => {
    return (
        <div className={styles.tabContent}>
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
                <img className={styles.sedutImage} src={SedutPerspiciatis}/>
                <div className={styles.content}>
                <div>
                    <h4>Sed ut Perspiciatis</h4>
                    <p>Branding, Logo Design</p>
                </div>
                </div>
            </div>
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
            <div className={styles.tabContentImage}>
                <img src={nalie}/>
                <div className={styles.content}>
                    <div>
                        <h4>Nalie</h4>
                        <p>Branding, Mobile Design</p>
                    </div>
                </div>
            </div>
            <div className={styles.tabContentImage}>
                <img src={mob}/>
                <div className={styles.content}>
                    <div>
                        <h4>Mob</h4>
                        <p>Branding, Mobile Design</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllProtfolio
