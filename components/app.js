import React from 'react'
import {Header} from '../components/header' 
import {Content} from '../components/content'
import { connect } from 'react-redux'

let App = React.createClass({ 
	render: function() {

    	return ( 
    			<div id = "page">
    				<div className = "container"> 
    					<Header store={this.props.store}/> 
    					<Content store={this.props.store}/>
    				</div>
    			</div>
    	);
  	}
});


export default App
