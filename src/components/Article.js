function Article({ title, date, preview, readTime }) {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date} • {readTime}</small>
      <p>{preview}</p>
      <button>Read more →</button>
      <hr />
    </article>
  )
}

export default Article