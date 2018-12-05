module.exports = {
	"get /toolbox/home": {
		data: {
			cover: "", // 头图
			subscribe: true, // 有关注
			total_integral: 6, // 用户所拥有的积分
			index: {
				plan_id: 7,
				award_id: 12
			}, //未空时不处理，有数据时，query参数传到活动页
			activities: [
				{
					toolbox_id: 1,
					qrcode:
						"https://static.pandateacher.com/f9720b725b6b1633649f5920e2579b65.png",
					num: 1, // 领取了多少个套件
					plan_id: 56,
					award: {
						id: 1,
                        images: [
                            "https://static.pandateacher.com/f9720b725b6b1633649f5920e2579b65.png", 
                            "https://static.pandateacher.com/f9720b725b6b1633649f5920e2579b65.png", 
                            "https://static.pandateacher.com/f9720b725b6b1633649f5920e2579b65.png"
                            ], // 奖品预览图
                        title: "理财沙盘-", // 标题
                        award_title:"理财",
						tags: [
							{
								bg_color: "",
								text: "理财"
							},
							{
								bg_color: "",
								text: "经济学"
							}
						], // 标签
						integral: 5, // 所需积分
						price: 69 // 价格
					},
					status: "not_own", // own 就是拥有了， not_own 没有拥有
					own_number: 0, // 已经拥有的数量
					own_min: 348, // 滚动效果的最小值
					own_max: 359 // 滚动效果的最大值
				},
				{
					toolbox_id: 1,
					qrcode:
						"https://static.pandateacher.com/f9720b725b6b1633649f5920e2579b65.png",
					num: 1, // 领取了多少个套件
					plan_id: 56,
					award: {
						id: 1,
                        images: [
                        "https://static.pandateacher.com/f9720b725b6b1633649f5920e2579b65.png", 
                        "https://static.pandateacher.com/f9720b725b6b1633649f5920e2579b65.png", 
                        "https://static.pandateacher.com/f9720b725b6b1633649f5920e2579b65.png"
                        ], // 奖品预览图
                        title: "理财沙盘--模拟如何操盘", // 标题
                        award_title:"理财",
						tags: [
							{
								bg_color: "",
								text: "理财"
							},
							{
								bg_color: "",
								text: "经济学"
							}
						], // 标签
						integral: 5, // 所需积分
						price: 69 // 价格
					},
					status: "not_own", // own 就是拥有了， not_own 没有拥有
					own_number: 0, // 已经拥有的数量
					own_min: 348, // 滚动效果的最小值
					own_max: 359 // 滚动效果的最大值
				}
			]
		}
	}
};
