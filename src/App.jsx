import { useState } from 'react'
import './App.css'

import Header from './components/Header'
import Main from './components/Main'

import posts from './assets/db/posts.js'


function App() {
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
    <>
      <Header />
      <Main
        posts={posts}
        article={article}
        newTitle={newTitle}
        newContent={newContent}
        handleSubmit={handleSubmit}
        setArticle={setArticle}
        setNewTitle={setNewTitle}
        setNewContent={setNewContent}
      />
    </>
  )
}

export default App