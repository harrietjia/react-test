import React from 'react';
import {Row, Col} from 'antd';
import {Menu, Icon, Tabs, message, Form, Input, Button, Checkbox, Modal} from 'antd';
import {Router, Route, Link, browserHistory} from 'react-router'

const FormItem = Form.Item;
const SubMeun = Menu.SubMenu;
const TabPane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;

class MobileHeader extends React.Component {
	constructor() {
		super();
		this.state = {
			current: "top",
			modalVisible: false,
			action: "login",
			hasLogined: false,
			userNickName: "habu",
			userid: 0
		};
	};

	componentWillMount(){
		if (localStorage.userid) {
			this.setState({hasLogined:true});
			this.setState({userNickName: "habu",userid: "001"});
		}
	};
	handleClick (e) {
		if(e.key === "register"){
			this.setState({
				current: "register",
			});
			this.setModalVisible(true);
		}else{
			this.setState({
				current: e.key,
			});
		}

	};
	setModalVisible (value){
		this.setState({modalVisible:value});
	};
	handleSubmit (e) {
		e.preventDefault();
		let myFetchOptions = {
			method: 'GET'
		}
		let formData = this.props.form.getFieldsValue();
		// fetch()此处请求接口
		localStorage.userid= "001";
		if (this.state.action == "login") {
			this.setState({hasLogined: true});
		}
		this.setModalVisible(false);
		console.log(formData);
	};
	login() {
		this.setModalVisible(true);
	};
	callback(key) {
		if (key == 1) {
			this.setState({action: 'login'});
		} else if (key == 2) {
			this.setState({action: 'register'});
		}
	};

	render() {
		let { getFieldDecorator } = this.props.form;
		const userShow = this.state.hasLogined ?
				<Link to={`/usercenter`}>
					<Icon type="inbox"/>
				</Link>
				:
				<Icon type="setting" onClick={this.login.bind(this)} />
		return (
				<div  id="mobileheader">
					<header>
							<img src="./src/images/logo.png" alt="logo"/>
							<span>ReactNews</span>
						{userShow}
					</header>

					<Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible} onCancel = {()=>{this.setModalVisible(false)}} onOk = {()=>{this.setModalVisible(false)}} okText="关闭">
						<Tabs type="card" onChange={this.callback.bind(this)}>
							<TabPane tab="登录" key="1">
								<Form horizontal onSubmit={this.handleSubmit.bind(this)}>
									<FormItem label="账户">
										{getFieldDecorator('r_userName', {})(<Input placeholder="请输入您的帐号" />)}
									</FormItem>
									<FormItem label="密码">
										{getFieldDecorator('r_password', {})(<Input type="password" placeholder="请输入您的密码"  />)}
									</FormItem>
									<Button type="primary" htmlType="submit">登录</Button>
								</Form>
							</TabPane>
							<TabPane tab="注册" key="2">
								<Form horizontal onSubmit={this.handleSubmit.bind(this)}>
									<FormItem label="账户">
										{getFieldDecorator('r_userName', {})(<Input placeholder="请输入您的帐号" />)}
									</FormItem>
									<FormItem label="密码">
										{getFieldDecorator('r_password', {})(<Input type="password" placeholder="请输入您的密码"  />)}
									</FormItem>
									<FormItem label="确认密码">
										{getFieldDecorator('r_confirmPassword', {})(<Input type="password" placeholder="请再次输入您的密码"  />)}
									</FormItem>
									<Button type="primary" htmlType="submit">注册</Button>
								</Form>
							</TabPane>
						</Tabs>
					</Modal>

				</div>
		);
	};
}

export default MobileHeader = Form.create({})(MobileHeader);
