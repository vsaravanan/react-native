'use strict';
 
var React = require('react');
var ReactNative = require('react-native');

var SearchPage = require('./SearchPage');


	class PropertyFinderApp extends React.Component {
	  render() {
		return (
		  <ReactNative.NavigatorIOS
			style={styles.container}
			initialRoute={{
			  title: 'Property Finder',
			  component: SearchPage
			}}/>
		);
	  }
	}


	var styles = ReactNative.StyleSheet.create({
	  text: {
		color: 'black',
		backgroundColor: 'white',
		fontSize: 30,
		margin: 80
	  },
	  container: {
		flex: 1
	  }
	});



ReactNative.AppRegistry.registerComponent('PropertyFinder', function() { return PropertyFinderApp });
var SearchPage = require('./SearchPage');
