import React from 'react'

class Menu_lavel_2 extends React.Component{
	constructor(props){
		super(props);
		this.state = this.props.store.getState();
		this.active = this.active.bind(this);
		this.updateState = this.updateState.bind(this);
		this.toggleSeachButton = this.toggleSeachButton.bind(this);
		this.source = this.source.bind(this);
		this.props.store.subscribe(this.updateState);
	}
	active(){
		return this.state.display['navigation-panel'].display ? 'active' : '';
	}
	updateState(){	
		this.setState((prevState, props) => {return props.store.getState();});
	}
	toggleSeachButton(index,name){
		//console.log(index);
		this.props.store.dispatch({type: 'CLICK_SEARCH_SOURCE_BUTTON',index: index,name:name});
	}
	source(){
		return this.state.sources.length ? this.state.sources.map((item,index) => <li onClick = {() => this.toggleSeachButton(index,item.name)} className = {item.active} key={index}>{item.name}</li>) : '';
	}
	render(){
		
		return (
					<div className = {"menu-level--2 " + this.active()}>
						<ul>
						 	{this.source()}
						</ul>
					</div>
		)
	}
}

export {Menu_lavel_2} 