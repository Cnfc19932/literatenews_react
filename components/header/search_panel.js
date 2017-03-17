import React from 'react'

class Search_panel extends React.Component{
	constructor(props){
		super(props);
		this.state = this.props.store;
		this.active = this.active.bind(this);
		this.updateState = this.updateState.bind(this);
		this.props.store.subscribe(this.updateState);
	}
	active(){
		return this.props.store.getState().display['search-panel'].display ? 'active' : '';
	}
	updateState(){	
		this.setState((prevState, props) => {return props.store.getState();});
	}
	render(){
		return (
			<div className = {"search-panel " + this.active()}>
				<input className = "search-panel__input" name = "" type = "text" value="" placeholder="Text" />
			</div>
		)
	}
}	

export {Search_panel}