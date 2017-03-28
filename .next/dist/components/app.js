'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = require('/home/stas/\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B/Projects/literatenews_reactjs/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('/home/stas/\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B/Projects/literatenews_reactjs/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('/home/stas/\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B/Projects/literatenews_reactjs/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('/home/stas/\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B/Projects/literatenews_reactjs/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('/home/stas/\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B/Projects/literatenews_reactjs/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('/home/stas/\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B/Projects/literatenews_reactjs/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _header = require('../components/header');

var _content = require('../components/content');

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function (_React$Component) {
	(0, _inherits3.default)(App, _React$Component);

	function App(props) {
		(0, _classCallCheck3.default)(this, App);

		var _this = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, props));

		_this.state = _this.props.store;
		_this.updateState = _this.updateState.bind(_this);
		_this.props.store.subscribe(_this.updateState);
		return _this;
	}

	(0, _createClass3.default)(App, [{
		key: 'updateState',
		value: function updateState() {
			this.setState(function (prevState, props) {
				return props.store.getState();
			});
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var api = 'http://sgorovoy.me:8080/theratenews/lite/main/';
			var store = this.props.store;

			var xhr = new XMLHttpRequest();
			xhr.open('GET', api, true);
			xhr.send();

			function c(xhr, callback) {
				if (xhr.status == 200) {
					//  console.log(JSON.parse(xhr.responseText));
					store.dispatch({
						type: 'INIT',
						data: JSON.parse(xhr.responseText).all_news
					});
					return callback();
				} else {
					//	console.log('Error '  +xhr.status);
				}
			}

			xhr.onreadystatechange = function () {
				if (xhr.readyState != 4) return;
				c(xhr, function () {
					//console.log('callback');
					store.dispatch({
						type: 'START'
					});
				});
			};
		}
	}, {
		key: 'render',
		value: function render() {
			//	console.log(this.props.store.getState());
			return _react2.default.createElement(
				'div',
				{ id: 'page' },
				_react2.default.createElement(
					'div',
					{ className: 'container' },
					_react2.default.createElement(_header.Header, { store: this.props.store }),
					_react2.default.createElement(_content.Content, { store: this.props.store })
				)
			);
		}
	}]);
	return App;
}(_react2.default.Component);

;

exports.default = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXBwLmpzIl0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJzdG9yZSIsInVwZGF0ZVN0YXRlIiwiYmluZCIsInN1YnNjcmliZSIsInNldFN0YXRlIiwicHJldlN0YXRlIiwiZ2V0U3RhdGUiLCJhcGkiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJzZW5kIiwiYyIsImNhbGxiYWNrIiwic3RhdHVzIiwiZGlzcGF0Y2giLCJ0eXBlIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsInJlc3BvbnNlVGV4dCIsImFsbF9uZXdzIiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0lBRU1BLEc7OztBQUNMLGNBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFBQSw4SEFDWEEsS0FEVzs7QUFFakIsUUFBS0MsS0FBTCxHQUFhLE1BQUtELEtBQUwsQ0FBV0UsS0FBeEI7QUFDQSxRQUFLQyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJDLElBQWpCLE9BQW5CO0FBQ0EsUUFBS0osS0FBTCxDQUFXRSxLQUFYLENBQWlCRyxTQUFqQixDQUEyQixNQUFLRixXQUFoQztBQUppQjtBQUtqQjs7OztnQ0FFWTtBQUNaLFFBQUtHLFFBQUwsQ0FBYyxVQUFDQyxTQUFELEVBQVlQLEtBQVosRUFBc0I7QUFBQyxXQUFPQSxNQUFNRSxLQUFOLENBQVlNLFFBQVosRUFBUDtBQUErQixJQUFwRTtBQUNBOzs7c0NBQ2tCO0FBQ2xCLE9BQU1DLE1BQU0sZ0RBQVo7QUFDQSxPQUFJUCxRQUFRLEtBQUtGLEtBQUwsQ0FBV0UsS0FBdkI7O0FBRUEsT0FBSVEsTUFBTSxJQUFJQyxjQUFKLEVBQVY7QUFDQUQsT0FBSUUsSUFBSixDQUFTLEtBQVQsRUFBZUgsR0FBZixFQUFvQixJQUFwQjtBQUNBQyxPQUFJRyxJQUFKOztBQUVBLFlBQVNDLENBQVQsQ0FBV0osR0FBWCxFQUFlSyxRQUFmLEVBQXdCO0FBQ3ZCLFFBQUlMLElBQUlNLE1BQUosSUFBYyxHQUFsQixFQUF1QjtBQUN2QjtBQUNDZCxXQUFNZSxRQUFOLENBQWU7QUFDZEMsWUFBTSxNQURRO0FBRWRDLFlBQU9DLEtBQUtDLEtBQUwsQ0FBV1gsSUFBSVksWUFBZixFQUE2QkM7QUFGdEIsTUFBZjtBQUlBLFlBQU9SLFVBQVA7QUFDQSxLQVBELE1BT0s7QUFDTDtBQUNDO0FBQ0Q7O0FBRUZMLE9BQUljLGtCQUFKLEdBQXlCLFlBQVc7QUFDbEMsUUFBSWQsSUFBSWUsVUFBSixJQUFrQixDQUF0QixFQUF5QjtBQUMxQlgsTUFBRUosR0FBRixFQUFNLFlBQVU7QUFDaEI7QUFDQ1IsV0FBTWUsUUFBTixDQUFlO0FBQ2RDLFlBQU07QUFEUSxNQUFmO0FBR0EsS0FMRDtBQU1BLElBUkQ7QUFXQzs7OzJCQUNRO0FBQ1I7QUFDRyxVQUNFO0FBQUE7QUFBQSxNQUFLLElBQUssTUFBVjtBQUNDO0FBQUE7QUFBQSxPQUFLLFdBQVksV0FBakI7QUFDQyxxREFBUSxPQUFPLEtBQUtsQixLQUFMLENBQVdFLEtBQTFCLEdBREQ7QUFFQyx1REFBUyxPQUFPLEtBQUtGLEtBQUwsQ0FBV0UsS0FBM0I7QUFGRDtBQURELElBREY7QUFRRDs7O0VBdERjLGdCQUFNd0IsUzs7QUF1RHZCOztrQkFHYzNCLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3N0YXMv0KDQsNCx0L7Rh9C40Lkg0YHRgtC+0LsvUHJvamVjdHMvbGl0ZXJhdGVuZXdzX3JlYWN0anMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0hlYWRlcn0gZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInXG5pbXBvcnQge0NvbnRlbnR9IGZyb20gJy4uL2NvbXBvbmVudHMvY29udGVudCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB0aGlzLnByb3BzLnN0b3JlO1xuXHRcdHRoaXMudXBkYXRlU3RhdGUgPSB0aGlzLnVwZGF0ZVN0YXRlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5wcm9wcy5zdG9yZS5zdWJzY3JpYmUodGhpcy51cGRhdGVTdGF0ZSk7XG5cdH1cblxuXHR1cGRhdGVTdGF0ZSgpe1xuXHRcdHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSwgcHJvcHMpID0+IHtyZXR1cm4gcHJvcHMuc3RvcmUuZ2V0U3RhdGUoKTt9KTtcblx0fVxuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHRcdGNvbnN0IGFwaSA9ICdodHRwOi8vc2dvcm92b3kubWU6ODA4MC90aGVyYXRlbmV3cy9saXRlL21haW4vJztcblx0XHR2YXIgc3RvcmUgPSB0aGlzLnByb3BzLnN0b3JlO1xuXG5cdFx0dmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXHRcdHhoci5vcGVuKCdHRVQnLGFwaSwgdHJ1ZSk7XG5cdFx0eGhyLnNlbmQoKTtcblxuXHRcdGZ1bmN0aW9uIGMoeGhyLGNhbGxiYWNrKXtcblx0XHRcdGlmICh4aHIuc3RhdHVzID09IDIwMCkge1xuXHRcdFx0Ly8gIGNvbnNvbGUubG9nKEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCkpO1xuXHRcdFx0XHRzdG9yZS5kaXNwYXRjaCh7XG5cdFx0XHRcdFx0dHlwZTogJ0lOSVQnLFxuXHRcdFx0XHRcdGRhdGEgOiBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpLmFsbF9uZXdzXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXR1cm4gY2FsbGJhY2soKTtcblx0XHRcdH1lbHNle1xuXHRcdFx0Ly9cdGNvbnNvbGUubG9nKCdFcnJvciAnICAreGhyLnN0YXR1cyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgXHRpZiAoeGhyLnJlYWR5U3RhdGUgIT0gNCkgcmV0dXJuO1xuXHRcdGMoeGhyLGZ1bmN0aW9uKCl7XG5cdFx0Ly9jb25zb2xlLmxvZygnY2FsbGJhY2snKTtcblx0XHRcdHN0b3JlLmRpc3BhdGNoKHtcblx0XHRcdFx0dHlwZTogJ1NUQVJUJ1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblxuXG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdC8vXHRjb25zb2xlLmxvZyh0aGlzLnByb3BzLnN0b3JlLmdldFN0YXRlKCkpO1xuICAgIFx0cmV0dXJuIChcbiAgICBcdFx0XHQ8ZGl2IGlkID0gXCJwYWdlXCI+XG4gICAgXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiY29udGFpbmVyXCI+XG4gICAgXHRcdFx0XHRcdDxIZWFkZXIgc3RvcmU9e3RoaXMucHJvcHMuc3RvcmV9Lz5cbiAgICBcdFx0XHRcdFx0PENvbnRlbnQgc3RvcmU9e3RoaXMucHJvcHMuc3RvcmV9Lz5cbiAgICBcdFx0XHRcdDwvZGl2PlxuICAgIFx0XHRcdDwvZGl2PlxuICAgIFx0KTtcbiAgXHR9XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IEFwcFxuIl19