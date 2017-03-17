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
				_react2.default.createElement(_header_main.Header_main, { store: this.props.store })
			),
			_react2.default.createElement(_search_panel.Search_panel, { store: this.props.store }),
			_react2.default.createElement(_menu_lavel_.Menu_lavel_2, { store: this.props.store })
		);
	}
});

exports.Header = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyLmpzIl0sIm5hbWVzIjpbIkhlYWRlciIsImNyZWF0ZUNsYXNzIiwicmVuZGVyIiwicHJvcHMiLCJzdG9yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxJQUFJQSxTQUFTLGdCQUFNQyxXQUFOLENBQWtCO0FBQUE7QUFDOUJDLE9BRDhCLG9CQUN0Qjs7QUFFTixTQUNDO0FBQUE7QUFBQSxLQUFLLFdBQVksa0JBQWpCO0FBQ0M7QUFBQTtBQUFBLE1BQVEsV0FBWSxRQUFwQjtBQUNDLDhEQUFhLE9BQU8sS0FBS0MsS0FBTCxDQUFXQyxLQUEvQjtBQURELElBREQ7QUFLQywrREFBYyxPQUFPLEtBQUtELEtBQUwsQ0FBV0MsS0FBaEMsR0FMRDtBQU9DLDhEQUFjLE9BQU8sS0FBS0QsS0FBTCxDQUFXQyxLQUFoQztBQVBELEdBREQ7QUFZRDtBQWY2QixDQUFsQixDQUFiOztRQWtCUUosTSxHQUFBQSxNIiwiZmlsZSI6ImhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9zdGFzL9Cg0LDQsdC+0YfQuNC5INGB0YLQvtC7L1Byb2plY3RzL2xpdGVyYXRlbmV3c19yZWFjdGpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtNZW51X2xhdmVsXzJ9IGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyL21lbnVfbGF2ZWxfMidcbmltcG9ydCB7SGVhZGVyX21haW59IGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlcl9tYWluJ1xuaW1wb3J0IHtTZWFyY2hfcGFuZWx9IGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyL3NlYXJjaF9wYW5lbCdcblxubGV0IEhlYWRlciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0cmVuZGVyKCl7XG5cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJoZWFkZXItY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PGhlYWRlciBjbGFzc05hbWUgPSBcImhlYWRlclwiPiBcblx0XHRcdFx0XHRcdDxIZWFkZXJfbWFpbiBzdG9yZT17dGhpcy5wcm9wcy5zdG9yZX0gLz5cblx0XHRcdFx0XHQ8L2hlYWRlcj5cblxuXHRcdFx0XHRcdDxTZWFyY2hfcGFuZWwgc3RvcmU9e3RoaXMucHJvcHMuc3RvcmV9Lz5cblxuXHRcdFx0XHRcdDxNZW51X2xhdmVsXzIgc3RvcmU9e3RoaXMucHJvcHMuc3RvcmV9Lz5cblxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdClcblx0fVxufSk7XG5cbmV4cG9ydCB7SGVhZGVyfSJdfQ==