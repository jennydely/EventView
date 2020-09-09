export function loadFromLocal(key) {
  return new Promise((resolve, reject) => {
    try {
      const serializedData = localStorage.getItem(key)
      if (serializedData) {
        resolve(JSON.parse(serializedData))
      } else {
        reject(new Error(`Key not found: ${key}`))
      }
    } catch (error) {
      reject(error)
    }
  })
}

export function saveToLocal(key, value) {
  return new Promise((resolve, reject) => {
    try {
      const serializedData = JSON.stringify(value)
      localStorage.setItem(key, serializedData)
      resolve()
    } catch (error) {
      reject(error)
    }
  })
}
