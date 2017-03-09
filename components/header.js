import React from 'react'

let Header = React.createClass({
	render: () => (
			<div className = "header-container">
				<header className = "header"> 
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
				</header>

				<div className = "search-panel">
					<input className = "search-panel__input" name = "" type = "text" value="" placeholder="Text" />
				</div>

				<div className = "menu-level--2">
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

			</div>
	)
});

export {Header}