import { MapProvider } from "react-map-gl";
import "./styles/App.scss";
import MapView from "./components/MapView";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <MapProvider>
      <Sidebar />
      <MapView />
    </MapProvider>
  );
}

export default App;
