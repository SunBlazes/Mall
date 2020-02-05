export default {
	setBScroll(state, payload) {
		state.bscroll = payload;
	},
	setTabOffsetTop(state, payload) {
		state.tabOffsetTop = payload;
	},
	setDBScroll(state, payload) {
		state.dBscroll = payload;
	},
	setGoodSizeOffsetTop(state, payload) {
		state.goodSizeOffsetTop = payload;
	},
	addCartQueue(state, payload) {
		state.cartQueue.push(payload);
	},
	clearCartQueue(state) {
		state.cartQueue = [];
	},
	setCartScroll(state, payload) {
		state.cartScroll = payload;
	},
	addPrice(state, payload) {
		state.totalPrice = payload + state.totalPrice;
	}
}