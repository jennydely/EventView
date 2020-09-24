export function getUniqueItems(items) {
  const uniqueItems = items.reduce((names, item) => {
    const itemName = item.item
    if (
      !names.find(
        (uniqueItem) => uniqueItem.item.toLowerCase() === itemName.toLowerCase()
      )
    )
      names.push(item)
    return names
  }, [])
  return uniqueItems
}
