export default function getColorOfEventCategory(colorName) {
  return (
    {
      Holiday: 'var(--blue-80)',
      Metal: 'var(--black-80)',
      Medieval: 'var(--darkbrown-80)',
      Other: 'var(--lightbrown-80)',
    }[colorName] ?? 'var(--lightgrey-80)'
  ) // default value with null coalescing operator
}
