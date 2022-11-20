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
      <Popover.Panel
        as="ul"
        className="top-17 absolute inset-x-0 flex flex-col gap-4 border-b bg-white p-4"
      >
        {menus.map(({ title, url, submenus }, index) =>
          submenus ? (
            <Accordion key="index" title={title} submenus={submenus} />
          ) : (
            <li key={index}>
              <Popover.Button as="a" href={url} className="flex">
                {title}
              </Popover.Button>
            </li>
          )
        )}
      </Popover.Panel>
    </Transition>
  )
}
