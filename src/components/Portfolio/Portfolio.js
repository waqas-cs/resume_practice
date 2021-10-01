import React, {useState} from 'react'
import styles from './Portfolio.module.css'
import arrowLeft from '../../assets/images/arrowLeft.png'
import arrowRight from '../../assets/images/arrowRight.png'
import AllProtfolio from './AllProtfolio'
import LogoPortfolio from './LogoPortfolio'
import WebsitePortfolio from './WebsitePortfolio'
import MobliePortfolio from './MobliePortfolio'

const Portfolio = () => {

    const [showTab, setShowTab] = useState("all")

    const onClickAll = () =>{
        setShowTab('all')
    }
    const onClickLogo = () =>{
        setShowTab('logo')
    }
    const onClickWebsite = () =>{
        setShowTab('website')
    }
    const onClickMob = () =>{
        setShowTab('mob')
    }

    return (
        <div className={styles.portfolio}>
           <div className="container">
                <div className={styles.portfolioWrap}>
                    <div className={styles.portfolioHeading}>
                        <h4 className={styles.portfolioHeading}>Portfolio</h4>
                        <span className={styles.lineSpan}></span>
                        <div className={styles.buttonImage}>
                            <img src={arrowLeft}/>
                            <img src={arrowRight}/>
                        </div>
                    </div>
                    <div className={styles.tabs}>
                        <button className={styles.tabLinks} 
                            onClick={() => {onClickAll()}}>All</button>
                        <button className={styles.tabLinks} 
                            onClick={() => {onClickLogo()}}>Logo</button>
                        <button className={styles.tabLinks} 
                            onClick={() => {onClickWebsite()}}>Websites</button>
                        <button className={styles.tabLinks} 
                            onClick={() => {onClickMob()}}>Mobile Apps</button>
                    </div>
                    <div>
                        {
                           ( ()=>{
                                if(showTab=='all'){
                                    return <AllProtfolio/>
                                }
                                else if(showTab=='logo'){
                                    return <LogoPortfolio/>
                                }else if(showTab=='website'){
                                    return <WebsitePortfolio/>
                                }else if(showTab=='mob'){
                                    return <MobliePortfolio/>
                                }
                            })()
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio