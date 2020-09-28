export function getUniquePacklists(packlists) {
  const uniquePacklists = packlists.reduce(
    (names, packlist) => {
      const packlistName = packlist.name
      if (!names.includes(packlistName)) names.push(packlistName)

      return names
    },
    ['Add PackList']
  )
  return uniquePacklists
}
