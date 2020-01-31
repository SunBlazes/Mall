import axios from 'axios'

export function request(config) {
	const instance = axios.create({
		baseURL: 'http://123.207.32.32:8000',
		// timeout: 10000
	});
	instance.interceptors.response.use(res => {
		return res.data;
	},err => {
		return err;
	})
	return instance(config);
}