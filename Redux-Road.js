const initialWagonState = {
  supplies: 100, 
  distance: 0, 
  days: 0,
  cash: 200
}

const reducer = (state = initialWagonState, action) => {
  switch(action.type){
    default:{
      return state;
    }
    case 'gather':{
      return {
        ...state,
        supplies: state.supplies + 15,
        days: state.days + 1
      }
    }
    case 'travel': {
      const suppliesNeeded = state.supplies - (20 * action.payload);
      if(suppliesNeeded >= 0){
          return {
        ...state,
        supplies: state.supplies - (20 * action.payload),
        distance: state.distance + (10 * action.payload),
        days: state.days + action.payload 
        }
      }
      else{
        console.log('Not enough Supplies for travel.');
        return state;
      }
    }
    case 'tippedWagon': {
      return {
        ...state,
        supplies: state.supplies - 30,
        days: state.days + 1
      }
    }
    case 'sell': {
      if(state.supplies >= 20){
           return {
        ...state,
        supplies: state.supplies - 20,
        cash: state.cash + 5
        }
      }
      else {
        console.log('Not enough Supplies');
        return state;
      }
    }
    case 'buy': {
      if(state.cash > 15) {
           return {
        ...state,
        supplies: state.supplies + 25,
        cash: state.cash - 15
        }
      }
      else {
        console.log('Not enough Cash.');
        return state;
      }
    }
  }
}

let wagon = reducer(undefined, {});
console.log(wagon);
wagon = reducer(wagon, {type: 'travel', payload: 1});
console.log(wagon);
wagon = reducer(wagon,{type: 'gather'});
console.log(wagon);
wagon = reducer(wagon, {type: 'tippedWagon'});
console.log(wagon);
wagon = reducer(wagon, {type: 'travel', payload: 3});
console.log(wagon);
wagon = reducer(wagon, {type: 'travel', payload: 3});
console.log(wagon);
wagon = reducer(wagon, {type: 'sell'});
console.log(wagon);
wagon = reducer(wagon, {type: 'buy'});
console.log(wagon);
