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

var _item = require('../components/item');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Content = function (_React$Component) {
	(0, _inherits3.default)(Content, _React$Component);

	function Content(props) {
		(0, _classCallCheck3.default)(this, Content);

		var _this = (0, _possibleConstructorReturn3.default)(this, (Content.__proto__ || (0, _getPrototypeOf2.default)(Content)).call(this, props));

		_this.state = {
			'items': [{
				'img': 'http://s0.rbk.ru/v6_top_pics/resized/240x150_crop/media/img/6/72/754888022922726.jpg',
				'title': 'Погибший в Сирии россиянин Слышкин служил в «группе Вагнера»',
				'text': 'Погибший в Сирии 23-летний Иван Слышкин служил в частной военной компании Вагнера, рассказали два источника РБК. Слышкин тренировал сирийских военных и был убит во время разведывательной операции'
			}, {
				'img': 'http://s0.rbk.ru/v6_top_pics/resized/240x150_crop/media/img/4/19/754888196097194.jpg',
				'title': 'Трамп подписал новый указ об ограничении иммиграции в США',
				'text': 'Президент США Дональд Трамп подписал новый указ о мигрантах, который запрещает въезд в страну гражданам шести мусульманских стран: Сирии, Ирана, Судана, Ливии, Сомали и Йемена. Действие постановления не распространяется на тех, кто уже имеет американские визы'
			}]
		};
		return _this;
	}

	(0, _createClass3.default)(Content, [{
		key: 'getListItems',
		value: function getListItems() {
			console.log(this.state.items);
			return this.state.items.map(function (value) {
				return _react2.default.createElement(_item.Item, { i: value });
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'content',
				null,
				this.getListItems(),
				_react2.default.createElement(
					'div',
					{ className: 'more-button' },
					'More'
				)
			);
		}
	}]);
	return Content;
}(_react2.default.Component);

;

exports.Content = Content;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29udGVudC5qcyJdLCJuYW1lcyI6WyJDb250ZW50IiwicHJvcHMiLCJzdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJpdGVtcyIsIm1hcCIsInZhbHVlIiwiZ2V0TGlzdEl0ZW1zIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0lBRU1BLE87OztBQUNMLGtCQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUEsc0lBQ1hBLEtBRFc7O0FBRWpCLFFBQUtDLEtBQUwsR0FDQztBQUNDLFlBQVUsQ0FDVDtBQUNDLFdBQVEsc0ZBRFQ7QUFFQyxhQUFVLDhEQUZYO0FBR0MsWUFBUztBQUhWLElBRFMsRUFNVDtBQUNDLFdBQVEsc0ZBRFQ7QUFFQyxhQUFVLDJEQUZYO0FBR0MsWUFBUztBQUhWLElBTlM7QUFEWCxHQUREO0FBRmlCO0FBaUJqQjs7OztpQ0FFYTtBQUNiQyxXQUFRQyxHQUFSLENBQVksS0FBS0YsS0FBTCxDQUFXRyxLQUF2QjtBQUNBLFVBQU8sS0FBS0gsS0FBTCxDQUFXRyxLQUFYLENBQWlCQyxHQUFqQixDQUFxQixVQUFTQyxLQUFULEVBQWU7QUFDMUMsV0FBUSw0Q0FBTSxHQUFHQSxLQUFULEdBQVI7QUFDQSxJQUZNLENBQVA7QUFHQTs7OzJCQUVPO0FBQ1AsVUFDQTtBQUFBO0FBQUE7QUFDRSxTQUFLQyxZQUFMLEVBREY7QUFFQztBQUFBO0FBQUEsT0FBSyxXQUFZLGFBQWpCO0FBQUE7QUFBQTtBQUZELElBREE7QUFNQTs7O0VBbENvQixnQkFBTUMsUzs7QUFtQzNCOztRQUdPVCxPLEdBQUFBLE8iLCJmaWxlIjoiY29udGVudC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9zdGFzL9Cg0LDQsdC+0YfQuNC5INGB0YLQvtC7L1Byb2plY3RzL2xpdGVyYXRlbmV3c19yZWFjdGpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtJdGVtfSBmcm9tICcuLi9jb21wb25lbnRzL2l0ZW0nXG5cbmNsYXNzIENvbnRlbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IFxuXHRcdFx0e1xuXHRcdFx0XHQnaXRlbXMnIDogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdCdpbWcnIDogJ2h0dHA6Ly9zMC5yYmsucnUvdjZfdG9wX3BpY3MvcmVzaXplZC8yNDB4MTUwX2Nyb3AvbWVkaWEvaW1nLzYvNzIvNzU0ODg4MDIyOTIyNzI2LmpwZycsXG5cdFx0XHRcdFx0XHQndGl0bGUnIDogJ9Cf0L7Qs9C40LHRiNC40Lkg0LIg0KHQuNGA0LjQuCDRgNC+0YHRgdC40Y/QvdC40L0g0KHQu9GL0YjQutC40L0g0YHQu9GD0LbQuNC7INCyIMKr0LPRgNGD0L/Qv9C1INCS0LDQs9C90LXRgNCwwrsnLFxuXHRcdFx0XHRcdFx0J3RleHQnIDogJ9Cf0L7Qs9C40LHRiNC40Lkg0LIg0KHQuNGA0LjQuCAyMy3Qu9C10YLQvdC40Lkg0JjQstCw0L0g0KHQu9GL0YjQutC40L0g0YHQu9GD0LbQuNC7INCyINGH0LDRgdGC0L3QvtC5INCy0L7QtdC90L3QvtC5INC60L7QvNC/0LDQvdC40Lgg0JLQsNCz0L3QtdGA0LAsINGA0LDRgdGB0LrQsNC30LDQu9C4INC00LLQsCDQuNGB0YLQvtGH0L3QuNC60LAg0KDQkdCaLiDQodC70YvRiNC60LjQvSDRgtGA0LXQvdC40YDQvtCy0LDQuyDRgdC40YDQuNC50YHQutC40YUg0LLQvtC10L3QvdGL0YUg0Lgg0LHRi9C7INGD0LHQuNGCINCy0L4g0LLRgNC10LzRjyDRgNCw0LfQstC10LTRi9Cy0LDRgtC10LvRjNC90L7QuSDQvtC/0LXRgNCw0YbQuNC4J1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0J2ltZycgOiAnaHR0cDovL3MwLnJiay5ydS92Nl90b3BfcGljcy9yZXNpemVkLzI0MHgxNTBfY3JvcC9tZWRpYS9pbWcvNC8xOS83NTQ4ODgxOTYwOTcxOTQuanBnJyxcblx0XHRcdFx0XHRcdCd0aXRsZScgOiAn0KLRgNCw0LzQvyDQv9C+0LTQv9C40YHQsNC7INC90L7QstGL0Lkg0YPQutCw0Lcg0L7QsSDQvtCz0YDQsNC90LjRh9C10L3QuNC4INC40LzQvNC40LPRgNCw0YbQuNC4INCyINCh0KjQkCcsXG5cdFx0XHRcdFx0XHQndGV4dCcgOiAn0J/RgNC10LfQuNC00LXQvdGCINCh0KjQkCDQlNC+0L3QsNC70YzQtCDQotGA0LDQvNC/INC/0L7QtNC/0LjRgdCw0Lsg0L3QvtCy0YvQuSDRg9C60LDQtyDQviDQvNC40LPRgNCw0L3RgtCw0YUsINC60L7RgtC+0YDRi9C5INC30LDQv9GA0LXRidCw0LXRgiDQstGK0LXQt9C0INCyINGB0YLRgNCw0L3RgyDQs9GA0LDQttC00LDQvdCw0Lwg0YjQtdGB0YLQuCDQvNGD0YHRg9C70YzQvNCw0L3RgdC60LjRhSDRgdGC0YDQsNC9OiDQodC40YDQuNC4LCDQmNGA0LDQvdCwLCDQodGD0LTQsNC90LAsINCb0LjQstC40LgsINCh0L7QvNCw0LvQuCDQuCDQmdC10LzQtdC90LAuINCU0LXQudGB0YLQstC40LUg0L/QvtGB0YLQsNC90L7QstC70LXQvdC40Y8g0L3QtSDRgNCw0YHQv9GA0L7RgdGC0YDQsNC90Y/QtdGC0YHRjyDQvdCwINGC0LXRhSwg0LrRgtC+INGD0LbQtSDQuNC80LXQtdGCINCw0LzQtdGA0LjQutCw0L3RgdC60LjQtSDQstC40LfRiydcblx0XHRcdFx0XHR9XG5cdFx0XHRcdF1cblx0XHRcdH07XG5cdH1cblxuXHRnZXRMaXN0SXRlbXMoKXtcblx0XHRjb25zb2xlLmxvZyh0aGlzLnN0YXRlLml0ZW1zKTtcblx0XHRyZXR1cm4gdGhpcy5zdGF0ZS5pdGVtcy5tYXAoZnVuY3Rpb24odmFsdWUpe1xuXHRcdFx0cmV0dXJuICg8SXRlbSBpPXt2YWx1ZX0vPik7XG5cdFx0fSk7XG5cdH1cbiBcblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuICAoXG5cdFx0PGNvbnRlbnQ+XG5cdFx0XHR7dGhpcy5nZXRMaXN0SXRlbXMoKX1cblx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJtb3JlLWJ1dHRvblwiPk1vcmU8L2Rpdj5cblx0XHQ8L2NvbnRlbnQ+XG5cdFx0KVxuXHR9XG59O1xuXG5cbmV4cG9ydCB7Q29udGVudH0gIl19