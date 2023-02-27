import React from 'react';
import { useReducer } from 'react';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import reducer from './reducers';
import { initialState } from './reducers';

import {applyNumber, clearDisplay, changeOperation, memoryAdd, memoryRecall, memoryClear} from './actions/index'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">

            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} onClick={() => memoryAdd(dispatch)}/>
              <CalcButton value={"MR"} onClick={() => memoryRecall(dispatch)}/>
              <CalcButton value={"MC"} onClick={() => memoryClear(dispatch)}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={(e) => applyNumber(Number(e.target.value), dispatch)}/>
              <CalcButton value={2} onClick={(e) => applyNumber(Number(e.target.value), dispatch)}/>
              <CalcButton value={3} onClick={(e) => applyNumber(Number(e.target.value), dispatch)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={(e) => applyNumber(Number(e.target.value), dispatch)}/>
              <CalcButton value={5} onClick={(e) => applyNumber(Number(e.target.value), dispatch)}/>
              <CalcButton value={6} onClick={(e) => applyNumber(Number(e.target.value), dispatch)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={(e) => applyNumber(Number(e.target.value), dispatch)}/>
              <CalcButton value={8} onClick={(e) => applyNumber(Number(e.target.value), dispatch)}/>
              <CalcButton value={9} onClick={(e) => applyNumber(Number(e.target.value), dispatch)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={(e) => changeOperation(e.target.value, dispatch)}/>
              <CalcButton value={"*"} onClick={(e) => changeOperation(e.target.value, dispatch)}/>
              <CalcButton value={"-"} onClick={(e) => changeOperation(e.target.value, dispatch)}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => clearDisplay(dispatch)}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
