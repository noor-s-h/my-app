import { Popover } from '@headlessui/react'
import BurgerIcon from 'icons/BurgerIcon'

export default function Burger({ open }) {
  return (
    <Popover.Button>
      <BurgerIcon open={open} />
    </Popover.Button>
  )
}
