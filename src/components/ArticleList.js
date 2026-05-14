import Article from './Article'

function ArticleList({ articles }) {
  return (
    <div>
      <h2>Recent Posts</h2>
      {articles.map(article => (
        <Article 
          key={article.id}
          title={article.title}
          date={article.date}
          preview={article.preview}
          readTime={article.readTime}
        />
      ))}
    </div>
  )
}

export default ArticleList