import React from 'react'
import { useNavigate } from 'react-router-dom';

const LoginStatusParts = ({ playerdata, style , headStyle, removeToken}) => {

  const navigate = useNavigate();
  function getHead() {
    if (playerdata.skinURL === undefined) {
      return "https://api.mineskin.org/render/head?url=https://s.namemc.com/i/bc68bf289576a899.png";
    } else {
      return `https://api.mineskin.org/render/head?url=${playerdata.skinURL}`;
    }
  }

  function logOut(){
    removeToken()
    navigate("/")
    
  }
  if (playerdata !== undefined)
    return (
      <div style={style} onClick={()=> logOut()}>
        <div style={{ position: "relative" }}>
          <div style={
            {
              position: "absolute",
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              backgroundColor: "white",
              right: "40px",
              top: "-52px",
              zIndex: "-10",
              border: "2px solid rgb(191, 192, 194)"
            }}>
            <img src={getHead()} alt="" style={headStyle} />

          </div>
          <div style={
            {
              color: "black",
              fontSize: "12px",
              width: "140px",
              backgroundColor: "white",
              textAlign: "center",
              borderRadius: "10px",
              marginTop: "-5px",
              border: "2px solid rgb(191, 192, 194)"
            }}>
            {playerdata.name}
          </div>
        </div>

      </div>
    )
}

export default LoginStatusParts
