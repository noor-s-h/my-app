export default function BurgerIcon({ open }) {
  return (
    <svg viewBox="0 0 24 24" width="24">
      <path
        className="transition-[d] duration-300"
        d={open ? 'M 8,8 l 8,8 M 8,16 l 8,-8' : 'M 6,8 l 12,0 M 6,16 l 12,0'}
        stroke="#5f5f5f"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  )
}
