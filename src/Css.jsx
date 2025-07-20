import { faCss, faHtml5, faJs } from "@fortawesome/free-brands-svg-icons";
import { faArrowRightFromBracket, faClipboardQuestion, faRepeat, faRightFromBracket, faStopwatch, faTicket, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { Link, Links } from "react-router-dom";
import Darklight from "../public/cobonands/Darklight";

const questions = [
  {
    question: "What does CSS stand for?",
    options: [
      "Creative Style Sheets",
      "Colorful Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets"
    ],
    correctAnswer: "Cascading Style Sheets"
  },
  {
    question: "Which HTML tag is used to link an external CSS file?",
    options: [
      "<style>",
      "<link>",
      "<css>",
      "<stylesheet>"
    ],
    correctAnswer: "<link>"
  },
  {
    question: "Where in an HTML document is the correct place to refer to an external style sheet?",
    options: [
      "In the <body> section",
      "At the end of the document",
      "In the <head> section",
      "After the content"
    ],
    correctAnswer: "In the <head> section"
  },
  {
    question: "Which property is used to change the background color?",
    options: [
      "color",
      "bgcolor",
      "background-color",
      "background"
    ],
    correctAnswer: "background-color"
  },
  {
    question: "Which CSS property controls the text size?",
    options: [
      "font-style",
      "text-size",
      "font-size",
      "text-style"
    ],
    correctAnswer: "font-size"
  },
  {
    question: "How do you make all <p> elements bold in CSS?",
    options: [
      "p {font-weight: bold;}",
      "p {text-size: bold;}",
      "p {text-weight: bold;}",
      "p {bold: true;}"
    ],
    correctAnswer: "p {font-weight: bold;}"
  },
  {
    question: "Which property is used to center text?",
    options: [
      "text-align: center;",
      "align: center;",
      "horizontal-align: middle;",
      "center-text: true;"
    ],
    correctAnswer: "text-align: center;"
  },
  {
    question: "How do you add a comment in CSS?",
    options: [
      "// this is a comment",
      "/* this is a comment */",
      "# this is a comment",
      "<!-- this is a comment -->"
    ],
    correctAnswer: "/* this is a comment */"
  },
  {
    question: "Which property is used to change the font of an element?",
    options: [
      "font-style",
      "font-family",
      "text-font",
      "font-weight"
    ],
    correctAnswer: "font-family"
  },
  {
    question: "Which value of `position` is used to fix an element at the top of the page?",
    options: [
      "absolute",
      "relative",
      "fixed",
      "sticky"
    ],
    correctAnswer: "fixed"
  },
  {
    question: "How do you select an element with id 'header'?",
    options: [
      "#header",
      ".header",
      "header",
      "*header"
    ],
    correctAnswer: "#header"
  },
  {
    question: "How do you select elements with class 'menu'?",
    options: [
      "*menu",
      "#menu",
      ".menu",
      "menu"
    ],
    correctAnswer: ".menu"
  },
  {
    question: "Which property is used to add space inside the border of an element?",
    options: [
      "margin",
      "border-spacing",
      "padding",
      "spacing"
    ],
    correctAnswer: "padding"
  },
  {
    question: "Which property is used to add space outside the border of an element?",
    options: [
      "margin",
      "padding",
      "spacing",
      "border-spacing"
    ],
    correctAnswer: "margin"
  },
  {
    question: "Which CSS property is used to make text italic?",
    options: [
      "font-italic",
      "text-style: italic;",
      "font-style: italic;",
      "italic: true;"
    ],
    correctAnswer: "font-style: italic;"
  },
  {
    question: "What does `z-index` control?",
    options: [
      "Zoom level",
      "Stacking order of elements",
      "Zebra patterns",
      "Text indentation"
    ],
    correctAnswer: "Stacking order of elements"
  },
  {
    question: "What is the default position value of HTML elements?",
    options: [
      "absolute",
      "fixed",
      "static",
      "relative"
    ],
    correctAnswer: "static"
  },
  {
    question: "Which unit is relative to the font-size of the parent element?",
    options: [
      "px",
      "%",
      "em",
      "vh"
    ],
    correctAnswer: "em"
  },
  {
    question: "What is the effect of `display: none;`?",
    options: [
      "Hides the element and keeps its space",
      "Completely removes the element from the layout",
      "Makes text invisible only",
      "Disables element events"
    ],
    correctAnswer: "Completely removes the element from the layout"
  },
  {
    question: "Which property is used to make a flex container?",
    options: [
      "flex-direction",
      "display: flex",
      "justify-content",
      "align-items"
    ],
    correctAnswer: "display: flex"
  }
];





function Css({darklight,setdarklight}){
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
        <Link to="/Css" className="linkk"><FontAwesomeIcon icon={faRepeat} /> Repeat</Link>
        <Link to="/Exit" className="linkk"> <FontAwesomeIcon icon={faArrowRightFromBracket} /> Exit</Link>
</div>
      </>
     
      
    );
  }


return<>
<Darklight darklight={darklight} setdarklight={setdarklight}/>

<div className={`flex flex-col gap-2 flex-wrap ${darklight?"divcontrol":"divcontrol2"}`}>
  <h1 className="titlejavascript"><FontAwesomeIcon icon={faCss} /> Css</h1>
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

export default Css;

