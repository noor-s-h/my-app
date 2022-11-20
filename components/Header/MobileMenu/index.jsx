import { Popover } from '@headlessui/react'
import { Fragment } from 'react'
import Burger from './Burger'
import Menu from './Menu'
import useMediaQuery from 'hooks/useMediaQuery'

export default function MobileMenu({ menus }) {
  const isMobile = useMediaQuery('(max-width: 640px)')

  return (
    isMobile && (
      <Popover as={Fragment}>
        {({ open }) => (
          <>
            <Burger open={open} />
            <Menu menus={menus} />
          </>
        )}
      </Popover>
    )
  )
}
