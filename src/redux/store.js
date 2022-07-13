import { combineReducers, createStore } from 'redux'
import { gameSelectReducer, initialSelectValue } from '../SelectReducer'
// import { MemberRandomPossitonInMatrix } from '../functions/CreateMatrix'




const store = createStore(
  combineReducers({
    gameSelect: gameSelectReducer,
  }),
  {
    gameSelect: initialSelectValue  
  }
)

export { store } 