import { useState } from 'react'

import blogPosts from '../assets/db/posts.js'
import tags from '../assets/db/tags.js'
import categories from '../assets/db/categories.js'

import List from './List/List'
import Form from './Form/Form'
import Input from './Input/Input';

const initialFormData = {
  title: '',
  content: '',
  category: '',
  // tags: [],
  published: false
}

export default function Main() {

  const [posts, setPosts] = useState(blogPosts)
  const [formData, setFormData] = useState(initialFormData);
  const [formTags, setFormTags] = useState([])


  function handleFormData(e) {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    console.log(value)
    setFormData(
        {
          ...formData,
          [e.target.name]: value
        }
      )    
    }
    

    
  function handleFormTags(e) {
    const isChecked = e.target.checked
    const value = e.target.value
    if (!formTags.includes(value) && isChecked) {
      setFormTags([...formTags, value])
    } else if (formTags.includes(value) && !isChecked) {
      const newTags = formTags.filter(tag => tag != value)
      setFormTags(newTags)
    }
    console.log(formTags);
    
  }

  function handleSubmit(e) { 
    e.preventDefault()
    setPosts([
      ...posts,
      {
        id: posts.length + 1,
        title: formData.title,
        content: formData.content,
        category: formData.category,
        tags: formTags,
        published: formData.published,
      }])
    
    console.log(posts);
  }

  return (
    <main>
      <div className="container">

        {/* FORM */}
        <Form onSubmit={handleSubmit}>

          {/* TITLE INPUT */}
          <Input
            type={'text'}
            title={"Titolo"}
            placeholder={"Inserisci il titolo"}
            id='newFormData-title'
            name="title"
            value={formData.title}
            onChange={handleFormData}
          />

          {/* CONTENT INPUT */}
          <Input
            type={'text'}
            title={"Contenuto"}
            placeholder={"Inserisci il contenuto"}
            id='newFormData-content'
            value={formData.content}
            onChange={handleFormData}
            name="content"
          />

          {/* CATEGORY SELECT */}
          <select name="category" id="category" value={formData.category} onChange={handleFormData}>
            {categories.map((cat, index) =>
              <option key={index} value={cat}>{cat}</option>
            )}
          </select>


          {/* TAGS CHECKBOXS */}
          <div className="tags">
            {tags.map((tag,index) => 
              <div className="tag-item" key={index} >
                <input
                  type="checkbox"
                  id={tag}
                  name={tag}
                  value={tag}
                  onChange={handleFormTags}
                />

                <label htmlFor={tag}>{tag}</label>
              </div>
            )}
          </div>

          <div className="state">
            <input type="checkbox" name="published" id="" onChange={handleFormData}/>
            <label htmlFor="public">Pubblica</label>
          </div>

        </Form>

        {/* LIST */}
        <List arr={posts}/>
      </div>
    </main>
  )
}