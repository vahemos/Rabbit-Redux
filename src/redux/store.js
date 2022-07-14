import { combineReducers, createStore } from 'redux'
import { GameStateReducer, initialGameState } from '../GameStateReducer'
import { gameSelectReducer, initialSelectValue } from '../SelectReducer'
// import { MemberRandomPossitonInMatrix } from '../functions/CreateMatrix'




const store = createStore(
  combineReducers({
    gameSelect: gameSelectReducer,
    gameState:GameStateReducer,
  }),
  {
    gameSelect: initialSelectValue  ,
    gameState:initialGameState
  }

)

export { store } 