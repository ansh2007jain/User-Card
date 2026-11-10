import React from 'react'
import ProfilePhoto from './ProfilePhoto'
import Name from './Name.jsx'
import AppIcons from './AppIcons.jsx'
import Buttons from './Buttons.jsx'
import SocialIcons from './SocialIcons.jsx'

const MainContainer = ({Url,name,title}) => {
  return (
    <div className='h-110 w-85 bg-amber-200 rounded-2xl m-5'>
        <ProfilePhoto Url={Url}/>
        <Name name = {name} title={title}/> 
        <AppIcons/>
        <Buttons/>
        <SocialIcons/>
      </div>
  )
}

export default MainContainer
