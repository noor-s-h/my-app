import { Fragment } from 'react'
import { Disclosure, Popover, Transition } from '@headlessui/react'
import ChevronIcon from 'icons/ChevronIcon'

export default function Accordion({ title, submenus }) {
  return (
    <Disclosure as="li">
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full justify-between">
            {title}
            <ChevronIcon open={open} />
          </Disclosure.Button>
          <Transition
            as={Fragment}
            enter="transition-all duration-300"
            enterFrom="opacity-0 translate-y-2"
            enterTo="opacity-100 translate-y-0"
            leave="transition-all duration-300"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-2"
          >
            <Disclosure.Panel
              as="ul"
              className="mt-4 flex flex-col gap-4 border-l pl-4"
            >
              {submenus.map(({ title, url }, index) => (
                <li key={index}>
                  <Popover.Button as="a" href={url} className="flex">
                    {title}
                  </Popover.Button>
                </li>
              ))}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}
