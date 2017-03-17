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
			return this.state.items.map(function (value, key) {
				return _react2.default.createElement(_item.Item, { i: value, key: key });
			});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29udGVudC5qcyJdLCJuYW1lcyI6WyJDb250ZW50IiwicHJvcHMiLCJzdGF0ZSIsInN0b3JlIiwiZ2V0U3RhdGUiLCJ0b2RvIiwidXBkYXRlU3RhdGUiLCJiaW5kIiwic3Vic2NyaWJlIiwic2V0U3RhdGUiLCJwcmV2U3RhdGUiLCJuZXh0UHJvcHMiLCJuZXh0U3RhdGUiLCJpdGVtcyIsIm1hcCIsInZhbHVlIiwia2V5IiwiZ2V0TGlzdEl0ZW1zIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztJQUVNQSxPOzs7QUFDTCxrQkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBLHNJQUNYQSxLQURXOztBQUVqQixRQUFLQyxLQUFMLEdBQWEsTUFBS0QsS0FBTCxDQUFXRSxLQUFYLENBQWlCQyxRQUFqQixHQUE0QkMsSUFBekM7QUFDQSxRQUFLQyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJDLElBQWpCLE9BQW5CO0FBQ0EsUUFBS04sS0FBTCxDQUFXRSxLQUFYLENBQWlCSyxTQUFqQixDQUEyQixNQUFLRixXQUFoQztBQUppQjtBQUtqQjs7OztnQ0FDWTtBQUNaLFFBQUtHLFFBQUwsQ0FBYyxVQUFDQyxTQUFELEVBQVlULEtBQVosRUFBc0I7QUFDbkMsUUFBS0EsTUFBTUUsS0FBTixDQUFZQyxRQUFaLEdBQXVCQyxJQUF4QixJQUFrQ0ssYUFBYVQsTUFBTUUsS0FBTixDQUFZQyxRQUFaLEdBQXVCQyxJQUExRSxFQUNFO0FBQ0MsWUFBT0osTUFBTUUsS0FBTixDQUFZQyxRQUFaLEdBQXVCQyxJQUE5QjtBQUNGO0FBQ0QsSUFMRDtBQU1BOzs7d0NBQ3NCTSxTLEVBQVVDLFMsRUFBVTtBQUMxQyxVQUFRLHlCQUFlQSxTQUFmLEtBQTZCLHlCQUFlLEtBQUtWLEtBQXBCLENBQXJDO0FBQ0E7OztpQ0FDYTtBQUNiLFVBQU8sS0FBS0EsS0FBTCxDQUFXVyxLQUFYLENBQWlCQyxHQUFqQixDQUFxQixVQUFTQyxLQUFULEVBQWVDLEdBQWYsRUFBbUI7QUFDOUMsV0FBUSw0Q0FBTSxHQUFHRCxLQUFULEVBQWdCLEtBQUtDLEdBQXJCLEdBQVI7QUFDQSxJQUZNLENBQVA7QUFHQTs7OzJCQUVPOztBQUVQLFVBQ0E7QUFBQTtBQUFBO0FBQ0UsU0FBS0MsWUFBTCxFQURGO0FBRUMsOERBQWEsT0FBUyxLQUFLaEIsS0FBTCxDQUFXRSxLQUFqQztBQUZELElBREE7QUFNQTs7O0VBaENvQixnQkFBTWUsUzs7QUFpQzNCOztRQUlPbEIsTyxHQUFBQSxPIiwiZmlsZSI6ImNvbnRlbnQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvc3Rhcy/QoNCw0LHQvtGH0LjQuSDRgdGC0L7Quy9Qcm9qZWN0cy9saXRlcmF0ZW5ld3NfcmVhY3RqcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7SXRlbX0gZnJvbSAnLi4vY29tcG9uZW50cy9jb250ZW50L2l0ZW0nXG5pbXBvcnQge0J1dHRvbl9tb3JlfSBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRlbnQvYnV0dG9uX21vcmUnXG5cbmNsYXNzIENvbnRlbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHRoaXMucHJvcHMuc3RvcmUuZ2V0U3RhdGUoKS50b2RvO1xuXHRcdHRoaXMudXBkYXRlU3RhdGUgPSB0aGlzLnVwZGF0ZVN0YXRlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5wcm9wcy5zdG9yZS5zdWJzY3JpYmUodGhpcy51cGRhdGVTdGF0ZSk7XG5cdH0gXG5cdHVwZGF0ZVN0YXRlKCl7XHRcblx0XHR0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUsIHByb3BzKSA9PiB7XG5cdFx0XHRpZiAoKHByb3BzLnN0b3JlLmdldFN0YXRlKCkudG9kbykgJiYgKHByZXZTdGF0ZSAhPSBwcm9wcy5zdG9yZS5nZXRTdGF0ZSgpLnRvZG8pKVxuXHRcdCAgXHR7XHRcblx0XHQgIFx0XHRyZXR1cm4gcHJvcHMuc3RvcmUuZ2V0U3RhdGUoKS50b2RvO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG4gXHRzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLG5leHRTdGF0ZSl7XG5cdFx0cmV0dXJuIChKU09OLnN0cmluZ2lmeShuZXh0U3RhdGUpICE9IEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUpKTtcblx0fVxuXHRnZXRMaXN0SXRlbXMoKXtcblx0XHRyZXR1cm4gdGhpcy5zdGF0ZS5pdGVtcy5tYXAoZnVuY3Rpb24odmFsdWUsa2V5KXtcblx0XHRcdHJldHVybiAoPEl0ZW0gaT17dmFsdWV9IGtleT17a2V5fS8+KTtcblx0XHR9KTtcblx0fVxuXG5cdHJlbmRlcigpe1xuXG5cdFx0cmV0dXJuICAoXG5cdFx0PGNvbnRlbnQ+XG5cdFx0XHR7dGhpcy5nZXRMaXN0SXRlbXMoKX1cblx0XHRcdDxCdXR0b25fbW9yZSBzdG9yZSA9IHt0aGlzLnByb3BzLnN0b3JlfS8+XG5cdFx0PC9jb250ZW50PlxuXHRcdClcblx0fVxufTtcblxuXG5cbmV4cG9ydCB7Q29udGVudH0gIl19