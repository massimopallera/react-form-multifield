import posts from '../assets/db/posts.js'
import { useState } from 'react'
import List from './List/List'

export default function Main() {

  const [article, setArticle] = useState(posts)
  const [newTitle, setNewTitle] = useState("")
  const [newContent, setNewContent] = useState("")

  function handleSubmit(e) { 
    e.preventDefault()
    setArticle([
      ...article,
      {
        id: article.length + 1,
        title: newTitle,
        content: newContent,
      }])
    
    console.log(article);
  }

  return (
    <main>
        <div className="container">

        {/* FORM */}
        <form onSubmit={handleSubmit}>

            <h2>Title</h2>
            <input
              type="text"
              id='newArticle-id'
              value={newTitle}
              onChange={e =>setNewTitle(e.target.value)}
            />

            <h2>Content</h2>
            <input
              type="text"
              id='newArticle-content'
              value={newContent}
              onChange={e => setNewContent(e.target.value)}
            />


          <div className='submit-button'>
            <button type="submit">Aggiungi nuovo articolo</button>
              
          </div>
        </form>

        {/* LIST */}
        <List
          arr={article}
          arrKey={'content'}
        />
      </div>

      </main>
  )
}