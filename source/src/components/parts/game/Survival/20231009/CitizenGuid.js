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
            <li><a href="#s2_n1">町に入ろう！</a></li>
            <li><a href="#s2_n2">町を発展させよう！</a></li>
            <li><a href="#s2_n3">JPを稼ごう！</a></li>
            <li><a href="#s2_n4">自分で町をつくってみよう！</a></li>
            <li><a href="#s2_n5">コマンド一覧</a></li>
            <li><a href="#s2_link">関連リンク</a></li>
          </ol>
        </nav>
      </header>
      <main className={styles.GameContainer}>
        <section id="s2_n1">
          <h2>1. 町に入ろう！</h2>
          <p>

          </p>
        </section>
        <section id="s2_n2">
          <h2>2. 町を発展させよう！</h2>
          <p>

          </p>
        </section>
        <section id="s2_n3">
          <h2>3. JPを稼ごう！</h2>
          <p>

          </p>
        </section>
        <section id="s2_n4">
          <h2>4. 自分で町をつくってみよう！</h2>
          <p>

          </p>
        </section>
        <section id="s2_n5">
          <h2>5. コマンド一覧</h2>
          <p>

          </p>
        </section>
        <section id="s2_link">
          <h2>関連リンク</h2>
          <nav>
            <ul>
              <li><a href="./RenewGuid">23年10月9日更新情報</a></li>
              <li><a href="./MayorGuid">町と国の管理者向けガイド</a></li>
            </ul>
          </nav>
        </section>
      </main>
    </article>
    )
}

export default CitizenGuid
