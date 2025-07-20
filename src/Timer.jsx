import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faArrowRightFromBracket, faClipboardQuestion, faRepeat, faRightFromBracket, faStopwatch, faTicket, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { Link, Links } from "react-router-dom";
import Darklight from "../public/cobonands/Darklight";

const questions = [
  {
    question: "What is the purpose of the `this` keyword in JavaScript?",
    options: [
      "To refer to the global object",
      "To refer to the current function",
      "To refer to the current object context",
      "To create a new object"
    ],
    correctAnswer: "To refer to the current object context"
  },
  {
    question: "Which method converts JSON text to a JavaScript object?",
    options: [
      "JSON.stringify()",
      "JSON.parse()",
      "JSON.convert()",
      "JSON.objectify()"
    ],
    correctAnswer: "JSON.parse()"
  },
  {
    question: "What is the result of 2 + '2' in JavaScript?",
    options: [
      "4",
      "22",
      "NaN",
      "undefined"
    ],
    correctAnswer: "22"
  },
  {
    question: "Which one is NOT a JavaScript data type?",
    options: [
      "String",
      "Boolean",
      "Float",
      "Undefined"
    ],
    correctAnswer: "Float"
  },
  {
    question: "How do you define a variable in ES6?",
    options: [
      "define x = 5",
      "var x = 5",
      "let x = 5",
      "dim x = 5"
    ],
    correctAnswer: "let x = 5"
  },
  {
    question: "What is a closure?",
    options: [
      "A block scope variable",
      "A function bundled with its lexical environment",
      "A type of loop",
      "A JavaScript module"
    ],
    correctAnswer: "A function bundled with its lexical environment"
  },
  {
    question: "Which symbol is used for strict equality?",
    options: [
      "==",
      "===",
      "=",
      "!=="
    ],
    correctAnswer: "==="
  },
  {
    question: "How to write a comment in JavaScript?",
    options: [
      "// comment",
      "# comment",
      "<!-- comment -->",
      "** comment **"
    ],
    correctAnswer: "// comment"
  },
  {
    question: "What does DOM stand for?",
    options: [
      "Document Object Model",
      "Data Object Management",
      "Design Object Module",
      "Document Order Method"
    ],
    correctAnswer: "Document Object Model"
  },
  {
    question: "What does `NaN` stand for?",
    options: [
      "Not a Number",
      "No assigned Number",
      "New assigned Name",
      "Number and Name"
    ],
    correctAnswer: "Not a Number"
  },
  {
    question: "Which array method adds an element at the end?",
    options: [
      "pop()",
      "shift()",
      "unshift()",
      "push()"
    ],
    correctAnswer: "push()"
  },
  {
    question: "Which array method removes the last element?",
    options: [
      "pop()",
      "shift()",
      "unshift()",
      "push()"
    ],
    correctAnswer: "pop()"
  },
  {
    question: "How do you declare a constant variable?",
    options: [
      "let",
      "const",
      "var",
      "constant"
    ],
    correctAnswer: "const"
  },
  {
    question: "Which is a correct arrow function syntax?",
    options: [
      "function => () {}",
      "() => {}",
      "() <= {}",
      "-> () {}"
    ],
    correctAnswer: "() => {}"
  },
  {
    question: "What is the output of `typeof null`?",
    options: [
      "'null'",
      "'undefined'",
      "'object'",
      "'number'"
    ],
    correctAnswer: "'object'"
  },
  {
    question: "Which keyword is used to exit a loop?",
    options: [
      "exit",
      "stop",
      "break",
      "return"
    ],
    correctAnswer: "break"
  },
  {
    question: "How do you write an async function?",
    options: [
      "async function myFunc() {}",
      "function async myFunc() {}",
      "myFunc async() {}",
      "asynchronous function myFunc() {}"
    ],
    correctAnswer: "async function myFunc() {}"
  },
  {
    question: "What is the default value of an uninitialized variable?",
    options: [
      "null",
      "0",
      "undefined",
      "false"
    ],
    correctAnswer: "undefined"
  },
  {
    question: "Which object represents dates in JavaScript?",
    options: [
      "Time",
      "Calendar",
      "Date",
      "Moment"
    ],
    correctAnswer: "Date"
  },
  {
    question: "How do you convert a string to a number?",
    options: [
      "parseInt()",
      "toString()",
      "parseString()",
      "convertNumber()"
    ],
    correctAnswer: "parseInt()"
  }
];



function Timer({darklight,setdarklight}){
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
        <Link to="/Repeat" className="linkk"><FontAwesomeIcon icon={faRepeat} /> Repeat</Link>
        <Link to="/Exit" className="linkk"> <FontAwesomeIcon icon={faArrowRightFromBracket} /> Exit</Link>
</div>
      </>
     
      
    );
  }


return<>
<Darklight darklight={darklight} setdarklight={setdarklight}/>
<div className={`flex flex-col gap-2 flex-wrap ${darklight?"divcontrol":"divcontrol2"}`}>
  <h1 className="titlejavascript"><FontAwesomeIcon icon={faJs} /> JavaScript</h1>
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

export default Timer;

