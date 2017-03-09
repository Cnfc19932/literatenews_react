'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Item = undefined;

var _react = require('/home/stas/\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B/Projects/literatenews_reactjs/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Item = _react2.default.createClass({
	displayName: 'Item',


	render: function render() {
		var style = {
			'background-image': 'url(' + this.props.i.img + ')'
		};
		return _react2.default.createElement(
			'item',
			null,
			_react2.default.createElement('div', { className: 'item__img', style: style }),
			_react2.default.createElement(
				'div',
				{ className: 'item__text' },
				_react2.default.createElement(
					'div',
					{ className: 'title' },
					_react2.default.createElement(
						'h2',
						null,
						this.props.i.title
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'text' },
					this.props.i.text
				)
			)
		);
	}
});

exports.Item = Item;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXRlbS5qcyJdLCJuYW1lcyI6WyJJdGVtIiwiY3JlYXRlQ2xhc3MiLCJyZW5kZXIiLCJzdHlsZSIsInByb3BzIiwiaSIsImltZyIsInRpdGxlIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7QUFFQSxJQUFJQSxPQUFPLGdCQUFNQyxXQUFOLENBQWtCO0FBQUE7OztBQUU1QkMsU0FBUyxrQkFBVztBQUNuQixNQUFJQyxRQUFRO0FBQ1gsdUJBQXFCLFNBQU8sS0FBS0MsS0FBTCxDQUFXQyxDQUFYLENBQWFDLEdBQXBCLEdBQXdCO0FBRGxDLEdBQVo7QUFHQSxTQUNDO0FBQUE7QUFBQTtBQUNDLDBDQUFLLFdBQVksV0FBakIsRUFBNkIsT0FBT0gsS0FBcEMsR0FERDtBQUVDO0FBQUE7QUFBQSxNQUFLLFdBQVksWUFBakI7QUFDQztBQUFBO0FBQUEsT0FBSyxXQUFZLE9BQWpCO0FBQ0M7QUFBQTtBQUFBO0FBQUssV0FBS0MsS0FBTCxDQUFXQyxDQUFYLENBQWFFO0FBQWxCO0FBREQsS0FERDtBQUlDO0FBQUE7QUFBQSxPQUFLLFdBQVksTUFBakI7QUFBeUIsVUFBS0gsS0FBTCxDQUFXQyxDQUFYLENBQWFHO0FBQXRDO0FBSkQ7QUFGRCxHQUREO0FBV0E7QUFqQjJCLENBQWxCLENBQVg7O1FBb0JRUixJLEdBQUFBLEkiLCJmaWxlIjoiaXRlbS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9zdGFzL9Cg0LDQsdC+0YfQuNC5INGB0YLQvtC7L1Byb2plY3RzL2xpdGVyYXRlbmV3c19yZWFjdGpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5sZXQgSXRlbSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuXHRyZW5kZXIgOiBmdW5jdGlvbigpIHtcblx0XHR2YXIgc3R5bGUgPSB7XG5cdFx0XHQnYmFja2dyb3VuZC1pbWFnZScgOiAndXJsKCcrdGhpcy5wcm9wcy5pLmltZysnKSdcblx0XHR9O1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8aXRlbT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcIml0ZW1fX2ltZ1wiIHN0eWxlPXtzdHlsZX0+PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJpdGVtX190ZXh0XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcInRpdGxlXCI+XG5cdFx0XHRcdFx0XHQ8aDI+e3RoaXMucHJvcHMuaS50aXRsZX08L2gyPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJ0ZXh0XCI+e3RoaXMucHJvcHMuaS50ZXh0fTwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvaXRlbT5cblx0XHQpXG5cdH0gXG59KTtcblxuZXhwb3J0IHtJdGVtfSJdfQ==