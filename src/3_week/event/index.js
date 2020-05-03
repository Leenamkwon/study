class List {
  constructor() {
    this.mount()
  }

  mount() {
    console.log('list mounted....')
    this.handleAddItem
  }

  handleAddItem() {
    const listEl = document.querySelector('#list')
    const buttonEl = document.getElementById('btn_add')
    buttonEl.addEventListener('click', () => {
      const liEl = document.createElement('li')
      const text = document.createTextNode(Date.now())

      liEl.appendChild(text)
      ulEl.appendChild(liEl)
    })
  }

  handleListClick() {
    const listEl = document.querySelectorAll('li')
  }
}

new List()
