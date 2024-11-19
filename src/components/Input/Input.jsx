export default function Input({
  type,
  title,
  placeholder,
  value,
  onChange,
  id
}) {
  return (
    <>
      <h2>{title}</h2>
        <input
          type={type}
          id={id}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
    </>
  )
}