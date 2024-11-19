export default function Main({
  article, 
  newTitle, 
  newContent, 
  handleSubmit, 
  setNewTitle, 
  setNewContent

}) {

  return (
    <main>
        <div className="container">

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


        <div className="list">
          <ol>
            {article.map((post, index) => 
              <li key={index}>
                {post.content}
            </li>)}
          </ol>
        </div>
      </div>

      </main>
  )
}