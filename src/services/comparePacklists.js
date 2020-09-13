export function comparePacklists(packlists, packlistName) {
  const chosenPacklist = packlists.find(
    (packlist) => packlist.name === '' || packlist.name === packlistName
  )
  return chosenPacklist
}
