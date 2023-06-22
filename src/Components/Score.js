import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faBroom,
  faArrowRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import "./Score.css";


const Score = (props) => {


  


  const doneHandler = () => {
    props.done();
    
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

  const clearScoreHandler = () => {
    props.clearScore();
  };

  const editScoreHandler = () => {
   props.editScore();
  };

  

  const CancelEditHandler = () =>{
    props.CancelEdit();
  }

  const undoHandler = () => {
    props.undo();
  };

  const cleanHandler = () => {
    props.clean();
  };

  return (


   
    <>
     {props.editFlag === false ? (
      <>
      <h1 className="text-center myText">
        Score Board{" "}
        <p className="my-4 mb-4">
          {" "}
          <button
            className="btn btn-sm btn-success text-white"
            onClick={clearScoreHandler}>
            {" "}
            <FontAwesomeIcon icon={faBroom} />
          </button>{" "}
          Clear Score {" "}
          <button
            className="btn btn-sm btn-primary  text-white"
            onClick={editScoreHandler} >
            {" "}
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>{" "}
          Edit Score
        </p>
      </h1>
      <div className="bg-warning p-2 border border-dark rounded-1 justify-content-left d-inline-flex">
        {" "}
        <p>
          Score {props.runs}
          {"-"}
          {props.wickets}
          {" ["}
          {props.overs}
          {" Overs"}
          {"]"}
        </p>
      </div>{" "}
      {props.timelineVal !== "" ? (
        <>
          <div className="bg-info p-2 mt-2 rounded-1 border border-dark text-white justify-content-left d-inline-flex">
            {" "}
            <p>
              {"Bowler Timeline |"} {props.timelineVal}
            </p>
          </div>

          <div className=" p-2 mt-2 rounded-4 text-white justify-content-left d-inline-flex">
            {" "}
            <p>
              <button className="btn btn-sm btn-primary" onClick={undoHandler}>
                {" "}
                <FontAwesomeIcon icon={faArrowRotateLeft} />
              </button>
              {" Undo "}
              <button className="btn btn-sm btn-warning" onClick={cleanHandler}>
                {" "}
                <FontAwesomeIcon icon={faBroom} />
              </button>
              {" Clear Timeline "}
            </p>
          </div>
        </>
      ) : (
        ""
      )}

     
    </> ) : 
    
    <>
    <h1 className="text-center myText mb-4">Edit Score Board</h1>
    <div className="d-inline-flex gap-3 flex-row p-4 bg-dark text-white rounded-4 myTextChild">
   Runs<input class="form-control" type="number" value={props.runs} onChange={runtextHandler}></input>
   Overs<input class="form-control" type="number" value={props.overs} onChange={oversTextHandler}></input>
  Wickets<input class="form-control" type="number" value={props.wickets} onChange={wickettextHandler}></input>
    <button className="btn  btn-success" onClick={doneHandler}>Save</button>
   
    </div>
    </>
    
    }</>
  )
}

export default Score;
