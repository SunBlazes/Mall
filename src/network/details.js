import {request} from './request.js'

export function getDetailsData(iid) {
	return request({
		url: '/detail',
		params: {
			iid
		}
	})
}

export class Good {
	constructor(itemInfo, columns, services, detailInfo, itemParams) {
		this.title = itemInfo.title;
		this.desc = itemInfo.desc;
		this.newPrice = itemInfo.price;
		this.oldPrice = itemInfo.oldPrice;
		this.discount = itemInfo.discountDesc;
		this.realPrice = itemInfo.lowNowPrice;
		this.topImages = itemInfo.topImages;
		this.discountColor = itemInfo.discountBgColor;
		this.columns = columns;
		this.services = services;
		this.detailInfo = detailInfo;
		this.itemParams = itemParams;
		this.id = itemInfo.iid;
	}
}