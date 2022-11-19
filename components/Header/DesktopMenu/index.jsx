import Dropdown from './Dropdown'

export default function DesktopMenu({ menus }) {
  return (
    <ul className="desktop-menu">
      {menus.map(({ title, url, submenus }, index) =>
        submenus ? (
          <Dropdown key={index} title={title} submenus={submenus} />
        ) : (
          <li key={index}>
            <a href={url} className="link">
              {title}
            </a>
          </li>
        )
      )}
    </ul>
  )
}
