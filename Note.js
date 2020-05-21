class Note {
  constructor() {
    this.items = []
    this.addItems = (item) => {
      this.items.push({ name: item, isDone: false })
    }
    this.getItems = () => {
      return this.items
    }
    this.updateItem = (name) => {
      this.items.forEach((item) => {
        if (item.name === name) {
          item.isDone = !item.isDone
        }
      })
    }
    this.deleteItem = (name) => {
      this.items = this.items.filter((item) => {
        if (item.name === name) {
          return false
        } else {
          return true
        }
      })
    }
  }
}
module.exports = Note