function About() {
  return (
    <div>
      <div>
        <h2>About Section</h2>
        <p>
          Word party was created using the <span> <a href="https://www.datamuse.com/api/">datamuse api.</a></span> The app is designed for when the user searches a word you can select either words that rhyme or have similar meaning.
        </p>
      </div>
      {/* Just Testing */}
      <div>
        <ul className="team-info">
          <li>
          <img src={require("./assets/colin-ho.png")} alt="Team member Colin Ho"/>
            <p className="dev-name">Colin Ho</p>
            <div className="icon-container">
            <a href="https://github.com/colinho97"><i class="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/colin-ho-3b7768103/"><i class="fa-brands fa-linkedin"></i></a>
            </div>
          
          
        </ul>
      </div>
    </div>
  );
}

export default About;