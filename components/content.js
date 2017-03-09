import React from 'react'
import {Item} from '../components/item'

class Content extends React.Component{
	constructor(props){
		super(props);
		this.state = 
			{
				'items' : [
					{
						'img' : 'http://s0.rbk.ru/v6_top_pics/resized/240x150_crop/media/img/6/72/754888022922726.jpg',
						'title' : 'Погибший в Сирии россиянин Слышкин служил в «группе Вагнера»',
						'text' : 'Погибший в Сирии 23-летний Иван Слышкин служил в частной военной компании Вагнера, рассказали два источника РБК. Слышкин тренировал сирийских военных и был убит во время разведывательной операции'
					},
					{
						'img' : 'http://s0.rbk.ru/v6_top_pics/resized/240x150_crop/media/img/4/19/754888196097194.jpg',
						'title' : 'Трамп подписал новый указ об ограничении иммиграции в США',
						'text' : 'Президент США Дональд Трамп подписал новый указ о мигрантах, который запрещает въезд в страну гражданам шести мусульманских стран: Сирии, Ирана, Судана, Ливии, Сомали и Йемена. Действие постановления не распространяется на тех, кто уже имеет американские визы'
					}
				]
			};
	}

	getListItems(){
		console.log(this.state.items);
		return this.state.items.map(function(value){
			return (<Item i={value}/>);
		});
	}
 
	render(){
		return  (
		<content>
			{this.getListItems()}
			<div className = "more-button">More</div>
		</content>
		)
	}
};


export {Content} 