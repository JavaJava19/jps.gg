import React from 'react'
import style from "../../css/toppage.module.css";
import Slider from '../parts/top/Slider';
import WelcomePops from '../parts/top/WelcomePops';
import TopForum from '../parts/top/TopForum';
const TopPage = () => {

  return (
    <>
      <div className={style.SlideField}>
        <Slider props={<WelcomePops/>}/>
      </div>
      <div className={style.TopForumField}>
        <TopForum />
      </div>
    </>
  )
}

export default TopPage
