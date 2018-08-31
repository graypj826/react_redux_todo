export const ADD_BOOCH = "ADD_BOOCH";
export const REMOVE_BOOCH = "REMOVE_BOOCH";
export const GET_BOOCHS = "GET_BOOCH";

function handleBoochs(data) {
  return {
    type: GET_BOOCHS,
    data
  };
}

function handleAdd(booch) {
  return {
    type: ADD_BOOCH,
    booch
  };
}

function handleRemove(id) {
  return {
    type: REMOVE_BOOCH,
    id
  };
}

export function getBoochs() {
  return dispatch => {
    return fetch("http://localhost:3001/api/boochs/")
      .then(res => res.json())
      .then(data => dispatch(handleBoochs(data)))
      .catch(err => console.log("something has gone wrong!", err));
  };
}

export function addBooch(task) {
  return dispatch => {
    return fetch("http://localhost:3001/api/boochs/", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify({ task })
    })
      .then(res => res.json())
      .then(data => dispatch(handleAdd(data)))
      .catch(err => console.log("something has gone wrong!", err));
  };
}

export function removeBooch(id) {
  return dispatch => {
    return fetch(`http://localhost:3001/api/boochs/${id}/`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(data => dispatch(handleRemove(id)))
      .catch(err => console.log("something has gone wrong!", err));
  };
}





