function About({ authorName, aboutText }) {
  return (
    <aside>
      <img src="https://via.placeholder.com/150" alt="blog logo" />
      <h2>About {authorName}</h2>
      <p>{aboutText}</p>
    </aside>
  )
}

export default About