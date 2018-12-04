"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./style.css");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var SlidePanel =
/*#__PURE__*/
function (_Component) {
  _inherits(SlidePanel, _Component);

  function SlidePanel(props) {
    var _this;

    _classCallCheck(this, SlidePanel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SlidePanel).call(this, props));
    _this.sidebarRef = _react.default.createRef();
    _this.state = {
      sidebarWidth: props.sidebarWidth
    };
    _this.overlayClicked = _this.overlayClicked.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(SlidePanel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        sidebarWidth: this.sidebarRef.current.offsetWidth
      });
    }
  }, {
    key: "overlayClicked",
    value: function overlayClicked() {
      if (this.props.open) {
        this.props.toggleOpen(false);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var contentStyle = {};
      var overlayStyle = {};

      if (this.props.docked) {
        if (this.props.side.toLowerCase() === 'right') {
          contentStyle.right = "".concat(this.state.sidebarWidth, "px");
        } else {
          contentStyle.left = "".concat(this.state.sidebarWidth, "px");
        }
      } else if (this.props.open) {
        overlayStyle.opacity = 1;
        overlayStyle.display = 'block';
      }

      return _react.default.createElement("div", {
        className: "container"
      }, _react.default.createElement("div", {
        className: "side-panel-".concat(this.props.side, " ").concat(this.props.open ? 'side-panel-open-' + this.props.side : 'side-panel-closed-' + this.props.side, " ").concat(this.props.open && this.props.applyShadow ? 'side-panel-shadow-' + this.props.side : ''),
        ref: this.sidebarRef
      }, this.props.sidebar), _react.default.createElement("div", {
        className: "overlay-content",
        style: overlayStyle,
        onClick: this.overlayClicked
      }), _react.default.createElement("div", {
        className: "main-content",
        style: contentStyle,
        id: this.props.contentId
      }, this.props.children));
    }
  }]);

  return SlidePanel;
}(_react.Component);

SlidePanel.defaultProps = {
  side: 'left',
  docked: false,
  open: false,
  applyShadow: true,
  toggleOpen: function toggleOpen() {},
  sidebarWidth: 0
};
var _default = SlidePanel;
exports.default = _default;