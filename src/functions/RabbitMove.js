import { GAME_CONST_PROPERTIES } from "./constants"

const freebox = "0"

function getMemberPosition(gameState, gameMember) {
  const matrix = gameState.gameMatrix

  const findeposs = function (accum, row, x) {
    row.forEach((item, y) => {
      if (gameState.isGameover === true) {
        return
      }
      if (item === gameMember) {
        accum.push([x, y])
      }
    })
    return accum
  }
  return matrix.reduce(findeposs, [])
}

const moveRabbit = (gameState, x, y) => {
  if (gameState.isGameover === true) {
    return
  }
  const matrix = gameState.gameMatrix
  const [rabbitX, rabbitY] = getMemberPosition(
    gameState,
    GAME_CONST_PROPERTIES.rabbit.name
  )[0]
  if (matrix[x][y] === GAME_CONST_PROPERTIES.ban.name) {
    gameState.isGameover = false
    return
  } else if (matrix[x][y] === GAME_CONST_PROPERTIES.wolf.name) {
    gameState.isGameover = true
    gameState.gameStatus = "you lose"
    alert("you lose")

    return
  } else if (matrix[x][y] === GAME_CONST_PROPERTIES.house.name) {
    gameState.isGameover = true
    gameState.gameStatus = "you win"
    alert("you win ")
    return
  } else if (matrix[x][y] === freebox) {
    matrix[rabbitX][rabbitY] = freebox
    matrix[x][y] = GAME_CONST_PROPERTIES.rabbit.name
  }

  return gameState
}

const rabbitMove = (direction, gameState) => {
  const matrix = gameState.gameMatrix
  const cordinateOfCharacter = getMemberPosition(
    gameState,
    GAME_CONST_PROPERTIES.rabbit.name
  )
  const [x, y] = cordinateOfCharacter[0]
  let newX = x
  let newY = y

  if (direction === "left") {
    newY = y - 1
    if (y === 0) {
      newY = matrix.length - 1
    }
  } else if (direction === "right") {
    newY = y + 1
    if (y === matrix.length - 1) {
      newY = 0
    }
  } else if (direction === "up") {
    newX = x - 1
    if (x === 0) {
      newX = matrix.length - 1
    }
  } else if (direction === "down") {
    newX = x + 1
    if (x === matrix.length - 1) {
      newX = 0
    }
  }

  if (gameState.isGameover === true) {
    return
  }

  return moveRabbit(gameState, newX, newY)
}

export { rabbitMove }
