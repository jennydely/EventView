export default function getColorOfEventCategory(colorName) {
  return (
    {
      Holiday: 'var(--blue-main)',
      Metal: 'var(--black-main)',
      Medieval: 'var(--darkbrown-main)',
      Other: 'var(--lightbrown-main)',
    }[colorName] ?? 'var(--turquoise-75)'
  ) // default value with null coalescing operator
}
