'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
	async index() {
		const { ctx } = this;
		ctx.body = 'hi, app/home/egg';
	}
	async test() {
		const { ctx } = this;
		ctx.body = 'hi, app/home/test';
	}
	async anyway() {
		const { ctx } = this;
		ctx.body = 'hi, app/home/anyway';
	}
}

module.exports = HomeController;
