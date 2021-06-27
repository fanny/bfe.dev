class BrowserHistory {
  
  /**
   * @param {string} url
   * if url is set, it means new tab with url
   * otherwise, it is empty new tab
   */
  constructor(url) {
    this.historyStack = (!url) ? [] : [url]
    this.lastIndex = 0
  }
  /**
   * @param { string } url
   */
  visit(url) {
    this.historyStack.length = this.lastIndex + 1
    this.historyStack.push(url)
    this.lastIndex += 1;
  }
  
  /**
   * @return {string} current url
   */
  get current() {
    return this.historyStack[this.lastIndex];
  }
  
  // go to previous entry
  goBack() {
    this.lastIndex = Math.max(0, this.lastIndex - 1);
  }
  
  // go to next visited url
  forward() {
    this.lastIndex = Math.min(this.historyStack.length - 1, this.lastIndex + 1);
  }
}

const history = new BrowserHistory()
history.visit('A')
history.visit('B')
history.goBack()
history.goBack()

console.log(history.current)
