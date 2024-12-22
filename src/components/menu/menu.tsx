import React from 'react'

// toggles
import { LangToggle } from './lang-toggle'
import { ThemeColorToggle } from './theme-color-toggle'
import { ThemeModeToggle } from './theme-mode-toggle'

const Menu = () => {
  return (
    <div>
      menu
      <LangToggle />
      <ThemeColorToggle />
      <ThemeModeToggle />
    </div>
  )
}

export default Menu
