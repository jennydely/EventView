export default function getColorOfEventCategory(colorName) {
  return (
    {
      Holiday: 'var(--categoryHoliday)',
      Metal: 'var(--categoryMetal)',
      Medieval: 'var(--categoryMedieval)',
      Other: 'var(--categoryOther)',
    }[colorName] ?? 'var(--optionsBG)'
  ) // default value with null coalescing operator
}
