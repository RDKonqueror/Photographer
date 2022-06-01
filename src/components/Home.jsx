import React from 'react'

const Home = () => {
    return (
        <section className='home'>
            <div className="hero">
                <span>I'M A</span>
                <span>PHOTOGRAPHER</span>
                <p>Capturing portraits, fashion and a photojournalist since 2019.</p>
            </div>
            <div className="foot">
                <p>Last updated: 20th May, 2022</p>
                <div>
                    <span>KOL</span>
                    <span>36°C</span>
                    <span>16:20</span>
                    <span><img src="../cloud-sun-fill.svg" alt="weather_icon" /></span>
                </div>
            </div>
        </section>
    )
}

export default Home