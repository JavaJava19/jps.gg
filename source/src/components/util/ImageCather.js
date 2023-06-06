import React from 'react'
import { useImageCatcher } from './Fetch'

const ImageCather = ({path, className}) => {
    const url = useImageCatcher(path);
  return <img src={url} className={className} alt="" />
}

export default ImageCather
