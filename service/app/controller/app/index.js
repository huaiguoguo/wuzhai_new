'use strict';

const Controller = require('egg').Controller;

class IndexController extends Controller {
	async index() {
		const { ctx } = this;
		ctx.body = 'hi, app/index/egg';
	}
	async test() {
		const { ctx } = this;
		ctx.body = 'hi, app/index/test';
	}
	async anyway() {
		const { ctx } = this;
		ctx.body = 'hi, app/index/anyway';
	}
}

module.exports = IndexController;
