//Base State 
const initailWagonState = {
    supplies: 100,
    distance: 0,
    days: 0,
    cash: 200,
  };
  
  const gameReducer = (state = initailWagonState, action) => {
    switch(action.type)
    {
      case 'gather':{
        return {
          ...state,
          supplies: state.supplies + 15,
          distance: state.distance,
          days: state.days + 1,
          cash: state.cash
        }
      }
      case 'travel':{
        const suppliesNeeded = 20 * action.payload;
        if(state.supplies < suppliesNeeded){
            console.log('Not Enough Supplies');
            return state;
        }
        else {
            return {
                ...state,
                supplies: state.supplies - 20 * action.payload,
                distance: state.distance + 10 * action.payload,
                days: state.days + action.payload,
                cash: state.cash
              };
        }
  
      }
      case 'tippedWagon' : {
        return {
          ...state,
        supplies: state.supplies - 30,
        distance: state.distance,
        days: state.days + 1,
        cash: state.cash
        }
      }
      case 'sell': {
        if(state.supplies < 20){
          console.log('Not Enough Supplies to Sell');
        }
        else{
          return {
          ...state,
          supplies: state.supplies - 20,
          distance: state.distance,
          days: state.days,
          cash: state.cash + 5
        };
        }
      }
      case 'buy' : {
       if(state.cash < 25){
        console.log('Not Enough Cash');
       }
       else {
        return {
          ...state,
          supplies: state.supplies + 25,
          distance: state.distance,
          days: state.days,
          cash: state.cash - 15
        }
       }
      }
       case 'theft' : {
        if(state.cash !== 0){
            console.log('OHH NO!!! I GOT ROBBED!!!');
            return {
             ...state,
            supplies: state.supplies,
            distance: state.distance,
            days: state.days,
            cash: Math.ceil(state.cash/2)
            }
        }
       else{
        console.log('What a loser!! I don\'t even have any money.');
        return state;
       }
    
      }
      default:{
        return state;
      }
    }
  }
  
  //Initialized State of Wagon/Base State
  let wagon = gameReducer(undefined, {});
  console.log(wagon);

  //Day 1
  wagon = gameReducer(wagon,{type:'travel',payload: 1});
  console.log(wagon);

  //Day 2
  wagon = gameReducer(wagon,{type:'gather'});
  console.log(wagon);

  //Day 3
  wagon = gameReducer(wagon,{type:'tippedWagon'});
  console.log(wagon);

  //Day 4
  wagon = gameReducer(wagon,{type:'travel', payload: 3});
  console.log(wagon);

  //Day 5 flag console that there is not enough supplies
  wagon = gameReducer(wagon,{type:'travel', payload: 3});
  console.log(wagon);

  //Robbed that same day
  wagon = gameReducer(wagon,{type:'theft'});
  console.log(wagon);
  

  
  
  