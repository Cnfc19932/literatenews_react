'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('/home/stas/\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B/Projects/literatenews_reactjs/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _app = require('../components/app');

var _app2 = _interopRequireDefault(_app);

var _head = require('/home/stas/\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B/Projects/literatenews_reactjs/node_modules/next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _main = require('../redux/main');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = _main.storeApp_;

exports.default = function () {
	return _react2.default.createElement(
		_reactRedux.Provider,
		{ store: store },
		_react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(
				_head2.default,
				null,
				_react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, height=device-height, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0' }),
				_react2.default.createElement('link', { href: 'https://fonts.googleapis.com/icon?family=Material+Icons', rel: 'stylesheet' }),
				_react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Lobster', rel: 'stylesheet' }),
				_react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz', rel: 'stylesheet' }),
				_react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: 'https://necolas.github.io/normalize.css/5.0.0/normalize.css' }),
				_react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/css/style.css' })
			),
			_react2.default.createElement(_app2.default, { store: store })
		)
	);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbInN0b3JlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBLElBQUlBLHVCQUFKOztrQkFFZ0I7QUFBQSxRQUNmO0FBQUE7QUFBQSxJQUFVLE9BQU9BLEtBQWpCO0FBQ0M7QUFBQTtBQUFBO0FBQ0M7QUFBQTtBQUFBO0FBQ0ksNENBQU0sTUFBSyxVQUFYLEVBQXNCLFNBQVEsb0hBQTlCLEdBREo7QUFFQyw0Q0FBTSxNQUFLLHlEQUFYLEVBQXFFLEtBQUksWUFBekUsR0FGRDtBQUdDLDRDQUFNLE1BQUssaURBQVgsRUFBNkQsS0FBSSxZQUFqRSxHQUhEO0FBSUMsNENBQU0sTUFBSywyREFBWCxFQUF1RSxLQUFJLFlBQTNFLEdBSkQ7QUFLQyw0Q0FBTSxLQUFJLFlBQVYsRUFBdUIsTUFBSyxVQUE1QixFQUF1QyxNQUFLLDZEQUE1QyxHQUxEO0FBTUMsNENBQU0sS0FBSSxZQUFWLEVBQXVCLE1BQUssVUFBNUIsRUFBdUMsTUFBSyx1QkFBNUM7QUFORCxJQUREO0FBU0Msa0RBQUssT0FBT0EsS0FBWjtBQVREO0FBREQsRUFEZTtBQUFBLEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL2hvbWUvc3Rhcy/QoNCw0LHQvtGH0LjQuSDRgdGC0L7Quy9Qcm9qZWN0cy9saXRlcmF0ZW5ld3NfcmVhY3RqcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBBcHAgZnJvbSAnLi4vY29tcG9uZW50cy9hcHAnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCdcbmltcG9ydCB7IHN0b3JlQXBwXyB9IGZyb20gJy4uL3JlZHV4L21haW4nXG5cbmxldCBzdG9yZSA9IHN0b3JlQXBwXztcblxuIGV4cG9ydCBkZWZhdWx0ICgpID0+IChcblx0PFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG5cdFx0PGRpdj5cblx0XHRcdDxIZWFkPlxuXHRcdCAgICBcdDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGhlaWdodD1kZXZpY2UtaGVpZ2h0LCBpbml0aWFsLXNjYWxlPTEuMCwgdXNlci1zY2FsYWJsZT0wLCBtaW5pbXVtLXNjYWxlPTEuMCwgbWF4aW11bS1zY2FsZT0xLjBcIiAvPlxuXHRcdFx0XHQ8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29uc1wiIHJlbD1cInN0eWxlc2hlZXRcIi8+XG5cdFx0XHRcdDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TG9ic3RlclwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuXHRcdFx0XHQ8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVlhbm9uZStLYWZmZWVzYXR6XCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG5cdFx0XHRcdDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiaHR0cHM6Ly9uZWNvbGFzLmdpdGh1Yi5pby9ub3JtYWxpemUuY3NzLzUuMC4wL25vcm1hbGl6ZS5jc3NcIiAvPlxuXHRcdFx0XHQ8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIi9zdGF0aWMvY3NzL3N0eWxlLmNzc1wiIC8+XG5cdFx0ICAgIDwvSGVhZD5cblx0XHRcdDxBcHAgc3RvcmU9e3N0b3JlfS8+XG5cdFx0PC9kaXY+XG5cdDwvUHJvdmlkZXI+XG4pICAgICAgICAgIl19