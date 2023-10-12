import React from 'react'
import styles from "../../../../../css/game.module.css"
const MayorGuid = () => {

    return (
    <article className={styles.GameBody}>
      <header>
        <h1 className={styles.GameTitle}>町や国の運営者向けガイド</h1>
        <h2>JPS Townyの使い方</h2>
        <p>このガイドは町長（Mayor）および国の管理者（King）向けです。
          一般の参加者は<a href="./CitizenGuid">市民ガイド</a>の確認をお願いします。</p>
        <nav>
          <ol>
            <li><a href="#s2_n1">町と国</a></li>
            <li><a href="#s2_n2">できること</a><ul>
              <li><a href="#s3_n2_town">町で出来ること</a></li>
              <li><a href="#s3_n2_nation">国で出来ること</a></li>
            </ul></li>
            <li><a href="#s2_n3">レベル</a></li>
            <li><a href="#s2_link">関連リンク</a></li>
          </ol>
        </nav>
      </header>
      <main className={styles.GameContainer}>
        <section id="s2_intro">
          <h2>町長とは</h2>
          <p>Towny用語でMayorとも呼び、町で一番偉く、町に関するすべての権限を持ちます。</p>
          <p>町は、市民を集めることでよりたくさんの区画を取れるようになります。
            ただし、取っている区画が多ければ多いほど、維持費が加算されていきます。<br/>
            うまく税金を調整して適切に町を経営していきましょう。</p>
          <h2>国の管理者とは</h2>
          <p>Towny用語ではKingですが、本資料では国の指導者と記載します。</p>
          <p>一般に、首都となる町の町長が、国の指導者になります。</p>
        </section>
        <section id="s2_n1">
          <h2>1. 町と国</h2>
          <p>JPSサバイバルでは町と国という要素を設けています。<br/>
            まず町が有り、町を国に発展させることができます。
            国は単一の町から発展させることもできますが、複数の町から構成することもできます</p>
          <p>町と国の特徴は以下の通りです</p>
          <dl>
            <dt>町</dt><dd>生活の基盤。1チャンク単位の区画（プロット）に対して用途を設定し、運用ができる</dd>
            <dt>国</dt><dd>他の町と協力して、より大きな組織にできる</dd>
          </dl>
          <p>他にも町対抗イベント、国対抗イベントなど所属することによって参加できるイベントがあります。
            詳しくはイベント告知時にお知らせします。</p>
        </section>
        <section id="s2_n2">
          <h2>2. できること</h2>
          <p><a href="#s3_s2_town">町</a>と<a href="#s3_n2_nation">国</a>とで、
            それぞれできる事と、コマンド類を説明します。</p>
          <section id="s3_n2_town">
          <h3>町で出来ること</h3>
            <section id="s4_n2_town_startup">
            <h4>設立と拡大</h4>
              <p>町を設立することで、区画を取得し、自由に土地を使うことができるようになります。<br/>
                Mayorは、区画を市民に売り渡したり、区画に対して用途を指定することができます。</p>
              <table id="tbl_townStartupCommand" className={styles.framed}>
                <thead>
                <tr><th scope="col">コマンド</th><th scope="col">用途</th><th scope="col">備考</th></tr>
                </thead>
                <tbody>
                <tr><td><code>/town new <i>townName</i></code></td><td>町を設立する</td>
                  <td><i>townName</i>は自由に名前を決めてください</td></tr>
                <tr><td><code>/town claim</code></td><td>立っているチャンクを取得する</td>
                  <td>町の銀行から取得コストが引き落とされます。<br/>
                    町の既存の区画と隣接している必要があります。また、他の町とは10チャンク以上離れている必要があります。</td></tr>
                </tbody>
              </table>
              <p>メイヤーはどんどん町を広げていきましょう。</p>
            </section>
            <section id="s4_n2_town_invite">
            <h4>住民の招待</h4>
              <p>1人では獲得できる区画に制限があります。（初期では上限9区画まで）<br/>
                住民を招待して町レベルを上げて、区画を広げていきましょう。</p>
              <table id="tbl_townInviteCommand" className={styles.framed}>
                <thead>
                <tr><th scope="col">コマンド</th><th scope="col">用途</th></tr>
                </thead>
                <tbody>
                <tr><td><code>/town add <i>playerName</i></code></td><td>町にプレイヤーを招待する</td></tr>
                <tr><td><code>/town kic <i>playerName</i></code></td><td>町からプレイヤーを追放する</td></tr>
                </tbody>
              </table>
            </section>
            <section id="s4_n2_town_role">
              <h4>町の経営とプレイヤー役職</h4>
              <p>町の代表者であるMayorは、アシスタントと協力して町を経営しましょう。
                町の経営とは、税の設定・区画の統治・住民の活動支援など、町に関わること幅広くに渡ります。</p>
              <table id="tbl_townRoleCommand" className={styles.framed}>
                <thead>
                <tr><th scope="col">コマンド</th><th scope="col">用途</th></tr>
                </thead>
                <tbody>
                <tr><td><code>/town rank add <i>playerName</i> <i>assistant|helper</i></code></td>
                  <td>playerを指定の役職に割り当てます</td><td></td></tr>
                <tr><td colspan="3">
                  <dl>
                    <dt><ruby>assistant<rp>（</rp><rt>アシスタント</rt><rp>）</rp></ruby></dt>
                    <dd>町の領土拡張・住民の招待 が可能な役職</dd>
                    <dt><ruby>helper<rp>（</rp><rt>ヘルパー></rt><rp>）</rp></ruby></dt>
                    <dd>住民の招待・区画の住民への販売・住民の追放 が可能</dd>
                  </dl>
                </td></tr>
                </tbody>
              </table>
            </section>
            <section id="s4_n2_town_perm">
            <h4>土地の管理</h4>
              <p>取得した土地は、町のみんなで使うことや、制限をかけて販売するなど、細かな設定をすることができます。<br/>
                初期設定では住民のブロック編集は不可となっています。町長は必要な範囲で市民へ土地の販売や、制限の解除をしてあげましょう。</p>
              <table id="tbl_townPermCommand" className={styles.framed}>
                <thead>
                <tr><th scope="col">コマンド</th><th scope="col">用途</th><th scope="col">備考</th></tr>
                </thead>
                <tbody>
                <tr><td><code>/town set perm resident on</code></td><td>町の住民が町全体で建築可能にする</td><td></td></tr>
                <tr><td><code>/plot set perm <i>on/off</i></code></td><td>今立ってる区画の建築制限の変更</td><td></td></tr>
                <tr><td><code>/plot fs <i>money</i></code></td><td>区画を住民へ販売する</td>
                  <td>moneyの金額指定を省略すると無償提供になる</td></tr>
                <tr><td><code>/plot set <i>default|arena|bank|farm|shop</i></code></td><td>区画の用途を指定する</td><td>
                  <dl>
                    <dt>default</dt><dd>初期値、用途未指定</dd>
                    <dt>arena</dt><dd>アリーナ、競技場。PvPが可能になる</dd>
                    <dt>bank</dt><dd>銀行。<code>/t deposit</code>,<code>/t withdraw</code>が使えるようになる</dd>
                    <dt>farm</dt><dd>農地。指定されたブロック以外の編集が不可になる</dd>
                    <dt>shop</dt><dd>商業区画。チェスト設置でショップ作成が簡単になる</dd>
                  </dl>
                </td></tr>
                <tr><td><code>/plot set perm <i>outsider</i> <i>destory</i> on</code></td><td>立っている区画での部外者による破壊を許可する</td>
                  <td>plotではなくtownでも指定は可能<br/>
                    <i>outsider</i>の箇所は他に以下の指定が可能
                    <dl>
                      <dt>friend</dt><dd>友達</dd>
                      <dt>resident</dt><dd>居住者</dd>
                      <dt>ally</dt><dd>(国の)同盟相手</dd>
                    </dl>
                    <i>destory</i>の箇所は他に以下の指定が可能
                    <dl>
                      <dt>build</dt><dd>建築</dd>
                      <dt>switch</dt><dd>レッドストーン回路</dd>
                      <dt>ItemUse</dt><dd>火打石・エンダーパール等</dd>
                    </dl>
                    </td></tr>
                <tr><td><code>/resident friend add <i>playerName</i></code></td><td>町や国の関係を超えた友人関係</td>
                  <td><code>/resident friend list</code>で指名リストを確認できます</td></tr>
                <tr><td><code>/plot toggle <i>fire|explosion</i></code></td><td>立っている区画での着火や爆発を制御します</td>
                  <td></td></tr>
                </tbody>
              </table>
            </section>
            <section id="s4_n2_town_cost">
            <h4>町の維持費</h4>
              <p>町は毎日維持費を支払わなければなりません。毎日正午に、町の銀行から定められた額が徴収されます。<br/>
                原資となる資金は、コマンドで銀行に預けるか、もしくは住民から税金を毎日集めることで、確保できます。</p>
              <p>維持費を支払うことができなければ、町は破産状態となり、土地を没収され、建築物などを失う可能性があります</p>
              <table id="tbl_townBankCommand" className={styles.framed}>
                <thead>
                <tr><th scope="col">コマンド</th><th scope="col">用途</th><th scope="col">備考</th></tr>
                </thead>
                <tbody>
                <tr><td><code>/town deposit <i>money</i></code></td><td>町の銀行に<i>money</i>JPを預ける</td>
                  <td>町のスポーン地点を含むホーム、または銀行plotでのみ実行可能</td></tr>
                <tr><td><code>/town toggle taxpercent</code></td><td>住民への課税方式の切り替え</td>
                  <td>市民の所持金に指定の％を掛けた額で受け取る または 固定額で受け取る</td></tr>
                <tr><td><code>/town set tax <i>num</i></code></td><td>受け取る値を設定</td>
                  <td>%モードの場合はその率（0～50）、固定額の場合はその値</td></tr>
                <tr><td><code>/town set taxpercentcap <i>money</i></code></td><td>市民1人に課される税額の上限</td>
                  <td>既定値は10,000JP</td></tr>
                <tr><td><code>/town set plottax <i>money</i></code></td><td>区画を所有する住民に課す税額を指定</td><td></td></tr>
                <tr><td><code>/town bankhisotry</code></td><td>前日から当日にかけての町の銀行の入出金履歴を閲覧できます</td><td></td></tr>
                </tbody>
              </table>
            </section>
            <section id="s4_n2_town_rupt">
              <h4>町の破綻</h4>
              <p>町の銀行残高が枯渇し、維持費の引き落としに失敗すると、<strong>破産状態</strong>になります。
                この時、3日分の維持費に相当する額がシステムから貸付けられますが、
                この貸付額を上回って維持費の徴収に失敗すると、<strong>町は削除</strong>され、建築物等がすべて没収されてしまいます。</p>
              <p>まず銀行残高の枯渇が起きないように適切に税金を設定すること、そして、残高を適正に監視してください。</p>
            </section>
          </section>
          <section id="s3_n2_nation">
            <h3>国で出来ること</h3>
            <p>国では、直接土地を取得したり、区画に対して設定をすることはできません。国を構成する町にそれらの機能は任されます。<br/>
              代わりに、複数の町が連盟でひとつの国を設立することで、互いに協力して、より大きな施設を作って共有したりすることができます。</p>
            <p>また、町同士の距離の確保について制限がありますが、同じ国の町同士ではこの制限がなくなり、近接して発展させることができます。</p>
            <section id="s4_n2_nation_startup">
              <h4>設立と拡大</h4>
              <p>まず町が存在していることが前提条件となります。
                どの国にも属していない町の町長が、町の銀行預金を使用して国を設立することができます。
                国の設立コストは1,000JPです。</p>
              <p>国の領土拡大には、町自体の領地を拡大する、あるいは、他の町を国に招待することが必要です。</p>
              <p>他の国と同盟関係を結び、区画を共有することなどができます。</p>
              <table id="tbl_nationStartupCommand" className={styles.framed}>
                <thead>
                <tr><th scope="col">コマンド</th><th scope="col">用途</th><th scope="col">備考</th></tr>
                </thead>
                <tbody>
                <tr><td><code>/nation new <i>nationName</i></code></td><td>国を設立する</td>
                  <td><i>nationName</i>は自由に名前を決めてください</td></tr>
                <tr><td><code>/nation add <i>townName</i></code></td><td>他の町を国に招待する</td>
                  <td><i>townName</i>は相手方の町の名前を指定してください</td></tr>
                <tr><td><code>/nation ally add <i>nationName</i></code></td><td>他の国との同盟関係を申し入れる</td><td></td></tr>
                </tbody>
              </table>
            </section>
            <section id="s4_n2_nation_cost">
              <h4>国の維持費</h4>
              <p>町と同様、毎日維持費が掛かります。維持費は<a href="#tbl_levels">後述のレベルによって</a>変動します</p>
              <p>国の銀行へ直接JPを預け入れたり、配下の町から国税を徴収して、運用していきましょう。</p>
              <table id="tbl_nationTaxCommand" className={styles.framed}>
                <thead>
                <tr><th scope="col">コマンド</th><th scope="col">用途</th><th scope="col">備考</th></tr>
                </thead>
                <tbody>
                <tr><td><code>/nation deposit <i>money</i></code></td><td>国の銀行にJPを払い込みます</td>
                  <td>bankに設定されているplotでのみ操作可能</td></tr>
                <tr><td><code>/nation toggle taxpercent</code></td><td>町への課税方式の切り替え</td>
                  <td>町の銀行預金残高に指定の％を掛けた額で受け取る または 固定額で受け取る</td></tr>
                <tr><td><code>/nation set tax <i>num</i></code></td><td>受け取る値を設定</td>
                  <td>%モードの場合はその率（0～50）、固定額の場合はその値</td></tr>
                <tr><td><code>/nation set taxpercentcap <i>money</i></code></td><td>町に課される税額の上限</td>
                  <td></td></tr>
                </tbody>
              </table>
            </section>
          </section>
        </section>
        <section id="s2_n3">
          <h2>3. レベル</h2>
          <p>町と国にはレベルがあります。<br/>
            町と国は人口に応じてレベルが設定されます</p>
          <p>レベルによって取得できる区画数が変動しますが、区画数が増えると維持費にも影響します。<br/>
            町長や国の管理者は、アシスタントと共に税金や区画を手放す等の調整もして、うまく運用しましょう。
            （<a href="#s4_n2_town_cost">町の維持費</a></p>
          <table id="tbl_levels" className={styles.framed}>
            <thead>
            <tr><th scope="col">レベル</th><th scope="col">町の到達条件</th><th scope="col">国の到達条件</th></tr>
            </thead>
            <tbody>
            <tr><td>Lv.1</td>
              <td><ul><li>必要人数：1人</li><li>上限区画数：9</li><li>アウトポスト上限数：1</li></ul></td>
              <td><ul><li>必要人数：20人</li><li>維持費：2,000JP</li><li>管理者プレフィックス：(青)#</li></ul></td></tr>
            <tr><td>Lv.2</td>
              <td><ul><li>必要人数：3人</li><li>上限区画数：20</li><li>アウトポスト上限数：2</li><li>町長プレフィックス：(白)＠</li></ul></td>
              <td><ul><li>必要人数：30人</li><li>維持費：3,000JP</li><li>管理者プレフィックス：(青)##</li></ul></td>
            </tr>
            <tr><td>Lv.3</td>
              <td><ul><li>必要人数：8人</li><li>上限区画数：40</li><li>アウトポスト上限数：4</li><li>町長プレフィックス：(白)＠＠</li></ul></td>
              <td><ul><li>必要人数：40人</li><li>維持費：4,000JP</li><li>管理者プレフィックス：(青)###</li></ul></td>
            </tr>
            <tr><td>Lv.4</td>
              <td><ul><li>必要人数：15人</li><li>上限区画数：100</li><li>アウトポスト上限数：8</li><li>町長プレフィックス：(白)＠＠＠</li></ul></td>
              <td><ul><li>必要人数：50人</li><li>維持費：5,000JP</li><li>管理者プレフィックス：(赤)#</li></ul></td>
            </tr>
            <tr><td>Lv.5</td>
              <td><ul><li>必要人数：30人</li><li>上限区画数：144</li><li>アウトポスト上限数：12</li><li>町長プレフィックス：(青)＠</li></ul></td>
              <td rowSpan={2}>国の上限レベルはLv.4</td>
            </tr>
            <tr><td>Lv.6</td>
              <td><ul><li>必要人数：50人</li><li>上限区画数：288</li><li>アウトポスト上限数：20</li><li>町長プレフィックス：(青)＠＠</li></ul></td>
            </tr>
            </tbody>
          </table>
        </section>
        <section id="s2_link">
          <h2>関連リンク</h2>
            <nav>
              <ul>
                <li><a href="./RenewGuid">23年10月9日更新情報</a></li>
                <li><a href="./CitizenGuid">一般住民向けガイド</a></li>
              </ul>
            </nav>
        </section>
      </main>
    </article>
    )
}

export default MayorGuid
