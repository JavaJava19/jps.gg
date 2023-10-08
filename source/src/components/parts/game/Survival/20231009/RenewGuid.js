import React from 'react'
import styles from "../../../../../css/game.module.css"
const RenewGuid = () => {

    return (
    <article className={styles.GameBody}>
      <header>
        <h1 className={styles.GameTitle}>サバイバルサーバ アップデートのお知らせ</h1>
        <p><time datetime="2023-10-09 12:00:00">2023年10月9日 正午</time>リリース<br/>
          <address>Japan PvP Server (JPS) 運営チーム</address>より</p>
        <p>いつもJPSをご利用いただきありがとうございます。
          サバイバルサーバーのアップデート内容をお知らせします。</p>
        <nav>
          <ol>
            <li><a href="#s2_n1">用途に合わせたサーバーを用意</a></li>
            <li><a href="#s2_n2">荒野で建築や破壊などブロックの編集を不可に</a></li>
            <li><a href="#s2_n3">町の発展維持にかかるコストの変更</a></li>
            <li><a href="#s2_n4">破綻システムの導入</a></li>
            <li><a href="#s2_n5">プレフィックスの導入</a></li>
            <li><a href="#s2_link">手引きドキュメントへのリンク</a></li>
          </ol>
        </nav>
      </header>
      <main className={styles.GameContainer}>
        <section id="s2_n1">
          <h2>1. 用途に合わせたサーバを用意</h2>
          <p>

          </p>
        </section>
        <section id="s2_n2">
          <h2>2. 荒野で建築や破壊などブロックの編集を不可に</h2>
          <p>

          </p>
        </section>
        <section id="s2_n3">
          <h2>3. 町の発展維持にかかるコストの変更</h2>
          <p>

          </p>
        </section>
        <section id="s2_n4">
          <h2>4. 破綻システムの導入</h2>
          <p>

          </p>
        </section>
        <section id="s2_n5">
          <h2>5. プレフィックスの導入</h2>
          <p>

          </p>
        </section>
        <section id="s2_link">
          <h2>手引きドキュメントへのリンク</h2>
          <p>町や国の運営者向けと、一般住民向けに、以下の手引書を公開しています</p>
          <nav>
            <ul>
              <li><a href="./BossGuid">町や国の運営者向け手引き</a></li>
              <li><a href="./CitizenGuid">一般住民向け手引き</a></li>
            </ul>
          </nav>
        </section>

      </main>
    </article>
    )
}

export default RenewGuid
