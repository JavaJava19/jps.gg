import React from 'react'
import style from "../../css/toppage.module.css";
import Slider from '../parts/top/Slider';
import WelcomePops from '../parts/top/WelcomePops';
import TopForum from '../parts/top/TopForum';
import AboutUs from '../parts/top/AboutUs';
import UpdateOgp from '../util/UpdateOgp';

const TopPage = () => {

  return (
    <UpdateOgp pageMeta={
      {
        title: 'Top | JapanPvPServer',
        description: 'Welcome to JPS! DiscordとMinecraftのコミュニティサーバーへようこそ',
        url: 'https://jps.gg/'
      }
    } />
    <main>
      <div className={style.SlideField}>
        <Slider props={<WelcomePops/>}/>
      </div>
      <div className={style.TopForumField}>
        <TopForum />
      </div>
      <div className={style.AboutUsField}>
        <AboutUs />
      </div>
    </main>
  )
}

export default TopPage
