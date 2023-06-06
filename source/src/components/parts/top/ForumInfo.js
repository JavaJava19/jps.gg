import React, { useState } from 'react'
import style from "../../../css/toppage.module.css";
import LaunchIcon from '@mui/icons-material/Launch';
import ModalImage from '../../util/ModalImage';
import ImageCather from '../../util/ImageCather';

const ForumInfo = ({ data }) => {
    const [modal, setModal] = useState(false)
    return (
        <div className={style.ForumInfo}>
            <div className={style.ForumInfoTitleLine}>
                <div className={style.ForumTitle}>{data.title}</div>
                <div className={style.ForumDate}>{data.date}</div>
            </div>
            <div className={style.ForumContentBox}>
                <div className={style.ForumContent}>
                    {data.content}
                    {function () {
                        if (data.image !== undefined) {
                            return (
                                <>
                                <div onClick={()=> setModal(true)}>
                                    <ImageCather path={data.image} className={style.ContentImage}/>
                                </div>
                                <ModalImage show={modal} setShow={setModal} imagePath={data.image} />
                                </>
                            )
                        }
                    }()}
                </div>
                <div className={style.ForumContribute}>
                    <div>
                        <img src={data.skin} className={style.SkinImage} alt="" />
                    </div>
                    投稿者: {data.contribute}
                    {function () {
                        if (data.link !== undefined) {
                            return (
                                <div className={style.ForumLinkBox}><a className={style.ForumLink} href={data.link}>外部リンク<LaunchIcon sx={{ fontSize: 12 }} /></a></div>
                            )
                        }
                    }()}
                </div>
            </div>

        </div>
    )
}

export default ForumInfo
