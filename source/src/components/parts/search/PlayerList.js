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
            <table className={style.ListContainer}>
                <tbody>
                    {
                        function () {
                            if (data.error === undefined) {
                                return data.map(pdata => (
                                    <tr className={style.PlayerLine} key={pdata.uuid}>
                                        <td className={style.ListSkin}><img src={getHead(pdata.skinURL)} alt="" /></td>
                                        <td className={style.ListMCID}><p onClick={() => navigate("./" + pdata.name)}>{pdata.name}</p></td>
                                        <td className={style.ListLogin}>{getLogin(pdata)}</td>
                                    </tr>
                                ))
                            }
                        }
                            ()}
                </tbody>
            </table>
        </div>
    )
}

export default PlayerList
