export default function manageBand(state = {
  bands: [],
}, action) {

  switch(action.type){
    case "ADD_BAND":
      let newBands = [...state.bands]
      newBands.push(action.band)
      return {bands: newBands}
    default:
      return state
  }

};
