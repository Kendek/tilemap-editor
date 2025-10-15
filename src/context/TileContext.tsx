import { createContext, useEffect, useState, type ReactNode } from "react"

type SelectedTileType = {
    image: string,
    columnNumber: number,
    x: number,
    y: number
}

export const TileContext = createContext<{
    selected: SelectedTileType | undefined,
    changeSelected: (s: SelectedTileType) => void
} | undefined>(undefined)

const TileProvider = (props: {children: ReactNode}) => {

    const [selectedTile, setSelectedTile] = useState<SelectedTileType | undefined>()

useEffect(()=>{
    console.log("Tile changed:", selectedTile)
},[selectedTile])

  return (
    <TileContext.Provider value={{
        selected: selectedTile,
        changeSelected: (s: SelectedTileType) => { setSelectedTile(s)}
     }}>
        {props.children}
    </TileContext.Provider>
  )
}

export default TileProvider