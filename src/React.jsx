import { faCss, faHtml5, faJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { faArrowRightFromBracket, faClipboardQuestion, faRepeat, faRightFromBracket, faStopwatch, faTicket, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { Link, Links } from "react-router-dom";
import Darklight from "../public/cobonands/Darklight";

const questions = [
  {
    question: "What is React?",
    options: [
      "A server-side framework",
      "A JavaScript library for building user interfaces",
      "A CSS preprocessor",
      "A database management tool"
    ],
    correctAnswer: "A JavaScript library for building user interfaces"
  },
  {
    question: "What is the virtual DOM?",
    options: [
      "A copy of the actual DOM that React keeps in memory",
      "A real DOM used in JavaScript",
      "A browser extension for debugging",
      "A database for storing UI components"
    ],
    correctAnswer: "A copy of the actual DOM that React keeps in memory"
  },
  {
    question: "Which command is used to create a new React project?",
    options: [
      "npx create-react-app myApp",
      "npm install react",
      "create-react myApp",
      "npm init react-app"
    ],
    correctAnswer: "npx create-react-app myApp"
  },
  {
    question: "What is a component in React?",
    options: [
      "A function or class that returns JSX to render UI",
      "A CSS file",
      "A package manager",
      "A database connection"
    ],
    correctAnswer: "A function or class that returns JSX to render UI"
  },
  {
    question: "How do you pass data from a parent to a child component?",
    options: [
      "Using state",
      "Using props",
      "Using hooks",
      "Using context"
    ],
    correctAnswer: "Using props"
  },
  {
    question: "Which hook is used to manage state in functional components?",
    options: [
      "useRef()",
      "useState()",
      "useEffect()",
      "useContext()"
    ],
    correctAnswer: "useState()"
  },
  {
    question: "Which hook is used for side effects (e.g., fetching data)?",
    options: [
      "useEffect()",
      "useState()",
      "useRef()",
      "useMemo()"
    ],
    correctAnswer: "useEffect()"
  },
  {
    question: "What does JSX stand for?",
    options: [
      "JavaScript XML",
      "JavaScript Extension",
      "Java Syntax Extension",
      "Java External Script"
    ],
    correctAnswer: "JavaScript XML"
  },
  {
    question: "Which syntax is correct to render a component named 'MyComponent'?",
    options: [
      "<MyComponent />",
      "<myComponent></myComponent>",
      "<MyComponent></MyComponent>",
      "Both A and C"
    ],
    correctAnswer: "Both A and C"
  },
  {
    question: "What is the purpose of `key` prop in lists?",
    options: [
      "To set unique IDs for styles",
      "To identify elements uniquely for efficient updates",
      "To add keyboard shortcuts",
      "To sort the list"
    ],
    correctAnswer: "To identify elements uniquely for efficient updates"
  },
  {
    question: "Which method is used to update state in a functional component?",
    options: [
      "setState()",
      "updateState()",
      "this.setState()",
      "The updater function returned by useState()"
    ],
    correctAnswer: "The updater function returned by useState()"
  },
  {
    question: "What does `useRef()` return?",
    options: [
      "A mutable object with a .current property",
      "A state value",
      "A callback function",
      "A component"
    ],
    correctAnswer: "A mutable object with a .current property"
  },
  {
    question: "Which tool is commonly used to manage routing in React?",
    options: [
      "React Router",
      "Redux",
      "React Navigation",
      "React Route"
    ],
    correctAnswer: "React Router"
  },
  {
    question: "What happens when state changes in a component?",
    options: [
      "The entire app reloads",
      "The component and its children re-render",
      "Nothing happens",
      "Only CSS updates"
    ],
    correctAnswer: "The component and its children re-render"
  },
  {
    question: "What is Context API used for in React?",
    options: [
      "Managing component lifecycle",
      "Sharing state globally across components",
      "Debugging code",
      "Styling components"
    ],
    correctAnswer: "Sharing state globally across components"
  },
  {
    question: "What is the correct way to handle a form submit in React?",
    options: [
      "Using onClick handler",
      "Using onSubmit with event.preventDefault()",
      "Using inline JavaScript",
      "Using a database query"
    ],
    correctAnswer: "Using onSubmit with event.preventDefault()"
  },
  {
    question: "Which lifecycle method is replaced by useEffect()?",
    options: [
      "componentDidMount",
      "shouldComponentUpdate",
      "componentWillUnmount",
      "All of the above"
    ],
    correctAnswer: "All of the above"
  },
  {
    question: "How do you conditionally render a component in React?",
    options: [
      "Using if/else inside return",
      "Using ternary operators or logical &&",
      "Using renderIf() method",
      "Using switch statements"
    ],
    correctAnswer: "Using ternary operators or logical &&"
  },
  {
    question: "Which statement is true about props?",
    options: [
      "They can only be used in class components",
      "They are used to store local state",
      "They are read-only and passed from parent to child",
      "They can be changed directly"
    ],
    correctAnswer: "They are read-only and passed from parent to child"
  },
  {
    question: "What is React Fragment used for?",
    options: [
      "To split CSS files",
      "To return multiple elements without extra nodes",
      "To make components faster",
      "To create animations"
    ],
    correctAnswer: "To return multiple elements without extra nodes"
  }
];






function React({darklight,setdarklight}){
  const [time,settime]=useState(120)
  const [number, setnumber]=useState(1)
  const [result,setresult]=useState(0)
  const [result2,setresult2]=useState(0)

useEffect(()=>{
  if (time===0) {
    setnumber(number+1)
    settime(120)
  }
  const invinter=setInterval(()=>{
    settime((time)=>time-1)
  },1000)
return()=>clearInterval(invinter)

},[time])

const minutes=Math.floor(time/60)
const secnds=time%60


function handelanswer(option){
  const corect=questions[number].correctAnswer
if (option===corect) {
  setresult(result+1)
   setnumber(number+1)
   settime(120)
}
else{
   setnumber(number+1)
   settime(120)
   setresult2(result2-1)
    
}
{

}
}

 if (number>=questions.length) {
    return (
      <> <div className="text-center mt-10 text-2xl showresult">
        Your Score: {result} / {questions.length} {result>=15?<h1 className="nice">🎉 Congratulations! You passed the quiz with a great score! Keep it up! 💪

</h1>:<h1 className="nonice">😔 You didn't pass the quiz this time. Don't give up try again and you'll get better! 🔁

</h1>}
      </div>
      <div className=" flex flex-wrap gap-4 justify-center items-center">
        <Link to="/React" className="linkk"><FontAwesomeIcon icon={faRepeat} /> Repeat</Link>
        <Link to="/Exit" className="linkk"> <FontAwesomeIcon icon={faArrowRightFromBracket} /> Exit</Link>
</div>
      </>
     
      
    );
  }


return<>
<Darklight darklight={darklight} setdarklight={setdarklight}/>

<div className={`flex flex-col gap-2 flex-wrap ${darklight?"divcontrol":"divcontrol2"}`}>
  <h1 className="titlejavascript"><FontAwesomeIcon icon={faReact} /> react.js</h1>
<div className="flex flex-row justify-between py-4">
    <button className="result2">{result2}</button>
    <h2 className="text-3xl"><FontAwesomeIcon icon={faClipboardQuestion} />  Question {number} of {questions.length}</h2>
<button className="result">{result}</button>
</div>

<span className="text-2xl span1">{questions[number].question}</span>
{questions[number].options.map((option)=>
<button onClick={()=>handelanswer(option)} className={`${darklight?"button16":"button15"} ${option===questions[number].correctAnswer?"buttongreen":"buttonred"}`}>{option}</button>
)}

<h1 className="time"><FontAwesomeIcon icon={faStopwatch} />  {minutes}:{secnds}</h1>
</div>
<div className="flex flex-wrap gap-4 justify-end">
  <Link to="/Exit" className="linkk"> <FontAwesomeIcon icon={faRightFromBracket} /> Exit</Link>
</div>
</>

}

export default React;

