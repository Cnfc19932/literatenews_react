import React from 'react'	



class Header_main extends React.Component{
	render(){
		return (
			<span>
				<div className = "header__menu">
					<span className = "menu-container">
						<i className = "material-icons">menu</i>
					</span>
				</div>
				<a href = "#">
					<div className = "header__logo">TheRateNews</div>
				</a> 
				<div className = "header__search">
					<span className = "search-container">
						<i className = "material-icons">search</i>
					</span>
				</div>
			</span>
		)
	}
}

export {Header_main}