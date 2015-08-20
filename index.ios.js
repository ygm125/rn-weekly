/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var Home = require('./App/Views/Home');
var About = require('./App/Views/About');

var {
  AppRegistry,
  StyleSheet,
  TabBarIOS,
  NavigatorIOS
} = React;

var weekly = React.createClass({
  getInitialState: function() {
      return {
          selectedTab: 'home'
      };
  },
  render: function() {
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>
            <TabBarIOS.Item accessibilityLabel={"home"}
                selected={this.state.selectedTab === 'home'}
                title="首页"
                name="home"
                icon={{uri: 'home', isStatic: true}}
                onPress={() => {
                    this.setState({
                      selectedTab: 'home'
                    });
                }}>

                <NavigatorIOS style={styles.container}
                    tintColor={'#333344'}
                    initialRoute={{
                      title: 'Home',
                      component: Home
                    }}
                    itemWrapperStyle={styles.navigator} />

            </TabBarIOS.Item>
            <TabBarIOS.Item accessibilityLabel={"about"}
                selected={this.state.selectedTab === 'about'}
                icon={{uri: 'about', isStatic: true}}
                title="关于"
                name="about"
                onPress={() => {
                    this.setState({
                      selectedTab: 'about'
                    });
                }}>

                <NavigatorIOS style={styles.container}
                    tintColor={'#333344'}
                    initialRoute={{
                      title: 'About',
                      component: About
                    }}
                    itemWrapperStyle={styles.navigator} />

            </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigator : {
    backgroundColor: '#E7EAEC'
  }
});

AppRegistry.registerComponent('weekly', () => weekly);
