import React from 'react'

class Search_panel extends React.Component{
	constructor(props){
		super(props);
		this.state = this.props.store;
		this.active = this.active.bind(this);
		this.updateState = this.updateState.bind(this);
		this.props.store.subscribe(this.updateState);
		this.changeInputSearch = this.changeInputSearch.bind(this);
	}
	active(){
		return this.props.store.getState().display['search-panel'].display ? 'active' : '';
	}
	updateState(){	
		this.setState((prevState, props) => {return props.store.getState();});
	}
	changeInputSearch(e){
		this.props.store.dispatch({
		  type: 'CHANGE_SEARCH_LINE',
		  text: e.target.value || ''
		})
	}
	render(){
		return (
			<div className = {"search-panel " + this.active()}>
				<input onChange={this.changeInputSearch} className = "search-panel__input" type = "text"  placeholder="Text" />
			</div>
		)
	}
}	

export {Search_panel}