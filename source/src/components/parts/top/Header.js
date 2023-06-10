import style from "../../../css/header.module.css"
import { useNavigate } from 'react-router-dom'
import logo from "../../../images/logo/cooltext436789694734263.png"
import Hamburger from './Hamburger'
import useMediaQuery from '@mui/material/useMediaQuery';

const Header = () => {

  const navigate = useNavigate();
  const isMobileSize = useMediaQuery('(max-width:480px)');

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
        <div className={style.Menu} onClick={() => navigate("/content")}>Contact</div>
      </div>
      <div style={{ display: isMobileSize ? "block" : "none" }}>
        <Hamburger />
      </div>
    </div>
  )
}

export default Header
