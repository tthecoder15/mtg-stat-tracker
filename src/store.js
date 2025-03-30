import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const sessionState = create(
    persist( 
        (set) => ({
            globalPlayers: {
                player1: {
                    name: "",
                    deck: ""
                },
                player2: {
                    name: "",
                    deck: ""
                },
                player3: {
                    name: "",
                    deck: ""
                },
                player4: {
                    name: "",
                    deck: ""
                }
            },
            setGlobalPlayers: (newData) => {
                set((ogState) => (
                    {
                    globalPlayers: {...ogState.globalPlayers,
                        player1: {
                            name: newData.playerOne.name ? newData.playerOne.name : ogState.globalPlayers.player1.name,

                            deck: newData.playerOne.deck ? newData.playerOne.deck : ogState.globalPlayers.player1.deck
                        },
                        player2: {
                            name: newData.playerTwo.name ? newData.playerTwo.name : ogState.globalPlayers.player2.name,

                            deck: newData.playerTwo.deck ? newData.playerTwo.deck : ogState.globalPlayers.player2.deck
                        },
                        player3: {
                            name: newData.playerThree.name ? newData.playerThree.name : ogState.globalPlayers.player3.name,

                            deck: newData.playerThree.deck ? newData.playerThree.deck : ogState.globalPlayers.player3.deck
                        },
                        player4: {
                            name: newData.playerFour.name ? newData.playerFour.name : ogState.globalPlayers.player4.name,

                            deck: newData.playerFour.deck ? newData.playerFour.deck : ogState.globalPlayers.player4.deck
                        }
                    }
                }))
            }
        })
    )
)

export default sessionState