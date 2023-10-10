import React from 'react'
import styles from "../../../../../css/game.module.css"
const CitizenGuid = () => {

    return (
    <article className={styles.GameBody}>
      <header>
        <h1 className={styles.GameTitle}>一般住民向けガイド</h1>
        <h2>JPS Townyの使い方</h2>
        <p>このガイドは一般市民向けです。町や国の管理者は<a href="./MayorGuid">運営者向けガイド</a>の確認をお願いします。</p>
        <p>Discord掲載のPDFをご参照ください</p>
      </header>
      <main>
        <p>現在ウェブ掲載用に編集中</p>
      </main>
    </article>
    )
}

export default CitizenGuid
