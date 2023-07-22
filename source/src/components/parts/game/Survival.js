import React from 'react'
import style from "/css/game.module.css"
import { useCtwWinRank, usePlayerList } from '/components/util/Fetch';
const Survival = () => {

    return (
    <article>
      <header>
        <h1>サバイバルサーバ</h1>
        <p>Minecraftほぼバニラなサバイバルモードでの生活をするサーバです</p>
      </header>
      <main>
        <section id={sv_s2_rule}>
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
        <section id={sv_s2_cmd}>
        <h2>使えるコマンド</h2>
          <table>
            <caption>サバイバルワールドに限らず使用可能なコマンド</caption>
            <thead>
              <tr><th scope={col}>コマンド</th><th scope={col}>用途</th><th scope={col}>備考</th></tr>
            </thead>
            <tbody>
              <tr><td><code>/sit</code></td><td>座る</td>
                <td>カーペット、雪、階段、ハーフブロックを右クリック(道具などを使用するキー)でも同じ事が可能</td></tr>
              <tr><td><code>/lay</code></td><td>仰向けに横たわる</td><td></td></tr>
              <tr><td><code>/belltflop</code></td><td>うつ伏せで横たわる</td>
                <td><code>crawl</code>と似ているが、その場から移動できない</td></tr>
              <tr><td><code>/crawl</code></td><td>這いつくばる</td><td>地上で泳いでいるような動作をする</td></tr>
              <tr><td><code>/spin</code></td><td>回転する</td>
                <td>トライデントの激流の固定＆地上バージョンのよう</td></tr>
            </tbody>
          </table>
          <table>
            <caption>サバイバルワールド限定コマンド</caption>
            <thead>
              <tr><th scope={col}>コマンド</th><th scope={col}>用途</th><th scope={col}>備考</th></tr>
            </thead>
            <tbody>
              <tr><td><code>/t spawn</code></td><td>自分の所属する町の中心地にワープする（無料）</td><td></td></tr>
              <tr><td><code>/t spawn <i>町名</i></code></td><td>指定した町の中心地にワープする</td><td>JPの支払いが必要</td></tr>
              <tr><td><code>/n spawn</code></td><td>自分の所属する町が所属する国にワープする（無料）</td><td></td></tr>
              <tr><td><code>/n spawn <i>国名</i></code></td><td>指定した国にワープする</td><td>JPの支払いが必要</td></tr>
            </tbody>
          </table>
        </section>
        <section id={sv_s2_guid}>
        <h2>初心者向けガイド</h2>
        <p>楽しみ方は自由ですが、どこから手を付けるか迷う方へのガイド</p>
          <h3>0.マイクラを普通に楽しむ</h3>
            <p>シングルワールドでのサバイバル生活と同様、資材を集め、建物を建て、マイクラ生活をする。
            <p>資材集めなどをゼロから始めるのは大変なので、<mark>町に入る</mark>と楽になるかもしれない</p>
          <h3>1.町</h3>
            <p>町と国という概念があります（プラグインtowny）。<br />
              町は数チャンクの地域、国は複数の町で構成された組織。</p>
            <p>資金に余力がある人は、自らの町を作成すると良い。
              また、資金難のプレイヤーは、既存の町に入らせてもらうと良い。</p>
            <p>町や国は維持費がシステムに徴収される。一定額が毎朝9時に引き落とされる。
              この引き落としで残高が不足している場合、
              町の人工物などは全て消え去って更地になってしまうので注意が必要。</p>
            <p>町の設定として、モンスターが入域できないように設定ができ、安心安全な領域にできる。
              <small>スケルトンホースはモンスター扱い。悲しい別れに注意</small></p>
          <h3>2.拠点</h3>
            <p>サバイバル生活を送るにあたり、拠点を建てることになるが、
              <mark>所属する町に建てましょう</mark>。<br />
              野宿でも問題はないが、チェストの管理等が煩雑になる。</p>
            <p>拠点には資材を貯めておくチェストを置くことになるが、
              看板を側面に貼り付ける（※記入しようとしない）ことで自分だけが開けられるようになる。
              同様、ドアも本体あるいは設置している基盤ブロックへ看板を貼り付けることで、
              自分だけが開けられるようになる。</p>
          <h3>3.出店する</h3>
            <p>JPを獲得する手立てになる。出店はチェスト1つから、お好きなアイテムで。</p>
            <p>初期リス付近や、町・国のどこかに商店を建てたり、他プレイヤーとも協力して商店街を作ってもよし。</p>
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
              メインワールドのエンドラは有志の勇士により速やかに討伐されてしまう。
                ブレス集め等は再召喚することを検討しよう。
              エンドラの卵については、資源エンドリセットのタイミングを狙って討伐と争奪に参加しよう。
            <h4>ウィザー</h4>
              エンド、あるいはネザーで召喚しよう。
                メインワールドでは万一暴走したとき、他プレイヤーの建築を破壊したりして、その被害補償の責を負うことになる。
              召喚場所を問わず、全体チャットやDiscordなどで、他プレイヤーにこれからウィザー狩りをすることを周知することをお勧めする。
                音で驚かせてしまったり、知らずに踏み入れて被害に遭うことを防げる。
            <h4>エルダーガーディアン</h4>
              特段注意事項は無い。攻略は各々のやり方で。
        </section><!-- sv_s2_guid -->
        <section id={sv_s2_jp}>
        <h2>通貨JP</h2>
          <p>このサーバの経済システムでの通貨単位は<abbr>JP</abbr>で、<code>0.1JP</code>単位で管理される。</p>
          <!-- 獲得方法の一覧 -->
          <!-- 経済関連コマンドの一覧 -->
        </section><!-- sv_s2_jp -->
      </main>
    </article>
    )
}

export default Survival
