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
  isGameover: false,
  gameStatus: "",
}

// export const gameMatrix = (state) => {
//   return state.gameState.gameMatrix
// }

// export const gameResult = (state) => {
//   return state.gameState.isGameover
// }

// export const gameStatus = (state) => {
//   return state.gameState.gameStatus
// }

// export const setGameState = (setGameMatrix, setGameResult, setgameStatus) => {
//   return {
//     type: "game_state",
//     payload: {
//       gameMatrix: setGameMatrix,
//       isGameover: setGameResult,
//       gameStatus: setgameStatus,
//     },
//   }
// }
