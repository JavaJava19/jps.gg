import React from 'react'
import style from "../../../css/footer.module.css"
import { BsTwitter, BsYoutube, BsDiscord } from "react-icons/bs"

const Footer = () => {

  return (
    <div className={style.FooterField}>
      <div className={style.FooterLinkBox}>
        <div className={style.FooterLink}>
          <a href="https://twitter.com/az_jps"><BsTwitter style={{ color: "rgb(79, 181, 240)" }} /></a>
        </div>
        <div className={style.FooterLink}>
          <a href="https://www.youtube.com/@jpsgg"><BsYoutube style={{ color: "red" }} /></a>
        </div>
        <div className={style.FooterLink}>
          <a href="https://discord.gg/jps"><BsDiscord style={{ color: "rgb(119, 120, 211)" }} /></a>
        </div>
      </div>
      <div className={style.CopyRight}>
        Minecraft は Mojang AB の登録商標です。本サーバーは Mojang社から承認されておらず、Mojang社とは関係ありません。<br />
        © 2023 Japan PVP Server
      </div>
    </div>
  )
}

export default Footer
