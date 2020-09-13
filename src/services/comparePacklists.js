export function comparePacklists(packlists, packlistName) {
  packlists.find(
    (packlist) => packlist.name === '' || packlist.name === packlistName
  )
}
