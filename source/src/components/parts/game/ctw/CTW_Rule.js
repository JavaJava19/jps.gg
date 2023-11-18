import React from 'react'
import rule from "./rule.json";
import style from "../../../../css/rule.module.css"
import RankingParts from '../RankingParts';
import { useCtwWinRank, usePlayerList } from '../../../util/Fetch';
import YouTube from 'react-youtube';
import UpdateOgp from "../../../util/UpdateOgp"

const CTW_Rule = () => {

  const rankData = useCtwWinRank();
  const playerData = usePlayerList();
  if (rankData !== undefined && playerData !== undefined)
    return (
      <>
        <UpdateOgp pageMeta={
          {
            title: 'Catch The Wool | JapanPvPServer',
            description: 'JPSのミニゲーム"Catch The Wool"の紹介ページです',
            url: 'https://jps.gg/game/ctw/rule'
          }
        }/>
      <div className={style.RuleField}>
        <div className={style.RuleContent}>
          <div className={style.RuleTitle}>
            {rule.name}
          </div>
          <div className={style.RuleHeader}>
            <div className={style.Slide}>
              <YouTube className={style.Youtube} videoId={rule.youtubeID} />
            </div>
            <div className={style.Ranking}>
              <RankingParts rankdata={rankData} playerdata={playerData} />
            </div>
          </div>
          <div className={style.RuleMessage}>
            <div className={style.RuleTitle}>ルール</div>
            <div className={style.RuleMessageContent}>
              {rule.rule.map(text => <p key={text}>{text}</p>)}
            </div>
          </div>
          <div className={style.JpExplanationField}>
            <div className={style.RuleTitle}>
              賞金
            </div>
            <div className={style.JpExplanationContentField}>
              {rule.jp.map(jp => (
                <div className={style.JpExplanationContent} key={jp.explanation}>
                  <div className={style.JpName}>{jp.name}</div>
                  <div className={style.JpExplanation}>{jp.explanation}</div>
                  <div className={style.JpAmount}>{jp.jp} JP</div>
                </div>
              ))}
            </div>

            <div style={{ margin: "40px"}}>
              {function(){
                if(rule.time.length !== 0){
                  return rule.time.map(text=> <p key={text}>{text}</p>)
                }
              }()}
            </div>
          </div>

        </div>
      </div>
      </>
    )
}

export default CTW_Rule
