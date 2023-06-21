import RunButtons from "./Components/RunButtons";
import { useState } from "react";
import Footer from "./Components/Footer";

function App() {
  const [runs, setruns] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [overs, setOvers] = useState("0.0");
  
 let prevTimelineVal; 
  const [textVisible, setTextVisible] = useState(false);

  const [WicketTextVisible, setWicketTextVisible] = useState(false);

  const [oversTextVisible, setOversTextVisible] = useState(false);

  const [timelineVal, setTimelineVal] = useState("");

  const runText = (runvalue) => {
    setruns(runvalue);
  };

  const wicketText = (wicketVal) => {
    setWickets(wicketVal);
  };

  const oversText = (oversVal) => {
    setOvers(oversVal);
  };

  const done = () => {
    setTextVisible(false);
    setWicketTextVisible(false);
    setOversTextVisible(false);
  };

  const runEdit = () => {
    setTextVisible(true);
   
  };

  const wicketEdit = () => {
    setWicketTextVisible(true);
  };

  const oversEdit = () => {
    setOversTextVisible(true);
  };

  const click0 = () => {
    setruns(parseInt(runs) + 0);


    if (overs.includes(".5")) {
      setOvers((parseFloat(overs) + 0.5).toFixed(1));
    } else {
      setOvers((parseFloat(overs) + 0.1).toFixed(1));
    }

    setTimelineVal(timelineVal+" "+"0"); 
  };

  const click1 = () => {
    if (overs.includes(".5")) {
      setOvers((parseFloat(overs) + 0.5).toFixed(1));
    } else {
      setOvers((parseFloat(overs) + 0.1).toFixed(1));
    }
    setruns(parseInt(runs) + 1);
    setTimelineVal(timelineVal+" "+"1"); 
    prevTimelineVal=timelineVal; 
  };

  

  const click2 = () => {
    if (overs.includes(".5")) {
      setOvers((parseFloat(overs) + 0.5).toFixed(1));
    } else {
      setOvers((parseFloat(overs) + 0.1).toFixed(1));
    }
    setruns(parseInt(runs) + 2);
    setTimelineVal(timelineVal+" "+"2"); 
  };

  const click3 = () => {
    if (overs.includes(".5")) {
      setOvers((parseFloat(overs) + 0.5).toFixed(1));
    } else {
      setOvers((parseFloat(overs) + 0.1).toFixed(1));
    }
    setruns(parseInt(runs) + 3);
    setTimelineVal(timelineVal+" "+"3"); 
  };

  const click4 = () => {
    if (overs.includes(".5")) {
      setOvers((parseFloat(overs) + 0.5).toFixed(1));
    } else {
      setOvers((parseFloat(overs) + 0.1).toFixed(1));
    }
    setruns(parseInt(runs) + 4);
    setTimelineVal(timelineVal+" "+"4"); 
  };

  const click6 = () => {
    if (overs.includes(".5")) {
      setOvers((parseFloat(overs) + 0.5).toFixed(1));
    } else {
      setOvers((parseFloat(overs) + 0.1).toFixed(1));
    }
    setruns(parseInt(runs) + 6);
    setTimelineVal(timelineVal+" "+"6"); 
  };

  const clickNB0 = () => {
    setruns(parseInt(runs) + 1);
    setTimelineVal(timelineVal+" "+"NB"); 
  };

  const clickNB1 = () => {
    setruns(parseInt(runs) + 2);
    setTimelineVal(timelineVal+" "+"NB+1R"); 
  };

  const clickNB2 = () => {
    setruns(parseInt(runs) + 3);
    setTimelineVal(timelineVal+" "+"NB+2R"); 
  };

  const clickNB3 = () => {
    setruns(parseInt(runs) + 4);
    setTimelineVal(timelineVal+" "+"NB+3R"); 
  };

  const clickNB4 = () => {
    setruns(parseInt(runs) + 5);
    setTimelineVal(timelineVal+" "+"NB+4R"); 
  };

  const clickNB6 = () => {
    setruns(parseInt(runs) + 7);
    setTimelineVal(timelineVal+" "+"NB+6R"); 
  };

  const clickout0 = () => {
    setWickets(parseInt(wickets) + 1);
    if (overs.includes(".5")) {
      setOvers((parseFloat(overs) + 0.5).toFixed(1));
    } else {
      setOvers((parseFloat(overs) + 0.1).toFixed(1));
    }
    setTimelineVal(timelineVal+" "+"Wicket"); 
  };

  const clickout1 = () => {
    setWickets(parseInt(wickets) + 1);
    if (overs.includes(".5")) {
      setOvers((parseFloat(overs) + 0.5).toFixed(1));
    } else {
      setOvers((parseFloat(overs) + 0.1).toFixed(1));
    }

    setruns(parseInt(runs) + 1);
    setTimelineVal(timelineVal+" "+"Wicket+1R"); 
  };

  const clickout2 = () => {
    setWickets(parseInt(wickets) + 1);
    if (overs.includes(".5")) {
      setOvers((parseFloat(overs) + 0.5).toFixed(1));
    } else {
      setOvers((parseFloat(overs) + 0.1).toFixed(1));
    }
    setruns(parseInt(runs) + 2);
    setTimelineVal(timelineVal+" "+"Wicket+2R"); 
  };

  const clickout3 = () => {
    setWickets(parseInt(wickets) + 1);
    if (overs.includes(".5")) {
      setOvers((parseFloat(overs) + 0.5).toFixed(1));
    } else {
      setOvers((parseFloat(overs) + 0.1).toFixed(1));
    }
    setruns(parseInt(runs) + 3);
    setTimelineVal(timelineVal+" "+"Wicket+3R"); 
  };

  const clickWD = () => {
    setruns(parseInt(runs) + 1);
    setTimelineVal(timelineVal+" "+"Wide"); 
  };

  const clickNBrunout0 = () => {
    setWickets(parseInt(wickets) + 1);
    setruns(parseInt(runs) + 1);
    setTimelineVal(timelineVal+" "+"NB+Runout"); 

  };

  const clickNBrunout1 = () => {
    setWickets(parseInt(wickets) + 1);
    setruns(parseInt(runs) + 2);
    setTimelineVal(timelineVal+" "+"NB+Runout+1R"); 

  };

  const clickNBrunout2 = () => {
    setWickets(parseInt(wickets) + 1);
    setruns(parseInt(runs) + 3);
    setTimelineVal(timelineVal+" "+"NB+Runout+2R"); 
  };

  const clickNBrunout3 = () => {
    setWickets(parseInt(wickets) + 1);
    setruns(parseInt(runs) + 4);
    setTimelineVal(timelineVal+" "+"NB+Runout+3R"); 
  };


  const undo=()=>{


     if (timelineVal.endsWith("0")){
      if (overs.includes(".0")) {
        setOvers((parseFloat(overs) - 0.5 ).toFixed(1));
      } else {
        setOvers((parseFloat(overs) - 0.1).toFixed(1));
      }
      
      setTimelineVal(timelineVal.substring(0,timelineVal.length-2)); 

    }else if (timelineVal.endsWith("1")){
      if (overs.includes(".0")) {
        setOvers((parseFloat(overs) - 0.5 ).toFixed(1));
      } else {
        setOvers((parseFloat(overs) - 0.1).toFixed(1));
      }
      setruns(parseInt(runs) - 1);
      setTimelineVal(timelineVal.substring(0,timelineVal.length-2)); 

    }

    else if (timelineVal.endsWith("2")){
      if (overs.includes(".0")) {
        setOvers((parseFloat(overs) - 0.5 ).toFixed(1));
      } else {
        setOvers((parseFloat(overs) - 0.1).toFixed(1));
      }
      setruns(parseInt(runs) - 2);
      setTimelineVal(timelineVal.substring(0,timelineVal.length-2)); 

    } 

    else if (timelineVal.endsWith("3")){
      if (overs.includes(".0")) {
        setOvers((parseFloat(overs) - 0.5 ).toFixed(1));
      } else {
        setOvers((parseFloat(overs) - 0.1).toFixed(1));
      }
      setruns(parseInt(runs) - 3);
      setTimelineVal(timelineVal.substring(0,timelineVal.length-2)); 

    
    }else if (timelineVal.endsWith("4")){
      if (overs.includes(".0")) {
        setOvers((parseFloat(overs) - 0.5 ).toFixed(1));
      } else {
        setOvers((parseFloat(overs) - 0.1).toFixed(1));
      }
      setruns(parseInt(runs) - 4);
      setTimelineVal(timelineVal.substring(0,timelineVal.length-2)); 

    }

    else if (timelineVal.endsWith("6")){
      if (overs.includes(".0")) {
        setOvers((parseFloat(overs) - 0.5 ).toFixed(1));
      } else {
        setOvers((parseFloat(overs) - 0.1).toFixed(1));
      }
      setruns(parseInt(runs) - 6);
      setTimelineVal(timelineVal.substring(0,timelineVal.length-2)); 

    }

    else if (timelineVal.endsWith("NB")){
     
      setruns(parseInt(runs) - 1);
      setTimelineVal(timelineVal.substring(0,timelineVal.length-3)); 

    } 
   
    else if (timelineVal.endsWith("NB+1R")){
     
      setruns(parseInt(runs) - 2);
      setTimelineVal(timelineVal.substring(0,timelineVal.length-6)); 

    }
    else if (timelineVal.endsWith("NB+2R")){
     
      setruns(parseInt(runs) - 3);
      setTimelineVal(timelineVal.substring(0,timelineVal.length-6)); 

    }
    else if (timelineVal.endsWith("NB+3R")){
     
      setruns(parseInt(runs) - 4);
      setTimelineVal(timelineVal.substring(0,timelineVal.length-6)); 

    }
    else if (timelineVal.endsWith("NB+4R")){
     
      setruns(parseInt(runs) - 5);
      setTimelineVal(timelineVal.substring(0,timelineVal.length-6)); 

    }
    else if (timelineVal.endsWith("NB+6R")){
     
      setruns(parseInt(runs) - 7); 
      setTimelineVal(timelineVal.substring(0,timelineVal.length-6)); 

    }

    else if (timelineVal.endsWith("Wide")){
     
      setruns(parseInt(runs) - 1); 
      setTimelineVal(timelineVal.substring(0,timelineVal.length-5)); 

    }

    else if (timelineVal.endsWith("Wicket")){
     
      if (overs.includes(".0")) {
        setOvers((parseFloat(overs) - 0.5 ).toFixed(1));
      } else {
        setOvers((parseFloat(overs) - 0.1).toFixed(1));
      }
      setTimelineVal(timelineVal.substring(0,timelineVal.length-7)); 
      setWickets(parseInt(wickets) - 1);

    }

    else if (timelineVal.endsWith("Wicket+1R")){
     
      if (overs.includes(".0")) {
        setOvers((parseFloat(overs) - 0.5 ).toFixed(1));
      } else {
        setOvers((parseFloat(overs) - 0.1).toFixed(1));
      }
      setTimelineVal(timelineVal.substring(0,timelineVal.length-10)); 
      setWickets(parseInt(wickets) - 1);
      setruns(parseInt(runs) - 1); 

    }

    else if (timelineVal.endsWith("Wicket+2R")){
     
      if (overs.includes(".0")) {
        setOvers((parseFloat(overs) - 0.5 ).toFixed(1));
      } else {
        setOvers((parseFloat(overs) - 0.1).toFixed(1));
      }
      setTimelineVal(timelineVal.substring(0,timelineVal.length-10)); 
      setWickets(parseInt(wickets) - 1);
      setruns(parseInt(runs) - 2); 

    }

    else if (timelineVal.endsWith("Wicket+3R")){
     
      if (overs.includes(".0")) {
        setOvers((parseFloat(overs) - 0.5 ).toFixed(1));
      } else {
        setOvers((parseFloat(overs) - 0.1).toFixed(1));
      }
      setTimelineVal(timelineVal.substring(0,timelineVal.length-10)); 
      setWickets(parseInt(wickets) - 1);
      setruns(parseInt(runs) - 3); 

    }

    else if (timelineVal.endsWith("NB+Runout")){
     
     
      setTimelineVal(timelineVal.substring(0,timelineVal.length-10)); 
      setWickets(parseInt(wickets) - 1);
      setruns(parseInt(runs) - 1); 

    }

    else if (timelineVal.endsWith("NB+Runout+1R")){
     
     
      setTimelineVal(timelineVal.substring(0,timelineVal.length-13)); 
      setWickets(parseInt(wickets) - 1);
      setruns(parseInt(runs) - 2); 

    }

    else if (timelineVal.endsWith("NB+Runout+2R")){
     
     
      setTimelineVal(timelineVal.substring(0,timelineVal.length-13)); 
      setWickets(parseInt(wickets) - 1);
      setruns(parseInt(runs) - 3); 

    }

    else if (timelineVal.endsWith("NB+Runout+3R")){
     
     
      setTimelineVal(timelineVal.substring(0,timelineVal.length-13)); 
      setWickets(parseInt(wickets) - 1);
      setruns(parseInt(runs) - 4); 

    }





  }

  return (
    <>
      <RunButtons
        click0={click0}
        click1={click1}
        click2={click2}
        click3={click3}
        click4={click4}
        click6={click6}
        clickWD={clickWD}
        clickNB0={clickNB0}
        clickNB1={clickNB1}
        clickNB2={clickNB2}
        clickNB3={clickNB3}
        clickNB4={clickNB4}
        clickNB6={clickNB6}
        clickout0={clickout0}
        clickout1={clickout1}
        clickout2={clickout2}
        clickout3={clickout3}
        clickNBrunout0={clickNBrunout0}
        clickNBrunout1={clickNBrunout1}
        clickNBrunout2={clickNBrunout2}
        clickNBrunout3={clickNBrunout3}
        runEdit={runEdit}
        wicketEdit={wicketEdit}
        oversEdit={oversEdit}
        done={done}
        runText={runText}
        wicketText={wicketText}
        oversText={oversText}
        textVisible={textVisible}
        WicketTextVisible={WicketTextVisible}
        oversTextVisible={oversTextVisible}
        runs={runs}
        wickets={wickets}
        overs={overs}
        timelineVal={timelineVal}
        undo={undo}
       
      />

      <Footer/>
     
    </>
  );
}

export default App;
