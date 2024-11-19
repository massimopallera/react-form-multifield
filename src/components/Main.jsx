import posts from '../assets/db/posts.js'
import { useState } from 'react'
import List from './List/List'
import Form from './Form/Form'

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
    
    // console.log(article);
  }

  return (
    <main>
      <div className="container">

        {/* FORM */}
        <Form
          onSubmit={handleSubmit}
          onTitleChange={e => setNewTitle(e.target.value)}
          onContentChange={e => setNewContent(e.target.value)}
          newTitle={newTitle}
          newContent={newContent}
        />

        {/* LIST */}
        <List
          arr={article}
          arrKey={'content'}
        />
      </div>
    </main>
  )
}