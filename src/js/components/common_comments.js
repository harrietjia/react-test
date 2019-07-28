import React from 'react';
import {Row, Col} from 'antd';
import {
	Menu,
	Tabs,
	message,
	Form,
	Input,
	Button,
	CheckBox,
	Modal,
	Card,
	notification
} from 'antd';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;
class CommonComments extends React.Component {
	constructor() {
		super();
		this.state = {
			comments: ''
		};
	};
	componentDidMount() {
		var myFetchOptions = {
			method: 'GET'
		};
		// fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=" + this.props.uniquekey, myFetchOptions).then(response => response.json()).then(json => {
		// 	this.setState({comments: json});
		// });
		let json = [{uniquekey:1,UserName:"土生瑞穗",thumbnail_pic_s:"./src/images/carousel_1.jpg",author_name:"habu",datetime:"2019-07-07",Comments:"哈布ssdsdgsd"},{uniquekey:1,UserName:"菅井友香",thumbnail_pic_s:"./src/images/carousel_2.jpg",author_name:"habu",datetime:"2019-07-07",Comments:"g的法国东方哈布"},{uniquekey:1,UserName:"小池美波",thumbnail_pic_s:"./src/images/carousel_3.jpg",author_name:"habu",datetime:"2019-07-07",Comments:"表达法白哈布"},{uniquekey:1,UserName:"土生瑞穗",thumbnail_pic_s:"./src/images/carousel_1.jpg",author_name:"habu",datetime:"2019-07-07",Comments:"哈布"},{uniquekey:1,UserName:"菅井友香",thumbnail_pic_s:"./src/images/carousel_2.jpg",author_name:"habu",datetime:"2019-07-07",Comments:"哈布"},{uniquekey:1,UserName:"小池美波",thumbnail_pic_s:"./src/images/carousel_3.jpg",author_name:"habu",datetime:"2019-07-07",Comments:"grgr哈布"}];
		this.setState({comments: json});
	};
	handleSubmit(e) {
		e.preventDefault();
		let myFetchOptions = {
			method: 'GET'
		};
		let formdata = this.props.form.getFieldsValue();
		console.log(formdata)
		// fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=" + localStorage.userid + "&uniquekey=" + this.props.uniquekey + "&commnet=" + formdata.remark, myFetchOptions).then(response => response.json()).then(json => {
			this.componentDidMount();
		// })
	};
	addUserCollection() {
		let myFetchOptions = {
			method: 'GET'
		};
		// fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=uc&userid=" + localStorage.userid + "&uniquekey=" + this.props.uniquekey, myFetchOptions).then(response => response.json()).then(json => {
			//收藏成功以后进行一下全局的提醒
			notification['success']({message: 'ReactNews提醒', description: '收藏此文章成功'});
		// });
	};
	render() {
		let {getFieldDecorator} = this.props.form;
		const {comments} = this.state;
		const commnetList = comments.length ?
				comments.map((comment, index) => (
						<Card key={index} title={comment.UserName} extra={< a href = "#" > 发布于 {comment.datetime} < /a>}>
							<p>{comment.Comments}</p>
						</Card>
					))
				: '没有加载到任何评论';
		return (
				<div class="comment">
					<Row>
						<Col span={24}>
							{commnetList}
							<Form onSubmit ={this.handleSubmit.bind(this)}>
								<FormItem label="您的评论">
							{getFieldDecorator('remark', {initialValue: ''})(<Input type="textarea" placeholder="随便写" />)}
								</FormItem>
								<Button type="primary" htmlType="submit">提交评论</Button>
								&nbsp;&nbsp;
								<Button type="primary" htmlType="button" onClick={this.addUserCollection.bind(this)}>收藏该文章</Button>
							</Form>
						</Col>
					</Row>
				</div>
				);
			};
		}
export default CommonComments = Form.create({})(CommonComments);
