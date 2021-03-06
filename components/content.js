import React from 'react'
import {Item} from '../components/content/item'
import {Button_more} from '../components/content/button_more'

class Content extends React.Component{
	constructor(props){
		super(props);
		this.state = this.props.store.getState().todo;
		this.updateState = this.updateState.bind(this);
		this.props.store.subscribe(this.updateState);
	}
	componentWillMount(){
		this.props.store.dispatch({
		  type: 'START'
		});
	}
	updateState(){
		this.setState((prevState, props) => {
			if ((props.store.getState().todo) && (prevState != props.store.getState().todo))
		  	{
		  		return props.store.getState().todo;
			}
		});
	}
 	shouldComponentUpdate(nextProps,nextState){
		return (JSON.stringify(nextState) != JSON.stringify(this.state));
	}
	getListItems(){
	//	console.log(4);
		return this.state.items ? this.state.items.map(function(value,key){ return (<Item i={value} key={key}/>); }) : '';
	}

	render(){

		return  (
		<content>
			{this.getListItems()}
			<Button_more store = {this.props.store}/>
		</content>
		)
	}
};



export {Content}
