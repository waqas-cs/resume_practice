import React from 'react'
import Nav from '../components/Nav/Nav'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Portfolio from '../components/Portfolio/Portfolio'
import MyCapabilities from '../components/MyCapabilities/MyCapabilities'
import ClientFeedback from '../components/ClientFeeback/ClientFeedback'
import Contactus from '../components/Contactus/Contactus'
import Footer from '../components/Footer/Footer'

const Home = () => {
    return (
        <div>
            <Nav/>
            <Hero/>
            <About/>
            <Portfolio/>
            <MyCapabilities/>
            <ClientFeedback/>
            <Contactus/>
            <Footer/>
        </div>
    )
}

export default Home
