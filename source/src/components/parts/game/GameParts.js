import React, { useState } from 'react'
import {
    animated
} from '@react-spring/web'
import styles from "../../../css/game.module.css"
import { GiBookCover, GiQueenCrown } from "react-icons/gi"
import { useNavigate } from 'react-router-dom'

const GameParts = ({ style, item }) => {
    const [open, set] = useState(false);
    const navigate = useNavigate();
    const openStyle = !open ? { scale: "0" } : { scale: "1" };
    const containerStyle = 
    !open ? { ...style, height: "30px",animation: "fadeOutAnime .5s forwards" } : 
    {animation: "fadeInAnime .5s forwards"};
    const titleStyle = !open ? { borderBottom: "0px" } : { borderBottom: "1px solid #777" };

    return (
        <>
            <style>
                {
                    `@keyframes fadeInAnime {
                    from {
                        height: 30px;
                    }
                
                    to {
                        height: 100px;
                    }
                }
                @keyframes fadeOutAnime {
                    from {
                        height: ${!open ? "100px" : "30px"};
                    }
                
                    to {
                        height: 30px;
                    }
                }`
                }
            </style>
            <animated.div
                className={styles.GameParts}
                style={containerStyle}
                onClick={() => set(!open)}
            >
                <div className={styles.PartsTitle} style={titleStyle}>{item.name}</div>
                <div className={styles.PartsLinks}>
                    <div className={styles.Link} style={openStyle} onClick={()=> navigate(item.rulePath)}>
                        <GiBookCover style={{ marginRight: "5px" }} />
                        Rule
                    </div>
                    <div className={styles.Link} style={openStyle} onClick={()=> navigate(item.rankPath)}>
                        <GiQueenCrown style={{ marginRight: "5px" }} />
                        Ranking
                    </div>
                </div>
            </animated.div>
        </>

    )
}

export default GameParts
