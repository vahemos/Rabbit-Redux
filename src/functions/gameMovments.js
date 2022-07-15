import { rabbitMove } from "./RabbitMove"
import { GAME_CONST_PROPERTIES } from "./constants"
import { wolvesMove } from "./wolvesmove"

const wolf = GAME_CONST_PROPERTIES.wolf.name

const gameMovments = (direction, gameState) => {
  console.log(gameState, "main")
  if (gameState.isGameover === true) {
    return
  }
  const moveRabbit = rabbitMove(direction, gameState)
  return wolvesMove(moveRabbit, wolf)
}

export { gameMovments }