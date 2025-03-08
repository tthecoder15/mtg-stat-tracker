import PlayerEntry from "./PlayerEntry"
import { useEffect, useState } from "react"

export const GameEntry = () => {
  const [playerOne, setPlayerOne] = useState({name: "", deck: ""})
  const [playerTwo, setPlayerTwo] = useState({name: "", deck: ""})
  
  const [playerData, setPlayerData] = useState({playerOne: [], playerTwo: []})

  const submitDeck = (e) => {
    e.preventDefault()
    setPlayerData({playerOne: playerOne, playerTwo: playerTwo})
}

useEffect(() => {
  console.log(playerData)
})
  
  return (
    <>
    <h2>Game Entry</h2>
    <p>Record game info to save to the database.</p>
    <form>
      <PlayerEntry playerNumber={1} playerNameDeck={playerOne} setPlayerNameDeck={setPlayerOne}/>
      <PlayerEntry playerNumber={2} playerNameDeck={playerTwo} setPlayerNameDeck={setPlayerTwo}/>    
      <button onClick={submitDeck}></button>
    </form>
    <p>Player One: {playerData.playerOne.name}</p>
    <p>Player Two: {playerData.playerTwo.name}</p>
    </>
  )
}

export default GameEntry