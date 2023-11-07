import React from 'react'
import styles from "../../../../../css/game.module.css"
const RenewGuid20231107 = () => {

    return (
    <article className={styles.GameBody}>
      <header>
        <h1 className={styles.GameTitle}>Minecraftサーバ アップデートのお知らせ</h1>
        <p><time dateTime="2023-11-07 18:00:00">2023年11月7日 18時</time>リリース<br/>
          <address>Japan PvP Server (JPS) 運営チーム</address>より</p>
        <p>いつもJPSをご利用いただきありがとうございます。
          Minecraftサーバーのアップデート内容をお知らせします。</p>
        <p>今回のアップデートでは、経済システムをJPS仕様の独自プラグインに刷新しました。</p>
        <nav>
          <ol>
            <li><a href="#s2_n1">経済コマンド</a></li>
            <li><a href="#s2_n2">データについて</a></li>
          </ol>
        </nav>
      </header>
      <main className={styles.GameContainer}>
        <section id="s2_n1">
          <h2>1. 経済コマンド</h2>
          <p>JPS固有のコマンド群に更新されています</p>
          <table id="tbl_bankCommand" className={styles.framed}>
            <thead>
            <tr><th scope="col">コマンド</th><th scope="col">用途</th><th scope="col">備考</th></tr>
            </thead>
            <tbody>
            <tr><td><code>/jpsbank</code></td><td>サブコマンドのヘルプが表示されます</td><td></td></tr>
            <tr><td><code>/jpsbank money <i>playerName</i></code></td><td>所持金残高を表示します</td>
              <td><code><i>playerName</i></code>省略で自身の残高を表示</td></tr>
            <tr><td><code>/jpsbank pay <i>playerName</i> <i>amount</i> <i>message</i></code></td>
              <td>送金します。</td>
              <td><i>amount</i>は自身の所持金残高の範囲内で、小数第1位まで指定可能<br/><i>message</i>は全角25文字程度まで可能</td></tr>
            <tr><td><code>/jpsbank passbook</code></td><td>通帳を取得します</td>
              <td><small>署名済みの本として村人取引にも使えるかも</small></td></tr>
            <tr><td><code>/jpsbank rank <i>page-number</i>|<i>playerName</i>|me|</code></td>
              <td>所持金ランキングを表示します</td>
              <td>トップからの順次表示は、rankに続けてページ番号を入力<br/>
                指定プレイヤーあるいは自身(me)の前後数人分のランキングも表示可能</td></tr>
            <tr><td><code>/jpsbank townRank <i>page-number</i>|<i>(town-|nation-)name</i></code></td>
              <td>町と国の銀行残高ランキングを表示します</td>
              <td>トップからの順次表示は、rankに続けてページ番号を入力<br/>
                指定の町や国の前後のランキングも表示可能。
                表示するためには、接頭辞<code>town-</code>または<code>nation-<code>を付けて実行してください</td></tr>
            <tr><td><code>/jpsbank loan in <i>amount</i></code></td><td>JPS銀行から資金を借ります</td>
              <td>借入額に応じて、鈍足効果が付与されます</td></tr>
            <tr><td><code>/jpsbank loan return <i>amount</i></code></td><td>JPS銀行に借金を返済します</td>
              <td>返済額の10%を利息として同時に徴収します</td></tr>
            </tbody>
          </table>
        </section>
        <section id="s2_n2">
          <h2>2. データについて</h2>
          <p>今回、経済システムの更新に伴い、データ移行を実施しました。以下の注意点をご確認ください</p>
          <ol>
            <li>初参加っぽいメッセージが出た場合：<q>口座を開設しました</q>といったメッセージが出た場合、
              既存データからの移行が失敗している可能性があります。
              Discordにてチケットを作成し、当該メッセージが写った画面の写真/スクショを添付のうえ、ご連絡ください</li>
            <li>小数第2位は丸められました：従来のJP残高は0.01JP単位でしたが、0.1JP単位に変更されました。
              これに伴い、既存データの0.04JP未満は切り捨て、0.05JP以上は0.1JP単位に切り上げとなっています</li>
          </ol>
          <p>その他不明点・不具合などありましたら、Discordの<q>お問い合わせ</q>チャンネルより、
            チケットにてご相談ください</p>
        </section>
      </main>
    </article>
    )
}

export default RenewGuid20231107
