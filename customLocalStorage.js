
window.myLocalStorage = {
  getItem(key) {
    return window.localStorage.getItem(key)
  },
  
  setItem(key, value, maxAge) {
    window.localStorage.setItem(key, value)
    if(maxAge === 0) {
      window.localStorage.removeItem(key)
    } else if (maxAge > 0) {
      setTimeout(() => window.localStorage.removeItem(key), maxAge)
    }
  },
  
  removeItem(key) {
    window.localStorage.removeItem(key)
  },
  
  clear() {
    window.localStorage.clear()
  }
}
