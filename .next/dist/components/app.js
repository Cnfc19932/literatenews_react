'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('/home/stas/\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B/Projects/literatenews_reactjs/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _header = require('../components/header');

var _content = require('../components/content');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = _react2.default.createClass({
  displayName: 'App',

  render: function render() {
    return _react2.default.createElement(
      'div',
      { id: 'page' },
      _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(_header.Header, null),
        _react2.default.createElement(_content.Content, null)
      )
    );
  }
});

exports.default = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXBwLmpzIl0sIm5hbWVzIjpbIkFwcCIsImNyZWF0ZUNsYXNzIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBRUEsSUFBSUEsTUFBTSxnQkFBTUMsV0FBTixDQUFrQjtBQUFBOztBQUMzQkMsVUFBUSxrQkFBVztBQUNmLFdBQ0U7QUFBQTtBQUFBLFFBQUssSUFBSyxNQUFWO0FBQ0M7QUFBQTtBQUFBLFVBQUssV0FBWSxXQUFqQjtBQUNDLDJEQUREO0FBRUM7QUFGRDtBQURELEtBREY7QUFRRDtBQVZ3QixDQUFsQixDQUFWOztrQkFhZUYsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvc3Rhcy/QoNCw0LHQvtGH0LjQuSDRgdGC0L7Quy9Qcm9qZWN0cy9saXRlcmF0ZW5ld3NfcmVhY3RqcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7SGVhZGVyfSBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcicgXG5pbXBvcnQge0NvbnRlbnR9IGZyb20gJy4uL2NvbXBvbmVudHMvY29udGVudCdcbiBcbmxldCBBcHAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7IFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIFx0cmV0dXJuICggXG4gICAgXHRcdFx0PGRpdiBpZCA9IFwicGFnZVwiPlxuICAgIFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImNvbnRhaW5lclwiPlxuICAgIFx0XHRcdFx0XHQ8SGVhZGVyIC8+XG4gICAgXHRcdFx0XHRcdDxDb250ZW50IC8+XG4gICAgXHRcdFx0XHQ8L2Rpdj5cbiAgICBcdFx0XHQ8L2Rpdj5cbiAgICBcdCk7XG4gIFx0fVxufSk7XG4gXG5leHBvcnQgZGVmYXVsdCBBcHBcbiJdfQ==