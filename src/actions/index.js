export const ADD_ONE = "ADD_ONE";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const MEMORY_ADD = "MEMORY_ADD";
export const MEMORY_RECALL = "MEMORY_RECALL";
export const MEMORY_CLEAR = "MEMORY_CLEAR";

export const addOne = () => {
  return ({ type: ADD_ONE });
}

export const applyNumber = (value, dispatch) => {
  dispatch({ type: "APPLY_NUMBER", payload: value })
}

export const clearDisplay = (dispatch) => {
  dispatch({ type: "CLEAR_DISPLAY" });
}

export const changeOperation = (value, dispatch) => {
  dispatch({ type: "CHANGE_OPERATION", payload: value })
}

export const memoryAdd = (dispatch) => {
  dispatch({ type: "MEMORY_ADD" })
}

export const memoryRecall = (dispatch) => {
  dispatch({ type: "MEMORY_RECALL" })
}

export const memoryClear = (dispatch) => {
  dispatch({ type: "MEMORY_CLEAR" })
}