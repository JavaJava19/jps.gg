import React from 'react'
import style from "../../css/read.module.css"
const PlvPlc = () => {
    return (
        <>
        <UpdateOgp pageMeta={
          {
            title: 'プライバシーポリシー | JapanPvPServer',
            description: 'JPSのプライバシーポリシーを掲載しています',
            url: 'https://jps.gg/prvplc'
          }
        }/>
        <div className={style.ReadField}>
            <div className={style.ReadContentField}>
            <section className={style.Content}>
                <h2>プライバシーポリシー</h2>
                <section>
                    <p>このプライバシーポリシーは、JapanPvPServerの提供するウェブサイト、
                       Minecraftサーバー、Discordサーバー（以下まとめて、「当サービス」といいます）を使用する際に、
                       当サービスが利用者から収集または提供を受ける情報の、
                       使用または開示についての、当サービスのポリシーと手順を説明し、
                       利用者のプライバシーに関わる権利と、法律に基づく利用者情報の保護の方法について説明するものです。</p>
                    <p>当サービスは、利用者の個人データを使用して、サービスを提供および改善します。
                       利用者は、本ポリシーに従って、情報を収集および使用することに同意するものとします。</p>
                </section>
                <section>
                    <h3>用語の定義</h3>
                    <p>本プライバシーポリシーにおいて用いる用語の定義は以下の通りです。</p>
                    <dl>
                        <dt>利用者</dt><dd>当サービスにアクセスする個人または法人あるいは団体のこと</dd>
                        <dt>Cookie</dt><dd>Webサイトの閲覧にあたり利用者のブラウザに保存される少量のデータファイルのこと</dd>
                        <dt>個人データ</dt><dd>特定された、あるいは特定可能な個人に関連する情報のこと</dd>
                        <dt>使用状況データ</dt><dd>当サービスの利用によって自動的に収集されるデータのこと（例えば、当サービスへのアクセス時刻の記録）</dd>
                    </dl>
                </section>
                <section>
                    <h3>個人データの収集と使用</h3>
                    <p>収集されるデータの種類</p>
                    <section>
                        <h4>個人データ</h4>
                        <p>当サービスを使用している間、利用者から次に掲げるデータを収集いたします。</p>
                        <dl>
                            <dt>使用状況データ</dt>
                                <dd>使用状況データは、当サービスの利用時に自動的に収集されます。
                                使用状況データには、利用者のIPアドレス、ブラウザの種類やバージョン、
                                アクセスした当サービスのページ、アクセスの日時、当サービスの滞在時間等が含まれます。</dd>
                            <dt>個人の特定に関わるデータ</dt>
                                <dd>個人の特定に関わるデータを収集する際は、収集する旨と、データの利用目的を明示します。
                                データの取り扱いは本ポリシーに準拠しますが、明示した項目が本ポリシーに優先されます。</dd>
                        </dl>
                    </section>
                    <section>
                        <h4>個人データの使用</h4>
                        <p>当サービスでは、以下の目的で個人データを使用する場合があります。</p>
                        <ul>
                            <li>当サービスの使用状況を管理し、当サービスの提供を維持するため</li>
                            <li>当サービスについていわゆるマーケティング行為をするため</li>
                            <li>利用者からの情報照会に応答するため</li>
                            <li>その他、個人を特定しない形での統計資料とするため</li>
                        </ul>
                        <p>当サービスは、以下の状況で個人データを他者と共有する場合があります。</p>
                        <ul>
                            <li>サービスプロバイダーに対して、当サービスの使用状況の管理分析をするため</li>
                            <li>アフェリエイトサービスに対して、アフェリエイトの提供を受けるため。ただし、当該サービスは、本ポリシーに則ります</li>
                            <li>ビジネスパートナーに対して、パートナーが提供するサービスを提供するため</li>
                            <li>他の利用者に対して、公開された領域（ブログのコメント欄等）でやり取りされた情報</li>
                            <li>その他の場合において、利用者から同意を得た範囲の目的のため</li>
                        </ul>
                    </section>
                    <section>
                        <h4>個人データの保持</h4>
                        <p>当サービスは、本ポリシーで定める使用目的に必要な期間のみ、利用者の個人データを保持します。</p>
                    </section>
                    <section>
                        <h4>個人データの転送</h4>
                        <p>個人データを含む利用者の情報は、当サービスの運用に関わる当事者の所在地にて処理されます。
                        すなわち、利用者の居所とは異なる法規の適用される場所で処理される可能性を含みます。</p>
                        <p>当サービスは、個人データを含む利用者の情報が安全に処理されるよう、
                        合理的に必要な措置を講じ、不要なリスクに曝されることが無いように対応します。</p>
                    </section>
                    <section>
                        <h4>個人データの開示</h4>
                        <p>当サービスは、本ポリシーに定める目的の外に、以下の場合において保持する個人データを開示することがあります。</p>
                        <ul>
                            <li>法律に基づく公的機関からの要求に基づく開示</li>
                            <li>当サービスが負う法的義務の遵守</li>
                            <li>当サービスにおける不正行為の調査および防止</li>
                            <li>当サービスの利用者または第三者の安全確保</li>
                            <li>当サービスまたは利用者の法的責任からの保護</li>
                        </ul>
                    </section>
                </section>
                <section>
                    <h3>個人データのセキュリティ</h3>
                    <p>利用者の個人データのセキュリティは当サービスにとって重要な事項です。</p>
                    <p>一方で、インターネットを介した送受信や、電子ストレージの安全性は100%とは言い切れません。
                    当サービスにおいて、個人データの保持にあたり適切な保護に努めますが、これは絶対的な保証ではありません。</p>
                </section>
                <section>
                    <h3>子どものプライバシー</h3>
                    <p>当サービスは13歳未満の利用者（以下、子ども）を想定していません。</p>
                    <p>子どもから故意に個人データを収集することはありません。
                    あなたが子どもの親権者等や保護者であり、子どもが個人データを提供したことに気付いた場合、
                    後述の問い合わせ窓口にご連絡ください。 対象となる子どもの個人データを削除する措置を講じます。</p>
                </section>
                <section>
                    <h3>他のサイトへのリンク</h3>
                    <p>当サービスには、当サービス以外のウェブサービス（以下、第三者サイト）へのリンクが含まれている場合があります。</p>
                    <p>第三者サイトへのリンクを押下すると、当該第三者サイトへ遷移します。 第三者サイトには、本ポリシーは適用されません。
                    当サービスは、リンクした第三者サイトのコンテンツ・プライバシーポリシー・慣行は管理しておらず、
                    利用者に対して責任を負いません。</p>
                </section>
                <section>
                    <h3>本ポリシーの変更</h3>
                    <p>当サービスは、本ポリシーを随時に更新することがあります。</p>
                    <p>このページに新しいプライバシーポリシーを掲載することで、告知します。
                    変更にあたっては、本ポリシーの下部にある「最終更新日」を更新します。
                    変更された本ポリシーは、このページに掲載された時点から有効になります。</p>
                    <p>変更後の本ポリシーの適用を拒否される場合は、
                    保持する個人データを削除する措置を講じますので、後述の問い合わせ窓口にご連絡ください。</p>
                </section>
                <section>
                    <h3>問い合わせ窓口</h3>
                    <p>本ポリシーについてご不明な点がある場合、または保持する個人データの開示や削除のご要望は、以下にお問い合わせください</p>
                    <address>メール： jpsgg[at]jps.gg<br/>
                        [at]を@に置き換えてください</address>
                </section>
                <section>
                    <h3>法的事項</h3>
                    <p>当サービスは日本国にて運用されています。
                    ついては、日本国法（個人情報保護法や、不正アクセス禁止法など。これらに限られません）の適用を受けます。</p>
                    <p>当サービスと紛争が生じた場合、福岡地方裁判所を第一審の専属的合意管轄裁判所とします。</p>
                </section>
                <section>
                （<time datetime="2023-06-07">2023年6月7日</time> 初版策定・適用）
                </section>
            </section>
            </div>
        </div>
        </>
    )
}

export default PlvPlc
