import { GAME_CONST_PROPERTIES } from "./constants"

const freebox = "0"
const rabbit = GAME_CONST_PROPERTIES.rabbit.name
const wolf = GAME_CONST_PROPERTIES.wolf.name

const atacRabbit = (gameState, emptyCellsArr) => {
  const matrix = gameState.matrix
  const massiv = []
  emptyCellsArr.forEach((cell) => {
    const [x, y] = cell
    if (matrix[x][y] === rabbit) {
      gameState.isGameOver = true
      gameState.gameStatus = "you lose"
    }
    if (matrix[x][y] === freebox) {
      massiv.push([x, y])
    }
  })
  return massiv
}

const getCordinat = (matrix, [x, y]) => {
  const cells = [
    [x - 1, y],
    [x + 1, y],
    [x, y - 1],
    [x, y + 1],
  ]
  return cells.filter((cell) => isInRange(matrix, cell))
}

const isInRange = (matrix, [x, y]) => {
  return x >= 0 && x < matrix.length && y >= 0 && y < matrix.length
}

const getClosestCell = (freeBoxes, matrix) => {
  const rabbitCords = getMemberPosition(matrix, rabbit)
  const distaceArray = []
  freeBoxes.forEach((cord) => {
    const distanceSingle = distance(cord, rabbitCords[0])
    distaceArray.push(distanceSingle)
  })
  return distaceArray
}

const distance = (wolf, rabbit) => {
  const [x, y] = wolf
  const [z, k] = rabbit
  return Math.round(Math.sqrt(Math.pow(x - z, 2) + Math.pow(y - k, 2)))
}

const getMinDistance = (distaceArray, freeBoxes) => {
  const min = Math.min(...distaceArray)
  const index = distaceArray.indexOf(min)
  return freeBoxes[index]
}

const moveSingleWolfToNewPosition = ([x, y], [z, k], gameState) => {
  const matrix = gameState.matrix
  if (matrix[x][y] === rabbit) {
    gameState.isGameOver = true
    gameState.gameStatus = "you lose"
  }
  matrix[x][y] = wolf
  matrix[z][k] = freebox
}

const getMemberPosition = (matrix, gameMember) => {
  const findeposs = function (accum, row, x) {
    row.forEach((item, y) => {
      if (item === gameMember) {
        accum.push([x, y])
      }
    })
    return accum
  }
  return matrix.reduce(findeposs, [])
}

const wolvesMove = (gameState, member) => {
  const newGameState = { ...gameState }
  const matrix = newGameState.matrix
  const wolvesCorrentPossition = getMemberPosition(matrix, member)
  wolvesCorrentPossition.forEach((wolf) => {
    if (newGameState.isGameOver === true) {
      return
    } else {
      const cells = getCordinat(matrix, wolf)
      const wolfNextStep = atacRabbit(newGameState, cells)
      const distanceArray = getClosestCell(wolfNextStep, matrix)
      const closestCell = getMinDistance(distanceArray, wolfNextStep)
      moveSingleWolfToNewPosition(closestCell, wolf, newGameState)
    }
  })
  return newGameState
}

export { wolvesMove }
