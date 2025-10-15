import { useContext } from "react"
import { TileContext } from "../context/TileContext"


const Map = () => {

    const size = 10
    const ctx = useContext(TileContext)

    const setMapTile = (e: React.MouseEvent) => {
        if (!ctx) return
        if(!ctx.selected) return
        const tile = (e.target as HTMLDivElement)
        tile.style.backgroundImage = `url(${ctx.selected.image})`
        tile.style.backgroundSize = (ctx.selected.columnNumber * 100) +"%"
        tile.style.backgroundPositionX = ctx.selected.x * -100 + '%'
        tile.style.backgroundPositionY = ctx.selected.y * -100 + '%'
    }

  return (
    <div className="map"
        style={{gridTemplateColumns: `repeat(${size}, 1fr)` }}
    >
        { Array(size *size).fill("").map(_ => <div onClick={(e) => setMapTile(e)}></div>) }
    </div>
  )
}

export default Map