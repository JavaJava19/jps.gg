import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import useFetchAddress from '../util/FetchAddress';
import { login } from '../util/LoginUtil';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [cookie, setCookie, removeCookie] = useCookies(["token"]);
  const sessionStorage = window.sessionStorage.getItem("token");
  const navigate = useNavigate();
  const fetchAddress = useFetchAddress();
  const [id, setId] = useState();
  const [pass, setPass] = useState();
  const [use, setUse] = useState(false);
  const [error, setError] = useState({
    id: "",
    pass: ""
  })

  function Login(e) {
    if (fetchAddress === undefined) return;
    e.preventDefault();
    if (id === "") {
      setError({
        id: "IDが入力されていません",
        pass: error.pass
      })
      return;
    }
    if (pass === "") {
      setError({
        id: error.id,
        pass: "パスワードが入力されていません"
      })
      return;
    }
    const setSession = window.sessionStorage.setItem;
    login(fetchAddress, {
      mcid: id,
      pass: pass,
    }, use ? setCookie : setSession, setError);

  }

  useEffect(()=>{
    if(cookie.token !== undefined || sessionStorage !== null){
      navigate("/")
    }
  },[cookie.token, sessionStorage])

  return (
    <div>
      <form action="" onSubmit={(e)=> Login(e)}  style={{paddingTop: "140px"}}>
        <input type="text" onChange={(e) => setId(e.target.value)}/>
        <input type="password" onChange={(e) => setPass(e.target.value)}/>
        <input type="checkbox" defaultChecked={use} onChange={()=> setUse(!use)}/>
        <div onClick={(e)=> Login(e)}> Login</div>
      </form>
    </div>
  )
}

export default Login
