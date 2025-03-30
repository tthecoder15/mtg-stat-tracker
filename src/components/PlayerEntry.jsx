import { useState } from "react"

const PlayerEntry = ({ playerNumber, playerNameDeck, setPlayerNameDeck }) => {
    const playerNameChange = (e) => {
        setPlayerNameDeck({name: e.target.value, deck: playerNameDeck.deck})
    }
    const playerDeckChange = (e) => {
        setPlayerNameDeck({name: playerNameDeck.name, deck: e.target.value})
    }

  return (
    <div>
        <form>
            <div>
                <h3>Player {playerNumber}</h3>
                <h4></h4>
                <p>Name</p>
                <input onChange={playerNameChange} value={playerNameDeck.name}/>
                <p>Deck</p>
                <input onChange={playerDeckChange} value={playerNameDeck.deck}/>
            </div>
        </form>
    </div>
  )
}

export default PlayerEntry