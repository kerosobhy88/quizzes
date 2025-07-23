import { faHtml5, faJs } from "@fortawesome/free-brands-svg-icons";
import { faArrowRightFromBracket, faClipboardQuestion, faRepeat, faRightFromBracket, faStopwatch, faTicket, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Darklight from "../public/cobonands/Darklight";

const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
      "Hyper Text Markup Language",
      "Hyper Tool Multi Language"
    ],
    correctAnswer: "Hyper Text Markup Language"
  },
  {
    question: "Which HTML tag is used to define an unordered list?",
    options: [
      "<ol>",
      "<ul>",
      "<li>",
      "<list>"
    ],
    correctAnswer: "<ul>"
  },
  {
    question: "Which tag is used to insert a line break in HTML?",
    options: [
      "<break>",
      "<lb>",
      "<br>",
      "<line>"
    ],
    correctAnswer: "<br>"
  },
  {
    question: "What is the correct HTML tag for the largest heading?",
    options: [
      "<heading>",
      "<h6>",
      "<head>",
      "<h1>"
    ],
    correctAnswer: "<h1>"
  },
  {
    question: "Which attribute is used to provide alternative text for an image?",
    options: [
      "title",
      "alt",
      "src",
      "description"
    ],
    correctAnswer: "alt"
  },
  {
    question: "What does the <a> tag do in HTML?",
    options: [
      "Defines an anchor (link)",
      "Adds an article section",
      "Adds audio",
      "Aligns content"
    ],
    correctAnswer: "Defines an anchor (link)"
  },
  {
    question: "Which HTML element is used to specify a footer for a document?",
    options: [
      "<bottom>",
      "<footer>",
      "<section>",
      "<end>"
    ],
    correctAnswer: "<footer>"
  },
  {
    question: "What is the correct way to create a hyperlink in HTML?",
    options: [
      "<a href='url'>Link</a>",
      "<link url='url'>Link</link>",
      "<a>url</a>",
      "<href='url'>Link</href>"
    ],
    correctAnswer: "<a href='url'>Link</a>"
  },
  {
    question: "Which tag is used to create a table row?",
    options: [
      "<table>",
      "<td>",
      "<tr>",
      "<th>"
    ],
    correctAnswer: "<tr>"
  },
  {
    question: "How can you make text bold in HTML?",
    options: [
      "<bold>",
      "<b>",
      "<stronger>",
      "<text-bold>"
    ],
    correctAnswer: "<b>"
  },
  {
    question: "Which tag is used to create a list item?",
    options: [
      "<item>",
      "<list>",
      "<li>",
      "<ul>"
    ],
    correctAnswer: "<li>"
  },
  {
    question: "What is the correct tag to embed an image?",
    options: [
      "<img src='image.jpg'>",
      "<image href='image.jpg'>",
      "<pic src='image.jpg'>",
      "<src img='image.jpg'>"
    ],
    correctAnswer: "<img src='image.jpg'>"
  },
  {
    question: "Which doctype is correct for HTML5?",
    options: [
      "<!DOCTYPE html5>",
      "<!DOCTYPE HTML PUBLIC>",
      "<!DOCTYPE html>",
      "<doctype html>"
    ],
    correctAnswer: "<!DOCTYPE html>"
  },
  {
    question: "Which tag is used to define a table header?",
    options: [
      "<thead>",
      "<th>",
      "<header>",
      "<td>"
    ],
    correctAnswer: "<th>"
  },
  {
    question: "Which tag is used to group together form elements?",
    options: [
      "<group>",
      "<fieldset>",
      "<formgroup>",
      "<inputset>"
    ],
    correctAnswer: "<fieldset>"
  },
  {
    question: "What is the function of the <label> tag in HTML forms?",
    options: [
      "Defines input field size",
      "Labels a form control",
      "Submits the form",
      "Adds a border"
    ],
    correctAnswer: "Labels a form control"
  },
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    options: [
      "<css>",
      "<script>",
      "<style>",
      "<link>"
    ],
    correctAnswer: "<style>"
  },
  {
    question: "Which input type is used for email fields?",
    options: [
      "text",
      "email",
      "mail",
      "input-email"
    ],
    correctAnswer: "email"
  },
  {
    question: "Which tag defines the document's title in the browser tab?",
    options: [
      "<head>",
      "<meta>",
      "<title>",
      "<header>"
    ],
    correctAnswer: "<title>"
  },
  {
    question: "What is the correct HTML element for inserting a horizontal rule?",
    options: [
      "<line>",
      "<hr>",
      "<rule>",
      "<breakline>"
    ],
    correctAnswer: "<hr>"
  }
];




function Html({darklight,setdarklight}){
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
        <Link to="/Html" className="linkk"><FontAwesomeIcon icon={faRepeat} /> Repeat</Link>
        <Link to="/Exit" className="linkk"> <FontAwesomeIcon icon={faArrowRightFromBracket} /> Exit</Link>
</div>
      </>
     
      
    );
  }


return<>
<Darklight darklight={darklight} setdarklight={setdarklight}/>
<div className={`flex flex-col gap-2 flex-wrap ${darklight?"divcontrol":"divcontrol2"}`}>
  <h1 className="titlejavascript"><FontAwesomeIcon icon={faHtml5} /> Html</h1>
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

export default Html;

