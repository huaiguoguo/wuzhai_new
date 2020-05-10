'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
	const { router, controller } = app;
	router.get('/', controller.app.home.index);

	// app路由
	const appRouter = router.namespace('/app');
	const appController = controller.app;

	appRouter.get('/', appController.index.index);
	appRouter.get('/test', appController.index.test);
	appRouter.get('/anyway', appController.index.anyway);

	// 后台路由
	const adminRouter = router.namespace('/admin');
	const adminController = controller.admin;

	adminRouter.get('/', adminController.index.index);

	adminRouter.get('/account/currentUser', adminController.account.currentUser);
	adminRouter.post('/account/login', adminController.account.login);
	adminRouter.post('/account/logout', adminController.account.logout);
};
