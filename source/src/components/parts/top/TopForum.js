import React from 'react'
import style from "../../../css/toppage.module.css";
import ForumInfo from './ForumInfo';
import CalendarImg from "../../../images/calendar/now.png";

const TopForum = () => {
    const json = [
        {
            title: "ホームページ開設",
            date: "2023-06-07-21:01",
            contribute: "Kaogon",
            skin: "https://api.mineskin.org/render/head?url=http://textures.minecraft.net/texture/d9b592967ff2e3abcab86b592119f2a4cae2764479b0cbe473b70f1aa9ba4e8",
            content: "ホームページを開設しました！\n最新の情報の取得や、フォーラムでのコミュニティ利用\nプレイヤーの戦績ランキングなどを見るのにご活用ください！"
        },
        {
            title: "Youtubeチャンネル登録者数1000人突破！",
            date: "2023-05-15-0:31",
            contribute: "Kaogon",
            skin: "https://api.mineskin.org/render/head?url=http://textures.minecraft.net/texture/d9b592967ff2e3abcab86b592119f2a4cae2764479b0cbe473b70f1aa9ba4e8",
            content: "この度Youtubeチャンネル登録者が1000人を超えました！\nみなさんのご協力のおかげです！本当にありがとうございます！\nこれからもJPSをよろしくお願いします！"
        },
    ]
    return (
        <div className={style.TopForum}>
            <img src={CalendarImg} alt={'今月のイベントカレンダー'} className={style.topEventCalendar}/>

            <div className={style.ForumInfo}>

            </div>
            {json.map(data => (
                <ForumInfo data={data} key={data.title}/>
            ))}
        </div>
    )
}

export default TopForum
