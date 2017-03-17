import React from 'react'

class Menu_lavel_2 extends React.Component{
	constructor(props){
		super(props);
		this.state = this.props.store;
		this.active = this.active.bind(this);
		this.updateState = this.updateState.bind(this);
		this.props.store.subscribe(this.updateState);
	}
	active(){
		return this.props.store.getState().display['navigation-panel'].display ? 'active' : '';
	}
	updateState(){	
		this.setState((prevState, props) => {return props.store.getState();});
	}

	render(){
		
		return (
					<div className = {"menu-level--2 " + this.active()}>
						<ul>
							<li className = "active">Все</li>
							<li>РБК</li>
							<li>ВЕСТИ</li>
							<li>Дождь</li>
							<li>Медуза</li>
							<li>VC.RU</li>
							<li>TJornal</li>
							<li>РБК</li>
							<li>ВЕСТИ</li>
							<li>Дождь</li>
							<li>VC.RU</li>
							<li>TJornal</li>
							<li>РБК</li>
							<li>ВЕСТИ</li>
							<li>Дождь</li>
						</ul>
					</div>
		)
	}
}

export {Menu_lavel_2} 