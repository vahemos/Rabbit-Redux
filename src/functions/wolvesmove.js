import { GAME_CONST_PROPERTIES } from "./constants"

const freebox = "0"
const rabbit = GAME_CONST_PROPERTIES.rabbit.name
const wolf = GAME_CONST_PROPERTIES.wolf.name

const atacRabbit = (gameState, emptyCellsArr) => {
  const matrix = gameState.gameMatrix
  const massiv = []
  emptyCellsArr.forEach((cell) => {
    const [x, y] = cell
    if (matrix[x][y] === rabbit) {
      gameState.isGameover = true
      gameState.gameStatus = "you lose"
    }
    if (matrix[x][y] === freebox) {
      massiv.push([x, y])
    }
  })
  return massiv
}

const getCordinat = (gameState, [x, y]) => {
  const cells = [
    [x - 1, y],
    [x + 1, y],
    [x, y - 1],
    [x, y + 1],
  ]
  return cells.filter((cell) => isInRange(gameState, cell))
}

const isInRange = (gameState, [x, y]) => {
  return (
    x >= 0 &&
    x < gameState.gameMatrix.length &&
    y >= 0 &&
    y < gameState.gameMatrix.length
  )
}

const getClosestCell = (freeBoxes, gameState) => {
  const rabbitCords = getMemberPosition(gameState, rabbit)
  const distaceArray = []
  freeBoxes.forEach((cord) => {
    if(gameState.isGameover === true){
      return
    }
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
  const matrix = gameState.gameMatrix
  matrix[z][k] = freebox
  if (matrix[x][y] === GAME_CONST_PROPERTIES.rabbit.name) {
    gameState.isGameover = true
    gameState.gameStatus = "you lose"
    return
  }
  matrix[x][y] = wolf
  
  console.log(gameState,99)
}

const getMemberPosition = (gameState, gameMember) => {
  const matrix = gameState.gameMatrix
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
  // const newGameState = { ...gameState }

  const wolvesCorrentPossition = getMemberPosition(gameState, member)

  wolvesCorrentPossition.forEach((wolf) => {
    if (gameState.isGameover === true) {
      return
    } else {
      const cells = getCordinat(gameState, wolf)

      const wolfNextStep = atacRabbit(gameState, cells)

      const distanceArray = getClosestCell(wolfNextStep, gameState)
      const closestCell = getMinDistance(distanceArray, wolfNextStep)
      moveSingleWolfToNewPosition(closestCell, wolf, gameState)
    }
  })

  return gameState
}

export { wolvesMove }
