import { ResultMessage } from "./ShowMessageStyle"
const ShowMessage = props => (<ResultMessage >{props.gameObject.gameStatus === 'gameOver'? "You Lose :(":"You Win !"} </ResultMessage>)

    
 export { ShowMessage }
