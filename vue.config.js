const path = require('path');

function resolve(dir) {
	return path.join(__dirname, dir);
}

module.exports = {
	lintOnSave: false,
	chainWebpack: (config) => {
		config.resolve
		.extensions
		.add('.js')
		.add('.vue')
		.add('.json');
		config.resolve.alias
		.set('components', resolve('src/components'))
		.set('network', resolve('src/network'))
		.set('store', resolve('src/store'))
		.set('router', resolve('src/router'))
		.set('common', resolve('src/common'))
		.set('assets', resolve('src/assets'))
		.set('views', resolve('src/views'));
	},
	devServer: {
		open: true,
	}
}