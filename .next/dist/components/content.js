'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Content = undefined;

var _stringify = require('/home/stas/\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B/Projects/literatenews_reactjs/node_modules/babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

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

var _item = require('../components/content/item');

var _button_more = require('../components/content/button_more');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Content = function (_React$Component) {
	(0, _inherits3.default)(Content, _React$Component);

	function Content(props) {
		(0, _classCallCheck3.default)(this, Content);

		var _this = (0, _possibleConstructorReturn3.default)(this, (Content.__proto__ || (0, _getPrototypeOf2.default)(Content)).call(this, props));

		_this.state = _this.props.store.getState().todo;
		_this.updateState = _this.updateState.bind(_this);
		_this.props.store.subscribe(_this.updateState);
		return _this;
	}

	(0, _createClass3.default)(Content, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			this.props.store.dispatch({
				type: 'START'
			});
		}
	}, {
		key: 'updateState',
		value: function updateState() {
			this.setState(function (prevState, props) {
				if (props.store.getState().todo && prevState != props.store.getState().todo) {
					return props.store.getState().todo;
				}
			});
		}
	}, {
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate(nextProps, nextState) {
			return (0, _stringify2.default)(nextState) != (0, _stringify2.default)(this.state);
		}
	}, {
		key: 'getListItems',
		value: function getListItems() {
			//	console.log(4);
			return this.state.items ? this.state.items.map(function (value, key) {
				return _react2.default.createElement(_item.Item, { i: value, key: key });
			}) : '';
		}
	}, {
		key: 'render',
		value: function render() {

			return _react2.default.createElement(
				'content',
				null,
				this.getListItems(),
				_react2.default.createElement(_button_more.Button_more, { store: this.props.store })
			);
		}
	}]);
	return Content;
}(_react2.default.Component);

;

exports.Content = Content;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29udGVudC5qcyJdLCJuYW1lcyI6WyJDb250ZW50IiwicHJvcHMiLCJzdGF0ZSIsInN0b3JlIiwiZ2V0U3RhdGUiLCJ0b2RvIiwidXBkYXRlU3RhdGUiLCJiaW5kIiwic3Vic2NyaWJlIiwiZGlzcGF0Y2giLCJ0eXBlIiwic2V0U3RhdGUiLCJwcmV2U3RhdGUiLCJuZXh0UHJvcHMiLCJuZXh0U3RhdGUiLCJpdGVtcyIsIm1hcCIsInZhbHVlIiwia2V5IiwiZ2V0TGlzdEl0ZW1zIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztJQUVNQSxPOzs7QUFDTCxrQkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBLHNJQUNYQSxLQURXOztBQUVqQixRQUFLQyxLQUFMLEdBQWEsTUFBS0QsS0FBTCxDQUFXRSxLQUFYLENBQWlCQyxRQUFqQixHQUE0QkMsSUFBekM7QUFDQSxRQUFLQyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJDLElBQWpCLE9BQW5CO0FBQ0EsUUFBS04sS0FBTCxDQUFXRSxLQUFYLENBQWlCSyxTQUFqQixDQUEyQixNQUFLRixXQUFoQztBQUppQjtBQUtqQjs7Ozt1Q0FDbUI7QUFDbkIsUUFBS0wsS0FBTCxDQUFXRSxLQUFYLENBQWlCTSxRQUFqQixDQUEwQjtBQUN4QkMsVUFBTTtBQURrQixJQUExQjtBQUdBOzs7Z0NBQ1k7QUFDWixRQUFLQyxRQUFMLENBQWMsVUFBQ0MsU0FBRCxFQUFZWCxLQUFaLEVBQXNCO0FBQ25DLFFBQUtBLE1BQU1FLEtBQU4sQ0FBWUMsUUFBWixHQUF1QkMsSUFBeEIsSUFBa0NPLGFBQWFYLE1BQU1FLEtBQU4sQ0FBWUMsUUFBWixHQUF1QkMsSUFBMUUsRUFDRTtBQUNDLFlBQU9KLE1BQU1FLEtBQU4sQ0FBWUMsUUFBWixHQUF1QkMsSUFBOUI7QUFDRjtBQUNELElBTEQ7QUFNQTs7O3dDQUNzQlEsUyxFQUFVQyxTLEVBQVU7QUFDMUMsVUFBUSx5QkFBZUEsU0FBZixLQUE2Qix5QkFBZSxLQUFLWixLQUFwQixDQUFyQztBQUNBOzs7aUNBQ2E7QUFDZDtBQUNDLFVBQU8sS0FBS0EsS0FBTCxDQUFXYSxLQUFYLEdBQW1CLEtBQUtiLEtBQUwsQ0FBV2EsS0FBWCxDQUFpQkMsR0FBakIsQ0FBcUIsVUFBU0MsS0FBVCxFQUFlQyxHQUFmLEVBQW1CO0FBQUUsV0FBUSw0Q0FBTSxHQUFHRCxLQUFULEVBQWdCLEtBQUtDLEdBQXJCLEdBQVI7QUFBdUMsSUFBakYsQ0FBbkIsR0FBd0csRUFBL0c7QUFDQTs7OzJCQUVPOztBQUVQLFVBQ0E7QUFBQTtBQUFBO0FBQ0UsU0FBS0MsWUFBTCxFQURGO0FBRUMsOERBQWEsT0FBUyxLQUFLbEIsS0FBTCxDQUFXRSxLQUFqQztBQUZELElBREE7QUFNQTs7O0VBcENvQixnQkFBTWlCLFM7O0FBcUMzQjs7UUFJT3BCLE8sR0FBQUEsTyIsImZpbGUiOiJjb250ZW50LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3N0YXMv0KDQsNCx0L7Rh9C40Lkg0YHRgtC+0LsvUHJvamVjdHMvbGl0ZXJhdGVuZXdzX3JlYWN0anMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0l0ZW19IGZyb20gJy4uL2NvbXBvbmVudHMvY29udGVudC9pdGVtJ1xuaW1wb3J0IHtCdXR0b25fbW9yZX0gZnJvbSAnLi4vY29tcG9uZW50cy9jb250ZW50L2J1dHRvbl9tb3JlJ1xuXG5jbGFzcyBDb250ZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB0aGlzLnByb3BzLnN0b3JlLmdldFN0YXRlKCkudG9kbztcblx0XHR0aGlzLnVwZGF0ZVN0YXRlID0gdGhpcy51cGRhdGVTdGF0ZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMucHJvcHMuc3RvcmUuc3Vic2NyaWJlKHRoaXMudXBkYXRlU3RhdGUpO1xuXHR9XG5cdGNvbXBvbmVudFdpbGxNb3VudCgpe1xuXHRcdHRoaXMucHJvcHMuc3RvcmUuZGlzcGF0Y2goe1xuXHRcdCAgdHlwZTogJ1NUQVJUJ1xuXHRcdH0pO1xuXHR9XG5cdHVwZGF0ZVN0YXRlKCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlLCBwcm9wcykgPT4ge1xuXHRcdFx0aWYgKChwcm9wcy5zdG9yZS5nZXRTdGF0ZSgpLnRvZG8pICYmIChwcmV2U3RhdGUgIT0gcHJvcHMuc3RvcmUuZ2V0U3RhdGUoKS50b2RvKSlcblx0XHQgIFx0e1xuXHRcdCAgXHRcdHJldHVybiBwcm9wcy5zdG9yZS5nZXRTdGF0ZSgpLnRvZG87XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbiBcdHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsbmV4dFN0YXRlKXtcblx0XHRyZXR1cm4gKEpTT04uc3RyaW5naWZ5KG5leHRTdGF0ZSkgIT0gSlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZSkpO1xuXHR9XG5cdGdldExpc3RJdGVtcygpe1xuXHQvL1x0Y29uc29sZS5sb2coNCk7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdGUuaXRlbXMgPyB0aGlzLnN0YXRlLml0ZW1zLm1hcChmdW5jdGlvbih2YWx1ZSxrZXkpeyByZXR1cm4gKDxJdGVtIGk9e3ZhbHVlfSBrZXk9e2tleX0vPik7IH0pIDogJyc7XG5cdH1cblxuXHRyZW5kZXIoKXtcblxuXHRcdHJldHVybiAgKFxuXHRcdDxjb250ZW50PlxuXHRcdFx0e3RoaXMuZ2V0TGlzdEl0ZW1zKCl9XG5cdFx0XHQ8QnV0dG9uX21vcmUgc3RvcmUgPSB7dGhpcy5wcm9wcy5zdG9yZX0vPlxuXHRcdDwvY29udGVudD5cblx0XHQpXG5cdH1cbn07XG5cblxuXG5leHBvcnQge0NvbnRlbnR9XG4iXX0=