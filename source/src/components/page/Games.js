import React from 'react'
import styles from "../../css/game.module.css"
import {
  useTransition,
} from '@react-spring/web'
import GameParts from '../parts/game/GameParts'

const Games = () => {
// --- ゲーム追加時はここに追加 ---
  const data = [
    {
      name: 'CatchTheWool',
      icon: "",
      rulePath: "./ctw/rule",
      rankPath: "./ctw/rank"
    },
    {
      name: 'BreakTheCore',
      icon: "",
      rulePath: "",
      rankPath: ""
    },
    {
      name: 'BedWars',
      icon: "",
      rulePath: "",
      rankPath: ""
    },
    {
      name: 'TheJPSPit',
      icon: "",
      rulePath: "",
      rankPath: ""
    },
    {
      name: 'Digger',
      icon: "",
      rulePath: "",
      rankPath: ""
    }
  ]

  const transition = useTransition(data, {
    trail: 300 / data.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  })

  return (

    <div className={styles.GameBody}>
      <div className={styles.GameField}>
        <div className={styles.GameTitle}>
          JPS Games
        </div>
        <div className={styles.PartsMemo}>
          オリジナルから他サーバーで人気なMinecraftのゲームを幅広く遊ぶことができます。<br />
          スピード感のあるゲーム、短時間で遊べるアーケードスタイルのゲーム。<br />
          またブロックを自在に設置でき無限の戦略が楽しめるゲームなどたくさんのゲームを取り揃えました！<br />
          各ゲームの詳細は以下のアイコンをクリックして、それぞれの詳細をご確認してください！
        </div>
        <div className={styles.GameContainer}>
          {transition((style, item) => (
            <GameParts style={style} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Games
