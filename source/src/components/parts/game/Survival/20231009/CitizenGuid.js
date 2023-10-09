import React from 'react'
import styles from "../../../../../css/game.module.css"
const CitizenGuid = () => {

    return (
    <article className={styles.GameBody}>
      <header>
        <h1 className={styles.GameTitle}>一般住民向けガイド</h1>
        <h2>JPS Townyの使い方</h2>
        <p>このガイドは一般市民向けです。町や国の管理者は<a href="./MayorGuid">運営者向けガイド</a>の確認をお願いします。</p>
        <nav>
          <ol>
            <li><a href="#s2_n1">町と国</a></li>
            <li><a href="#s2_n2">できること</a></li>
            <li><a href="#s2_n3">町のルール</a></li>
            <li><a href="#s2_n4">コマンド</a></li>
            <li><a href="#s2_n5">用語集</a></li>
            <li><a href="#s2_link">関連リンク</a></li>
          </ol>
        </nav>
      </header>
      <main className={styles.GameContainer}>
        <section id="s2_n1">
          <h2>1. 町と国</h2>
          <p>

          </p>
        </section>
        <section id="s2_n2">
          <h2>2. できること</h2>
          <p>

          </p>
        </section>
        <section id="s2_n3">
          <h2>3. 町のルール</h2>
          <p>

          </p>
        </section>
        <section id="s2_n4">
          <h2>4. コマンド</h2>
          <p>

          </p>
        </section>
        <section id="s2_n5">
          <h2>5. 用語集</h2>
          <p>

          </p>
        </section>
        <section id="s2_link">
          <h2>関連リンク</h2>
          <p>

          </p>
        </section>
      </main>
    </article>
    )
}

export default CitizenGuid
