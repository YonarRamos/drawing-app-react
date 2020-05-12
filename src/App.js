import React, {useRef} from "react";
import ReactDOM from "react-dom";
import CanvasDraw from "react-canvas-draw";


function App() {

const firstCanvas = useRef(null);
const secondCanvas = useRef(null);
const handleClick = ()=>{
  const data = firstCanvas.current.getSaveData();
  console.log(data);
  secondCanvas.current.loadSaveData(data);
}
const clear = ()=>{
  firstCanvas.current.clear();
}
const undo = ()=>{
  firstCanvas.current.undo();
}
  return (
    <div>
      <button onClick={handleClick}>
        Save drawing
      </button>
      <button onClick={clear}>
        Clear
      </button>
      <button onClick={undo}>
        Undo
      </button>
      <CanvasDraw  brushRadius={1} 
      brushColor='blue' 
      catenaryColor= "red" hideGrid={true}
      style= {{border: "1px solid #000"}}
      ref={firstCanvas}
      />
      <CanvasDraw 
        ref={secondCanvas}
        hideGrid={true} 
        disabled={true}
      />
    </div>
  );
}

export default App;
