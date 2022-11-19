export default function ChevronIcon({ open }) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      className={classNames(
        open && 'rotate-180',
        'transition-transform duration-300'
      )}
    >
      <path
        d="M 8,10 l 4,4 M 12,14 l 4,-4"
        stroke="#5f5f5f"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  )
}
