/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
	/**
	 * built-in config
	 * @type {Egg.EggAppConfig}
	 **/
	const config = (exports = {});

	// use for cookie sign key, should change to your own and keep security
	config.keys = appInfo.name + '_1587711544369_4228';

	// add your middleware config here
	config.middleware = [];

	config.security = {
		csrf: {
			enable: true,
			ignoreJSON: true
		},
		// 允许访问接口的白名单
		domainWhiteList: ['http://localhost:8000']
	};

	config.cors = {
		origin: '*',
		allowMethods: 'GET, POST, OPTIONS, PUT, DELETE, HEAD, PATCH'
	};

	config.validate = {
		convert: true,
		validateRoot: false
	};

	// add your user config here
	const userConfig = {
		// myAppName: 'egg',
	};

	return {
		...config,
		...userConfig
	};
};
