// JavaScript Document

var ctmargin1 = new Vue({
	el:'#ctmargin',	
	data:{
		parentMessage: 'Parent',
		banners:[
			"images/index_06.png",
			"images/customer_02.jpg",
			"images/index_06.png"
			],
		tqnavs:[
			{
				html:"serviceitem.html",
				img:"images/index_03.jpg",
				text:"服务项目"
				},
			{
				html:"customer.html",
				img:"images/index_05.jpg",
				text:"增值服务"
				},
			{
				html:"case.html",
				img:"images/index_07.jpg",
				text:"成功案例"
				},
			{
				html:"about.html",
				img:"images/index_09.jpg",
				text:"关于我们"
				}
		],
		utqs:[
			{
				img:"images/index_16.jpg",
				title:"无需代码，一键生成",
				},
			{
				img:"images/index_22.jpg",
				title:"可视化拖拽",
				},
			{
				img:"images/index_24.jpg",
				title:"率先采用VUE前端技术",
				},
			{
				img:"images/index_26.jpg",
				title:"深度优化底层框架",
				},
			{
				img:"images/index_28.jpg",
				title:"多后台独立管理",
				},
			{
				img:"images/index_30.jpg",
				title:"海量模板多样组件",
				},
			{
				img:"images/index_32.jpg",
				title:"完善的行业解决方案",
				},
			{
				img:"images/index_34.jpg",
				title:"实时预览、下载、分享",
				}	
		],//首页选择我们
		cbtqs:[
			{
				img:"images/index_34.png",
				title:"小程序开发",
				text:"各领域的轻量级传播推广新利器，无需下载，即用即走",
				class:"bluebg"
				},
			{
				img:"images/index_36.png",
				title:"网站设计",
				text:"品牌官网建设，集团网站建设商城网站开发，营销型网站建设",
				class:"violetbg"
				},
			{
				img:"images/index_38.png",
				title:"APP开发",
				text:"为客户提供专业的商务咨询、研发等运营解决方案，从而提升用户的转化率。",
				class:"redbg"
				},
			{
				img:"images/index_40.png",
				title:"定制开发",
				text:"各领域的定制开发，满足不同类型的用户需求。",
				class:"yellowbg"
				},
			//{
//				img:"images/index_46.png",
//				title:"ERP",
//				text:"ERP 具有整合性、系统性、灵活性、实时控制性等显著特点。",
//				class:"violetbg"
//				},
//			{
//				img:"images/index_47.png",
//				title:"CRM",
//				text:"CRM是现代营销管理理念和信息技术的完美结合。",
//				class:"yellowbg"
//				},
//			{
//				img:"images/index_48.png",
//				title:"OA",
//				text:"OA强调办公的便捷方便，提高效率,具备五大特性：易用性、健壮性、开放性、严密性、实用性。",
//				class:"bluebg"
//				},
//			{
//				img:"images/index_49.png",
//				title:"SaaS",
//				text:"服务的收费方式风险小，灵活选择模块，备份，维护，安全，升级",
//				class:"redbg"
//				}
		],//核心业务
		casetqs:[
			{
				class:"front_side",
				img:"images/index_55.png",
				brief:"分销系统团队分红综合平台订单、物流等",
				main:"分销系统团队分红电商购物综合平台订单物流等",
				adapt:"百货商品  电商服务  服装鞋包"
				},
			{
				class:"gallery_left_middle",
				img:"images/index_55.png",
				brief:"分销系统团队分红综合平台订单、物流等2",
				main:"分销系统团队分红电商购物综合平台订单物流等",
				adapt:"百货商品  电商服务  服装鞋包"
				},
			{
				class:"gallery_right_middle",
				img:"images/index_55.png",
				brief:"分销系统团队分红综合平台订单、物流等3",
				main:"分销系统团队分红电商购物综合平台订单物流等",
				adapt:"百货商品  电商服务  服装鞋包"
				},
			{
				class:"gallery_out",
				img:"images/index_55.png",
				brief:"分销系统团队分红综合平台订单、物流等4",
				main:"分销系统团队分红电商购物综合平台订单物流等",
				adapt:"百货商品  电商服务  服装鞋包"
				},
			{
				class:"gallery_out",
				img:"images/index_55.png",
				brief:"分销系统团队分红综合平台订单、物流等5",
				main:"分销系统团队分红电商购物综合平台订单物流等",
				adapt:"百货商品  电商服务  服装鞋包"
				},
			{
				class:"gallery_out",
				img:"images/index_55.png",
				brief:"分销系统团队分红综合平台订单、物流等6",
				main:"分销系统团队分红电商购物综合平台订单物流等",
				adapt:"百货商品  电商服务  服装鞋包"
				}
		],//首页成功案例
		smallprogramss:[
			{text:"微信之父张小龙曾预言："},
			{text:"未来2年内，小程序将取代绝大多数App！"},
			{text:"依傍着微信10亿用户流量平台，小程序将迎来超速发展，中小企业都将快速接入小程序。"},
			{text:"小程序将是未来所有中小企业的标配，"},
			{text:"就像现在的企业都会配置网站一样。"}
		],//小程序开发
		webdesignss:[
			"企业官网",
			"外贸专业网型",
			"会员服务型",
			"企业电商型"
		],//网页设计
		customers:[
			{
				class:"",
				title:"Restaurant ",
				title2:"餐饮行业",
				text:"为餐饮行业提供专业服务",
				img:"images/customer_05.jpg",
				customerps:[
					{
					text:"1",
					text2:"线上宣传：（放置网页广告位、微信朋友圈、发帖、EDM等）；"
					},
					{
					text:"2",
					text2:"线下推广：（派发DM单、会员宣传手册、组织相关的美食活动等）；"
					},
					{
					text:"3",
					text2:"导航系统：建立合作商家的电子地图，作为会员消费的指南针；"
					},
					{
					text:"4",
					text2:"网站建设：帮助商家构建网站；"
					},
					{
					text:"5",
					text2:"专业人士不定期回访：帮忙、指导、策划营销活动；"
					}
				]
				},
			{
				class:"customerboxb",
				title:"Beauty Clinic ",
				title2:"医美行业",
				text:"为医美行业提供专业服务",
				img:"images/customer_09.jpg",
				customerps:[
					{
					text:"1",
					text2:"设计活动二维码在线分享，从而获得顾客；"
					},
					{
					text:"2",
					text2:"利用小程序在线推广进行品牌营销，刺激以客带客；"
					},
					{
					text:"3",
					text2:"网络建设、社群交流系统；"
					},
					{
					text:"4",
					text2:"平台广告展示：利用线上宣传增加品牌曝光率，加深消费者印象；"
					},
					{
					text:"5",
					text2:"资源整合、营销活动策划；"
					}
				]
				},
			{
				class:"customerboxb customerboxWathet",
				title:"Education",
				title2:"教育行业",
				text:"为教育行业提供专业服务",
				img:"images/customer_13.jpg",
				customerps:[
					{
					text:"1",
					text2:"利用小程序线上推广,帮分享微信群,朋友圈；"
					},
					{
					text:"2",
					text2:"在人流量较多的地区发传单；"
					},
					{
					text:"3",
					text2:"电话推广；"
					},
					{
					text:"4",
					text2:"帮策划一些优惠活动,吸引新顾客；"
					},
					{
					text:"5",
					text2:"人员不足时,可以辅助贵司招聘；"
					}
				]
				},
			{
				class:"",
				title:"apparels",
				title2:"服装行业",
				text:"为服装行业提供专业服务",
				img:"images/customer_17.jpg",
				customerps:[
					{
					text:"1",
					text2:"利用小程序线上推广,分享至微信群；"
					},
					{
					text:"2",
					text2:"定期更新一些新款图片,发送至不同的朋友圈；"
					},
					{
					text:"3",
					text2:"帮策划一些优惠活动吸引新老顾客；"
					},
					{
					text:"4",
					text2:"在店铺周边人流量较多的地方发传单；"
					}
				]
				},
			{
				class:"customerboxb",
				title:"Custom",
				title2:"定制行业",
				text:"为定制行业提供专业服务",
				img:"images/customer_05.jpg",
				customerps:[
					{
					text:"1",
					text2:"帮客户电话邀约业主。"
					},
					{
					text:"2",
					text2:"新楼盘交房帮助客户扫楼盘。"
					},
					{
					text:"3",
					text2:"免费帮客户量尺。"
					},
					{
					text:"4",
					text2:"客户提出要求帮助客户出三维家或酷家乐效果图。"
					},
					{
					text:"5",
					text2:"帮助客户提货送货到业主家。"
					},
					{
					text:"6",
					text2:"为客户提供安装清洁服务。"
					}
				]
				},
			{
				class:"customerboxb customerboxWathet",
				title:"Decoration",
				title2:"装饰行业",
				text:"为装饰行业提供专业服务",
				img:"images/customer_05.jpg",
				customerps:[
					{
					text:"1",
					text2:"为客户电话邀约业主"
					},
					{
					text:"2",
					text2:"为客户提供验房服务。"
					},
					{
					text:"3",
					text2:"为客户把户型图，施工图纸做好。"
					},
					{
					text:"4",
					text2:"根据客户图纸提供最精准预算。"
					},
					{
					text:"5",
					text2:"为客户联系好各种施工人员。"
					},
					{
					text:"6",
					text2:"为客户提供最精致的清洁服务"
					}
				]
				}
		],//客户服务
		industrycases:[
			{
				href:"mealcase.html",
				img:"images/industrycase_03.jpg",
				text:"家居行业"
				},
			{
				href:"mealcase.html",
				img:"images/industrycase_05.jpg",
				text:"餐饮行业"
				},
			{
				href:"clothingcase.html",
				img:"images/industrycase_07.jpg",
				text:"服装行业"
				},
			{
				href:"mealcase.html",
				img:"images/industrycase_12.jpg",
				text:"医美行业"
				},
			{
				href:"mealcase.html",
				img:"images/industrycase_13.jpg",
				text:"教育行业"
				},
			{
				href:"mealcase.html",
				img:"images/industrycase_14.jpg",
				text:"旅游行业"
				},
			{
				href:"mealcase.html",
				img:"images/industrycase_19.jpg",
				text:"评估行业"
				},
			{
				href:"mealcase.html",
				img:"images/industrycase_21.jpg",
				text:"拍卖行业"
				},
			{
				href:"mealcase.html",
				img:"images/industrycase_23.jpg",
				text:"装修行业"
				},
			],
			bcnavs:[
				{
					href:"index.html",
					text:"首页"
					},
				{
					href:"case.html",
					text:"行业案例"
					}
			],
			clothingcases:[
				{img:"images/clothingcase_03.jpg"},{img:"images/clothingcase_05.jpg"},{img:"images/clothingcase_07.jpg"},{img:"images/clothingcase_13.jpg"},{img:"images/clothingcase_15.jpg"},{img:"images/clothingcase_17.jpg"}
			],
			mealcases:[
				{img:"images/mealcase_03.jpg"},{img:"images/mealcase_05.jpg"},{img:"images/mealcase_07.jpg"},{img:"images/mealcase_13.jpg"},{img:"images/mealcase_15.jpg"},{img:"images/mealcase_17.jpg"},{img:"images/mealcase_21.jpg"},{img:"images/mealcase_22.jpg"},{img:"images/mealcase_23.jpg"}
			],
		guigeSpan:"0",                     
		kouweiSpan:"0",
		kouweisSpan:"0",
	},
	methods:{
		guige:function(index){  //当点击时候点亮，同级的span标签删除Class
			this.guigeSpan = index;
			},
		kouwei:function(index){
			this.kouweiSpan = index;
			},
		kouweis:function(index){
			this.kouweisSpan = index;
			}
		},
	
	});

