import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const sessionState = create(
    persist( 
        (set) => ({

        })
    )
)

export default sessionState