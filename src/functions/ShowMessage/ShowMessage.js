import { ResultMessage } from "./ShowMessageStyle"
const ShowMessage = (props) => (
  <ResultMessage>
    {props.gameObject.gameStatus === "you lose" ? " You Lose :( " : " You Win ! "}
  </ResultMessage>
)

export { ShowMessage }
