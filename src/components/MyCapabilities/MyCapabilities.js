import React from 'react'
import styles from './MyCapabilities.module.css'
import line from '../../assets/images/line.png'
import capSkills from '../../assets/images/capSkills.png'

const MyCapabilities = () => {
    return (
        <div className={styles.mainCap}>
            <div className="container">
                <div className={styles.mainCapWrap}>
                    <div className={styles.mainCapHeading}>
                        <h3>My Capabilities</h3>
                        <img src={line}/>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
                            tempor incididunt ut labore et t enim ad minim veniam, quis nostrud exercitation.
                        </p>
                    </div>
                    <div className={styles.capSkills}>
                        <div className={styles.capSkillsWrap}>
                            <div className={styles.skill}>
                                <img src={capSkills}/>
                                <h5>Web Design</h5>
                                <p>Get awesome design services from inkyy.com</p>
                            </div>
                            <div className={styles.skill}>
                                <img src={capSkills}/>
                                <h5>Web Design</h5>
                                <p>Get awesome design services from inkyy.com</p>
                            </div>
                            <div className={styles.skill}>
                                <img src={capSkills}/>
                                <h5>Web Design</h5>
                                <p>Get awesome design services from inkyy.com</p>
                            </div>
                        </div>
                        <div className={styles.capSkillsWrap}>
                            <div className={styles.skill}>
                                <img src={capSkills}/>
                                <h5>Web Design</h5>
                                <p>Get awesome design services from inkyy.com</p>
                            </div>
                            <div className={styles.skill}>
                                <img src={capSkills}/>
                                <h5>Web Design</h5>
                                <p>Get awesome design services from inkyy.com</p>
                            </div>
                            <div className={styles.skill}>
                                <img src={capSkills}/>
                                <h5>Web Design</h5>
                                <p>Get awesome design services from inkyy.com</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MyCapabilities
