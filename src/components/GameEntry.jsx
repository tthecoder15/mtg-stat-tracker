import PlayerEntry from "./PlayerEntry"
import { useEffect, useState } from "react"
import sessionState from "../store"

export const GameEntry = () => {
  // Global state imports
  const globalPlayerData = sessionState((state) => state.globalPlayers) 
  const setGlobalPlayers = sessionState((state) => state.setGlobalPlayers)

  // Local player vars  
  const [playerOne, setPlayerOne] = useState({name: "", deck: ""})
  const [playerTwo, setPlayerTwo] = useState({name: "", deck: ""})
  const [playerThree, setPlayerThree] = useState({name: "", deck: ""})
  const [playerFour, setPlayerFour] = useState({name: "", deck: ""})
  
  // Local player submit
  const [playerData, setPlayerData] = useState({
    playerOne: globalPlayerData.player1, 
    playerTwo: globalPlayerData.player2, 
    playerThree: globalPlayerData.player3, 
    playerFour: globalPlayerData.player4})

  // Post decks
  const postDecks = (e) => {
    e.preventDefault()
    setPlayerData({playerOne: playerOne, playerTwo: playerTwo, playerThree: playerThree, playerFour: playerFour})
    setGlobalPlayers(playerData)
}

const clearDecks = (e) => {
  e.preventDefault()
  setPlayerOne({name: "", deck: ""})
  setPlayerTwo({name: "", deck: ""})
  setPlayerThree({name: "", deck: ""})
  setPlayerFour({name: "", deck: ""})

  setPlayerData({playerOne: playerOne, playerTwo: playerTwo, playerThree: playerThree, playerFour: playerFour})
}

useEffect(() => {
  console.log("This is local player data", playerData)
  console.log("This is global player data", globalPlayerData)
})
  
  return (
    <>
    <h2>Game Entry</h2>
    <p>Record game info to save to the database.</p>
    <form>
      <PlayerEntry playerNumber={1} playerNameDeck={playerOne} setPlayerNameDeck={setPlayerOne}/>
      <PlayerEntry playerNumber={2} playerNameDeck={playerTwo} setPlayerNameDeck={setPlayerTwo}/>    
      <br/>
      <PlayerEntry playerNumber={3} playerNameDeck={playerThree} setPlayerNameDeck={setPlayerThree}/>
      <PlayerEntry playerNumber={4} playerNameDeck={playerFour} setPlayerNameDeck={setPlayerFour}/>    
      <br/>
      <button onClick={postDecks}>Save Decks</button>
      <button onClick={clearDecks}>Clear Decks</button>
    </form>
    </>
  )
}

export default GameEntry