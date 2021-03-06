function About() {
  return (
    <div>
      <div>
        <h2>About Section</h2>
        <p>
          Word party was created using the <span> <a href="https://www.datamuse.com/api/">datamuse api.</a></span> The app is created for when a user searches for a word, the user can select either words that rhyme or have similar meaning.
        </p>
      </div>
      <div className="flex-container-media">
        <ul className="team-info">
          <li>
          <img src={require("./assets/colin-ho.png")} alt="Team member Colin Ho"/>
            <p className="dev-name">Colin Ho</p>
            <div className="icon-container">
            <a href="https://github.com/colinho97"><i className="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/colin-ho-3b7768103/"><i className="fa-brands fa-linkedin"></i></a>
            </div>
          </li>
          
            <li>
            <img src={require("./assets/midian-judah.jpeg")} alt="Team member Midian Judah"/>
            <p className="dev-name">Midian Judah</p>
            <div className="icon-container">
            <a href="https://github.com/midianjudah"><i className="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/midian-judah-25aa36163/"><i className="fa-brands fa-linkedin"></i></a>
            </div>
          </li>

          <li>
            <img src={require("./assets/robert-mason.jpeg")} alt="Team member Robert Mason"/>
            <p className="dev-name">Robert Mason</p>
            <div className="icon-container">
            <a href="https://github.com/rslmason"><i className="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/rslmason/"><i className="fa-brands fa-linkedin"></i></a>
            </div>
          </li>

          <li>
          <img src={require("./assets/simon-oconnor.jpg")} alt="Team member Simon O'Connor"/>
            <p className="dev-name">Simon O'Connor</p>
            <div className="icon-container">
            <a href="https://github.com/SimonOConnor28"><i className="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/simontoconnor/"><i className="fa-brands fa-linkedin"></i></a>
            </div>
          </li>
          
        </ul>
      </div>
    </div>
  );
}

export default About;