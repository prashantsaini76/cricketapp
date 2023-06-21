import React from "react";
import Score from "./Score";
import "./RunButtons.css";
import logo from "../logo.jpg";

const RunButtons = (props) => {


    // CLICK HANDLERS FOR 0 TO 6 RUNS
  const click0Handler = () => {
    props.click0();
  };

  const click1Handler = () => {
    props.click1();
  };

  const click2Handler = () => {
    props.click2();
  };

  const click3Handler = () => {
    props.click3();
  };

  const click4Handler = () => {
    props.click4();
  };

  const click6Handler = () => {
    props.click6();
  };


//CLICK HANDLERS FOR NO BALLS

const clickNB0Handler = () => {
    props.clickNB0();
  };


  const clickNB1Handler = () => {
    props.clickNB1();
  };

  const clickNB2Handler = () => {
    props.clickNB2();
  };

  const clickNB3Handler = () => {
    props.clickNB3();
  };

  const clickNB4Handler = () => {
    props.clickNB4();
  };

  const clickNB6Handler = () => {
    props.clickNB6();
  };
  
  //CLICK HANDLER FOR WIDE

  const clickWDHandler = () =>{
    props.clickWD(); 
  }

  //CLICK HANDLERS FOR WICKET
  const clickout0Handler = () => {
    props.clickout0();
  };

  const clickout1Handler = () => {
    props.clickout1();
  };

  const clickout2Handler = () => {
    props.clickout2();
  };

  const clickout3Handler = () => {
    props.clickout3();
  };

  //CLICK HANDLER FOR NO BALL RUN OUT

  const clickNBrunout0Handler = () =>{

    props.clickNBrunout0();
  }

  const clickNBrunout1Handler = () =>{

    props.clickNBrunout1();
  }

  const clickNBrunout2Handler = () =>{

    props.clickNBrunout2();
  }

  const clickNBrunout3Handler = () =>{

    props.clickNBrunout3(); 
  }

  return (
    <div className="container mt-4 py-4 text-center mycontainer rounded-4">
      <h1>Cricket Score Tracker</h1>
      <img src={logo} alt="Logo" className="logoimg" />
      <h3 className="py-4">Select what happened on current delivery</h3>
      <div className="d-inline-flex flex-wrap p-3 gap-2 justify-content-center bg-dark rounded-5">
        <button
          className="btn btn-sm btn-success rounded-pill"
          onClick={click0Handler}
        >
          0
        </button>
        <button
          className="btn btn-sm btn-success rounded-pill"
          onClick={() => {
            click1Handler();
          }}
        >
          1
        </button>
        <button className="btn btn-sm btn-success rounded-pill" onClick={click2Handler}>2</button>
        <button className="btn btn-sm btn-success rounded-pill" onClick={click3Handler}>3</button>
        <button className="btn btn-sm btn-success rounded-pill" onClick={click4Handler}>4</button>
        <button className="btn btn-sm btn-success rounded-pill" onClick={click6Handler}>6</button>
        <button className="btn btn-sm btn-warning rounded-pill" onClick={clickNB0Handler}>NB+0</button>
        <button className="btn btn-sm btn-warning rounded-pill" onClick={clickNB1Handler}>NB+1</button>
        <button className="btn btn-sm btn-warning rounded-pill" onClick={clickNB2Handler}>NB+2</button>
        <button className="btn btn-sm btn-warning rounded-pill" onClick={clickNB3Handler}>NB+3</button>
        <button className="btn btn-sm btn-warning rounded-pill" onClick={clickNB4Handler}>NB+4</button>
        <button className="btn btn-sm btn-warning rounded-pill" onClick={clickNB6Handler}>NB+6</button>
        <button className="btn btn-sm btn-primary rounded-pill" onClick={clickWDHandler}>WIDE</button>
        <button
          className="btn btn-sm btn-danger rounded-pill"
          onClick={clickout0Handler}
        >
          OUT+0
        </button>
        <button className="btn btn-sm btn-danger rounded-pill" onClick={clickout1Handler}>OUT+1</button>
        <button className="btn btn-sm btn-danger rounded-pill" onClick={clickout2Handler}>OUT+2</button>
        <button className="btn btn-sm btn-danger rounded-pill" onClick={clickout3Handler}>OUT+3</button>
        <button className="btn btn-sm btn-danger rounded-pill" onClick={clickNBrunout0Handler}>
          NB+RUNOUT+0
        </button>
        <button className="btn btn-sm btn-danger rounded-pill"  onClick={clickNBrunout1Handler}>
          NB+RUNOUT+1
        </button>
        <button className="btn btn-sm btn-danger rounded-pill" onClick={clickNBrunout2Handler}>
          NB+RUNOUT+2
        </button>
        <button className="btn btn-sm btn-danger rounded-pill " onClick={clickNBrunout3Handler}>
          NB+RUNOUT+3
        </button>
      </div>
      <hr className="py-3" />
      <Score
        runs={props.runs}
        wickets={props.wickets}
        overs={props.overs}
        runEdit={props.runEdit}
        wicketEdit={props.wicketEdit}
        oversEdit={props.oversEdit}
        textVisible={props.textVisible}
        done={props.done}
        runText={props.runText}
        WicketTextVisible={props.WicketTextVisible}
        oversTextVisible={props.oversTextVisible}
        wicketText={props.wicketText}
        oversText={props.oversText} 
        timelineVal={props.timelineVal}
        undo={props.undo}


      />
     
    </div>
  );
};

export default RunButtons;
