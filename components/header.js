import React from 'react'
import {Menu_lavel_2} from '../components/header/menu_lavel_2'
import {Header_main} from '../components/header/header_main'
import {Search_panel} from '../components/header/search_panel'

let Header = React.createClass({
	render(){

			return (
				<div className = "header-container">
					<header className = "header"> 
						<Header_main store={this.props.store} />
					</header>

					<Search_panel store={this.props.store}/>

					<Menu_lavel_2 store={this.props.store}/>

				</div>
			)
	}
});

export {Header}