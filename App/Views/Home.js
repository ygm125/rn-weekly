'use strict';

var React = require('react-native');
var Weekly = require('./Weekly');
var WeeklyList = require('./WeeklyList');

var {
	Text,
	Image,
	StyleSheet,
	ListView,
	View,
	TouchableOpacity,
} = React;


var Home = React.createClass({
	getInitialState: function(){
		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	    return {
	       	dataSource: ds.cloneWithRows(Weekly)
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
	renderRow : function(rowData){
		return (
			<TouchableOpacity 
				onPress={
					() => this.selectNode(rowData)
				}
			>
				<View style={styles.rowView}>
					<Text >{rowData.name}</Text>
				</View>
			</TouchableOpacity>
		);
	},
	selectNode : function(data){
		this.props.navigator.push({
			title: 'List',
			component: WeeklyList,
			passProps: {
				data: data
			}
		});
	}

});

var styles = StyleSheet.create({
	listView: {
		marginTop: 65,
		marginBottom: 0
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

module.exports = Home;
