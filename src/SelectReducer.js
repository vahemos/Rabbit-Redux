

export const gameSelectReducer = (state = {}, action) => {
  if (action.type === "update-BoardSize") {
    return {
      boardSize: action.payload.boardSize,
    }
  }
  return state
}

export const initialSelectValue =  {
  
    boardSize: 5,
  
}

export const SelctValu = (state) => {
  return state.gameSelect.boardSize
}

export const boardSize = (newBoardSize) => {
  return {
    type: "update-BoardSize",
    payload: {
        boardSize: newBoardSize,
    },
  }
}
