import React from 'react'

let Item = React.createClass({
	shouldComponentUpdate: function(nextProps,nextState){
		return true || (JSON.stringify(this.props.i) != JSON.stringify(nextProps.i));
	},
	render : function() {
		var style = {
			'backgroundImage' : 'url('+this.props.i.img+')'
		};

		return (
			<item>
				<div className = "item__img" style={style}></div>
				<div className = "item__text">
					<div className = "title">
						<h2>{this.props.i.title}</h2>
					</div>
					<div className = "text">{this.props.i.text}</div>
				</div>
			</item>
		)
	}
});

export {Item}
