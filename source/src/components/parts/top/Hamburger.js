import React, { useState } from 'react'
import { CgMenuGridO, CgCloseR } from "react-icons/cg"
import { useNavigate } from 'react-router-dom';
import style from "../../../css/header.module.css"
import LoginStatusParts from './LoginStatusParts';
import { useCookies } from 'react-cookie';
const Hamburger = ({ login, setLogin, playerData }) => {
    const [open, setOpen] = useState(false)
    const navigate = useNavigate();
    // eslint-disable-next-line
    const [cookie, setCookie, removeCookie] = useCookies(["token"]);
    const sessionStorage = window.sessionStorage.getItem("token");
    function jump(path) {
        setOpen(false)
        navigate(path)
    }

    function removeToken() {
        if (cookie.token !== undefined) {
            removeCookie("token")
        } else {
            if (sessionStorage !== null) {
                window.sessionStorage.removeItem("token");
            }
        }
        setLogin(false)
        jump("/")
        window.location.reload();

    }
    return (
        <div>
            <div className={style.HamburgerMenu}>
                {open ? <CgCloseR onClick={() => setOpen(!open)} />
                    : <CgMenuGridO onClick={() => setOpen(!open)} />}
            </div>
            {function () {
                if (open) {
                    return (
                        <div className={style.Hamburger}>
                            {login ? <LoginStatusParts
                                playerdata={playerData}
                                style={{ position: "absolute", right: "30%", top: "18%" }}
                                headStyle={{ width: "44px", marginLeft: "0" }}
                                removeToken={removeToken}
                            /> : <></>}
                            <div className={style.LinkContainer}>
                                <div className={style.Link} onClick={() => jump("/")}>Home</div>
                                <div className={style.Link} onClick={() => jump("/read")}>Read</div>
                                <div className={style.Link} onClick={() => jump("/forum")}>Forum</div>
                                <div className={style.Link} onClick={() => jump("/game")}>Games</div>
                                <div className={style.Link} onClick={() => jump("/player")}>Player</div>
                                <div className={style.Link} onClick={() => jump("/staff")}>Staff</div>
                                <div className={style.Link} onClick={() => jump("/content")}>Contact</div>
                                {!login ? <div className={style.Link} onClick={() => jump("/login")}>Login</div> : <></>}
                            </div>

                        </div>
                    )
                } else return;
            }()}
        </div>
    )
}

export default Hamburger
