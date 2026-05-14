import blogData from './blog'
import Header from './components/Header'
import About from './components/About'
import ArticleList from './components/ArticleList'

function App() {
  return (
    <div>
      <Header title={blogData.blogTitle} />
      
      <About 
        authorName={blogData.author}
        aboutText={blogData.aboutText}
      />
      
      <ArticleList articles={blogData.articles} />
      
      <footer>
        <p>© 2025 {blogData.author}</p>
      </footer>
    </div>
  )
}

export default App