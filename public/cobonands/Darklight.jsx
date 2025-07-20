import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Darklight({darklight,setdarklight}){
    return<>
    <div className="flex justify-end items-center gap-2">{darklight?<button className={darklight?"dark":"light"} onClick={()=>setdarklight(!darklight)}> <FontAwesomeIcon icon={faMoon} /></button>:<button className={darklight?"dark":"light"} onClick={()=>setdarklight(!darklight)}> <FontAwesomeIcon icon={faSun} /></button>}</div>
    </>
}

export default Darklight 