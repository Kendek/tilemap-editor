import { useContext } from "react"
import { TilesetContext } from "../context/TilesetContext"


const Palette = () => {

    const {selectedTileset} = useContext(TilesetContext)

  return (
    <div>
        { selectedTileset && <img src={selectedTileset.image} />}
    </div>
  )
}

export default Palette