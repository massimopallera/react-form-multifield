export default function Form({
  onSubmit, 
  onTitleChange, 
  onContentChange, 
  newTitle, 
  newContent
}) {
  return (
    <form onSubmit={onSubmit}>

        <h2>Title</h2>
        <input
          type="text"
          id='newArticle-id'
          value={newTitle}
          onChange={onTitleChange}
        />

        <h2>Content</h2>
        <input
          type="text"
          id='newArticle-content'
          value={newContent}
          onChange={onContentChange}
        />


      <div className='submit-button'>
        <button type="submit">Aggiungi nuovo articolo</button>
          
      </div>
    </form>
  )
}