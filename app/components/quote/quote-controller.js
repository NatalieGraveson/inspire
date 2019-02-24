import QuoteService from "./quote-service.js";

let _qs = new QuoteService()





function drawQuotes() {

  let newquote = _qs.quotes
  document.getElementById("quote").innerHTML = newquote.Template

}



export default class QuoteController {
  constructor() {
    _qs.addSubscriber('quotes', drawQuotes)
    _qs.getApiQuotes()
  }
}
