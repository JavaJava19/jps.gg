import { useState, useEffect } from "react"


const fetchIP = {
    local: process.env.REACT_APP_LOCAL_IP,
    global: process.env.REACT_APP_GLOBAL_IP,
    domain: process.env.REACT_APP_DOMAIN
}
export default function useFetchAddress() {
  // 初期状態は空の定数`ip`を用意
  const [ip, setIp] = useState()
  
  const getIp = async () => {
    // fetchを使ってipapi.coに接続
    const response = await fetch("https://ipapi.co/json/")
    const data = await response.json()
    // 取得したIPアドレスを、定数`ip`にセット
    setIp(data.ip)
  }

  // 関数`getIP`を初回レンダリングでのみ発動させる
  useEffect(() => {
    getIp()
  }, [])
  if(ip !== undefined)
  return ip === fetchIP.global ? fetchIP.local : fetchIP.domain;
}