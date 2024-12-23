import React from 'react'

// personal
import { ShoppingCartButton } from './buttons/shoppingCartButton'
import { ProfileButton } from './buttons/profileButton'
import { LikedButton } from './buttons/likedButton'

// toggles
import { LangToggle } from './buttons/lang-toggle'
import { ThemeColorToggle } from './buttons/theme-color-toggle'
import { ThemeModeToggle } from './buttons/theme-mode-toggle'

import { SearchInput } from './search'

const Menu = () => {
  return (
    <div>
        <div className='h-12 w-full
        flex items-center bg-muted'>
            <div id='personal' className='mx-2 flex flex-shrink-0'>
                <ShoppingCartButton />
                <ProfileButton />
                <LikedButton />
            </div>


            <div id='toggles' className='mr-2 flex flex-shrink-0'>
                <LangToggle />
                <ThemeModeToggle />
                <ThemeColorToggle />
            </div>

            <div id='search' className='w-full'>
                <SearchInput />
            </div>

            <div id='logo'></div>

            <div id='drop'></div>

        </div>
    </div>
  )
}

export default Menu
