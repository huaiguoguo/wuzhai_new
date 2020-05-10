'use strict';

export default () => {
	const config = (exports = {});

	config.sequelize = {
		dialect: 'mysql',
		// host: '103.117.132.203',
		host: 'localhost',
		port: 3306,
		database: 'wuzhai_production',
		username: 'wuzhai',
		password: '111111',
		define: {
			timestamps: true, // 添加create,update,delete时间戳
			paranoid: false, // 添加软删除
			freezeTableName: true, // 防止修改表名为复数
			underscored: false, // 防止驼峰式字段被默认转为下划线
			engine: 'InnoDB',
			charset: 'utf8mb4',
			collate: 'utf8mb4_unicode_ci'
		},
		timezone: '+08:00',
		dialectOptions: {
			// 让读取date类型数据时返回字符串而不是UTC时间
			dateStrings: true,
			typeCast(field, next) {
				if (field.type === 'DATETIME') {
					return field.string();
				}
				return next();
			}
		}
	};

	return config;
};
