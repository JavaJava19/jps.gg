import style from "../../../css/header.module.css"
import { useNavigate } from 'react-router-dom'
import logo from "../../../images/logo/cooltext436789694734263.png"
import Hamburger from './Hamburger'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useCookies } from 'react-cookie';
import useFetchAddress from "../../util/FetchAddress";
import { isLogin } from '../../util/LoginUtil';
import { useEffect, useState } from "react";
import LoginStatusParts from "./LoginStatusParts";

const Header = () => {

  const navigate = useNavigate();
  const isMobileSize = useMediaQuery('(max-width:480px)');
  const [cookie, setCookie, removeCookie] = useCookies(["token"]);
  const sessionStorage = window.sessionStorage.getItem("token");
  const fetchAddress = useFetchAddress();
  const [playerData, setPlayerData] = useState();
  const [login, setLogin] = useState(false);

  function checkLogin() {
    if (fetchAddress === undefined) return false;

    if (cookie.token !== undefined) {
      isLogin(fetchAddress, cookie.token, removeCookie, setPlayerData, setLogin)
      return true;
    } else {
      if (sessionStorage !== null) {
        const removeSession = window.sessionStorage.removeItem;
        isLogin(fetchAddress, sessionStorage, removeSession, setPlayerData, setLogin)
        return true;
      }
    }
  }


  function removeToken() {
    if (cookie.token !== undefined) {
      removeCookie("token")
    }
    if (sessionStorage !== null) {
      window.sessionStorage.removeItem("token");
    }

    setLogin(false)
    navigate("/")
    window.location.reload();
  }
  useEffect(() => {
    if (fetchAddress === undefined) return;
    if (playerData !== undefined) return;
    checkLogin()
    // eslint-disable-next-line
  }, [fetchAddress, cookie, sessionStorage, setCookie, playerData])
  return (
    <div className={style.HeaderField}>
      <div className={style.Logo}><img src={logo} alt="" /></div>
      <div className={style.Menus} style={{ display: isMobileSize ? "none" : "flex" }}>
        <div className={style.Menu} onClick={() => navigate("/")}>Home</div>
        <div className={style.Menu} onClick={() => navigate("/read")}>Read</div>
        <div className={style.Menu} onClick={() => navigate("/forum")}>Forum</div>
        <div className={style.Menu} onClick={() => navigate("/game")}>Games</div>
        <div className={style.Menu} onClick={() => navigate("/player")}>Player</div>
        <div className={style.Menu} onClick={() => navigate("/staff")}>Staff</div>
        <div className={style.Menu} onClick={() => navigate("/contact")}>Contact</div>
        {login ? <LoginStatusParts
          playerdata={playerData}
          style={{ position: "absolute", top: "85px", right: "30px", bottom: "25px" }}
          headStyle={{ width: "32px", marginLeft: "5px" }}
          removeToken={removeToken}
        /> : <div className={style.Menu} onClick={() => navigate("/login")}>Login</div>}
      </div>
      <div style={{ display: isMobileSize ? "block" : "none" }}>
        <Hamburger login={login} setLogin={setLogin} playerData={playerData} />
      </div>
    </div>
  )
}

export default Header
