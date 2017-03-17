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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29udGVudC5qcyJdLCJuYW1lcyI6WyJDb250ZW50IiwicHJvcHMiLCJzdGF0ZSIsInN0b3JlIiwiZ2V0U3RhdGUiLCJ0b2RvIiwidXBkYXRlU3RhdGUiLCJiaW5kIiwic3Vic2NyaWJlIiwiZGlzcGF0Y2giLCJ0eXBlIiwic2V0U3RhdGUiLCJwcmV2U3RhdGUiLCJuZXh0UHJvcHMiLCJuZXh0U3RhdGUiLCJpdGVtcyIsIm1hcCIsInZhbHVlIiwia2V5IiwiZ2V0TGlzdEl0ZW1zIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztJQUVNQSxPOzs7QUFDTCxrQkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBLHNJQUNYQSxLQURXOztBQUVqQixRQUFLQyxLQUFMLEdBQWEsTUFBS0QsS0FBTCxDQUFXRSxLQUFYLENBQWlCQyxRQUFqQixHQUE0QkMsSUFBekM7QUFDQSxRQUFLQyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJDLElBQWpCLE9BQW5CO0FBQ0EsUUFBS04sS0FBTCxDQUFXRSxLQUFYLENBQWlCSyxTQUFqQixDQUEyQixNQUFLRixXQUFoQztBQUppQjtBQUtqQjs7Ozt1Q0FDbUI7QUFDbkIsUUFBS0wsS0FBTCxDQUFXRSxLQUFYLENBQWlCTSxRQUFqQixDQUEwQjtBQUN4QkMsVUFBTTtBQURrQixJQUExQjtBQUdBOzs7Z0NBQ1k7QUFDWixRQUFLQyxRQUFMLENBQWMsVUFBQ0MsU0FBRCxFQUFZWCxLQUFaLEVBQXNCO0FBQ25DLFFBQUtBLE1BQU1FLEtBQU4sQ0FBWUMsUUFBWixHQUF1QkMsSUFBeEIsSUFBa0NPLGFBQWFYLE1BQU1FLEtBQU4sQ0FBWUMsUUFBWixHQUF1QkMsSUFBMUUsRUFDRTtBQUNDLFlBQU9KLE1BQU1FLEtBQU4sQ0FBWUMsUUFBWixHQUF1QkMsSUFBOUI7QUFDRjtBQUNELElBTEQ7QUFNQTs7O3dDQUNzQlEsUyxFQUFVQyxTLEVBQVU7QUFDMUMsVUFBUSx5QkFBZUEsU0FBZixLQUE2Qix5QkFBZSxLQUFLWixLQUFwQixDQUFyQztBQUNBOzs7aUNBQ2E7QUFDYixVQUFPLEtBQUtBLEtBQUwsQ0FBV2EsS0FBWCxHQUFtQixLQUFLYixLQUFMLENBQVdhLEtBQVgsQ0FBaUJDLEdBQWpCLENBQXFCLFVBQVNDLEtBQVQsRUFBZUMsR0FBZixFQUFtQjtBQUFFLFdBQVEsNENBQU0sR0FBR0QsS0FBVCxFQUFnQixLQUFLQyxHQUFyQixHQUFSO0FBQXVDLElBQWpGLENBQW5CLEdBQXdHLEVBQS9HO0FBQ0E7OzsyQkFFTzs7QUFFUCxVQUNBO0FBQUE7QUFBQTtBQUNFLFNBQUtDLFlBQUwsRUFERjtBQUVDLDhEQUFhLE9BQVMsS0FBS2xCLEtBQUwsQ0FBV0UsS0FBakM7QUFGRCxJQURBO0FBTUE7OztFQW5Db0IsZ0JBQU1pQixTOztBQW9DM0I7O1FBSU9wQixPLEdBQUFBLE8iLCJmaWxlIjoiY29udGVudC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9zdGFzL9Cg0LDQsdC+0YfQuNC5INGB0YLQvtC7L1Byb2plY3RzL2xpdGVyYXRlbmV3c19yZWFjdGpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtJdGVtfSBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRlbnQvaXRlbSdcbmltcG9ydCB7QnV0dG9uX21vcmV9IGZyb20gJy4uL2NvbXBvbmVudHMvY29udGVudC9idXR0b25fbW9yZSdcblxuY2xhc3MgQ29udGVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0gdGhpcy5wcm9wcy5zdG9yZS5nZXRTdGF0ZSgpLnRvZG87XG5cdFx0dGhpcy51cGRhdGVTdGF0ZSA9IHRoaXMudXBkYXRlU3RhdGUuYmluZCh0aGlzKTtcblx0XHR0aGlzLnByb3BzLnN0b3JlLnN1YnNjcmliZSh0aGlzLnVwZGF0ZVN0YXRlKTtcblx0fSBcblx0Y29tcG9uZW50V2lsbE1vdW50KCl7XG5cdFx0dGhpcy5wcm9wcy5zdG9yZS5kaXNwYXRjaCh7XG5cdFx0ICB0eXBlOiAnU1RBUlQnXG5cdFx0fSk7XG5cdH1cblx0dXBkYXRlU3RhdGUoKXtcdFxuXHRcdHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSwgcHJvcHMpID0+IHtcblx0XHRcdGlmICgocHJvcHMuc3RvcmUuZ2V0U3RhdGUoKS50b2RvKSAmJiAocHJldlN0YXRlICE9IHByb3BzLnN0b3JlLmdldFN0YXRlKCkudG9kbykpXG5cdFx0ICBcdHtcdFxuXHRcdCAgXHRcdHJldHVybiBwcm9wcy5zdG9yZS5nZXRTdGF0ZSgpLnRvZG87XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbiBcdHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsbmV4dFN0YXRlKXtcblx0XHRyZXR1cm4gKEpTT04uc3RyaW5naWZ5KG5leHRTdGF0ZSkgIT0gSlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZSkpO1xuXHR9XG5cdGdldExpc3RJdGVtcygpe1xuXHRcdHJldHVybiB0aGlzLnN0YXRlLml0ZW1zID8gdGhpcy5zdGF0ZS5pdGVtcy5tYXAoZnVuY3Rpb24odmFsdWUsa2V5KXsgcmV0dXJuICg8SXRlbSBpPXt2YWx1ZX0ga2V5PXtrZXl9Lz4pOyB9KSA6ICcnO1xuXHR9XG5cblx0cmVuZGVyKCl7XG5cblx0XHRyZXR1cm4gIChcblx0XHQ8Y29udGVudD5cblx0XHRcdHt0aGlzLmdldExpc3RJdGVtcygpfVxuXHRcdFx0PEJ1dHRvbl9tb3JlIHN0b3JlID0ge3RoaXMucHJvcHMuc3RvcmV9Lz5cblx0XHQ8L2NvbnRlbnQ+XG5cdFx0KVxuXHR9XG59O1xuXG5cblxuZXhwb3J0IHtDb250ZW50fSAiXX0=