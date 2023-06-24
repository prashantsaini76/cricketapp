import React from "react";
import Score from "./Score";
import "./RunButtons.css";
import logo from "../logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faCircleCheck,
  fa0,
  fa1,
  fa2,
  fa3,
  fa4,
  fa6,
  faW,
  faI,
  faD,
  faE
  
  
} from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";

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

  const clickWDHandler = () => {
    props.clickWD();
  };

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

  const clickNBrunout0Handler = () => {
    props.clickNBrunout0();
  };

  const clickNBrunout1Handler = () => {
    props.clickNBrunout1();
  };

  const clickNBrunout2Handler = () => {
    props.clickNBrunout2();
  };

  const clickNBrunout3Handler = () => {
    props.clickNBrunout3();
  };

  const yesClickHandler = () => {
    props.clickYes();
  };

  const noClickHandler = () => {
    props.clickNo();
  };

  return (
    <div className="container py-4 text-center mycontainer">
      <h1>Cricket Score Tracker</h1>
      <img src={logo} alt="Logo" className="logoimg" />

      {props.wideBall === null ? (
        <>
          <h5 className="py-4">Will you get runs on a wide ball? </h5>

          <button className="btn btn-md btn-success" onClick={yesClickHandler}>
            YES <FontAwesomeIcon shake icon={faCircleCheck} />
          </button>
          {"   "}
          <button className="btn btn-md btn-danger" onClick={noClickHandler}>
            NO <FontAwesomeIcon shake icon={faCircleXmark} />
          </button>
        </>
      ) : (
        <>
          <h3 className="py-4">Select what happened on current delivery</h3>
          <div className="d-inline-flex flex-wrap p-3 gap-2 justify-content-center bg-dark rounded-5 timeline">
            <button
              className="btn btn-sm btn-success rounded-pill"
              onClick={click0Handler}
            >
               <FontAwesomeIcon  size="1xl" icon={fa0} />
            </button>
            <button
              className="btn btn-sm btn-success rounded-pill"
              onClick={() => {
                click1Handler();
              }}
            >
              <FontAwesomeIcon  size="1xl" icon={fa1} />
            </button>
            <button
              className="btn btn-sm btn-success rounded-pill"
              onClick={click2Handler}
            >
              <FontAwesomeIcon  size="1xl" icon={fa2} />
            </button>
            <button
              className="btn btn-sm btn-success rounded-pill"
              onClick={click3Handler}
            >
             <FontAwesomeIcon  size="1xl" icon={fa3} />
            </button>
            <button
              className="btn btn-sm btn-success rounded-pill"
              onClick={click4Handler}
            >
              <FontAwesomeIcon  size="1xl" icon={fa4} />
            </button>
            <button
              className="btn btn-sm btn-success rounded-pill"
              onClick={click6Handler}
            >
              <FontAwesomeIcon  size="1xl" icon={fa6} />
            </button>
            <button
              className="btn btn-sm btn-warning rounded-pill"
              onClick={clickNB0Handler}
            >
              NB <FontAwesomeIcon fade size="1xl" icon={fa0} />
            </button>
            <button
              className="btn btn-sm btn-warning rounded-pill"
              onClick={clickNB1Handler}
            >
              NB <FontAwesomeIcon fade size="1xl" icon={fa1} />
            </button>
            <button
              className="btn btn-sm btn-warning rounded-pill"
              onClick={clickNB2Handler}
            >
              NB <FontAwesomeIcon fade size="1xl" icon={fa2} />
            </button>
            <button
              className="btn btn-sm btn-warning rounded-pill"
              onClick={clickNB3Handler}
            >
              NB <FontAwesomeIcon fade size="1xl" icon={fa3} />
            </button>
            <button
              className="btn btn-sm btn-warning rounded-pill"
              onClick={clickNB4Handler}
            >
              NB <FontAwesomeIcon fade size="1xl" icon={fa4} />
            </button>
            <button
              className="btn btn-sm btn-warning rounded-pill"
              onClick={clickNB6Handler}
            >
              NB <FontAwesomeIcon fade size="1xl" icon={fa6} />
            </button>
            <button
              className="btn btn-sm btn-primary rounded-pill"
              onClick={clickWDHandler}
            >
             <FontAwesomeIcon  size="1xl" icon={faW} /> <FontAwesomeIcon beat  size="1xl" icon={faI} /> <FontAwesomeIcon  size="1xl" beat icon={faD} /> <FontAwesomeIcon size="1xl" icon={faE} />
            </button>
            <button
              className="btn btn-sm btn-danger rounded-pill"
              onClick={clickout0Handler}
            >
              OUT <FontAwesomeIcon fade size="1xl" beat icon={fa0} />
            </button>
            <button
              className="btn btn-sm btn-danger rounded-pill"
              onClick={clickout1Handler}
            >
              OUT <FontAwesomeIcon fade size="1xl" beat icon={fa1} />
            </button>
            <button
              className="btn btn-sm btn-danger rounded-pill"
              onClick={clickout2Handler}
            >
              OUT <FontAwesomeIcon fade size="1xl" beat icon={fa2} />
            </button>
            <button
              className="btn btn-sm btn-danger rounded-pill"
              onClick={clickout3Handler}
            >
              OUT <FontAwesomeIcon fade size="1xl" beat icon={fa3} />
            </button>
            <button
              className="btn btn-sm btn-danger rounded-pill"
              onClick={clickNBrunout0Handler}
            >
              NB+RUNOUT <FontAwesomeIcon fade size="1xl" beat icon={fa0} />
            </button>
            <button
              className="btn btn-sm btn-danger rounded-pill"
              onClick={clickNBrunout1Handler}
            >
              NB+RUNOUT <FontAwesomeIcon fade size="1xl" beat icon={fa1} />
            </button>
            <button
              className="btn btn-sm btn-danger rounded-pill"
              onClick={clickNBrunout2Handler}
            >
              NB+RUNOUT <FontAwesomeIcon fade size="1xl" beat icon={fa2} />
            </button>
            <button
              className="btn btn-sm btn-danger rounded-pill "
              onClick={clickNBrunout3Handler}
            >
              NB+RUNOUT <FontAwesomeIcon fade size="1xl" beat icon={fa3} />
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
            clean={props.clean}
            clearScore={props.clearScore}
            editFlag={props.editFlag}
            editScore={props.editScore}
            CancelEdit={props.CancelEdit}
          />
        </>
      )}

      <Footer />
    </div>
  );
};

export default RunButtons;
