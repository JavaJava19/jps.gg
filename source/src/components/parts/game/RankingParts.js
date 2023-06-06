import React from 'react'
import style from "../../../css/rank.module.css"


const RankingParts = ({ rankdata, playerdata }) => {

    function getHead(url) {
        if (url === undefined) {
            return "https://api.mineskin.org/render/head?url=https://s.namemc.com/i/bc68bf289576a899.png";
        } else {
            return `https://api.mineskin.org/render/head?url=${url}`;
        }
    }

    function sliceRankData() {
        if (rankdata.length >= 10) {
            return rankdata.slice(0,10)
        } else return rankdata;
    }

    function getPlayerData(name) {
        const playerData = Object.values(playerdata)[0].filter(data => JSON.parse(data.playerdata).name === name);
        if (playerData.length !== 0){
            const data = JSON.parse(playerData[0].playerdata);
            return data;
        }
    }

    return (
        <div className={style.RankingPartsField}>
            <div className={style.RankingTitle}>
                WinRanking
            </div>
            {sliceRankData().map(data => (
                <div className={style.RankingContent} key={data.mcid}>
                    <div className={style.Rank}>{data.rank_no}</div>
                    <div className={style.MCID}>
                        <img src={getPlayerData(data.mcid) === undefined ? getHead() : getHead(getPlayerData(data.mcid).skinURL)} alt="" />
                        {data.mcid}
                    </div>
                    <div className={style.Point}>{data.point} Point</div>
                </div>
            )
            )}
        </div>
    )
}

export default RankingParts
