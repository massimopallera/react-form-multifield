import posts from '../assets/db/posts.js'
import { useState } from 'react'
import List from './List/List'
import Form from './Form/Form'
import Input from './Input/Input';


const tags = [
  "js",
  "css",
  "html"
]

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
        >

          {/* TITLE INPUT */}
          <Input
            type={'text'}
            title={"Titolo"}
            placeholder={"Inserisci il titolo"}
            id='newArticle-title'
            value={newTitle}
            onChange={e => setNewTitle(e.target.value)}
          />

          {/* CONTENT INPUT */}
          <Input
            type={'text'}
            title={"Contenuto"}
            placeholder={"Inserisci il contenuto"}
            id='newArticle-content'
            value={newContent}
            onChange={e => setNewContent(e.target.value)}
          />

          {/* CATEGORY SELECT */}
          <select name="category" id="category">
            {tags.map( (tag, index) => <option key={index} value={tag}>{tag}</option>)}
          </select>

          <div>
            <input type="checkbox" name="" id=""/>
          </div>

        </Form>

        {/* LIST */}
        <List
          arr={article}
          arrKey={'content'}
        />
      </div>
    </main>
  )
}