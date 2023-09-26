import React from 'react'
import styles from "../../../css/game.module.css"
const Survival = () => {

    return (
    <article className={styles.GameBody}>
      <header>
        <h1 className={styles.GameTitle}>サバイバルサーバ</h1>
        <p className={styles.PartsMemo}>Minecraftほぼバニラなサバイバルモードでの生活をするサーバです</p>
      </header>
      <main className={styles.GameContainer}>
        <section id="sv_s2_rule">
        <h2>生活サーバのルール</h2>
          <p>他のプレイヤーに不快な思いをさせないこと、を軸に、以下をルールとして守ってください。</p>
          <ul>
            <li>開けることが許可されていないチェストをむやみに触らない</li>
            <li>立ち入ることが許可されていない家や保護領域には立ち入らない</li>
            <li>他人の保護領域の近接エリアをむやみにいじらない</li>
            <li>他人を陥れる罠は作らない</li>
          </ul>
          <p>万が一荒らされた場合、運営に報告して対処を待つこと。
            仕返しする行為は仕返しをしたあなたも荒らし行為者として運営は処理します。</p>
          <p>運営の対応で、荒らされた箇所は原則ロールバックにより原状回復されます。
            ただし、報告の内容やその他状況により、ロールバックが適用されないこともあります。
            後述の「町」を活用して、建築物に保護を設定して荒らしから自衛することをおすすめします。</p>
        </section>
        <section id="sv_s2_cmd">
        <h2>使えるコマンド</h2>
          <table className={styles.framed}>
            <caption>サバイバルワールドに限らず使用可能なコマンド</caption>
            <thead>
              <tr><th scope="col">コマンド</th><th scope="col">用途</th><th scope="col">備考</th></tr>
            </thead>
            <tbody>
              <tr><td><code>/hub</code></td><td>ロビーに戻る</td><td>いつでもどこからでもロビーへ</td></tr>
              <tr><td><code>/tell <i>プレイヤー名</i> <i>メッセージ</i></code></td>
                <td>相手と"ささやき"で個人チャットをする</td><td></td></tr>
              <tr><td><code>/sit</code></td><td>座る</td>
                <td>カーペット、雪、階段、ハーフブロックを右クリック(道具などを使用するキー)でも同じ事が可能</td></tr>
              <tr><td><code>/lay</code></td><td>仰向けに横たわる</td><td></td></tr>
              <tr><td><code>/crawl</code></td><td>這いつくばる</td><td>地上で泳いでいるような動作をする</td></tr>
              <tr><td><code>/belltflop</code></td><td>うつ伏せで横たわる</td>
                <td><code>crawl</code>と似ているが、その場から移動できない</td></tr>
              <tr><td><code>/spin</code></td><td>回転する</td>
                <td>トライデントの激流の固定＆地上バージョンのよう</td></tr>
            </tbody>
          </table>
          <table className={styles.framed}>
            <caption>サバイバルワールド限定コマンド</caption>
            <thead>
              <tr><th scope="col">コマンド</th><th scope="col">用途</th><th scope="col">備考</th></tr>
            </thead>
            <tbody>
              <tr><td><code>/t spawn</code></td><td>自分の所属する町の中心地にワープする</td><td></td></tr>
              <tr><td><code>/t spawn <i>町名</i></code></td><td>指定した町の中心地にワープする</td><td>JPの支払いが必要</td></tr>
              <tr><td><code>/n spawn</code></td><td>自分の所属する町が所属する国にワープする</td><td></td></tr>
              <tr><td><code>/n spawn <i>国名</i></code></td><td>指定した国にワープする</td><td>JPの支払いが必要</td></tr>
              <tr><td><code>/js rp</code></td><td>初期スポーン地点にワープする</td><td>無料</td></tr>
              <tr><td><code>/js pvp</code></td><td>PvPモードのON/OFFを切り替える</td>
                <td>ON/OFFが切り替わると全員に状態が通知される</td></tr>
            </tbody>
          </table>
        </section>
        <section id="sv_s2_guid">
        <h2>初心者向けガイド</h2>
        <p>楽しみ方は自由ですが、どこから手を付けるか迷う方へのガイド</p>
          <h3>0.マイクラを普通に楽しむ</h3>
            <p>シングルワールドでのサバイバル生活と同様、資材を集め、建物を建て、マイクラ生活をする。
            資材集めなどをゼロから始めるのは大変なので、<mark>町に入る</mark>と楽になるかもしれない</p>
          <h3>1.町と国</h3>
            <p>町と国という概念があります（プラグインtowny）。<br />
              町は数チャンクの地域、国は複数の町で構成された組織。</p>
            <p>資金に余力がある人は、自らの町を作成すると良い。
              また、資金難のプレイヤーは、既存の町に入らせてもらうと良い。</p>
            <p>町や国は維持費がシステムに徴収される。一定額が毎朝9時に引き落とされる。
              この引き落としで残高が不足している場合、
              町の人工物などは全て消え去って更地になってしまうので注意が必要。</p>
            <p>町の設定として、モンスターが入域できないように設定ができ、安心安全な領域にできる。
              <small>スケルトンホースはモンスター扱い。悲しい別れに注意</small></p>
            <table className={styles.framed}>
              <caption>Towny関連コマンド</caption>
              <thead>
              <tr><th scope="col">コマンド</th><th scope="col">用途</th><th scope="col">備考</th></tr>
              </thead>
              <tbody>
              <tr><td><code>/t new <i>名称</i></code></td><td>新しい町を設立する</td><td>立っている1チャンク範囲が町になる</td></tr>
              <tr><td><code>/t here</code></td><td>現在いる場所の町の情報を表示する</td><td></td></tr>
              <tr><td><code>/t invite <i>プレイヤー名</i></code></td><td>町にプレイヤーを招待する</td><td></td></tr>
              <tr><td><code>/accept</code></td><td>招待を受けた側が承諾する</td><td></td></tr>
              <tr><td><code>/t deposit <i>1234</i></code></td><td>町の共通口座に資金を拠出する</td><td></td></tr>
              <tr><td><code>/t withdraw <i>1234</i></code></td><td>町の共通口座から資金を引き出す</td>
                <td>他人が預けた資産を引き出す事にもなりうるので注意</td></tr>
              <tr><td><code>/t bankhistory</code></td><td>町の共通口座の入出金履歴を表示する</td><td>当日分のみ</td></tr>
              <tr><td><code>/t claim</code></td><td>現在いる場所を町の領土として取得する</td><td>既存領土と要隣接</td></tr>
              <tr><td><code>/t claim outpost</code></td><td>"前哨基地"として町から離れた地点で領土を取得する</td><td></td></tr>
              <tr><td><code>/n join <i>既存国名</i></code></td><td>既存の国の属地になる</td><td></td></tr>
              <tr><td><code>/n new <i>名称</i></code></td><td>町を首都とする国を設立する</td><td></td></tr>
              <tr><td>前述の t を n に置き換える</td><td>町と同じ操作を国に対して実行できる</td><td></td></tr>
              <tr><td><code>/n ally add <i>他国名称</i></code></td><td>他国と同盟関係になる</td><td></td></tr>
              <tr><td><code>/n enemy add <i>他国名称</i></code></td><td>他国と敵対関係になる</td><td></td></tr>
              <tr><td><code>/plot set <i>区分</i></code></td><td>区画用途を定義する</td><td>闘技場(arena),農地(farm),商店街(shop)など</td></tr>
              </tbody>
            </table>
          <h3>2.拠点</h3>
            <p>サバイバル生活を送るにあたり建築をすることになるが、<mark>所属する町に建てよう</mark>。
              野宿でも問題はないが、チェストの管理等が煩雑になる。</p>
            <p>拠点には資材を貯めておくチェストを置くことになるが、
              看板を側面に貼り付ける（※記入しようとしない）ことで自分だけが開けられるようになる。<br />
              同様に、ドアも、本体あるいは隣接ブロックに看板を貼り付けることで、自分だけが開けられるようになる。</p>
          <table className={styles.framed}>
            <caption>保護関連コマンド（LWC）</caption>
            <thead>
            <tr><th scope="col">コマンド</th><th scope="col">用途</th><th scope="col">備考</th></tr>
            </thead>
            <tbody>
            <tr><td><code>/cinfo</code></td><td>保護対象ブロックの保護データを見る</td><td>入力後対象物を殴る</td></tr>
            <tr><td><code>/unlock</code></td><td>保護状態を解除する</td><td>他プレイヤーが破壊も含め自由に触れるようになる</td></tr>
            <tr><td><code>/cpublic</code></td><td>緩い保護を設定する</td><td>他プレイヤーも中身は触れるが、破壊はできなくする</td></tr>
            <tr><td><code>/lock</code></td><td>自身のみが触れる保護を設定する</td><td>unlock後に再設定する</td></tr>
            <tr><td><code>/chopper on</code></td><td>チェスト等の中身がホッパーで吸い出されることを許可する</td>
              <td>既定ではoff。悪意ある他人がホッパーで中身を吸い出せないようにするため。</td></tr>
            </tbody>
          </table>
          <h3>3.出店する</h3>
            <p>JPを獲得する手立てになる。出店はチェスト1つから、お好きなアイテムで。</p>
            <p>初期リス付近や、町・国のどこかに商店を建てたり、他プレイヤーとも協力して商店街を作ってもよし。</p>
            <table className={styles.framed}>
              <caption>お店の管理コマンド</caption>
              <thead>
              <tr><th scope="col">コマンド</th><th scope="col">用途</th><th scope="col">備考</th></tr>
              </thead>
              <tbody>
              <tr><td><code>/qs create <i>1234</i></code></td><td>手に持っているアイテムを指定価格で販売するショップを作る</td>
                <td>先にチェストを置いておき、入力後直ちに殴る</td></tr>
              <tr><td colSpan={3}>自動生成される看板を右クリックすることで、管理メニューが表示される</td></tr>
              </tbody>
            </table>
          <h3>4.住環境を整える</h3>
            <p>食料の供給元を自身の町の中で確保するために、畑・牧場を作ってみよう。
              JPを支払って他ユーザから購入し続けるよりもお財布に優しくなれる。</p>
            <p>余裕が出てきたら、町にシンボルとなる建築物を建ててみるのも良いだろう。</p>
          <h3>5.遊ぶ</h3>
            <p>遊ぶ、遊ぶ、遊ぶ。自由にマインクラフトで遊ぶ。
              地下で鉱石をひたすら集めたり、希少資源を探し求めたり、
              他プレイヤーと協力して大型建築をしてみたり。
              マインクラフトの遊び方は無限大。</p>
          <h3>6.ボス討伐</h3>
            <p>マイクラの<abbr>3大ボス</abbr>（エンダードラゴン・ウィザー・エルダーガーディアン）は、
              通常通り発生するが討伐にはマルチサーバ固有の留意事項がある。</p>
            <h4>エンダードラゴン</h4>
              <p>メインワールドのエンドラは有志の勇士により速やかに討伐されてしまう。
                ブレス集め等は再召喚することを検討しよう。</p>
              <p>エンドラの卵については、資源エンドリセットのタイミングを狙って討伐と争奪に参加しよう。</p>
            <h4>ウィザー</h4>
              <p>エンド、あるいはネザーで召喚しよう。
                メインワールドでは万一暴走したとき、他プレイヤーの建築を破壊したりして、その被害補償の責を負うことになる。</p>
              <p>召喚場所を問わず、全体チャットやDiscordなどで、他プレイヤーにこれからウィザー狩りをすることを周知することをお勧めする。
                音で驚かせてしまったり、知らずに踏み入れて被害に遭うことを防げる。</p>
            <h4>エルダーガーディアン</h4>
              <p>特段注意事項は無い。攻略は各々のやり方で。</p>
        </section>{/* <!-- sv_s2_guid --> */}
      </main>
    </article>
    )
}

export default Survival
