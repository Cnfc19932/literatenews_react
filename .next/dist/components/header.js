'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Header = undefined;

var _react = require('/home/stas/\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B/Projects/literatenews_reactjs/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _menu_lavel_ = require('../components/header/menu_lavel_2');

var _header_main = require('../components/header/header_main');

var _search_panel = require('../components/header/search_panel');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = _react2.default.createClass({
	displayName: 'Header',

	render: function render() {
		return _react2.default.createElement(
			'div',
			{ className: 'header-container' },
			_react2.default.createElement(
				'header',
				{ className: 'header' },
				_react2.default.createElement(_header_main.Header_main, null)
			),
			_react2.default.createElement(_search_panel.Search_panel, null),
			_react2.default.createElement(_menu_lavel_.Menu_lavel_2, null)
		);
	}
});

exports.Header = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyLmpzIl0sIm5hbWVzIjpbIkhlYWRlciIsImNyZWF0ZUNsYXNzIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBLElBQUlBLFNBQVMsZ0JBQU1DLFdBQU4sQ0FBa0I7QUFBQTs7QUFDOUJDLFNBQVE7QUFBQSxTQUNOO0FBQUE7QUFBQSxLQUFLLFdBQVksa0JBQWpCO0FBQ0M7QUFBQTtBQUFBLE1BQVEsV0FBWSxRQUFwQjtBQUNDO0FBREQsSUFERDtBQUtDLGtFQUxEO0FBT0M7QUFQRCxHQURNO0FBQUE7QUFEc0IsQ0FBbEIsQ0FBYjs7UUFlUUYsTSxHQUFBQSxNIiwiZmlsZSI6ImhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9zdGFzL9Cg0LDQsdC+0YfQuNC5INGB0YLQvtC7L1Byb2plY3RzL2xpdGVyYXRlbmV3c19yZWFjdGpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtNZW51X2xhdmVsXzJ9IGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyL21lbnVfbGF2ZWxfMidcbmltcG9ydCB7SGVhZGVyX21haW59IGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlcl9tYWluJ1xuaW1wb3J0IHtTZWFyY2hfcGFuZWx9IGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyL3NlYXJjaF9wYW5lbCdcblxubGV0IEhlYWRlciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0cmVuZGVyOiAoKSA9PiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiaGVhZGVyLWNvbnRhaW5lclwiPlxuXHRcdFx0XHQ8aGVhZGVyIGNsYXNzTmFtZSA9IFwiaGVhZGVyXCI+IFxuXHRcdFx0XHRcdDxIZWFkZXJfbWFpbiAvPlxuXHRcdFx0XHQ8L2hlYWRlcj5cblxuXHRcdFx0XHQ8U2VhcmNoX3BhbmVsIC8+XG5cblx0XHRcdFx0PE1lbnVfbGF2ZWxfMiAvPlxuXG5cdFx0XHQ8L2Rpdj5cblx0KVxufSk7XG5cbmV4cG9ydCB7SGVhZGVyfSJdfQ==