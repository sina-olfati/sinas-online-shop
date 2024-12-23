import React from 'react'

// personal
import { ShoppingCartButton } from './buttons/shoppingCartButton'
import { ProfileButton } from './buttons/profileButton'
import { LikedButton } from './buttons/likedButton'
// toggles
import { LangToggle } from './buttons/lang-toggle'
import { ThemeColorToggle } from './buttons/theme-color-toggle'
import { ThemeModeToggle } from './buttons/theme-mode-toggle'
// search 
import { SearchInput } from './search'
// logo
import { Logo } from '../logo'
// bottom section
import { BottomSection } from './bottomSection'

const Menu = () => {
  return (
    <div className='w-full flex flex-col bg-accent'>
        <div className='h-12 w-full flex items-center'>
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

            <div id='logo' className='h-full'>
              <Logo />
            </div>

        </div>

        <div id='drop' className='border border-primary h-9 w-full'>
            <BottomSection />
        </div>
    </div>
  )
}

export default Menu
