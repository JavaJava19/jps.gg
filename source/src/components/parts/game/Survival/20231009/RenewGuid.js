import React from 'react'
import styles from "../../../../../css/game.module.css"
import UpdateOgp from "../../../../util/UpdateOgp"
const RenewGuid = () => {

    return (
    <>
    <UpdateOgp pageMeta={
      {
        title: '23/10/9 サバイバルサーバアップデートのお知らせ｜JapanPvPServer',
        description: '2023年10月9日のサバイバルサーバアップデート内容のお知らせです',
        url: 'https://jps.gg/game/survival/20231009/RenewGuid'
      }
    }/>
    <article className={styles.GameBody}>
      <header>
        <h1 className={styles.GameTitle}>サバイバルサーバ アップデートのお知らせ</h1>
        <p><time dateTime="2023-10-09 12:00:00">2023年10月9日 正午</time>リリース<br/>
          <address>Japan PvP Server (JPS) 運営チーム</address>より</p>
        <p>いつもJPSをご利用いただきありがとうございます。
          サバイバルサーバーのアップデート内容をお知らせします。</p>
        <p>今回のアップデートの考え方といたしましては、自分の土地や町の概念を強くすることとなります。</p>
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
          <p>用途に合わせたサーバーを用意しました。建築サーバのスポーン地点にいるNPCから移動ができます</p>
          <dl>
            <dt>建築サーバー</dt><dd>Townyで取得した土地で建築などをする生活の中心となるサーバー</dd>
            <dt>資源サーバー</dt><dd>資源回収を行うサーバー。毎月1日と15日にリセットされる。
             Jobsの(DiggerやMiner向け)Questや、ブランチマイニング、バイオーム依存の資源を探索して採取するなどに利用できる</dd>
            <dt>運営サーバー</dt><dd>トラップタワーや村人交易所などが使えるサーバー</dd>
            <dt>サバイバルイベントサーバー</dt><dd>サバイバルで集めたアイテムを使ってイベントを行うサーバー</dd>
          </dl>
          <p>各サーバーでアイテムは同期されています。</p>
          <ins><time dateTime="2023-10-13">10月13日</time>追記：
            資源サーバから建築サーバに戻るコマンド「<code>/back</code>」を追加しました</ins>
        </section>
        <section id="s2_n2">
          <h2>2. 荒野で建築や破壊などブロックの編集を不可に</h2>
          <p>建築ワールドの荒野（Townyで未取得の土地）での建築活動ができなくなりました。
            建築ワールドでは町や国に属する区画でのみブロックの編集が可能になります。
            資源採取を目的としたブランチマイニング等は、<strong>資源サーバ</strong>を利用してください。</p>
          <p>なお、町や国の区画をとった際、初期設定のままでは市民でも編集はできません。
            市長に権限をもらうor市長から区画を買うと自由に建築をすることが可能になります。
            詳細は<a href="./CitizenGuid">一般住民向け手引き</a>を参照してください</p>
        </section>
        <section id="s2_n3">
          <h2>3. 町の発展維持にかかるコストの変更</h2>
          <p>町や国の発展と維持に掛かるJPの金額を変更しました</p>
          <ul>
            <li>町（Town）<ul>
              <li>１チャンク取得するコスト：<code>2,000JP</code></li>
              <li>維持費：<code>100JP</code>ｘ現在取っているチャンク数。
                例えば、町が16チャンク取っている場合は毎日1,600JP維持費がかかります。</li>
            </ul></li>
            <li>国（Nation）<ul>
              <li>人口に応じたレベルごとに、維持費が変わります。
                詳しくは<a href="./BossGuid">町や国の運営者向け手引き</a>をご覧ください。</li>
            </ul></li>
          </ul>
          <p>なお、上記"維持費"は<time dateTime="2023-10-16">10月16日</time>より適用されます</p>
        </section>
        <section id="s2_n4">
          <h2>4. 破綻システムの導入</h2>
          <p>町が維持費を払えない場合、町の銀行が破綻します。</p>
          <p>破綻すると、サーバから3日分の維持費が貸付られますが、それが返済されない場合、
            町は自動的に削除され、<strong>建築物等はすべて没収</strong>されます。</p>
          <p>町長は銀行の残高や、掛かる維持費を確認して、市民から適切に税金を徴収し、町を経営しましょう。</p>
        </section>
        <section id="s2_n5">
          <h2>5. プレフィックスの導入</h2>
          <p>サバイバルサーバで町や国の所属を示すプレフィックスを導入します。</p>
          <p>チャット欄に表示されるMinecraftIDに、所属している町や国が表示されます。
            また、町や国のレベルによって、そこの町長や国の長にはバッチも付加されます。</p>
          <p>例： azNation国、azCity町に属している場合（かつ、VIP購入特典つき）<br/>
            <span style={{backgroundColor:"darkgray"}}><span style={{color:"white"}}>[</span><span
             style={{color:"aqua"}}>azNation</span><span style={{color:"white"}}>/</span><span
             style={{color:"aqua"}}>azCity</span><span style={{color:"white"}}>]</span><span
             style={{color:"yellow"}}>[VIP]</span><span style={{color:"white"}}>az_aka: こんにちは</span></span></p>
        </section>
        <section id="s2_link">
          <h2>手引きドキュメントへのリンク</h2>
          <p>町や国の運営者向けと、一般住民向けに、以下のガイドブックを公開しています</p>
          <nav>
            <ul>
              <li><a href="./MayorGuid">町や国の運営者向けガイド</a></li>
              <li><a href="./CitizenGuid">一般住民向けガイド</a></li>
            </ul>
          </nav>
        </section>

      </main>
    </article>
    </>
    )
}

export default RenewGuid
