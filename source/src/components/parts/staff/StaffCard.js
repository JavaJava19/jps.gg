import React from 'react'

import style from "../../../css/staff.module.css"
import { BsTwitter, BsYoutube, BsBook } from 'react-icons/bs';
import { ImEarth } from 'react-icons/im';
const StaffCard = ({ staff }) => {
    const getTwitter = () => {
        if (staff.twitter !== "") {
            return <a href={staff.twitter} style={
                {
                    color: "#1DA1F2",
                    fontSize: "24px",
                    padding: "5px"
                }
            } ><BsTwitter /></a>;
        }
    }
    const getYoutube = () => {
        if (staff.youtube !== "") {
            return <a href={staff.youtube} style={
                {
                    color: "red",
                    fontSize: "24px",
                
                    padding: "5px"
                }
            }><BsYoutube /></a>;
        }
    }

    const getWeb = () => {
        var icon;
        if(staff.webIcon !== undefined){
            icon = <img src={staff.webIcon} alt="" width={24}/>;
        }else{
            icon = <ImEarth/>
        }
        if (staff.web !== "") {
            return <a href={staff.web} style={
                {
                    color: "blue",
                    fontSize: "24px",
                    padding: "5px"
                }
            }>{icon}</a>;
        }
    }

    const getBlog = () => {
        var icon;
        if(staff.blogIcon !== undefined){
            icon = <img src={staff.blogIcon} alt="" width={24}/>
        }else{
            icon = <BsBook/>
        }
        if (staff.blog !== "") {
            return <a href={staff.blog} style={
                {
                    color: "#eb9e5f",
                    fontSize: "24px",
                    padding: "5px"
                }
            }>{icon}</a>;
        }
    }
    return (
        <div className={style.StaffCard}>
            <div className={style.Skin}>
                <img src={staff.skin} alt="" />
            </div>
            <div className={style.StaffInfo}>
                <div className={style.Name}>{staff.name}</div>
                <div className={style.MCID}>{staff.mcid}</div>
                <div className={style.Post}>{staff.post}</div>
                <div className={style.SNS}>
                    {getTwitter()}
                    {getYoutube()}
                    {getWeb()}
                    {getBlog()}
                </div>
                <div className={style.Message}>{staff.message}</div>
            </div>
        </div>
    )
}

export default StaffCard
