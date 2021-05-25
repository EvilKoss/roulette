const ROLL = "ROLL";

const CHANGE_SPIN = "CHANGE SPIN";

const CHANGE_BET = "CHANGE BET";

const BET_NUMBER = "BET NUMBER";
const numbers = [0,26,5,35,12,28,7,29,18,22,9,31,14,20,1,33,16,24,5,10,23,8,30,11,36,13,27,6,34,17,25,2,21,4,19,15,32];

const initialState = {
  rotation:0.0,
  bool: false,
  i:0,
  start: 0,
  end:0,
  unknown:0,
  bet:1
}

const Reducer = (state = initialState,action) => {
  switch (action.type) {
    case ROLL:
      {
        let unknown = state.unknown;
        let steps = state.steps;
        let bool  = state.bool;
        let i = state.i;
        let rotation = state.rotation;
        let start = state.start;
        let end = state.end;
        if (bool) {
          let ii = Math.sqrt(Math.sin((i/400)*(Math.PI/2)));
          rotation = start*(1.0-ii) + end*ii;
          i += 1;
        }
        if( i == 401 ) {
          bool = false;
          i = 0;
          alert(numbers[unknown % 37]);
        }
        return {...state, rotation:rotation , i:i , bool:bool}
      }
    case CHANGE_SPIN:
      {
        let bool  = state.bool;
        let rotation = state.rotation;
        let start = state.start;
        let end = state.end;
        let unknown = state.unknown;
        bool = !bool;
        if(bool) {
          const step = 1/74;
          let steps = 174 + Math.floor(Math.random() * 74);
          let distance = steps * step;
          start = rotation;
          end = rotation + distance;
          unknown = (unknown + steps) % 37;
        }
        return {...state, bool:bool, start:start, end:end , unknown:unknown}
      }
    case CHANGE_BET:
      {
        let bet = action.bet;
        alert(action.bet);
        return {...state, bet:bet}
      }
    case BET_NUMBER:
      {
        let number = action.number;
        alert(action.number);
        return {...state}
      }
      default:
        return state;
  }
}

export const roll = () => ({type:ROLL});

export const changeSpin = () => ({type:CHANGE_SPIN});

export const changeBet = (bet) => ({type:CHANGE_BET,bet:bet});

export const betNumber = (number) => ({type:BET_NUMBER,number:number});
export default Reducer;
