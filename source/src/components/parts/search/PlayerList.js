import React from 'react'
import style from "../../../css/player.module.css"
import { useNavigate } from 'react-router-dom'
const PlayerList = ({ data }) => {
    const navigate = useNavigate();

    function getLogin(pdata) {
        if (pdata !== undefined) {
            if (pdata.login) {
                return <p className={style.ListOnline}>Online</p>
            } else {
                return <p className={style.ListOffline}>{pdata.lastLogin}</p>
            }
        }

    }

    function getHead(url) {
        if (url === undefined) {
            return "https://api.mineskin.org/render/head?url=https://s.namemc.com/i/bc68bf289576a899.png";
        } else {
            return `https://api.mineskin.org/render/head?url=${url}`;
        }
    }

    return (
        <div className={style.PlayerListField}>
            <div className={style.ListContainer}>
                {
                    function () {
                        if (data.error === undefined) {
                            return data.map(pdata => (
                                <div className={style.PlayerLine} key={pdata.uuid}>
                                    <div className={style.ListSkin}><img src={getHead(pdata.skinURL)} alt="" /></div>
                                    <div className={style.ListMCID}><p onClick={() => navigate("./" + pdata.name)}>{pdata.name}</p></div>
                                    <div className={style.ListLogin}>{getLogin(pdata)}</div>
                                </div>
                            ))
                        }
                    }
                        ()}
            </div>
        </div>
    )
}

export default PlayerList
