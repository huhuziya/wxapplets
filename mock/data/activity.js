module.exports = {
	"get /toolbox/activity/index": {
		data: {
			cover:
				"https://static.pandateacher.com/f9720b725b6b1633649f5920e2579b65.png", // 封面图
			subscribe: true, // 是否关注
			navigation: "go_to_transfer_station", // 导航
			plan: [
				// {
                //     "plan_id":14,
                //     "name":"时间管理学习营"
                // },
                // {
                //     "plan_id":34,
                //     "name":"手机摄影入门"
                // },
                // {
                //     "plan_id":46,
                //     "name":"3天打造高颜值PPT"
                // },
                // {
                //     "plan_id":48,
                //     "name":"高效阅读入门"
                // }
			],
			total_integral: 12,
			status: "invite", // invite 可以邀请，apply 去获得资格
			tips: ["", ""], // 新用户提示，富文本
			rules:
				"赠新用户免费课程，每1人报名课程获1积分，积分可免费兑换学习工具",
			award_records: [
				{
					nickname: "冬瓜",
					award_name: "财富套件"
				},
				{
					nickname: "栋栋",
					award_name: "写作套件"
				},
				{
					nickname: "小银",
					award_name: "财富套件"
				}
			], // 10~20
			exchange: {
				toolbox_id: 1,
				qrcode: "https://static.pandateacher.com/f9720b725b6b1633649f5920e2579b65.png",
				num: 1, // 领取了多少个套件
				plan_id: 56,
				award: {
					id: 1,
					images: [
						"https://static.pandateacher.com/f9720b725b6b1633649f5920e2579b65.png",
						"https://static.pandateacher.com/4380c798c5a5af551ee921f3bf5f3bf0.png",
						"https://static.pandateacher.com/f9720b725b6b1633649f5920e2579b65.png"
					], // 奖品预览图
                    title: "理财沙盘--模拟如何操盘", // 标题
                    award_title:"理财理财理财理财理财",                    
					tags: [
						{
							bg_color: "",
							font: {},
							text: "理财"
						},
						{
							bg_color: "",
							font: {},
							text: "经济学"
						}
					], // 标签
					integral: 7, // 所需积分
					price: 69 // 价格
				},
				status: "not_own", // own 就是拥有了， not_own 没有拥有
				own_number: 0, // 已经拥有的数量
				own_min: 348, // 滚动效果的最小值
				own_max: 359 // 滚动效果的最大值
            },
            collect_num:1,
		}
	},
	"get /toolbox/activity/share/friend": {
		data: {
			title: "2、选定课程，即可开始赠课",
			list: [
				{
					data: {
						plan_id: 7,
						bg:
							"https://static.pandateacher.com/f9720b725b6b1633649f5920e2579b65.png",
						desc: "aasd"
					},
					share: {
						title: "1",
						imageUrl:
							"https://static.pandateacher.com/f9720b725b6b1633649f5920e2579b65.png",
						path: "/page/home/index"
                    },
                    "act_term_id":222,
                    "plan_id":34,
                    "style_id":11
				},
				{
					data: {
						plan_id: 7,
						bg:
							"https://static.pandateacher.com/f9720b725b6b1633649f5920e2579b65.png",
						desc: "sdasd"
					},
					share: {
						title: "2",
						imageUrl:
							"https://static.pandateacher.com/f9720b725b6b1633649f5920e2579b65.png",
						path: "/page/home/index"
                    },
                    "act_term_id":222,
                    "plan_id":34,
                    "style_id":11
				},
				{
					data: {
						plan_id: 7,
						bg:
							"https://static.pandateacher.com/f9720b725b6b1633649f5920e2579b65.png",
						desc: "aass"
					},
					share: {
						title: "3",
						imageUrl:
							"https://static.pandateacher.com/f9720b725b6b1633649f5920e2579b65.png",
						path: "/page/home/index"
                    },
                    "act_term_id":222,
                    "plan_id":34,
                    "style_id":11,
				},
				{
					data: {
						plan_id: 7,
						bg: "",
						desc: "这是一段推荐文案"
					},
					share: {
						title: "4",
						imageUrl: "",
						path: "/page/home/index"
                    },
                    "act_term_id":222,
                    "plan_id":34,
                    "style_id":11,
				}
			]
		}
	},
	"get /toolbox/activity/share/card": {
		data: {
			title: "选择保存邀请卡，即可分享",
			list: [
				{
					data: {
						invite_card: "",
						desc: "这是一段推荐文案"
					},
					share: {
						title: "送你一个时间管理进阶课学习资格",
						imageUrl: "",
						path: "/page/home/index"
                    },
                    "act_term_id":222,
                    "plan_id":34,
                    "style_id":11,
				},
				{
					data: {
						invite_card: "",
						desc: "一段推荐文案"
					},
					share: {
						title: "送你一个时间管理进阶课学习资格",
						imageUrl: "",
						path: "/page/home/index"
                    },
                    "act_term_id":222,
                    "plan_id":34,
                    "style_id":11,
				}
			]
		}
	},
	"get /toolbox/activity/share/self": {
		data: {
			title: "长按图片识别，即可报名该课程",
			list: [
				"https://static.pandateacher.com/toolbox_learn_card--48.png",
				"https://static.pandateacher.com/toolbox_learn_card--48.png",
				"https://static.pandateacher.com/toolbox_learn_card--48.png"
			]
		}
	},
	"post /toolbox/collect": {
		errcode: 0, // 大于1 就是错误场景
		errmsg: "ok"
	}
};
