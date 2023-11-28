import React from 'react'
import style from "../../css/read.module.css"
import { Link } from 'react-router-dom'
import UpdateOgp from "../util/UpdateOgp"

const Read = () => {

    //const navigate = useNavigate();

    return (
        <>
        <UpdateOgp pageMeta={
          {
            title: '利用規約｜JapanPvPServer',
            description: 'JPSの利用規約を掲載しています',
            url: 'https://jps.gg/read'
          }
        }/>
        <div className={style.ReadField}>
            <article className={style.ReadContentField}>
            <section className={style.Content}>
                <h2>利用規約</h2>
                <header>
                    <p>初版<br/><time dateTime={"2023-10-01"}>2023年10月1日</time></p>
                </header>
                <section>
                    <p>この利用規約(以下，「本規約」といいます。)は，JapanPvPServer(以下，「当サーバー」といいます。)
                    が提供する全てのサービス(以下，「本サービス」といいます。)の利用条件を定めるものです。</p>
                    <p>本サービスにアクセスするプレイヤーの皆様(以下，「ユーザー」といいます。)には，本規約に従って，本サービスをご利用頂きます。</p>
                </section>
                <section>
                    <h3>第1条(適用)</h3>
                    <ol>
                        <li>本規約は，ユーザーと当サーバーとの間の本サービスの利用に関わる一切の関係に適用されるものとします。</li>
                        <li>当サーバーは本サービスに関し，本規約のほか，ご利用にあたってのルール等，各種の定め(以下，「個別規定」といいます。)
                            をすることがあります。これら個別規定はその名称のいかんに関わらず，本規約の一部を構成するものとします。</li>
                        <li>本規約の規定が，個別規定の規定と矛盾する場合には，個別規定において特段の定めなき限り，個別規定の規定が優先されるものとします。</li>
                    </ol>
                </section>
                <section>
                    <h3>第2条(利用規約の変更)</h3>
                    <ol>
                        <li>当サーバーは必要と判断した際にユーザーの承諾なしに本規約の変更ができるものとします。</li>
                        <li>本サービスの利用条件は変更後の本規約に基づくものとします。</li>
                        <li>変更後の本規約は，別途明示した場合を除き，当サーバーが発表した時点から効力を生じるものとします。</li>
                    </ol>
                </section>
                <section>
                    <h3>第3条(本サービスの停止及び変更等)</h3>
                    <ol>
                        <li>当サーバーはユーザーへの事前の通知なく本サービスの全部，または一部の提供を停止または変更できるものとします。</li>
                        <li>当サーバーは本サービスの変更等により，ユーザーまたは他者が被ったいかなる損害についても一切の責任を負わないものとします。</li>
                    </ol>
                </section>
                <section>
                    <h3>第4条(本サービスを利用できる条件)</h3>
                    <ol>
                        <li><q>MINECRAFT 利用規約および エンド ユーザー使用許諾契約書</q>（<a href="https://www.minecraft.net/ja-jp/terms/r3"
                            target="_self">https://www.minecraft.net/ja-jp/terms/r3</a>）を順守すること</li>
                        <li>13歳以上であること(Discordのみ)</li>
                    </ol>
                </section>
                <section>
                    <h3>第5条(保証の否認および免責事項)</h3>
                    <ol>
                        <li>当サーバーは，本サービスに事実上または法律上の瑕疵（安全性，信頼性，正確性，完全性，有効性，セキュリティなどに関する欠陥，
                            エラーやバグ，権利侵害などを含むが、これらに限定されない。）がないことを明示的にも黙示的にも保証しておりません。</li>
                        <li>当サーバーは，本サービスに起因してユーザーに生じたあらゆる損害について一切の責任を負いません。</li>
                        <li>当サーバーは，ユーザーと他のユーザーまたは第三者との間において生じた取引，連絡または紛争等について一切責任を負いません。</li>
                    </ol>
                </section>
                <section>
                    <h3>第6条(権利義務の譲渡の禁止)</h3>
                    <ol>
                       <li>ユーザーは，当サーバーの書面による事前の承諾なく，利用契約上の地位または本規約に基づく権利もしくは義務を，第三者に譲渡または担保に供することはできません。</li>
                    </ol>
                </section>
                <section>
                    <h3>第7条(個人情報の取り扱い)</h3>
                    <ol>
                        <li>本サービスの利用によって取得する個人情報については，当サーバー「<Link to={"/prvplc"}>プライバシーポリシー</Link>」に従い適切に取り扱うものとします。</li>
                    </ol>
                </section>
                <section>
                    <h3>第8条(著作権および二次創作)</h3>
                    <section>
                        <h4>第1項(著作権)</h4>
                        <ol>
                            <li>当サーバーの生成した情報，写真，テクスチャ，その他の著作物は，当サーバーもしくは著作者または著作権者に帰属するものとします。</li>
                            <li>ユーザーは当サーバー著作物について複製，転用，公衆送信，譲渡，翻案，翻訳等の著作物，商標権などを侵害する行為を行ってはならないものとします。</li>
                            <li>ユーザーは，チャット発言やDiscord等へ投稿するコンテンツに対して，ユーザーが第三者の権利を侵害していないことに責任を持つ。
                                また，当該コンテンツに対する著作権はユーザに留保されるものと認める。</li>
                        </ol>
                    </section>
                    <section>
                        <h4>第2項(二次創作)</h4>
                        <ol>
                            <li>個人，または法人格のない団体は，非営利目的に限り，当サーバーを題材とした二次創作物の制作および公開をすることができます。</li>
                            <li>当サーバーに関する二次創作に関して制作・公開する際に以下を順守していただきます。<ol>
                                <li>投稿時には，本サービスのウェブURLのリンクを記載する，「#JPS」のハッシュタグをつける等，本サービスとわかるように記載してください。</li>
                                <li>他人の作品なども互いに尊重してください。</li></ol></li>
                            <li>当サーバーに関する二次創作に関して以下のような成果物は，制作・公開することはできません。<ol>
                                <li>当サーバーや本サービスのイメージを著しく損なうもの。</li>
                                <li>当サーバーや本サービス，または第三者の名誉・社会的信用を傷つけるおそれのあるもの。</li>
                                <li>公序良俗に反するもの。（猥褻，残虐・暴力的，犯罪行為を助長する表現など）</li>
                                <li>特定の思想・信条または，宗教的，政治的発言を目的とした表現を含むもの。</li>
                                <li>他者の権利を侵害する，または侵害するおそれのあるもの。</li>
                                <li>本規約（個別規約を含む）に違反するもの</li>
                                <li>その他，当サーバーが不適切であると判断したもの。</li></ol></li>
                        </ol>
                    </section>
                </section>
                <section>
                    <h3>第9条(禁止行為)</h3>
                    <ol>
                        <li>ユーザーは本サービスの利用にあたり，以下の各項に定められる行為をしてはなりません。</li>
                        <li>本条への違反が確認された場合は，当規約第10条に定める措置をユーザーに対して行います。</li>
                    </ol>
                    <section>
                        <h4>第1項(迷惑行為)</h4>
                        <ol>
                            <li>迷惑・妨害・誹謗中傷・暴言・脅迫等，他ユーザーが不快に思う行為</li>
                            <li>残虐またはわいせつなものや，反社会的な政治や宗教思想を示唆するものを作成・使用する行為</li>
                            <li>金銭取引・要求・命令・過度な宣伝行為</li>
                            <li>本サービスに規定以外の方法で接続する，または接続させる行為</li>
                            <li>ルール違反に反応する行為または助長する行為</li>
                            <li>当サーバに対して，悪質または虚偽の報告をする行為</li>
                            <li>当サーバーが許可を与えていないコマンド(/op /pl /give等)を使用する行為，および使用を試みる行為</li>
                        </ol>
                    </section>
                    <section>
                        <h4>第2項(不正行為)</h4>
                        <ol>
                            <li>サーバールールを違反する行為</li>
                            <li>正規のアカウント以外で接続する行為</li>
                            <li>盗難アカウントを使用する行為</li>
                            <li>複数アカウントを作成，使用する行為</li>
                            <li>「<a href="https://www.minecraft.net/ja-jp/terms/r3">MineCraft 利用規約および エンド ユーザー使用許諾契約書</a>」に違反する行為</li>
                            <li>故意にプラグイン等を故障させる行為</li>
                            <li>バグなど当サーバが想定していない事象を利用して，アイテムやお金といったサーバ内資産を増加させる行為，および他ユーザに推奨する行為<ul>
                                <li>バグなどを発見した際には直ちに当サーバへ報告すること</li></ul></li>
                            <li>不正ツール(チート・ハッククライアント・透過テクスチャ・マクロ・連打ツール・自動化ツール・不正なリソースパック等)を使用する行為</li>
                            <li>他ユーザーよりも，有利にゲームを進めるMOD等(他ユーザーやエンティティの体力や位置を表示させる等)を使用する行為</li>
                            <li>当サーバーが定める以下の使用可能MOD以外を使用する行為<ol>
                                <li>クライアント(Badlion Clientなど)</li>
                                <li>前提MOD(MinecraftForge，fabric など)</li>
                                <li>軽量MOD(OptiFine，Sodium など)</li>
                                <li>影MOD(Shaders Mod，Sonic Ether's Unbelievable Shaders など)</li>
                                <li>ユーザ自身の装備・エフェクトのステータスを表示するMOD(Armor Status，Effect Status，Hudpixel，5zigなど)</li>
                                <li>ReplayMOD</li></ol></li>
                        </ol>
                    </section>
                    <section>
                        <h4>第3項(負荷行為)</h4>
                        <ol>
                            <li>メンテナンス中など，当サーバーがサーバーを正式に開放していない状態でサーバーに連続で接続する行為</li>
                            <li>本サービスのサーバーまたはネットワークの機能の破壊や妨害をする行為，またはそれらを試みる行為</li>
                            <li>DDoS攻撃，DoS攻撃，BotAttack攻撃など，サーバーに意図的に負荷を与える行為</li>
                            <li>スパム行為（チャットの大量発言やコマンドの連続実行）</li>
                            <li>上記に限らず、不正アクセス禁止法に定められる違法行為</li>
                        </ol>
                    </section>
                    <section>
                        <h4>第4項(その他)</h4>
                        <ol>
                            <li>当サーバーの運営チームからの指示に従わない行為</li>
                            <li>当サーバーへの寄付によって入手したアイテムを売買する行為</li>
                            <li>当サーバーへの攻撃的活動とみなされる行為，及びそれらを誤認させる行為</li>
                            <li>前項を見逃しているとみなされる行動，及びそれらを誤認させる行為</li>
                            <li>個人を特定できる情報(本名・居住地・電話番号・メールアドレス・IPアドレスなど)を発言，または他のユーザに要求する行為</li>
                            <li>当サーバーの正常な運用を妨げる行為</li>
                            <li>その他，当サーバーが不適切であると判断した行為</li>
                        </ol>
                    </section>
                </section>
                <section>
                    <h3>第10条(利用制限・処罰および登録抹消)</h3>
                    <ol>
                        <li>当サーバーは，ユーザーが以下のいずれかに該当する場合には，事前の通知なく，ユーザーに対して，
                            本サービスの全部もしくは一部の利用を制限し，またはユーザーとしての登録を抹消することができるものとします<ul>
                            <li>本規約のいずれかの条項に違反した場合</li>
                            <li>その他，当サーバーが本サービスの利用を適当でないと判断した場合</li></ul></li>
                        <li>処罰の種類は以下のものとします<ol>
                            <li>コンテンツの統計・成果の初期化，取り消しまたは無効化</li>
                            <li>イベントへの参加権剥奪</li>
                            <li>警告</li>
                            <li>キック</li>
                            <li>無期・有期 ミュート</li>
                            <li>無期・有期 BAN</li>
                            <li>無期・有期 IP-BAN</li>
                            </ol></li>
                        <li>当サーバーは処罰に関して以下の情報を開示する義務を負いません<ol>
                            <li>処罰を与えた者の名前</li>
                            <li>処罰の内容の詳細</li>
                            <li>その他，当サーバーが開示する必要性がないと判断したもの</li>
                            </ol></li>
                        <li>当サーバーは，本条に基づく当サーバーの処罰行為によりユーザーに生じた一切の損害について，責任を負いません。</li>
                    </ol>
                </section>
                <section>
                    <h3>第11条(準拠法・裁判管轄)</h3>
                    <ol>
                        <li>本規約の解釈にあたっては，日本法を準拠法とします。</li>
                        <li>本サービスに関して紛争が生じた場合には，当サーバーの所在地を管轄する裁判所を専属的合意管轄裁判所とします。</li>
                    </ol>
                </section>
                <footer>
                    <table>
                        <caption>改版履歴</caption>
                        <thead>
                            <tr><th scope={"col"}>版</th><th scope={"col"}>公開日</th><th scope={"col"}>適用日</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>初版</td>
                                <td><time dateTime={"2023-09-01"}>23/09/01</time></td><td><time dateTime={"2023-10-01"}>23/10/01</time></td>
                            </tr>
                        </tbody>
                    </table>
                </footer>
            </section>
            </article>
        </div>
        </>
    )
}

export default Read
