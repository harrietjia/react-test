import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col, Modal} from 'antd';
import {Menu, Icon} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import {
	Tabs,
	message,
	Form,
	Input,
	Button,
	Card,
	Upload
} from 'antd';
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
import {Router, Route, Link, browserHistory} from 'react-router'
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
export default class MobileUserCenter extends React.Component {

	constructor() {
		super();
		this.state = {
			usercollection: '',
			usercomments: '',
			previewImage: '',
			previewVisible: false
		};
	};

	componentDidMount() {
		let myFetchOptions = {
			method: 'GET'
		};
		// fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid=" + localStorage.userid, myFetchOptions)
		// .then(response=>response.json())
		// .then(json=>{
		// 	this.setState({usercollection:json});
		// });
		let collectionJson = [{uniquekey:1,title:"土生瑞穗"},{uniquekey:2,title:"菅井友香"},{uniquekey:1,title:"土生瑞穗"},{uniquekey:2,title:"菅井友香"},{uniquekey:1,title:"土生瑞穗"},{uniquekey:2,title:"小池美波"},{uniquekey:1,title:"土生瑞穗"},{uniquekey:2,title:"菅井友香"},{uniquekey:1,title:"土生瑞穗"},{uniquekey:2,title:"菅井友香"},{uniquekey:1,title:"土生瑞穗"},{uniquekey:2,title:"小池美波"},{uniquekey:1,title:"土生瑞穗"},{uniquekey:2,title:"菅井友香"},{uniquekey:1,title:"土生瑞穗"},{uniquekey:2,title:"菅井友香"},{uniquekey:1,title:"土生瑞穗"},{uniquekey:2,title:"小池美波"},{uniquekey:1,title:"土生瑞穗"},{uniquekey:2,title:"菅井友香"},{uniquekey:1,title:"土生瑞穗"},{uniquekey:2,title:"菅井友香"}];
		this.setState({usercollection:collectionJson});

		// fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getusercomments&userid=" + localStorage.userid, myFetchOptions)
		// .then(response=>response.json())
		// .then(json=>{
		// 	this.setState({usercomments:json});
		// });
		let commentsJson = [{uniquekey:1,UserName:"土生瑞穗",thumbnail_pic_s:"./src/images/carousel_1.jpg",author_name:"habu",datetime:"2019-07-07",Comments:"哈布ssdsdgsd"},{uniquekey:1,UserName:"菅井友香",thumbnail_pic_s:"./src/images/carousel_2.jpg",author_name:"habu",datetime:"2019-07-07",Comments:"g的法国东方哈布"},{uniquekey:1,UserName:"小池美波",thumbnail_pic_s:"./src/images/carousel_3.jpg",author_name:"habu",datetime:"2019-07-07",Comments:"表达法白哈布"},{uniquekey:1,UserName:"土生瑞穗",thumbnail_pic_s:"./src/images/carousel_1.jpg",author_name:"habu",datetime:"2019-07-07",Comments:"哈布"},{uniquekey:1,UserName:"菅井友香",thumbnail_pic_s:"./src/images/carousel_2.jpg",author_name:"habu",datetime:"2019-07-07",Comments:"哈布"},{uniquekey:1,UserName:"小池美波",thumbnail_pic_s:"./src/images/carousel_3.jpg",author_name:"habu",datetime:"2019-07-07",Comments:"grsdfsgr哈布"}];
		this.setState({usercomments:commentsJson});
	};
	handleCancel(){
		this.setState({previewVisible:false})
	};

	render() {
		const props = {
			action: 'http://newsapi.gugujiankong.com/handler.ashx',
			headers: {
				"Access-Control-Allow-Origin": "*"
			},
			listType: 'picture-card',
			defaultFileList: [
				{
					uid: -1,
					name: 'xxx.png',
					state: 'done',
					url: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png',
					thumbUrl: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png'
				}
			],
			onPreview: (file) => {
				this.setState({previewImage: file.url, previewVisible: true});
			}
		};
		const {usercollection,usercomments} = this.state;
		const usercollectionList = usercollection.length ?
		usercollection.map((uc,index)=>(
				<Card key={index} title={uc.uniquekey} extra={<a href={`/#/details/${uc.uniquekey}`}>查看</a>}>
					<p>{uc.title}</p>
				</Card>
		))
		:
		'您还没有收藏任何的新闻，快去收藏一些新闻吧。';

		const usercommentsList = usercomments.length ?
		usercomments.map((comment,index)=>(
				<Card key={index} title={`于 ${comment.datetime} 评论了文章`} extra={<a href={`/#/details/${comment.uniquekey}`}>查看</a>}>
					<p>{comment.Comments}</p>
				</Card>
		))
		:
		'您还没有发表过任何评论。';

		return (
			<div>
				<MobileHeader/>
				<Row>
					<Col span={24}>
						<Tabs>
							<TabPane tab="我的收藏列表" key="1">
								<Row>
									<Col span={24}>
										{usercollectionList}
									</Col>
								</Row>
							</TabPane>
							<TabPane tab="我的评论列表" key="2">
							<Row>
								<Col span={24}>
									{usercommentsList}
								</Col>
							</Row>
							</TabPane>
							<TabPane tab="头像设置" key="3">
								<div className="clearfix">
									<Upload {...props}>
										<Icon type="plus"/>
										<div className="ant-upload-text">上传照片</div>
									</Upload>
									<Modal visible={this.state.previewVisible} footer={null} onCancel={this.handleCancel.bind(this)}>
										<img alt="预览" src={this.state.previewImage}/>
									</Modal>
								</div>
							</TabPane>
						</Tabs>
					</Col>
				</Row>
				<MobileFooter/>
			</div>
		);
	};
}
