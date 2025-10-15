import Map from "./components/Map"
import Palette from "./components/Palette"
import TilesetSelector from "./components/TilesetSelector"
import TileProvider from "./context/TileContext"
import { TilesetProvider } from "./context/TilesetContext"

const App = () => {
  return (
    <div>
      <TilesetProvider>
        <TileProvider>
        <TilesetSelector/>
        <Palette/>
        <Map/>
        </TileProvider>
      </TilesetProvider>
    </div>
  )
}

export default App