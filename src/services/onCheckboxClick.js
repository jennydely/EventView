import { updatePacklist } from './putEvent'

export function onCheckboxClick(packlist) {
  const index = packlist.findIndex((event) => event.id === packlist.id)
  const packlistUpdate = packlist[index]
  packlistUpdate.item.complete = !packlistUpdate.item.complete
  updatePacklist(packlistUpdate)
}
