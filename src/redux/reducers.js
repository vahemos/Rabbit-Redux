import { MemberRandomPossitonInMatrix } from "../functions/CreateMatrix"
import { gameMovments } from "../functions/gameMovments"

export const initialGameState = []
const newGameBoard = {
  gameMatrix: [],
  isGameover: false,
  gameStatus: "",
  boardNumber: "",
}
const startGame = (state, action) => {
  const boardNumber = action.payload.boardNumber

  state[boardNumber] = {
    ...state[boardNumber],
    gameMatrix: MemberRandomPossitonInMatrix(action.payload.selectValue),
    isGameover: false,
    gameStatus: "",
    boardNumber: boardNumber,
  }
}

const changeGameState = (state, action) => {
  const boardNumber = action.payload.boardNumber
  const gameMovements = gameMovments(
    action.payload.direction,
    state[boardNumber]
  )
  state[boardNumber] = {
    ...state[boardNumber],
    gameMatrix: (state[boardNumber].gameMatrix = gameMovements.gameMatrix),
    isGameover: (state[boardNumber].isGameover = gameMovements.isGameover),
    gameStatus: (state[boardNumber].gameStatus = gameMovements.gameStatus),
    boardNumber: (state[boardNumber].boardNumber = gameMovements.boardNumber),
  }
  return state
}

export const GameStateReducer = (state = initialGameState, action) => {
  switch (action.type) {
    case "create-new-game-board":
      return [...state, { ...newGameBoard }]

    case "game-start":
      startGame(state, action)
      return [...state]

    case "change-game-state":
      return [...changeGameState(state, action)]

    default:
      return [...state]
  }
}
