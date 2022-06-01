import React, { useEffect, useState } from 'react'

const Portfolio = () => {
  const [img, setImg] = useState([])
  const [cursorX, setCursorX] = useState()
  const [cursorY, setCursorY] = useState()

  window.addEventListener('mousemove', (e) => {
    setCursorX(e.clientX)
    setCursorY(e.clientY)
  })

  const getData = () => {
    fetch('https://pixabay.com/api/?key={API_KEY}&q=portrait&image_type=photo').then(function (response) {
      return response.json();
    })
      .then(function (data) {
        setImg(data.hits)
        // console.log(data.hits[0].largeImageURL)
      });
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <section className="portfolio">
      <h1>My Portfolio</h1>
      <div className="gallery">
        {
          img && img.length > 0 && img.map((val) => {
            return (
              <div className="img-cont" key={val.id}>
                <img src={val.largeImageURL} alt="" width='100px' height='100px' />
              </div>
            )
          })
        }
        <div className="cursor" style={{ left: cursorX + 'px', top: cursorY + 'px' }}>View project</div>
      </div>
    </section>
  )
}

export default Portfolio
