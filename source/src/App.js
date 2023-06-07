import { Routes, Route } from "react-router-dom";
import TopPage from "./components/page/TopPage";
import Header from "./components/parts/top/Header";
import "./css/index.css"
import Footer from "./components/parts/top/Footer";
import Staff from "./components/page/Staff";
import Read from "./components/page/Read";
import PrvPlc from "./components/page/PrvPlc";
import PlayerSearch from "./components/page/PlayerSearch";
import Player from "./components/page/Player";
import ScrollTop from "./components/util/ScrollTop";
import Games from "./components/page/Games";
import CTWRule from "./components/parts/game/ctw/CTW_Rule";

function App() {


  return (
    <div className="App">
      <Header />
      <ScrollTop />
      <Routes>
        <Route path="/" element={<TopPage />}></Route>
        <Route path="/read" element={<Read />}></Route>
        <Route path="/prvplc" element= {<PrvPlc />}></Route>
        <Route path="/staff" element={<Staff />}></Route>
        <Route path="/player" element={<PlayerSearch />}></Route>
        <Route path="/player/:id" element={<Player />}></Route>
        <Route path="/game" element={<Games />}></Route>
        <Route path="/game/ctw/rule" element={<CTWRule />}></Route>

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
