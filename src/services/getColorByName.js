export default function getColorByName(colorName) {
  return (
    {
      holiday: 'var(--blue-70)',
      metal: 'var(--darkgrey-75)',
      medieval: 'var(--darkbrown-70)',
      other: 'var(--lightbrown-70)',
    }[colorName] ?? 'var(--lightgrey-main)'
  ) // default value with null coalescing operator
}
