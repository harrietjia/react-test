import React from 'react';
import {Row, Col, BackTop} from 'antd';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import PCNewsImageBlock from './pc_news_image_block';
import CommonComments from './common_comments';
export default class PCNewsDetails extends React.Component {
	constructor() {
		super();
		this.state = {
			newsItem: {title: "蓝色预警",pagecontent: '<div class=\"post_text\" id=\"endText\" style=\"border-top:1px solid #ddd;\">\n\n<p class=\"otitle\">\n（原标题：北京江苏河南等11省市有8-9级雷暴大风或冰雹 ）\n </p>\n\n<p></p><p>中国天气网讯 中央气象台7月28日10时发布强对流天气蓝色预警：</p><p>预计7月28日14时至29日14时，黑龙江中部、河北东北部和中部、北京北部和南部、山西中部、山东中南部、江苏中北部、河南中北部、陕西东南部、江西西部、福建北部和南部、广东南部等地的部分地区将有8-9级雷暴大风或冰雹天气；此外，黑龙江中部、北京、天津、河北、山西中北部、陕西北部、甘肃中部、四川中东部、河南中北部、山东中南部、江苏中北部、福建、广东、江西中南部、海南等地的部分地区将有短时强降水天气，小时雨强20-50毫米，局地可达60毫米以上。其中，黑龙江、山东中南部、江苏中北部、河南中北部、福建北部、广东南部的强对流主要出现在今天午后至傍晚时段，北京、天津、河北地区的强对流主要在今天后半夜至明天白天。</p><p class=\"f_center\"><img alt=\"北京江苏河南等11省市有8-9级雷暴大风或冰雹\" src=\"http://cms-bucket.ws.126.net/2019/07/28/e77c7195fd5a4919a4914251c3119218.jpeg\"><img alt=\"北京江苏河南等11省市有8-9级雷暴大风或冰雹\" src=\"http://cms-bucket.ws.126.net/2019/07/28/390784f90b9848c29a6ecb1d07b8eab5.jpeg\"></p><p>防御指南：</p><p>1.政府及相关部门按照职责做好防短时暴雨、防雷、防大风应急防御工作，气象部门做好人工防雹作业准备并择机进行作业；</p><p>2. 驾驶员通过积水路段应减速慢行确认安全后再通过，交管部门应当根据路况在强降雨路段和积水路段采取交通管制措施和交通引导；</p><p>3.户外人员应减少或暂停空旷地方的户外作业，选择进入抗风能力较强并具有防雷措施的建筑内，同时关闭门窗远离危险电源；</p><p>4.机场、铁路、高速公路和水上交通等单位应采取限飞、限速或暂时关闭等措施保障人员和交通安全，相关水域水上作业和过往船舶应回港规避，加固港口设施；</p><p>5.检查城市、农田、鱼塘排水系统，做好必要的排涝措施和对山洪、滑坡、泥石流等灾害的防御准备。</p></div>'}
		};
	};
	componentDidMount() {
		let myFetchOptions = {
			method: 'GET'
		};
		// fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.params.uniquekey, myFetchOptions).then(response => response.json()).then(json => {
		// 	this.setState({newsItem: json});
		// 	document.title = this.state.newsItem.title + " - React News | React 驱动的新闻平台";
		// });
		document.title = this.state.newsItem.title + " - React News | React 驱动的新闻平台";
	};

	createMarkup() {
		return {__html: this.state.newsItem.pagecontent};
	};
	render() {
		return (
				<div>
					<PCHeader></PCHeader>
					<Row>
						<Col span={2}></Col>
						<Col span={14} className="container">
							<div class="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
							<hr/>
							<CommonComments uniquekey={this.props.params.uniquekey}/>
						</Col>
						<Col span={6}>
							<PCNewsImageBlock count={40} type="top" width="100%" cartTitle="相关新闻" imageWidth="4rem"/>
						</Col>
						<Col span={2}></Col>
					</Row>
					<PCFooter></PCFooter>
					<BackTop/>
				</div>
		);
	};
}
