import { Popover } from '@headlessui/react'
import { Fragment } from 'react'
import Burger from './Burger'
import Menu from './Menu'

export default function MobileMenu({ menus }) {
  return (
    <Popover as={Fragment}>
      {({ open }) => (
        <>
          <Burger open={open} />
          <Menu menus={menus} />
        </>
      )}
    </Popover>
  )
}
