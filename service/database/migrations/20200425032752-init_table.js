'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		/*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
		const { INTEGER, STRING, DECIMAL } = Sequelize;

		const tablePrefix = 'ych_';
		const tablesDefine = [
			{
				name: 'users',
				attribute: {
					id: { type: INTEGER, primaryKey: true, autoIncrement: true, comment: '主键自增' },
					member_id: { type: STRING(255), comment: '会员编号' },
					username: { type: STRING(255), comment: '用户名' },
					nickname: { type: STRING(255), comment: '用户昵称' },
					address: { type: STRING(255), comment: '用户收货地址' },
					openid: { type: STRING(255), comment: 'openid' },
					sex: { type: STRING(255), comment: '性别' },
					language: { type: STRING(255), comment: '语言' },
					city: { type: STRING(255), comment: '城市' },
					province: { type: STRING(255), comment: '省份' },
					country: { type: STRING(255), comment: '国家' },
					headimgurl: { type: STRING(255), comment: '用户头像' },
					privilege: { type: STRING(255), comment: '权限' },
					access_token: { type: STRING(255), comment: '用来获取用户信息的token' },
					expires_in: { type: STRING(255), comment: 'access_token过期时间' },
					refresh_token: { type: STRING(255), comment: '用来刷新token的token' },
					scope: { type: STRING(255), comment: '用户授权的作用域' },
					amount: { type: DECIMAL(10, 2), comment: '金额' },
					createdAt: {
						type: STRING(15),
						field: 'created_at',
						defaultValue: parseInt(Date.now() / 1000, 10).toString()
					},
					updatedAt: {
						type: STRING(15),
						field: 'updated_at',
						defaultValue: parseInt(Date.now() / 1000, 10).toString()
					},
					deletedAt: {
						type: STRING(15),
						field: 'deleted_at',
						defaultValue: parseInt(Date.now() / 1000, 10).toString()
					}
				},
				options: {
					comment: '用户表'
				},
				index: {
					fields: [],
					options: {
						name: 'username',
						unique: true
					}
				}
			},
			{
				name: 'users',
				attribute: {
					id: { type: INTEGER, primaryKey: true, autoIncrement: true, comment: '主键自增' },
					member_id: { type: STRING(255), comment: '会员编号' },
					username: { type: STRING(255), comment: '用户名' },
					nickname: { type: STRING(255), comment: '用户昵称' },
					address: { type: STRING(255), comment: '用户收货地址' },
					openid: { type: STRING(255), comment: 'openid' },
					sex: { type: STRING(255), comment: '性别' },
					language: { type: STRING(255), comment: '语言' },
					city: { type: STRING(255), comment: '城市' },
					province: { type: STRING(255), comment: '省份' },
					country: { type: STRING(255), comment: '国家' },
					headimgurl: { type: STRING(255), comment: '用户头像' },
					privilege: { type: STRING(255), comment: '权限' },
					access_token: { type: STRING(255), comment: '用来获取用户信息的token' },
					expires_in: { type: STRING(255), comment: 'access_token过期时间' },
					refresh_token: { type: STRING(255), comment: '用来刷新token的token' },
					scope: { type: STRING(255), comment: '用户授权的作用域' },
					amount: { type: DECIMAL(10, 2), comment: '金额' },
					createdAt: {
						type: STRING(15),
						field: 'created_at',
						defaultValue: parseInt(Date.now() / 1000, 10).toString()
					},
					updatedAt: {
						type: STRING(15),
						field: 'updated_at',
						defaultValue: parseInt(Date.now() / 1000, 10).toString()
					},
					deletedAt: {
						type: STRING(15),
						field: 'deleted_at',
						defaultValue: parseInt(Date.now() / 1000, 10).toString()
					}
				},
				options: {
					comment: '用户表'
				},
				index: {
					fields: [],
					options: {
						name: 'username',
						unique: true
					}
				}
			}
		];
		for (const table of tablesDefine) {
			await queryInterface.createTable(`${tablePrefix}${table.name}`, table.attribute, table.options).then(() => {
				if (table.index.fields.length > 0) {
					queryInterface.addIndex(`${tablePrefix}${table.name}`, table.index.fields, table.index.options);
				}
			});
		}
	},

	down: (queryInterface, Sequelize) => {
		/*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
	}
};
