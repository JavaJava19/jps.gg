import React, { useState } from 'react'
import { CgMenuGridO, CgCloseR } from "react-icons/cg"
import { useNavigate } from 'react-router-dom';
import style from "../../../css/header.module.css"
const Hamburger = () => {
    const [open, setOpen] = useState(false)
    const navigate = useNavigate();

    function jump(path) {
        setOpen(false)
        navigate(path)
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
                            <div className={style.LinkContainer}>
                                <div className={style.Link} onClick={() => jump("/")}>Home</div>
                                <div className={style.Link} onClick={() => jump("/read")}>Read</div>
                                <div className={style.Link} onClick={() => jump("/forum")}>Forum</div>
                                <div className={style.Link} onClick={() => jump("/game")}>Games</div>
                                <div className={style.Link} onClick={() => jump("/player")}>Player</div>
                                <div className={style.Link} onClick={() => jump("/staff")}>Staff</div>
                                <div className={style.Link} onClick={() => jump("/content")}>Contact</div>
                            </div>

                        </div>
                    )
                } else return;
            }()}
        </div>
    )
}

export default Hamburger