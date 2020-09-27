export default function getColorOfEventCategory(colorName) {
  return (
    {
      Holiday: 'var(--blue-70)',
      Metal: 'var(--black-75)',
      Medieval: 'var(--darkbrown-70)',
      Other: 'var(--lightbrown-70)',
    }[colorName] ?? 'var(--lightgrey-main)'
  ) // default value with null coalescing operator
}
