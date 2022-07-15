import "./App.css"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { Wrapper, Btn, DirectionBtn, GlobalStyle } from "./StartStyle"
import { Select } from "./Select"
import { MemberRandomPossitonInMatrix } from "./functions/CreateMatrix"
import { DrawGameZone } from "./functions/DrawGameZone/DrawGameZone"
import { gameMovments } from "./functions/gameMovments"
import { ShowMessage } from "./functions/DrawGameZone/ShowMessage/ShowMessage"

const directionButtons = ["up", "left", "right", "down"]

function App() {
  const boardSize = useSelector(function (state) {
    return state.gameSelect.boardSize
  })

  const matrix = useSelector((state) => {
    return state.gameState.gameMatrix
  })
  const status  = useSelector((state) => {
    return state.gameState.isGameover
  })

  const dispatch = useDispatch()

  const gameObject = useSelector((state) => state.gameState)

  const setRabbitNewCells = (direction, gameObject) => {
    
    const gameNewState = gameMovments(direction, { ...gameObject })
    dispatch({
      type: "game_state",
      payload: {
        gameMatrix: gameNewState.gameMatrix,
        isGameover: gameNewState.isGameover,
        gameStatus: gameNewState.gameStatus,
      },
    })
  }

  const isGameProcess = status === false && matrix.length > 0

  return (
    <Wrapper>
      <div>
        <Btn
          className="startbutton"
          onClick={() => {
            dispatch({
              type: "game_state",
              payload: {
                gameMatrix: MemberRandomPossitonInMatrix(boardSize),
                isGameover: false,
                gameStatus: "",
              },
            })
          }}
        >
          Start
        </Btn>

        <Select
          className="select"
          onChange={(e) => {
            dispatch({
              type: "update-BoardSize",
              payload: {
                boardSize: parseInt(e.target.value),
              },
            })
          }}
        ></Select>
      </div>
      {gameObject.isGameover === true ? (
        <ShowMessage gameObject={gameObject} />
      ) : (
         <DrawGameZone matrix={matrix} />
      )}
     
      <div>
        {directionButtons.map((direction, i) => {
          return (
            
            <div className={direction} key={i}>
              {isGameProcess ? <DirectionBtn
                direction={direction}
                onClick={() =>{
                 
                  setRabbitNewCells(direction, gameObject)}
                }
              >
                {direction.toUpperCase()}
              </DirectionBtn> : null} 
              
            </div>
          )
        })}
      </div>
    </Wrapper>
  )
}

export default App
