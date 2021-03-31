import _regeneratorRuntime from "babel-runtime/regenerator";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FetchRandomUser = function (_React$Component) {
  _inherits(FetchRandomUser, _React$Component);

  function FetchRandomUser() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FetchRandomUser);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FetchRandomUser.__proto__ || Object.getPrototypeOf(FetchRandomUser)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      loading: true,
      person: null
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FetchRandomUser, [{
    key: "componentDidMount",
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        var url, response, data;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = "https://api.randomuser.me/";
                _context.next = 3;
                return fetch(url);

              case 3:
                response = _context.sent;
                _context.next = 6;
                return response.json();

              case 6:
                data = _context.sent;

                this.setState({ person: data.results[0], loading: false });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _ref2.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      if (this.state.loading) {
        return React.createElement(
          "div",
          null,
          "loading..."
        );
      }

      if (!this.state.person) {
        return React.createElement(
          "div",
          null,
          "didn't get a person"
        );
      }

      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          null,
          this.state.person.name.title
        ),
        React.createElement(
          "div",
          null,
          this.state.person.name.first
        ),
        React.createElement(
          "div",
          null,
          this.state.person.name.last
        ),
        React.createElement("img", { src: this.state.person.picture.large })
      );
    }
  }]);

  return FetchRandomUser;
}(React.Component);

export default FetchRandomUser;