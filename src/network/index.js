import {request} from './request.js'

export function getIndexMultidata() {
	return request({
		url: '/home/multidata'
	})
}

export function getIndexGoods(type, page) {
	return request({
		url: '/home/data',
		params: {
			type,
			page
		}
	})
}