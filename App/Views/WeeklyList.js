'use strict';

var React = require('react-native');
var Api = require('./Api');
var Web = require('./Web');

var {
	Text,
	Image,
	StyleSheet,
	ListView,
	View,
	TouchableOpacity,
} = React;


var WeeklyList = React.createClass({
	getInitialState: function(){
	    return {
	       	dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
	    };
	},
	render: function(){
		return (
			<ListView
			style={styles.listView}
	        pageSize={15}
	        dataSource={this.state.dataSource}
	        renderRow={this.renderRow}
	        automaticallyAdjustContentInsets={false}
	        showsVerticalScrollIndicator={false} />
		);
	},
	componentDidMount: function(){
		this.fetchData();
	},
	fetchData : function(){
		var data = this.props.data;
		Api.analyzeId(data.id,(rtnData) => {
			this.setState({
				dataSource: this.state.dataSource.cloneWithRows(rtnData),
			});
		});
	},
	renderRow : function(rowData){
		return (
			<TouchableOpacity 
				onPress={
					() => this.selectNode(rowData)
				}
			>
			<View style={styles.rowView}>
				<Text>{rowData.text}</Text>
			</View>
			</TouchableOpacity>
		);
	},
	selectNode : function(rowData){
		this.props.navigator.push({
	      title: 'Detail',
	      component: Web,
	      passProps: {url: rowData.url},
	    });
	}
});

var styles = StyleSheet.create({
	listView: {
		marginTop: 65,
		marginBottom: 65
	},
	rowView : {
		flex:1,
		alignItems: 'center',
		margin: 10,
		padding: 8,
		borderWidth: 2,
    	borderColor: '#fff',
	}
});

module.exports = WeeklyList;
