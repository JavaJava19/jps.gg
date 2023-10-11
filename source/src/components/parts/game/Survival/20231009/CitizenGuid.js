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
        <section id="s2_n0">
          <h2>Townyとは？</h2>
          <p><ruby>Towny<rp>（</rp><rt>タウニー</rt><rp>）</rp></ruby>は、JPSのサバイバルサーバに導入されている<a
              href="https://github.com/TownyAdvanced/Towny/wiki">町と国の仕組みを支えるプラグイン</a>です。<br/>
            1チャンク単位で<strong>自分の土地</strong>を持つことができます。
            土地は、既存の町に所属して分譲してもらうか、自ら町を設立することで、手に入れることができます。</p>
          <p>自ら町を設立して町長になると、自由に町を経営することができますが、
            仕組みに慣れるまでは、まずは既存の町に所属することがオススメです。</p>
          <p>町によって様々な特長があります。町固有のルールや、発展の方針、住民など、自分好みの町を見つけて、楽しみましょう！</p>
        </section>
        <section id="s2_n1">
          <h2>1. 町に入ろう！</h2>
          <p>初心者の方は、自分で町を作るよりも、まずは既存の町に入ることをオススメします。<br/>
            町の探し方は主に3つ。それぞれ紹介します。</p>
            <section>
            <h3>JPS参加型Discordサーバ</h3>
              <p><strong>メリット：情報が豊富</strong><br/>
                Discordの掲示板を眺めて、好みの町を探そう！</p>
              <p><a href="https://discord.gg/jps" target="_blank"><img
                  src="https://user-images.githubusercontent.com/64903817/273965000-c2fc740c-4dcc-4409-a036-3df513d01549.png"
                  alt="Discord" height="24px" style={{verticalAlign:"text-bottom"}}/>JPSのDiscordサーバ</a>には、
                町・国の募集掲示板があります。様々な町や国が、住民を募集していますので、
                掲載内容を読んで自分に合ってそうな所を探してみましょう！</p>
              <p>町によっては、個別に専用Discordサーバを用意している所もあります。
                掲示板にDiscordリンクがある場合、参加してみても良いでしょう</p>
              <small>JPS参加型Discordサーバ以外の外部サーバについて、JPS運営は関与しておりません</small>
            </section>
            <section>
            <h3>イベント</h3>
              <p><strong>メリット：人柄がわかる</strong><br/>
                50人以上が参加するイベントで友達をつくろう！</p>
              <p>JPSでは定期的に初心者・新規さん大歓迎のイベントを開催しています。<br/>
                イベントの最中に、他のプレイヤーと仲良くなったら、そのプレイヤーの国に入るのもオススメです。</p>
              <p>国によっては<ruby>VC<rp>(</rp><rt>ボイスチャット</rt><rp>)</rp></ruby>を使ってイベントに参加したり、
                イベントが無い日でもJPSのミニゲームや、別のゲームで遊んだりと、様々です。</p>
              <p>イベントで友達をたくさん作ろう！</p>
            </section>
            <section>
            <h3>サバイバルサーバー</h3>
              <p><strong>メリット：手っ取り早い</strong><br/>
                実際に町に行ってみたり、住民と会話しながら案内してもらおう！</p>
              <p>とりあえずサバイバルサーバーに参加してみよう！（ロビーにある井戸に飛び込もう）<br/>
                サーバーに入ったら、「初見です。案内してくれる人は居ませんか？」などとチャットすると、
                誰かが迎えに来てくれることでしょう。
                その人の所属する町に入っても良いですし、案内してもらった中で気になる町があれば、
                そこに所属するのも良いでしょう</p>
              <p>まずは自分の目でサバイバルサーバーがどんなものか確認してみよう！</p>
            </section>
        </section>
        <section id="s2_n2">
          <h2>2. 町を発展させよう！</h2>
          <p>町に入ったら、まずその町のルールを確認しましょう。<br/>
            ルールは町それぞれですが、どの町でも確認すべき項目として、区画の割り当て方があります。
            「区画を購入する」町と、「町のどこでも誰でも建築できる」町とがあります。</p>
          <ul>
            <li>区画を購入する<br/>
              最初の購入費用と、維持費が掛かりますが、区画内ではルールの範囲で自由に建築できます</li>
            <li>誰でも建築できる<br/>
              自由に、とは言っても、発展のためのエリア分けなど、住民に確認しておきましょう</li>
          </ul>
        </section>
        <section id="s2_n3">
          <h2>3. JPを稼ごう！</h2>
          <p>JPSのサバイバルサーバーで遊ぶにはサーバ内通貨のJPが必要不可欠です。<br/>
            毎日一定額、あるいは一定率での町への納税があります。
            具体的な金額は、町長に確認してみてください。</p>
          <section id="s3_job">
            <h3>Jobs</h3>
            <p>サバイバルサーバで職業による収入を得ることができます。</p>
            <p>Jobsでは3つの職種まで同時に就業することができます。<br/>
              職業には毎日クエストが発生し、クリアすることで1,000JPがもらえます。</p>
            <p>オススメは<code>Digger/Miner/Woodcutter</code>です。</p>
            <table id="tbl_jobsCommand" className={styles.framed}>
              <thead>
              <tr><th scope="col">コマンド</th><th scope="col">用途</th><th scope="col">備考</th></tr>
              </thead>
              <tbody>
              <tr><td><code>/jobs join <i>職業名</i></code></td><td>就職します</td>
                <td>職業名を省略すると、クリック操作による選択と決定ができるGUI画面が表示されます</td></tr>
              <tr><td><code>/jobs leave <i>職業名</i></code></td><td>離職します</td>
                <td>職業レベルは低下しますが、再就職は可能です</td></tr>
              <tr><td><code>/jobs quest</code></td><td>1日1回達成可能なクエストの条件を確認できます</td>
                <td>クエスト条件の達成で1,000JPが獲得できます</td></tr>
              </tbody>
            </table>
          </section>
          <section id="s3_minigame">
            <h3>ミニゲーム</h3>
            <p>JPSではサバイバルの他にも多彩なゲームを用意しています。</p>
            <section>
            <h4>CTW（Catch The Wool）</h4>
              <p>相手陣地から羊毛を奪い、自陣まで持ち帰るPvPゲーム。<br/>
                プレイヤースキルとチームでの戦略性が求められます。
                数分ごとに勝敗が決まり、比較的サクサクと進みます。
                PvP好きな方にオススメのゲームです。</p>
            </section>
            <section>
            <h4>MM（Murder Mystery）</h4>
              <p>マイクラ人狼。<br/>
                マーダー(擬態し混ざっている殺害陣営)とプレイヤー(マーダーを見分けて討伐する)との2陣営に分かれます。
                相手側陣営を殲滅させたら勝利となります。</p>
              <p>プレイヤー陣営からは、誰がマーダーなのか分からないので、探り合いと生き残りが大事。
                マーダー側は、気づかれないようにプレイヤーをこっそり一人ずつ倒していくのがオススメ。</p>
            </section>
            <section>
            <h4>PIT</h4>
              <p>乱闘ゲーム<br/>
                フィールドに降り立ったら即殴り合い！とにかく戦いたい人におすすめのPvP</p>
            </section>
            <section>
            <h4>Digger</h4>
              <p>整地ゲーム<br/>
                500×500の範囲をみんなで掘り進めます。一人で黙々と作業したい人にもオススメ</p>
            </section>
          </section>
          <section id="s3_event">
            <h3>イベント</h3>
            <p>定期的にJPが稼げるイベントも開催しています</p>
            <p>たとえば…</p>
            <ul>
              <li>アスレをクリアしたら2,000JP</li>
              <li>橋を渡り切ったら10,000JP</li>
              <li>優勝したら100,000JP</li></ul>
            <p>などなど…</p>
          </section>
          <section id="s3_etc">
            <h3>その他</h3>
            <p><a href="/game/survival#sv_s3_guid_3">チェストショップのプラグインを活用</a>して無人店舗を経営し、収入を得ても良いでしょう。</p>
            <p>JPSではプレイヤー間のJP取引を許可しています。</p>
            <ul>
              <li>整地を手伝ったら1,000JP</li>
              <li>別ゲームの周回を手伝ったら2,000JP</li>
              <li>スキンを作ったら3,000JP</li>
            </ul>
            <p>など、自由に売りたいものと値段とを決めて、他プレイヤーと交渉してみてください</p>
            <small>※プレイヤー間の売買取引によるトラブルの責任を運営は負いかねます</small>
            <p>なお、リアルマネートレード・個人情報の売買といった行為は禁止です</p>
          </section>
        </section>
        <section id="s2_n4">
          <h2>4. 自分で町をつくってみよう！</h2>
          <p>JPSのサバイバルに慣れてきたら自分で町を作ってみましょう。
            管理は大変ですが、自分好みの町を作りあげていく楽しさが味わえることでしょう。<br/>
            入った町が気に入っている場合は、独立しようとせず、町の発展に関わり続けるのも良い選択です</p>
          <p>町から抜ける場合は、お世話になった町長と他の住民への挨拶がマナーです。</p>
          <p>なお、他の町の住民の引き抜き行為は禁止です</p>
          <nav>
            <p>町の作り方や運用方法は、別紙<a href="/MayorGuid">町や国の運営者向けガイド</a>を参考にしてください</p>
          </nav>
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
