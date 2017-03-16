import React from 'react'
import {storeApp} from '../../redux/main'
import { connect } from 'react-redux'

class Button_more extends React.Component{
	constructor(props){
		super(props);
		this.state = this.props.store;
		this.onClick = this.onClick.bind(this);

	}
	 
	onClick(e){
		this.props.store.dispatch({
		  type: 'SHOW_MORE'
		})

		
	}
	render(){

		return (<div className = "more-button" onClick={this.onClick}>More</div>)
	}
}



export {Button_more}