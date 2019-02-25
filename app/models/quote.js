export default class Quote {
  constructor(data) {
    this.qotd_date = data.qotd_date
    this.url = data.url
    this.body = data.body
    this.author = data.author
  }



  get Template() {
    return `
    ${this.body}
    ${this.author}
    `
  }
}