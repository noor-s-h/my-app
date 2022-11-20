import Dropdown from './Dropdown'
import useMediaQuery from 'hooks/useMediaQuery'

export default function DesktopMenu({ menus }) {
  const isDesktop = useMediaQuery('(min-width: 640px)')

  return (
    isDesktop && (
      <ul className="flex items-center gap-8">
        {menus.map(({ title, url, submenus }, index) =>
          submenus ? (
            <Dropdown key={index} title={title} submenus={submenus} />
          ) : (
            <li key={index}>
              <a href={url} className="flex">
                {title}
              </a>
            </li>
          )
        )}
      </ul>
    )
  )
}
