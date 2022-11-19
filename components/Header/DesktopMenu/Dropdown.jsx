import { useRef, Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import ChevronIcon from '../icons/ChevronIcon'

export default function Dropdown({ title, submenus }) {
  const buttonRef = useRef(null)
  const timeoutDuration = 200
  let timeout

  const closePopover = () => {
    return buttonRef.current?.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'Escape',
        bubbles: true,
        cancelable: true,
      })
    )
  }

  const onMouseEnter = (open) => {
    clearTimeout(timeout)
    if (open) return
    return buttonRef.current?.click()
  }

  const onMouseLeave = (open) => {
    if (!open) return
    timeout = setTimeout(() => closePopover(), timeoutDuration)
  }

  return (
    <Popover as="li" className="relative" key="index">
      {({ open }) => (
        <>
          <Popover.Button
            ref={buttonRef}
            onMouseEnter={onMouseEnter.bind(null, open)}
            onMouseLeave={onMouseLeave.bind(null, open)}
            className="flex"
          >
            {title}
            <ChevronIcon open={open} />
          </Popover.Button>
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
              className="desktop-submenu"
              onMouseEnter={onMouseEnter.bind(null, open)}
              onMouseLeave={onMouseLeave.bind(null, open)}
            >
              <ul className="desktop-submenu-item">
                {submenus.map(({ title, url }, index) => (
                  <li key={index}>
                    <Popover.Button as="a" href={url} className="link">
                      {title}
                    </Popover.Button>
                  </li>
                ))}
              </ul>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}
