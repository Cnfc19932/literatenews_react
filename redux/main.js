import { createStore } from 'redux'

const storeApp = (state, action) => {
  switch (action.type) {
  	case 'CHANGE_SEARCH_LINE':
		/* Четкий поиск (Не в смысле что семок просит)*/
		function searchFilter(item){
			var str = item.text + ' ' +item.title;
			var sl = action.text.toLowerCase() || '';
			return (str.toLowerCase().indexOf(sl) > -1);
		};
		var t = state.todo.itemsAll;
		var tt = state.todo.itemsAll.filter(searchFilter);

  		var new_state = {
  			'logic' : {
  				'search-text' : action.text || ''
  			},
  			'todo' : {
				'items' : tt,
				'itemsAll' : t
			}
  		};

	    return Object.assign ({}, state, new_state);

  	case 'CLICK_HEADER_MENU':
  		var display = {
  			'display' : {
		 		'search-panel' : {
					'display' : false
				},
				'navigation-panel' : {
					'display' : !state.display['navigation-panel'].display
				} 				
  			}
  		};
	    return Object.assign ({}, state, display);

  	case 'START':
	    return Object.assign ({}, state, {'todo' : {'items' : state.todo.itemsAll , 'itemsAll' : state.todo.itemsAll}});

	case 'CLICK_SEARCH_PANEL':
  		var display = {
  			'display' : {
		 		'search-panel' : {
					'display' : !state.display['search-panel'].display
				},
				'navigation-panel' : {
					'display' : false
				} 				
  			}
  		};	
	    return Object.assign ({}, state, display);
    case 'SHOW_MORE': 
	      return Object.assign ({}, state, {	'todo' : {
			'items' : [
						{
							'img' : 'http://s0.rbk.ru/v6_top_pics/resized/240x150_crop/media/img/6/72/754888022922726.jpg',
							'title' : 'Погибший в Сирии россиянин Слышкин служил в «группе Вагнера»11',
							'text' : 'Погибший в Сирии 23-летний Иван Слышкин служил в частной воен11ной компании Вагнера, рассказали два источника РБК. Слышкин тренировал сирийских военных и был убит во время разведывательной операции'
						}					
					],
			'itemsAll' : state.todo.itemsAll	
			}
			});

    default:
      return state
  }
}

const defoultStorage = {
	'display':{
		'search-panel' : {
			'display' : false
		},
		'navigation-panel' : {
			'display' : false
		}
	},
	'logic':{
		'search-text' : 'test'
	},
	'todo' : {
		'itemsAll' : [
					{
						'img' : 'http://s0.rbk.ru/v6_top_pics/resized/240x150_crop/media/img/6/72/754888022922726.jpg',
						'title' : 'Погибший в Сирии россиянин Слышкин служил в «группе Вагнера»',
						'text' : 'Погибший в Сирии 23-летний Иван Слышкин служил в частной военной компании Вагнера, рассказали два источника РБК. Слышкин тренировал сирийских военных и был убит во время разведывательной операции'
					},
					{
						'img' : 'http://s0.rbk.ru/v6_top_pics/resized/240x150_crop/media/img/4/19/754888196097194.jpg',
						'title' : 'Трамп подписал новый указ об ограничении иммиграции в США',
						'text' : 'Президент США Дональд Трамп подписал новый указ о мигрантах, который запрещает въезд в страну гражданам шести мусульманских стран: Сирии, Ирана, Судана, Ливии, Сомали и Йемена. Действие постановления не распространяется на тех, кто уже имеет американские визы'
					},
					{
						'img' : 'http://s0.rbk.ru/v6_top_pics/resized/240x150_crop/media/img/3/90/754888199788903.jpg',
						'title' : 'Москва ускорит переселение жильцов из подготовленных к сносу пятиэтажек',
						'text' : 'Московские власти работают над тем, чтобы ускорить процесс получения земельных участков и расселения жильцов для сноса пятиэтажек. Для этого могут потребоваться изменения в законодательстве'
					},
					{
						'img' : 'http://s0.rbk.ru/v6_top_pics/resized/240x150_crop/media/img/7/39/754888185552397.jpg',
						'title' : '«Дочка» РЖД предложила ограничить продажу билетов курильщикам-нарушителям',
						'text' : '«Дочка» РЖД, Федеральная пассажирская компания, обратится в Минтранс с просьбой отказывать в перевозке пассажирам, привлеченным к административной ответственности за курение в поездах дальнего следования. Об этом сообщил сотрудник пресс-службы ФПК'
					},
					{
						'img' : 'http://s0.rbk.ru/v6_top_pics/resized/240x150_crop/media/img/3/16/754888194003163.jpg',
						'title' : 'В Москве за год подешевел интернет',
						'text' : 'В 2016 году стоимость доступа в интернет для москвичей снизилась на 7–14%. По мнению экспертов, это объясняется высокой ценовой конкуренцией и большой распространенностью услуги. Дальнейшего снижения тарифов они не ждут'
					},
					{
						'img' : 'http://s0.rbk.ru/v6_top_pics/resized/240x150_crop/media/img/4/89/754888163808894.jpg',
						'title' : 'Минобороны подтвердило гибель российского разведчика в Сирии',
						'text' : 'Минобороны России подтвердило гибель разведчика Артема Горбунова в Сирии при выполнении операции по освобождению Пальмиры. Командование представило военного к госнаграде посмертно. Ранее о смерти военнослужащего рассказала РБК его вдова'
					},
					{
						'img' : 'http://s0.rbk.ru/v6_top_pics/resized/240x150_crop/media/img/8/68/754888176123688.jpg',
						'title' : 'Еврокомиссия одобрила строительство «Росатомом» АЭС в Венгрии',
						'text' : 'Европейская комиссия по итогам расследования одобрила предоставление господдержки проекту строительства АЭС «Пакш-2» в Венгрии, говорится в пресс-релизе европейского регулятора.'
					},
					{
						'img' : 'http://s0.rbk.ru/v6_top_pics/resized/240x150_crop/media/img/5/09/754888155230095.jpg',
						'title' : 'От трех губернаторов потребовали погасить долги по госконтрактам',
						'text' : 'Генпрокуратура выявила нарушения при исполнении многомиллионных госконтрактов в трех регионах Уральского федерального округа. По данным надзорного ведомства, госзаказчики удерживают крупные просроченные задолженности перед предпринимателями Свердловской, Челябинской и Курганской областей'
					}						
				]
	}
}


var storeApp_ = createStore(storeApp,defoultStorage);

export {storeApp_}