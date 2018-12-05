module.exports = {
	'post /toolbox/auth': {
		'data': {
			'token': 'token', // 小程序接口 api token
			'auth': true, // 是否需要重新授权
			'session_key': 'session' // 会话密钥
		}
	},

	'post /toolbox/user/info': {
		'data': {
			'token': 'token'
		}
	},

	'post /toolbox/formid': {},
}