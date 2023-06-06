import React from 'react'
import { usePlayerMatch } from '../util/Fetch'
import { useParams } from 'react-router-dom'
import { AiOutlineMessage, AiOutlineKey } from "react-icons/ai"
import { CgProfile } from "react-icons/cg"
import style from "../../css/player.module.css"
import CtwStats from '../parts/player/CtwStats'
const Player = () => {
  const params = useParams();
  const data = usePlayerMatch(params.id);

  function getSkinURL(url) {
    if (url !== "null") {
      return "https://api.mineskin.org/render/skin?url=" + url;
    } else {
      return "https://s.namemc.com/i/bc68bf289576a899.png"
    }
  }

  function getProfile(profile) {
    if (profile !== undefined) {
      return profile;
    } else {
      return "自己紹介は何も書かれていません"
    }
  }
  if (data === undefined) return <div>Loading...</div>
  return (
    <div className={style.PlayerField}>
      <div className={style.Profile}>
        <div className={style.Skin}>
          <img src={getSkinURL(data.skinURL)} alt="" />
        </div>
        <div className={style.PlayerProfile}>
          <div className={style.MCID}>
            <CgProfile style={{ marginRight: "10px", fontSize: "18px" }} />MCID
            <div className={style.McidField}>
              {data.name}
            </div>
          </div>
          <div className={style.UUID}>
            <AiOutlineKey style={{ marginRight: "10px", fontSize: "18px" }} />UUID
            <div className={style.UuidField}>
              {data.uuid}
            </div>
          </div>
          <div className={style.Message}>
            <AiOutlineMessage style={{ marginRight: "10px", fontSize: "18px" }} />自己紹介
            <div className={style.MessageField}>
              {getProfile(data.profile)}
            </div>
          </div>
        </div>
      </div>
      <div className={style.StatsField}>
        <div className={style.StatsTitle}>
          GameStats
        </div>
        <div className={style.StatsContent}>
          <CtwStats uuid={data.uuid} />
          <CtwStats uuid={data.uuid} />
          <CtwStats uuid={data.uuid} />
          <CtwStats uuid={data.uuid} />
          <CtwStats uuid={data.uuid} />
          <CtwStats uuid={data.uuid} />
          <CtwStats uuid={data.uuid} />
          <CtwStats uuid={data.uuid} />
          <CtwStats uuid={data.uuid} />
        </div>
      </div>
    </div>
  )
}

export default Player
