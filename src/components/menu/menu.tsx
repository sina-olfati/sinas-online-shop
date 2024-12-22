import React from 'react'

// personal
import { ShoppingCartButton } from './buttons/shoppingCartButton'
import { ProfileButton } from './buttons/profileButton'
import { LikedButton } from './buttons/likedButton'

// toggles
import { LangToggle } from './buttons/lang-toggle'
import { ThemeColorToggle } from './buttons/theme-color-toggle'
import { ThemeModeToggle } from './buttons/theme-mode-toggle'

const Menu = () => {
  return (
    <div>
        <div className='border border-fuchsia-600 flex flex-row flex-shrink-0 w-w-full'>
            <div id='personal'>
                <ShoppingCartButton />
                <ProfileButton />
                <LikedButton />
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
