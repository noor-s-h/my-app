import menus from './menus'
import Logo from './Logo'
import MobileMenu from './MobileMenu'
import DesktopMenu from './DesktopMenu'

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <Logo />
        <MobileMenu menus={menus} />
        <DesktopMenu menus={menus} />
      </nav>
    </header>
  )
}
