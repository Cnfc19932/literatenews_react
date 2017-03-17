import React from 'react'	



class Header_main extends React.Component{
	constructor(props){
		super(props);
		this.state = this.props.store.getState().display;
		this.header__menu_class = this.header__menu_class.bind(this);
		this.header__search_class = this.header__search_class.bind(this);
		this.updateState = this.updateState.bind(this);
		this.props.store.subscribe(this.updateState);
	}
	header__menu_class(){
		return this.state['navigation-panel'].display ? 'active' : '';
	}
	header__search_class(){
		return this.state['search-panel'].display ? 'active' : '';		
	}
	updateState(){	
		this.setState((prevState, props) => {return props.store.getState().display;});
	}
 	shouldComponentUpdate(nextProps,nextState){
 		var needUpdate = (nextState['navigation-panel'].display != this.state['navigation-panel'].display) || (nextState['search-panel'].display != this.state['search-panel'].display);
 		//console.log(needUpdate);
		return needUpdate;
	}
	render(){
		return (
			<span>
				<div onClick = {()=>{this.props.store.dispatch({type: 'CLICK_HEADER_MENU'})}} className = {"header__menu " + this.header__menu_class()}>
					<span className = "menu-container">
						<i className = "material-icons">menu</i>
					</span>
				</div>
				<a href = "/">
					<div className = "header__logo">TheRateNews</div>
				</a> 
				<div onClick = {()=>{this.props.store.dispatch({type: 'CLICK_SEARCH_PANEL'})}} className = {"header__search " + this.header__search_class()}>
					<span className = "search-container">
						<i className = "material-icons">search</i>
					</span>
				</div>
			</span>
		)
	}
}

export {Header_main}