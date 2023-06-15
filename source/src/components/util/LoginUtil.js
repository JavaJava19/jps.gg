
export const isLogin = (fetchAddress, token, removeToken, setPlayerData, setLogin) => {
    (async () => {
        var port = fetchAddress === process.env.REACT_APP_GLOBAL_IP ? 3535 : 3536;
        var address = fetchAddress === process.env.REACT_APP_DOMAIN || process.env.REACT_APP_LOCAL_IP ? process.env.REACT_APP_LOCAL_IP : process.env.REACT_APP_GLOBAL_IP

        await fetch(`https://${address}:${port}/auth`, {
            method: "GET",
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
                "token": token
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        }).then(res => res.json()).then(res => {
            if (res.error === undefined) {
                setPlayerData(res)
                setLogin(true)
            } else {
                removeToken("token")
                setLogin(false)
            }
        }).catch(err => console.log("err"))
    })();

}

export function login(fetchAddress, loginData, setToken, setError, navigate) {

    if (fetchAddress !== undefined) {
        (async () => {
            var port = fetchAddress === process.env.REACT_APP_GLOBAL_IP ? 3535 : 3536;
            var address = fetchAddress === process.env.REACT_APP_DOMAIN || process.env.REACT_APP_LOCAL_IP ? process.env.REACT_APP_LOCAL_IP : process.env.REACT_APP_GLOBAL_IP;
            const body = {
                mcid: loginData.mcid,
                pass: loginData.pass
            }
            await fetch(`https://${address}:${port}/auth/login`, {
                method: "POST",
                mode: "cors",
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify(body)
            })
                .then(res => res.json()).then(data => {
                    if (data.id !== undefined) {
                        setError({
                            id: data.id,
                            pass: ""
                        })
                        return;
                    }
                    if (data.pass !== undefined) {
                        setError({
                            id: "",
                            pass: data.pass
                        })
                        return;
                    }
                    if (String(setToken) === "function setItem() { [native code] }") {
                        window.sessionStorage.setItem("token", data.token)
                    } else {
                        setToken("token", data.token)
                    }
                    navigate("/")
                }
                ).catch(console.log)
        })();
    }
}