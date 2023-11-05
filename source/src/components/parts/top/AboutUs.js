import React from 'react'
import style from "../../../css/toppage.module.css";

const AboutUs = () => {
    return (
        <section className={style.AboutUs}>
        <section className={style.AboutUsContent}>
            <h1>Japan PvP Server (JPS) へようこそ</h1>
            <p>JPSは、Discordサーバーを中心に、24時間常時開放のMinecraftサーバーなどで形成されているコミュニティです</p>
            <p>コミュニティの核は、<ruby>あかさん<rp>(</rp><rt>az_aka</rt><rp>)</rp></ruby>
                & <ruby>あおさん<rp>(</rp><rt>az__ao</rt><rp>)</rp></ruby>の二人で、
                毎週2回以上の視聴者参加型Minecraftイベント企画をYouTubeで配信しています。</p>
            <section>
                <h2>Discordサーバー</h2>
                <p><a href={"https://discord.app/"}>Discord</a>は無料で利用可能なコミュニケーションアプリです。ブラウザ版・スマホアプリ版が存在しています。<br/>
                   <a href={"https://discord.gg/jps"}><img
                       src="https://user-images.githubusercontent.com/64903817/273965000-c2fc740c-4dcc-4409-a036-3df513d01549.png"
                       alt="Discord" height="24px" style={{verticalAlign:"text-bottom",marginRight:"5px"}}/>JPS参加型サーバへ参加</a>してください</p>
            </section>
            <section>
                <h2>Minecraftサーバー</h2>
                <p>JPSのMinecraftサーバーは、Java版に限らず、統合版（Switch,PS5他）も参加可能！</p>
                <p>24時間常時開放のサーバーには、各種ミニゲーム（CatchTheWool,BedWars,ThePit,Diggerなど）と、サバイバルサーバ群が用意されています。<br/>
                    <a href={"/game"}>ミニゲーム等の詳細</a>もご覧ください</p>
            </section>
            <section>
                <h2>YouTubeチャンネル</h2>
                <p>あか・あおの2名を中心に、定期開催イベントで配信をしています。<br/>たまに朝活や深夜配信も？</p>
                <p><a href={"https://www.youtube.com/@jpsgg"}>マイクラ参加型[じゃばじゃば]チャンネル</a>をチェック！</p>
            </section>
            <section>
                <h2>TikTokチャンネル</h2>
                <p><a href={"https://www.tiktok.com/@jpsgg"}>JPSのTikTokアカウント</a>では、次回イベントの告知動画などをアップしています</p>
            </section>
        </section>
        </section>
    )
}

export default AboutUs
