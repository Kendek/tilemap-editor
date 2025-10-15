

const Map = () => {

    const size = 10
    
  return (
    <div className="map"
        style={{gridTemplateColumns: `repeat(${size}, 1fr)` }}
    >
        { Array(size *size).fill("").map(_ => <div></div>) }
    </div>
  )
}

export default Map