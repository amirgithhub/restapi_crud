'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var API_KEY = "apikey";

var Friends = function (_React$Component) {
  _inherits(Friends, _React$Component);

  function Friends() {
    _classCallCheck(this, Friends);

    return _possibleConstructorReturn(this, (Friends.__proto__ || Object.getPrototypeOf(Friends)).apply(this, arguments));
  }

  _createClass(Friends, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "table",
        { className: "table table-striped" },
        React.createElement(
          "thead",
          null,
          React.createElement(
            "tr",
            null,
            React.createElement(
              "th",
              null,
              "ID2"
            ),
            React.createElement(
              "th",
              null,
              "Name"
            ),
            React.createElement(
              "th",
              null,
              "Type"
            ),
            React.createElement(
              "th",
              null,
              "Description"
            ),
            React.createElement(
              "th",
              null,
              "CreationTime"
            )
          )
        ),
        React.createElement(
          "tbody",
          null,
          this.props.friends && this.props.friends.map(function (friend) {
            return React.createElement(
              "tr",
              { key: friend.id },
              React.createElement(
                "td",
                null,
                friend.id
              ),
              React.createElement(
                "td",
                null,
                friend.name
              ),
              React.createElement(
                "td",
                null,
                friend.type
              ),
              React.createElement(
                "td",
                null,
                friend.description
              ),
              React.createElement(
                "td",
                null,
                friend.creationTime
              )
            );
          })
        )
      );
    }
  }]);

  return Friends;
}(React.Component);

var App = function (_React$Component2) {
  _inherits(App, _React$Component2);

  function App(props) {
    _classCallCheck(this, App);

    var _this2 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this2.state = {
      id: '',
      name: '',
      type: '',
      description: '',
      creationTime: ''
    };

    _this2.create = _this2.create.bind(_this2);
    _this2.update = _this2.update.bind(_this2);
    _this2.delete = _this2.delete.bind(_this2);
    _this2.handleChange = _this2.handleChange.bind(_this2);
    return _this2;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      // get all entities - GET

      fetch('http://127.0.0.1:8080/jpa/users', {

        "method": "GET",
        mode: 'no-cors',
        credentials: 'include'

      }).then(function (response) {
        return response.json();
      }).then(function (response) {
        _this3.setState({
          friends: response
        });
      }).catch(function (err) {
        console.log(response);
      });
    }
  }, {
    key: "create",
    value: function create(e) {
      // add entity - POST
      e.preventDefault();
    }
  }, {
    key: "update",
    value: function update(e) {
      // update entity - PUT
      e.preventDefault();
    }
  }, {
    key: "delete",
    value: function _delete(e) {
      // delete entity - DELETE
      e.preventDefault();
    }
  }, {
    key: "handleChange",
    value: function handleChange(changeObject) {
      this.setState(changeObject);
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "div",
          { className: "row justify-content-center" },
          React.createElement(
            "div",
            { className: "col-md-8" },
            React.createElement(
              "h1",
              { className: "display-4 text-center" },
              "Rest API Call in React"
            ),
            React.createElement(
              "form",
              { className: "d-flex flex-column" },
              React.createElement(
                "legend",
                { className: "text-center" },
                "Add-Update-Delete-View"
              ),
              React.createElement(
                "label",
                { htmlFor: "name" },
                "Entity Name:",
                React.createElement("input", {
                  name: "name",
                  id: "name",
                  type: "text",
                  className: "form-control",
                  value: this.state.name,
                  onChange: function onChange(e) {
                    return _this4.handleChange({ name: e.target.value });
                  },
                  required: true
                })
              ),
              React.createElement(
                "label",
                { htmlFor: "notes" },
                "Entity Description:",
                React.createElement("input", {
                  name: "notes",
                  id: "notes",
                  type: "test",
                  className: "form-control",
                  value: this.state.description,
                  onChange: function onChange(e) {
                    return _this4.handleChange({ notes: e.target.value });
                  },
                  required: true
                })
              ),
              React.createElement(
                "label",
                { htmlFor: "id" },
                "Entity ID:",
                React.createElement("input", {
                  name: "id",
                  id: "id",
                  type: "text",
                  className: "form-control",
                  value: this.state.id,
                  onChange: function onChange(e) {
                    return _this4.handleChange({ id: e.target.value });
                  }
                })
              ),
              React.createElement(
                "button",
                { className: "btn btn-primary", type: "button", onClick: function onClick(e) {
                    return _this4.create(e);
                  } },
                "Add"
              ),
              React.createElement(
                "button",
                { className: "btn btn-info", type: "button", onClick: function onClick(e) {
                    return _this4.update(e);
                  } },
                "Update"
              ),
              React.createElement(
                "button",
                { className: "btn btn-danger", type: "button", onClick: function onClick(e) {
                    return _this4.delete(e);
                  } },
                "Delete"
              )
            ),
            React.createElement(Friends, { friends: this.state.friends })
          )
        )
      );
    }
  }]);

  return App;
}(React.Component);

var domContainer = document.querySelector('#App');
ReactDOM.render(React.createElement(App, null), domContainer);