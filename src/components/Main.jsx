import posts from '../assets/db/posts.js'
import tags from '../assets/db/tags.js'
import categories from '../assets/db/categories.js'

import { useState } from 'react'
import List from './List/List'
import Form from './Form/Form'
import Input from './Input/Input';


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
            {categories.map( (cat, index) => <option key={index} value={cat}>{cat}</option>)}
          </select>

          <div className="tags">
            {tags.map((tag,index) => 
              <div className="tag-item">
                <input
                  type="checkbox"
                  id={`${tag}${index}`}
                  name={`${tag}${index}`}
                  value={tag}
                />

                <label htmlFor={`${tag}${index}`}>{tag}</label>
              </div>
            )}
          </div>

          <div className="state">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Pubblica</label>
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