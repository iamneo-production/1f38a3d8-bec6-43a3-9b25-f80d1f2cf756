import React from 'react'
import './InfoCard.css'
import { UilPen } from '@iconscout/react-unicons'
import ProfileModel from '../profileModel/ProfileModel'

const InfoCard = () => {

  const [modelOpen, setModelOpen] = React.useState(false)
  return (
    <div className='InfoCard'>
      <div className="infoHead">
          <h4>Your Info</h4>
          <div>
            <UilPen width='2rem' hight='1.2rem' onClick={() => setModelOpen(true)}/>
            <ProfileModel modelOpen={modelOpen} setModelOpen={setModelOpen} />
          </div>
      </div>
      <div className="Info">
        <span><b>Username</b> </span>
        <span>@pratikmandge</span>
      </div>
      <div className="Info">
        <span><b>Email</b> </span>
        <span> abc@email.com</span>
      </div>
      <div className="Info">
        <span><b>Date of Birth</b> </span>
        <span>YYYY/MM/DD</span> 
      </div>
      <button className='button logout-button'>Logout</button>
    </div>
  )
}

export default InfoCard
