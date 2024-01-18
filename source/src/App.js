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
import Survival from "./components/parts/game/Survival";
import Forum from "./components/page/Forum";
import Login from "./components/page/Login";
import Wiki from "./components/parts/top/Wiki";
import RenewGuid from "./components/parts/game/Survival/20231009/RenewGuid";
import MayorGuid from "./components/parts/game/Survival/20231009/MayorGuid";
import CitizenGuid from "./components/parts/game/Survival/20231009/CitizenGuid";
import RenewGuid20231107 from "./components/parts/game/Survival/20231107/RenewGuid";
import SSLPki from "./components/.well-known/pki-validation/dfded740b1edada30cdc11bcf6d47d04.txt";

function App() {


  return (
    <div className="App">
      <Header />
      <ScrollTop />
      <Routes>
        <Route path="/" element={<TopPage />}></Route>
        <Route path="/read" element={<Read />}></Route>
        <Route path="/forum" element={<Forum />}></Route>
        <Route path="/prvplc" element={<PrvPlc />}></Route>
        <Route path="/staff" element={<Staff />}></Route>
        <Route path="/player" element={<PlayerSearch />}></Route>
        <Route path="/player/:id" element={<Player />}></Route>
        <Route path="/game" element={<Games />}></Route>
        <Route path="/game/ctw/rule" element={<CTWRule />}></Route>
        <Route path="/game/survival" element={<Survival />}></Route>
        <Route path="/game/survival/20231009/RenewGuid" element={<RenewGuid />}></Route>
        <Route path="/game/survival/20231009/MayorGuid" element={<MayorGuid />}></Route>
        <Route path="/game/survival/20231009/CitizenGuid" element={<CitizenGuid />}></Route>
        <Route path="/game/survival/20231107/RenewGuid" element={<RenewGuid20231107 />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/.well-known/pki-validation/dfded740b1edada30cdc11bcf6d47d04.txt" element={<SSLPki />}></Route>
        <Route path="/wiki/" element={<Wiki />}></Route> {/* wiki は301リダイレクトが設定されている */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
