import Quote from "../../models/quote.js";

// @ts-ignore
const _quoteApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/quotes',
	timeout: 3000
});

let _state = {
	quotes: {},
}
let _subscribers = {
	quotes: [],

}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn())
}



export default class QuoteService {

	get quotes() {
		return _state.quotes
	}

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	getApiQuotes() {
		_quoteApi.get().then(res => {
			_setState('quotes', new Quote(res.data.quote))
		})
	}
}
