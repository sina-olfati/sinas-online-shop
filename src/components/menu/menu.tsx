import React from 'react'

// personal
import { ProfileButton } from './profile-b'

// toggles
import { LangToggle } from './lang-toggle'
import { ThemeColorToggle } from './theme-color-toggle'
import { ThemeModeToggle } from './theme-mode-toggle'

const Menu = () => {
  return (
    <div>
        <div className='border border-fuchsia-600 flex flex-row flex-shrink-0 w-w-full'>
            <div id='personal'>
                <ProfileButton />
            </div>


            <div id='toggles' className='border border-primary flex flex-row flex-shrink-0 w-fit'>
                <LangToggle />
                <ThemeModeToggle />
                <ThemeColorToggle />
            </div>

            <div id='search'></div>

            <div id='logo'></div>

            <div id='drop'></div>

        </div>
    </div>
  )
}

export default Menu
