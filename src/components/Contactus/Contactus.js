import React from 'react'
import styles from './Contactus.module.css'
import lineVertical from '../../assets/images/line1.png'

const Contactus = () => {
    return (
        <div className={styles.mainContactus}>
            <div className="container">
                <div className={styles.mainContactusWrap}>
                    <img src={lineVertical}/>
                    <h3>Let’s Make Something Great Together</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
                        tempor incididunt ut labore et t enim ad minim veniam, quis nostrud exercitation.
                    </p>
                    <form>
                        <div className={styles.contactusForm}>
                            <input type="text" name="fullname" placeholder="Name"/>
                            <input type="email" name="email" placeholder="Email"/>
                        </div>
                        <div className={styles.contactusForm}>
                            <input type="tel" name="phone" placeholder="Phone#"/>
                            <input type="text" name="budget" placeholder="Budget"/>
                        </div>
                        <div className={styles.formTextarea}>
                            <textarea name="message" placeholder="Message"/>
                        </div>
                        <div className={styles.heroButtons}>
                                <button>Hire Me</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contactus