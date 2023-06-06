import React from 'react'
import { useCtwStats } from '../../util/Fetch'
import style from "../../../css/player.module.css";
import StatsParts from './StatsParts';
import {GiAxeSword, GiFlyingFlag, GiBrokenAxe,GiDeathSkull,GiComputing,GiWool} from "react-icons/gi"
const CtwStats = ({ uuid }) => {

    const data = useCtwStats(uuid);
    if (data !== undefined)
        return (
            <div className={style.StatsChildrenField}>
                <div className={style.StatsChildrenTitle}>
                    CatchTheWool
                </div>
                <div className={style.StatsChildrenContent}>
                    {function(){
                        if(data.error === undefined){
                           return(
                            <>
                            <StatsParts icon={<GiFlyingFlag/>} name={"Win"} value={data.win+" ("+data.killrank+" 位)"}/>
                            <StatsParts icon={<GiBrokenAxe/>} name={"Lose"} value={data.lose}/>
                            <StatsParts icon={<GiAxeSword/>} name={"Kill"} value={data.killnum+" ("+data.killrank+" 位)"}/>
                            <StatsParts icon={<GiDeathSkull/>} name={"Death"} value={data.deathnum+" ("+data.deathrank+" 位)"}/>
                            <StatsParts icon={<GiWool/>} name={"WoolPlace"} value={data.woolplace+" ("+data.woolrank+" 位)"}/>
                            <StatsParts icon={<GiComputing/>} name={"K/D"} value={data.killrate+" ("+data.raterank+" 位)"}/>
                            </>
                           )
                        }else{
                            return <>データがありません</>
                        }
                    }()}

                </div>
            </div>
        )
}

export default CtwStats
