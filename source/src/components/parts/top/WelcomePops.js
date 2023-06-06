import React, { useState } from 'react'
import style from "../../../css/toppage.module.css";
import { useStatus } from '../../util/Fetch';

const WelcomePops = () => {

    const [copy, setCopy] = useState("");
    const { icon, online, motd, playerNum, maxPlayer } = useStatus();

    const getOnline = () => {
        if (online) {
            return <div className={style.onlineStatus} style={{ color: "greenyellow" }}>Online</div>;
        } else {
            return <div className={style.onlineStatus} style={{ color: "red" }}>Offline</div>
        }

    }

    const copyIP = () => {
        setCopy("IPをコピーしました");
        navigator.clipboard.writeText("jps.gg");
    }

    if (icon !== undefined)
        return (
            <div className={style.WelcomePop}>
                <p className={style.WelcomeTitle}>Welcome to</p>
                <p className={style.WelcomeTitle}>JapanPVPServer</p>
                <div className={style.IP} onClick={() => copyIP()}>jps.gg</div>
                <div className={style.Copy}>{copy}</div>
                <div className={style.Status}>
                    <img src={icon} alt="" />
                    <p className={style.MOTD}>
                        {motd}
                    </p>
                    {getOnline()}
                    <div className={style.PlayerNum}>{playerNum} / {maxPlayer}</div>
                </div>
            </div>
        )
}

export default WelcomePops
