import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import "./Score.css";
import TimeLine from "./TimeLine"; 

const Score = (props) => {
 

  const doneHandler = () => {
    props.done(props.runs);
  };

  const runEditHandler = () => {
    props.runEdit();
  };

  const oversEditHandler = () => {
    props.oversEdit();
  };

  const wicketEditHandler = () => {
    props.wicketEdit();
  };

  const runtextHandler = (e) => {
    props.runText(e.target.value);
  };

  const wickettextHandler = (e) => {
    props.wicketText(e.target.value); 
  };

  const oversTextHandler = (e) => {
    props.oversText(e.target.value); 
  };

  return (
    <>
      <h1 className="text-center myText">Score Board</h1>
      <div className="d-inline-flex myflex flex-wrap flex-column p-4 justify-content-center text-white rounded-5">
        {props.textVisible === false ? (
          <p>
            Runs : {props.runs}{" "}
            <button
              className="btn btn-sm btn-info rounded-4 text-white"
              onClick={runEditHandler}
            >
              {" "}
              Edit <FontAwesomeIcon icon={faPenToSquare} />
            </button>{" "}
          </p>
        ) : (
          <p>
            Runs :{" "}
            <input
              type="text"
              value={props.runs}
              placeholder="enter runs"
              className="form-control text-center"
              onChange={runtextHandler}
            />
            <button
              className="btn btn-sm btn-info rounded-4 text-white"
              onClick={doneHandler}
            >
              Done
            </button>{" "}
          </p>
        )}


{props.WicketTextVisible === false ? 
        <p>
          Wickets : {props.wickets}{" "}
          <button className="btn btn-sm btn btn-info rounded-4 text-white" onClick={wicketEditHandler}>
            Edit <FontAwesomeIcon icon={faPenToSquare} />
          </button>
        </p> :
 <p>
 Wickets :{" "}
 <input
   type="text"
   value={props.wickets}
   placeholder="enter wickets"
   className="form-control text-center"
   onChange={wickettextHandler}
 />
 <button
   className="btn btn-sm btn-info rounded-4 text-white"
   onClick={doneHandler}
 >
   Done
 </button>{" "}
</p>}  





{props.oversTextVisible===false ? <p>
        
          Overs : {props.overs}{" "}
          <button className="btn btn-sm btn btn-info rounded-4 text-white"  onClick={oversEditHandler}>
            Edit <FontAwesomeIcon icon={faPenToSquare}/>
          </button>
        </p>: 
        
        
        <p>
        
          Overs :{" "}<input
   type="text"
   value={props.overs}
   placeholder="enter overs"
   className="form-control text-center"
   onChange={oversTextHandler}
 />
          <button
   className="btn btn-sm btn-info rounded-4 text-white"
   onClick={doneHandler}
 >
   Done
 </button>{" "}
        </p>
        
        
        }
      </div> 


      <TimeLine timelineVal={props.timelineVal} undo={props.undo}/> 
    </>
 
    
  );
};

export default Score;
