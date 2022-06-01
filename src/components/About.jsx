import React from 'react'

const About = () => {
  return (
    <section className='about'>
      <h1>About</h1>
      <p>Hello, my name is Full Name. I am a photographer from City, Country. 
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      In et convallis ligula, ac malesuada orci.
      </p>
      <div><img src="../propic.jpg" alt="pro-pic" /></div>
      <p>Get in touch with me</p>
      <div className="container">
        <a href="mailto:username@example.com">EMail</a>
        <a href="http://instagram.com">Instagram</a>
        <a href="http://linkedin.com">LinkedIn</a>
        <a href="http://twitter.com">Twitter</a>
      </div>
      <p>Awards and certification</p>
      <div className="container">
        <a href="javascript:void(0)">Professional Photographer of the Year 2022</a>
      </div>
    </section>
  )
}

export default About