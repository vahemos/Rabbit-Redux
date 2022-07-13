import "./App.css"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { Wrapper, Btn, DirectionBtn, GlobalStyle } from "./StartStyle"
import { Select } from "./Select"
import { MemberRandomPossitonInMatrix } from "./functions/CreateMatrix"
import { DrawGameZone } from "./functions/DrawGameZone/DrawGameZone"

const directionButtons = ["up", "left", "right", "down"]

function App() {
  const boardSize = useSelector(function(state) {
    // console.log(state.gameSelect.boardSize)
    return state.gameSelect.boardSize
  })

  const dispatch = useDispatch()

  return (
    <Wrapper>
      <div>
        <Btn
          className="startbutton"
          onClick={()=>{
            console.log(boardSize,"555")
            dispatch({
              type: "update-BoardSize",
              payload: {
                boardSize: MemberRandomPossitonInMatrix(boardSize),
              },
            })
          }
            
          }
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
      {/* <DrawGameZone matrix={boardSize} /> */}
      <div>
        {directionButtons.map((direction, i) => {
          return (
            <div className={direction} key={i}>
              <DirectionBtn direction={direction}>
                {direction.toUpperCase()}
              </DirectionBtn>
            </div>
          )
        })}
      </div>
    </Wrapper>
  )
}

export default App
