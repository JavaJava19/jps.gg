import { Modal } from '@mui/material'
import React from 'react'
import style from "../../css/modal.module.css"
import ImageCather from './ImageCather'

const ModalImage = ({ show, setShow, imagePath }) => {
    return (
        <Modal open={show} onClose={() => setShow(false)} className={style.ModalWindow}>
            <div className={style.ModalContent}>
                <ImageCather path={imagePath} className={style.ModalImage}/>
            </div>
        </Modal>
    )
}

export default ModalImage
