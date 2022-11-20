import { useRef, Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import ChevronIcon from 'icons/ChevronIcon'

export default function Dropdown({ title, submenus }) {
  const buttonRef = useRef(null)
  const timeoutDuration = 100
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
              className="absolute left-1/2 min-w-[10rem] -translate-x-1/2  pt-4"
              onMouseEnter={onMouseEnter.bind(null, open)}
              onMouseLeave={onMouseLeave.bind(null, open)}
            >
              <ul className="flex flex-col gap-4 rounded border bg-white p-4 shadow-sm">
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
