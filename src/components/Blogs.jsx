import React from 'react'
import ArrayBlogs from '../ArrayBlogs'

const Blogs = () => {

  return (
    <section className="blogs">
      <h1>Blogs</h1>
      <div className="post">
        {
          ArrayBlogs && ArrayBlogs.length > 0 && ArrayBlogs.map(({id, title, content, date}) => {
            return (
              <div key={id}>
                <h3>{title}</h3>
                <p>{content}</p>
                <div className='post-date'>Posted on: {date}</div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Blogs