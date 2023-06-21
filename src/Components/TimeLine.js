import React from 'react'
import './TimeLine.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateLeft } from "@fortawesome/free-solid-svg-icons";

const TimeLine = (props) => {

  let footerStyle = {
   
    padding:"20px"
  }

  const undoHandler = () =>{

    props.undo();
  }
  return (
<>

<hr className="py-3" />
    <h1 className="text-center  mt-4">Bowler Timeline</h1> 

    <h3 className="text-center  mt-4">This over</h3> 
   
    {props.timelineVal!==""? 
   <div className="d-inline-flex  flex-wrap  p-2 justify-content-center align-items-center text-black rounded-5">
  
       <p>{props.timelineVal} <button className='btn btn-sm btn-primary' onClick={undoHandler}> <FontAwesomeIcon icon={faArrowRotateLeft}/></button> </p>   
      

      </div>: ""} 
    
     <hr/>

     <div>
      <footer className="bg-dark text-center text-white text-lg-start position-fixed-sticky" style={footerStyle}>
        <div
          className="text-center p-3"
         
        >
          © 2023 Developed by Prashant Saini
         
         
        </div>
      </footer>
    </div>

      
   
    </>
  )
}

export default TimeLine
