import React from 'react'
import StaffCard from '../parts/staff/StaffCard'
import staff from "../../staff.json"
import style from "../../css/staff.module.css"

const Staff = () => {
  return (
    <>
    <UpdateOgp pageMeta={
      {
        title: '運営スタッフ一覧｜JapanPvPServer',
        description: 'JPSの運営スタッフの一覧ページです',
        url: 'https://jps.gg/staff'
      }
    }/>
    <div className={style.StaffField}>
      {staff.map(data=><StaffCard staff={data} key={data.mcid}/>)}
    </div>
    </>
  )
}

export default Staff
