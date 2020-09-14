import { putPacklist } from '../services/putPacklist'

export function onCheckboxClick(packlist) {
  const index = packlist.findIndex((event) => event.id === packlist.id)
  const packlistUpdate = packlist[index]
  packlistUpdate.item.complete = !packlistUpdate.item.complete
  putPacklist(packlistUpdate)
}
