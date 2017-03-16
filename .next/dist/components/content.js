'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Content = undefined;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29udGVudC5qcyJdLCJuYW1lcyI6WyJDb250ZW50IiwicHJvcHMiLCJzdGF0ZSIsInN0b3JlIiwiZ2V0U3RhdGUiLCJ0b2RvIiwidXBkYXRlU3RhdGUiLCJiaW5kIiwic3Vic2NyaWJlIiwic2V0U3RhdGUiLCJwcmV2U3RhdGUiLCJpdGVtcyIsIm1hcCIsInZhbHVlIiwia2V5IiwiZ2V0TGlzdEl0ZW1zIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0lBRU1BLE87OztBQUNMLGtCQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUEsc0lBQ1hBLEtBRFc7O0FBRWpCLFFBQUtDLEtBQUwsR0FBYSxNQUFLRCxLQUFMLENBQVdFLEtBQVgsQ0FBaUJDLFFBQWpCLEdBQTRCQyxJQUF6QztBQUNBLFFBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkMsSUFBakIsT0FBbkI7QUFDQSxRQUFLTixLQUFMLENBQVdFLEtBQVgsQ0FBaUJLLFNBQWpCLENBQTJCLE1BQUtGLFdBQWhDO0FBSmlCO0FBS2pCOzs7O2dDQUNZO0FBQ1osUUFBS0csUUFBTCxDQUFjLFVBQUNDLFNBQUQsRUFBWVQsS0FBWixFQUFzQjtBQUNuQyxRQUFLQSxNQUFNRSxLQUFOLENBQVlDLFFBQVosR0FBdUJDLElBQXhCLElBQWtDSyxhQUFhVCxNQUFNRSxLQUFOLENBQVlDLFFBQVosR0FBdUJDLElBQTFFLEVBQ0U7QUFDQyxZQUFPSixNQUFNRSxLQUFOLENBQVlDLFFBQVosR0FBdUJDLElBQTlCO0FBQ0Y7QUFDRCxJQUxEO0FBTUE7OztpQ0FDYTtBQUNiLFVBQU8sS0FBS0gsS0FBTCxDQUFXUyxLQUFYLENBQWlCQyxHQUFqQixDQUFxQixVQUFTQyxLQUFULEVBQWVDLEdBQWYsRUFBbUI7QUFDOUMsV0FBUSw0Q0FBTSxHQUFHRCxLQUFULEVBQWdCLEtBQUtDLEdBQXJCLEdBQVI7QUFDQSxJQUZNLENBQVA7QUFHQTs7OzJCQUVPOztBQUVQLFVBQ0E7QUFBQTtBQUFBO0FBQ0UsU0FBS0MsWUFBTCxFQURGO0FBRUMsOERBQWEsT0FBUyxLQUFLZCxLQUFMLENBQVdFLEtBQWpDO0FBRkQsSUFEQTtBQU1BOzs7RUE3Qm9CLGdCQUFNYSxTOztBQThCM0I7O1FBSU9oQixPLEdBQUFBLE8iLCJmaWxlIjoiY29udGVudC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9zdGFzL9Cg0LDQsdC+0YfQuNC5INGB0YLQvtC7L1Byb2plY3RzL2xpdGVyYXRlbmV3c19yZWFjdGpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtJdGVtfSBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRlbnQvaXRlbSdcbmltcG9ydCB7QnV0dG9uX21vcmV9IGZyb20gJy4uL2NvbXBvbmVudHMvY29udGVudC9idXR0b25fbW9yZSdcblxuY2xhc3MgQ29udGVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0gdGhpcy5wcm9wcy5zdG9yZS5nZXRTdGF0ZSgpLnRvZG87XG5cdFx0dGhpcy51cGRhdGVTdGF0ZSA9IHRoaXMudXBkYXRlU3RhdGUuYmluZCh0aGlzKTtcblx0XHR0aGlzLnByb3BzLnN0b3JlLnN1YnNjcmliZSh0aGlzLnVwZGF0ZVN0YXRlKTtcblx0fSBcblx0dXBkYXRlU3RhdGUoKXtcdFxuXHRcdHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSwgcHJvcHMpID0+IHtcblx0XHRcdGlmICgocHJvcHMuc3RvcmUuZ2V0U3RhdGUoKS50b2RvKSAmJiAocHJldlN0YXRlICE9IHByb3BzLnN0b3JlLmdldFN0YXRlKCkudG9kbykpXG5cdFx0ICBcdHtcdFxuXHRcdCAgXHRcdHJldHVybiBwcm9wcy5zdG9yZS5nZXRTdGF0ZSgpLnRvZG87XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblx0Z2V0TGlzdEl0ZW1zKCl7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdGUuaXRlbXMubWFwKGZ1bmN0aW9uKHZhbHVlLGtleSl7XG5cdFx0XHRyZXR1cm4gKDxJdGVtIGk9e3ZhbHVlfSBrZXk9e2tleX0vPik7XG5cdFx0fSk7XG5cdH1cbiBcblx0cmVuZGVyKCl7XG5cblx0XHRyZXR1cm4gIChcblx0XHQ8Y29udGVudD5cblx0XHRcdHt0aGlzLmdldExpc3RJdGVtcygpfVxuXHRcdFx0PEJ1dHRvbl9tb3JlIHN0b3JlID0ge3RoaXMucHJvcHMuc3RvcmV9Lz5cblx0XHQ8L2NvbnRlbnQ+XG5cdFx0KVxuXHR9XG59O1xuXG5cblxuZXhwb3J0IHtDb250ZW50fSAiXX0=