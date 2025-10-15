import { useContext } from "react"
import { TileContext } from "../context/TileContext"

type PaletteTileType = {
    image: string,
    columnNumber: number,
    idx: number
}

const PaletteTile = (props: PaletteTileType) => {

    const x = props.idx % props.columnNumber
    const y = Math.floor(props.idx / props.columnNumber)

    const ctx = useContext(TileContext)

  return (
        <div
            onClick={()=>ctx?.changeSelected({
                x: x,
                y: y, 
                columnNumber: props.columnNumber, 
                image: props.image
            })}
            style={{ backgroundImage: `url(${props.image})`,
            backgroundSize: props.columnNumber * 100 + "%",
            backgroundPositionX: x * -100 + '%',
            backgroundPositionY: y * -100 + '%'
            }}

            title={`${x}|${y}`}
        >
        </div>
  )
}

export default PaletteTile