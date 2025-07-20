import { Link } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss, faHtml5, faJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { faCode, faTerminal } from "@fortawesome/free-solid-svg-icons";


function Home(){

return<>
<h1 className="text-4xl titele1"><FontAwesomeIcon icon={faCode} />front-end developers quizzes<FontAwesomeIcon icon={faTerminal} /></h1>
<div className="links flex flex-wrap gap-4 justify-center items-center">
<Link to="/Home" className="link"> <FontAwesomeIcon icon={faJs} /> Javascript</Link>
<Link to="/React" className="link"> <FontAwesomeIcon icon={faReact} /> react.js</Link>
<Link to="/Html" className="link"> <FontAwesomeIcon icon={faHtml5} /> Html</Link>
<Link to="/Css" className="link"> <FontAwesomeIcon icon={faCss} /> css</Link>
</div>

<div className="marquee-container">
  <p className="marquee-text">🚀 Welcome to the Front-End Developers Quiz! Test your skills in JavaScript, React, HTML, and CSS! 💡 </p>
</div>

</>
}
export default Home;