import React from 'react'
import {Header} from '../components/header'
import {Content} from '../components/content'
import { connect } from 'react-redux'

class App extends React.Component{
	constructor(props){
		super(props);
		this.state = this.props.store;
		this.updateState = this.updateState.bind(this);
		this.props.store.subscribe(this.updateState);
	}

	updateState(){
		this.setState((prevState, props) => {return props.store.getState();});
	}
	componentDidMount(){
		const api = 'http://news.lists.pw:8080/theratenews/lite/main/';
		var store = this.props.store;

		var xhr = new XMLHttpRequest();
		xhr.open('GET',api, true); 
		xhr.send();

		function c(xhr,callback){
			if (xhr.status == 200) {
			//  console.log(JSON.parse(xhr.responseText));
				store.dispatch({
					type: 'INIT',
					data : JSON.parse(xhr.responseText).all_news
				});
				return callback();
			}else{
			//	console.log('Error '  +xhr.status);
			}
		}

	xhr.onreadystatechange = function() {
  	if (xhr.readyState != 4) return;
		c(xhr,function(){
		//console.log('callback');
			store.dispatch({
				type: 'START'
			});
		});
	}


	}
	render() {
		//	console.log(this.props.store.getState());
    	return (
    			<div id = "page">
    				<div className = "container">
    					<Header store={this.props.store}/>
    					<Content store={this.props.store}/>
    				</div>
    			</div>
    	);
  	}
};


export default App
