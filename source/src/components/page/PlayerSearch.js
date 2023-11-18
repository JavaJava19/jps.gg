import React, { useState } from 'react'
import style from "../../css/player.module.css"
import PlayerList from '../parts/search/PlayerList';
import { usePlayerList } from '../util/Fetch';

const PlayerSearch = () => {
  const [mcid, setMcid] = useState("");

  const [data] = usePlayerList();

  const [matchData, setMatchData] = useState([]);

  const handleChanged = (e) => {
    setMcid(e.target.value)
    sliceData(e.target.value);
  }

  const sliceData = (value) => {
    if (value === "") {
      setMatchData([])
      return;
    }
    var playerdata = [];
    const array = data.filter(data => String(data.mcid).toLowerCase().includes(value.toLowerCase()));
    Object.values(array).map(data=> playerdata.push(JSON.parse(data.playerdata)))
    setMatchData(playerdata)
  }


  return (
    <>
    <UpdateOgp pageMeta={
      {
        title: 'JPSのプレイヤー検索ページ | JapanPvPServer',
        description: 'JPSのMinecraftプレイヤーを検索するページです',
        url: 'https://jps.gg/player'
      }
    }/>
    <div className={style.PlayerSearchField}>
      <div className={style.PlayerSearchContainer}>
        <div className={style.PlayerSearchTitle}>
          PlayerStats
        </div>
        <div className={style.SearchForm}>
          <input type="text" placeholder=' 🔍 MCIDを入力してください' className={style.SearchInput} onChange={(e) => handleChanged(e)} />
        </div>
        <div className={style.ResultField}>
          {function () {
            if (mcid !== "") {
              return <PlayerList data={matchData}/>
            }
          }()}
        </div>
      </div>
    </div>
    </>
  )
}

export default PlayerSearch
