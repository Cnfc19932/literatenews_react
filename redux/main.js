import { createStore } from 'redux'
import { defoultStorage } from './state/defoultState'

const storeApp = (state, action) => {
  switch (action.type) {
  	case 'CLICK_SEARCH_SOURCE_BUTTON':
  		var sources = {'sources' : []}
  		function once_active_button(buttons,index_active){
  			return buttons.map(function(button,index){ 
  				if (index_active != index) {
  					return {'active' : false, 'name': button.name}; 
  				}
  				else {
  					if (button.active == false) {
  						return {'active' : 'active', 'name': button.name};
  					}
  					else  return {'active' : false, 'name': button.name};
  				} 
  			});
  		}
  		if (action.index === 0){
  			return Object.assign ({}, state, {'sources' : once_active_button(state.sources,action.index)});
  		}
  		if ((typeof action.index === "number") && (action.index > 0) && (action.index < state.sources.length)){
  			console.log('2');
  			return Object.assign ({}, state, {'sources' : once_active_button(state.sources,action.index)});
  		}
  		console.log('3');
  		return state
  		
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
  		var paging = {
  			'page' : {
  				'start' : 0,
  				'count' : 6,
  				'end' : 6
  			}
  		};
	    return Object.assign ({}, state, {paging, 'todo' : {'items' : state.todo.itemsAll.slice(paging.page.start,paging.page.count) , 'itemsAll' : state.todo.itemsAll}});

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
    		var max = parseInt(state.todo.itemsAll.length);
	   		var paging = {
	  			'page' : {
	  				'start' : ((state.paging.page.start + state.paging.page.count) >= max) ?  ((max - state.paging.page.count < 0 ) ? 0 : state.paging.page.start) : state.paging.page.start + state.paging.page.count ,
	  				'end' : (state.paging.page.end + state.paging.page.count) > max ? (max + 1) :  state.paging.page.end + state.paging.page.count,
	  				'count' : state.paging.page.count
	  			}
	  		};   	  
    	  	let tmp = state.todo.itemsAll.slice(paging.page.start,paging.page.end);
	     	return Object.assign ({}, state, {paging,	'todo' : {
				'items' : tmp,
				'itemsAll' : state.todo.itemsAll
				}
			});

    default:
      return state
  }
}


var storeApp_ = createStore(storeApp,defoultStorage);

export {storeApp_}