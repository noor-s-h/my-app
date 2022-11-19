import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import Accordion from './Accordion'

export default function Menu({ menus }) {
  return (
    <Transition
      as={Fragment}
      enter="transition-all duration-300"
      enterFrom="opacity-0 translate-y-2"
      enterTo="opacity-100 translate-y-0"
      leave="transition-all duration-300"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-2"
    >
      <Popover.Panel as="ul" className="mobile-menu">
        {menus.map(({ title, url, submenus }, index) =>
          submenus ? (
            <Accordion key="index" title={title} submenus={submenus} />
          ) : (
            <li key={index}>
              <Popover.Button as="a" href={url} className="link">
                {title}
              </Popover.Button>
            </li>
          )
        )}
      </Popover.Panel>
    </Transition>
  )
}
