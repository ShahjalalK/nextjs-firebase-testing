import React from 'react'
import Icon from './icon'
import UserMenu from './userMenu'

type Props = {}

const ProfileMenu = (props: Props) => {
  return (
    <div className="flex items-center space-x-2 md:space-x-6 flex-grow">
      <Icon />
      <UserMenu />
    </div>
  )
}

export default ProfileMenu