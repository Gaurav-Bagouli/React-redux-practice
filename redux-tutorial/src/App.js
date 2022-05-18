import React from 'react'
import "./App.css";
import {incNumber , decNumber} from "./actions";

import { useSelector, useDispatch } from "react-redux";

const App = () => {

  const changeTheNumber = useSelector(state => state.changeTheNumber);
  
  const dispatch = useDispatch();

  return (
    <>
      <div className="main-div">
      <div className="container">
  
      <h1>Increment/Decrement counter</h1>
      
      <div className="quantity">
        <a className="quantity__minus" title="Decrement" onClick={() => dispatch(decNumber())}>-</a>
        <input name="quantity" type="text" className="quantity__input" value={changeTheNumber} />
        <a className="quantity__plus cursor-pointer" title="Increment" onClick={() => dispatch(incNumber(1))}>+</a>
      </div>
  
          </div>
        </div>
    </>
  )
}

export default App
