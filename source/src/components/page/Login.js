import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import useFetchAddress from '../util/FetchAddress';
import { login } from '../util/LoginUtil';
import { useNavigate } from 'react-router-dom';
import style from "../../css/login.module.css"
const Login = () => {
  // eslint-disable-next-line
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
    if (id === undefined) {
      setError({
        id: "IDが入力されていません",
        pass: error.pass
      })
      return;
    }
    if (pass === undefined) {
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
    }, use ? setCookie : setSession, setError, navigate);

  }

  useEffect(() => {
    if (cookie.token !== undefined || sessionStorage !== null) {
      navigate("/")
    }
    // eslint-disable-next-line
  }, [cookie.token, window.sessionStorage.getItem("token")])

  return (
    <div className={style.LoginField}>
      <div className={style.LoginForm}>
        <div className={style.Title}><h1>Login Form</h1></div>
        <form action="" onSubmit={(e) => Login(e)}>
          <div className={style.MCIDForm}>
            <input type="text" onChange={(e) => setId(e.target.value)} placeholder='MCID' />
            <p className={style.ErrorMessage}>
            {error.id}
            </p>
          </div>
          <div className={style.PassForm}>
            <input type="password" onChange={(e) => setPass(e.target.value)} placeholder='Password' />
            <p className={style.ErrorMessage}>
            {error.pass}
            </p>
          </div>
          <div className={style.CookieForm} onClick={() => setUse(!use)} >
            <input type="checkbox" defaultChecked={use} id={"check"} onChange={() => setUse(!use)} />
            <label htmlFor='check'>入力したデータをCookieに保存しておく</label>
          </div>
          <div className={style.SubmitForm}>
            <input type='submit' value={"Login"} />

          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
