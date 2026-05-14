function About({ authorName, aboutText, image = "https://via.placeholder.com/150" }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{aboutText}</p>
    </aside>
  )
}

export default About