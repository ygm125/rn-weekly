'use strict';

var React = require('react-native');
var Web = require('./Web');

var {
	Text,
	View,
	StyleSheet,
	TouchableHighlight,
} = React;


var About = React.createClass({

	render: function(){
		return (
			<View style={styles.container}>
  
		        <Text style={styles.ad}>
					GM
		        </Text>

		        <TouchableHighlight underlayColor="#ffffff" activeOpacity=".6" onPress={() => this._onPress('GM', 'http://gmiam.com')}>
		          <Text style={styles.link}>
		         		个人主页
		          </Text>
		        </TouchableHighlight>

	        </View>
		);
	},
	_onPress: function(title, url){

	    this.props.navigator.push({
	      title: title,
	      component: Web,
	      passProps: {url: url},
	    });
 	}
});

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15
  },
  ad: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left'
  },
  link: {
    marginTop: 20,
    color: '#356DD0',
  }
});

module.exports = About;
