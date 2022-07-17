export const GameStateReducer = (state = {}, action) => {
  if (action.type === "game_state") {
    return {
      gameMatrix: action.payload.gameMatrix,
      isGameover: action.payload.isGameover,
      gameStatus: action.payload.gameStatus,
    }
  }
 
  return state
}

export const initialGameState = {
  gameMatrix: [],
  isGameover: '',
  gameStatus: "",
}