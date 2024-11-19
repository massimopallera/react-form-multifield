export default function List({arr, arrKey}) {
  return (
    <div className="list">
      <ol>
        {arr.map((element, index) => <li key={index}>{element[arrKey]}</li>)}
      </ol>
    </div>
  )
}