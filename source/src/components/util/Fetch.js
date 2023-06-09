import { useEffect, useState } from "react";
import useFetchAddress from "./FetchAddress";

export function useStatus() {
    const [icon, setIcon] = useState();
    const [online, setOnline] = useState(false);
    const [playerNum, setPlayerNum] = useState(0);
    const [motd, setMotd] = useState("");
    const [maxPlayer, setMaxPlayer] = useState(0);
    const [error, setError] = useState("");

    useEffect(() => {
        (async () => {
            setIcon("https://api.mcsrvstat.us/icon/jps.gg")
            const statusRes = await fetch(`https://api.mcsrvstat.us/2/jps.gg`, {
                method: "GET",
                mode: "cors"
            });
            await statusRes.json().then(res => {
                if (res.error !== undefined) {
                    setError(true);
                    return;
                }
                setOnline(res.online)
                if (res.online) {
                    setPlayerNum(res.players.online)
                    setMotd(res.motd.clean[0])
                    setMaxPlayer(res.players.max)
                }
            })

        })();

    }, [icon, online, motd, playerNum, maxPlayer, error])
    return { icon, online, motd, playerNum, maxPlayer, error };
}

export function usePlayerCard(key) {
    const [mcid, setMcid] = useState("");
    const [uuid, setUuid] = useState("");
    const [skin, setSkin] = useState("");
    const [profile, setProfile] = useState([]);
    const [balance, setBalance] = useState(0);
    const [login, setLogin] = useState(false);
    const [lastLogin, setLastLogin] = useState("");
    const [error, setError] = useState(false);
    const fetchAddress = useFetchAddress();

    useEffect(() => {
        (async () => {
            if (fetchAddress !== undefined) {
                var port = fetchAddress === process.env.REACT_APP_GLOBAL_IP  ? 3535 : 3536;
                var address  = fetchAddress === process.env.REACT_APP_DOMAIN || process.env.REACT_APP_LOCAL_IP ? process.env.REACT_APP_LOCAL_IP : process.env.REACT_APP_GLOBAL_IP

                await fetch(`https://${address}:${port}/players/` + key, {
                    method: "GET",
                    mode: "cors"
                })
                    .then(res => res.json()).then(data => {
                        setMcid(data.mcid)
                        setUuid(data.uuid)
                        if (data.skinURL === "null") {
                            setSkin("https://api.mineskin.org/render/skin?url=https://s.namemc.com/i/bc68bf289576a899.png");
                        } else {
                            setSkin(`https://api.mineskin.org/render/skin?url=${data.skinURL}`);
                        }
                        setProfile(data.profile)
                        setLogin(data.login)
                        setLastLogin(data.lastLogin)

                    }
                    ).catch(setError(true))
                await fetch(`https://${address}:${port}/balance/` + mcid, {
                    method: "GET",
                    mode: "cors"
                })
                    .then(res => res.json()).then(data => {
                        if (data.error === undefined)
                            setBalance(data[0])
                        else
                            setBalance(parseInt(data.balance))
                    }
                    ).catch(setError(true))
            }
        })();
    }, [key, mcid, uuid, skin, profile, balance, login, lastLogin, error, fetchAddress]);
    return { mcid, uuid, skin, profile, balance, login, lastLogin, error };
}

export function useCreateCategory(title, admin) {
    const [message, setMessage] = useState();
    const fetchAddress = useFetchAddress();

    useEffect(() => {
        (async () => {

            const pushData = {
                name: title,
                admin: admin
            }
            if (fetchAddress !== undefined) {
                var port = fetchAddress === process.env.REACT_APP_GLOBAL_IP  ? 3535 : 3536;
                var address  = fetchAddress === process.env.REACT_APP_DOMAIN || process.env.REACT_APP_LOCAL_IP ? process.env.REACT_APP_LOCAL_IP : process.env.REACT_APP_GLOBAL_IP


                await fetch(`https://${address}:${port}/thread/addcategory`, {
                    method: "POST",
                    mode: "cors",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(pushData)

                })
                    .then(res => res.json()).then(setMessage).catch(setMessage)
            }

        })();
    }, [title, admin, fetchAddress])

    return message;
}

export function useImageCatcher(imagePath) {
    const [data, setData] = useState();
    const fetchAddress = useFetchAddress();

    if (data === undefined) {
        if (fetchAddress !== undefined) {
            (async () => {
                var port = fetchAddress === process.env.REACT_APP_GLOBAL_IP  ? 3535 : 3536;
                var address  = fetchAddress === process.env.REACT_APP_DOMAIN || process.env.REACT_APP_LOCAL_IP ? process.env.REACT_APP_LOCAL_IP : process.env.REACT_APP_GLOBAL_IP


                const pushData = {
                    path: imagePath
                }
                await fetch(`https://${address}:${port}/image`, {
                    method: "POST",
                    mode: "cors",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(pushData)

                })
                    .then(res => res.blob()).then(blob => setData(URL.createObjectURL(blob))).catch()
            })();
        }
    } else {
        return data
    }

}

export function usePlayerList() {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const fetchAddress = useFetchAddress();

    useEffect(() => {
        if (data.length === 0) {
            if (fetchAddress !== undefined) {
                (async () => {
                    var port = fetchAddress === process.env.REACT_APP_GLOBAL_IP  ? 3535 : 3536;
                    var address  = fetchAddress === process.env.REACT_APP_DOMAIN || process.env.REACT_APP_LOCAL_IP ? process.env.REACT_APP_LOCAL_IP : process.env.REACT_APP_GLOBAL_IP


                    await fetch(`https://${address}:${port}/players/`, {
                        method: "GET",
                        mode: "cors"

                    })
                        .then(res => res.json()).then(res => setData(res)).catch(err => setError(err))
                })();
            }
        }
    }, [data.length, fetchAddress])
    return [data, error];
}

export function usePlayerMatch(mcid) {
    const [data, setData] = useState();
    const fetchAddress = useFetchAddress();

    useEffect(() => {
        if (mcid !== "") {
            if (fetchAddress !== undefined) {
                (async () => {
                    var port = fetchAddress === process.env.REACT_APP_GLOBAL_IP  ? 3535 : 3536;
                    var address  = fetchAddress === process.env.REACT_APP_DOMAIN || process.env.REACT_APP_LOCAL_IP ? process.env.REACT_APP_LOCAL_IP : process.env.REACT_APP_GLOBAL_IP

                    await fetch(`https://${address}:${port}/players/m/` + mcid, {
                        method: "GET",
                        mode: "cors"

                    })
                        .then(res => res.json()).then(res => setData(res)).catch()
                })();
            }
        }
    }, [mcid, fetchAddress])
    if (data !== undefined)
        return data;
}

export function useCtwStats(uuid) {
    const [data, setData] = useState();
    const fetchAddress = useFetchAddress();

    useEffect(() => {
        if (uuid !== "") {
            if (fetchAddress !== undefined) {
                (async () => {
                    var port = fetchAddress === process.env.REACT_APP_GLOBAL_IP  ? 3535 : 3536;
                    var address  = fetchAddress === process.env.REACT_APP_DOMAIN || process.env.REACT_APP_LOCAL_IP ? process.env.REACT_APP_LOCAL_IP : process.env.REACT_APP_GLOBAL_IP


                    await fetch(`https://${address}:${port}/ctw/uuid/` + uuid, {
                        method: "GET",
                        mode: "cors"

                    })
                        .then(res => res.json()).then(res => setData(res)).catch()
                })();
            }
        } else {
            setData()
        }
    }, [uuid, fetchAddress])
    if (data !== undefined) {
        if (data.error !== undefined) {
            setData([{ error: "データがありません" }])
        }

        return data[0];
    }
}

export function useCtwWinRank() {
    const [data, setData] = useState();
    const fetchAddress = useFetchAddress();

    useEffect(() => {
        if (data === undefined) {
            if (fetchAddress !== undefined) {
                (async () => {
                    var port = fetchAddress === process.env.REACT_APP_GLOBAL_IP ? 3535 : 3536;
                    var address  = fetchAddress === process.env.REACT_APP_DOMAIN || process.env.REACT_APP_LOCAL_IP ? process.env.REACT_APP_LOCAL_IP : process.env.REACT_APP_GLOBAL_IP
                    await fetch(`https://${address}:${port}/ctw/win`, {
                        method: "GET",
                        mode: "cors"

                    })
                        .then(res => res.json()).then(res => setData(res)).catch()
                })();
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fetchAddress])
    if (data !== undefined)
        return data;
}