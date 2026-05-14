function Header({ title }) {
  return (
    <header>
      <h1>{title}</h1>
      <nav>
        <a href="#">Home</a> |{' '}
        <a href="#">About</a> |{' '}
        <a href="#">Archive</a>
      </nav>
      <hr />
    </header>
  )
}

export default Header