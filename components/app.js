import React from 'react'
import {Header} from '../components/header' 
import {Content} from '../components/content'
 
let App = React.createClass({ 
	render: function() {
    	return ( 
    			<div id = "page">
    				<div className = "container"> 
    					<Header /> 
    					<Content />
    				</div>
    			</div>
    	);
  	}
});
 
export default App
