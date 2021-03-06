'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.state = {
            Coption: []
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            this.setState(function () {
                return {
                    Coption: []
                };
            });
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            if (!option) {
                return React.createElement(
                    'span',
                    { className: 'error' },
                    'Enter valid value to add item'
                );
            } else if (this.state.Coption.indexOf(option) > -1) {
                return React.createElement(
                    'span',
                    { className: 'msg-green' },
                    'This option already exists'
                );
            }
            this.setState(function (prevState) {
                return {
                    Coption: prevState.Coption.concat(option)
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var AppTitle = "Indecision App";
            var subTitle = "React Application";
            return React.createElement(
                'div',
                { className: 'wrapper' },
                React.createElement(Header, { title: AppTitle, subTitle: subTitle }),
                React.createElement(Action, { hasOptions: this.state.Coption.length > 0, handleDeleteOptions: this.handleDeleteOptions }),
                React.createElement(Options, { options: this.state.Coption }),
                React.createElement(AddOptions, { handleAddOption: this.handleAddOption }),
                React.createElement(Counter, null),
                React.createElement(VisibilityToggle, null)
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'header-container' },
                React.createElement(
                    'h1',
                    null,
                    this.props.title
                ),
                React.createElement(
                    'h2',
                    null,
                    this.props.subTitle
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Action = function (_React$Component3) {
    _inherits(Action, _React$Component3);

    function Action(props) {
        _classCallCheck(this, Action);

        var _this3 = _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).call(this, props));

        _this3.handleRemoveAll = _this3.handleRemoveAll.bind(_this3);
        return _this3;
    }

    _createClass(Action, [{
        key: 'handleRemoveAll',
        value: function handleRemoveAll() {
            console.log(this.props.hasOptions);
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'action' },
                React.createElement(
                    'span',
                    { className: 'text1' },
                    'What should I do?'
                ),
                React.createElement(
                    'button',
                    { className: 'btn btn-remove', disabled: !this.props.hasOptions, onClick: this.props.handleDeleteOptions },
                    'Remove'
                )
            );
        }
    }]);

    return Action;
}(React.Component);

var Options = function (_React$Component4) {
    _inherits(Options, _React$Component4);

    function Options() {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
    }

    _createClass(Options, [{
        key: 'render',
        value: function render() {
            console.log(this.props.options, 'test');
            return React.createElement(
                'ol',
                null,
                this.props.options.map(function (option) {
                    return React.createElement(Option, { key: option, optionText: option });
                })
            );
        }
    }]);

    return Options;
}(React.Component);

var Option = function (_React$Component5) {
    _inherits(Option, _React$Component5);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'li',
                null,
                'Option: ',
                this.props.optionText
            );
        }
    }]);

    return Option;
}(React.Component);

var AddOptions = function (_React$Component6) {
    _inherits(AddOptions, _React$Component6);

    function AddOptions(props) {
        _classCallCheck(this, AddOptions);

        var _this6 = _possibleConstructorReturn(this, (AddOptions.__proto__ || Object.getPrototypeOf(AddOptions)).call(this, props));

        _this6.handleAddOption = _this6.handleAddOption.bind(_this6);
        _this6.state = {
            error: undefined
        };
        return _this6;
    }

    _createClass(AddOptions, [{
        key: 'handleAddOption',
        value: function handleAddOption(e) {
            e.preventDefault();
            var option = e.target.elements.option.value.trim();
            var error = this.props.handleAddOption(option);
            this.setState(function () {
                return { error: error };
            });
            e.target.elements.option.value = '';
            // if(option) {
            //     this.props.handleAddOption(option)
            // }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddOption },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add Option'
                    )
                )
            );
        }
    }]);

    return AddOptions;
}(React.Component);

var Counter = function (_React$Component7) {
    _inherits(Counter, _React$Component7);

    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this7 = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this7.handleAddOne = _this7.handleAddOne.bind(_this7);
        _this7.handleMinusOne = _this7.handleMinusOne.bind(_this7);
        _this7.handleReset = _this7.handleReset.bind(_this7);

        _this7.state = {
            count: 0
        };
        return _this7;
    }

    _createClass(Counter, [{
        key: 'handleAddOne',
        value: function handleAddOne() {
            console.log('handleAddOne');
            this.setState(function (prevState) {
                return {
                    count: prevState.count + 1
                };
            });
        }
    }, {
        key: 'handleMinusOne',
        value: function handleMinusOne() {
            console.log('handleMinusOne');
            this.setState(function (prevState) {
                return {
                    count: prevState.count - 1
                };
            });
        }
    }, {
        key: 'handleReset',
        value: function handleReset() {
            console.log('handleReset');
            this.setState(function (prevState) {
                return {
                    count: 0
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var currentCount = this.state.count;
            return React.createElement(
                'div',
                { className: 'counter' },
                React.createElement(
                    'div',
                    { className: 'count-title' },
                    'Count : ',
                    currentCount
                ),
                React.createElement(
                    'button',
                    { className: 'counter-btn', onClick: this.handleAddOne },
                    '+1'
                ),
                React.createElement(
                    'button',
                    { className: 'counter-btn', onClick: this.handleMinusOne },
                    '-1'
                ),
                React.createElement(
                    'button',
                    { className: 'counter-btn', onClick: this.handleReset },
                    'Reset'
                )
            );
        }
    }]);

    return Counter;
}(React.Component);

var VisibilityToggle = function (_React$Component8) {
    _inherits(VisibilityToggle, _React$Component8);

    function VisibilityToggle(props) {
        _classCallCheck(this, VisibilityToggle);

        var _this8 = _possibleConstructorReturn(this, (VisibilityToggle.__proto__ || Object.getPrototypeOf(VisibilityToggle)).call(this, props));

        _this8.handleToggleVisibility = _this8.handleToggleVisibility.bind(_this8);

        _this8.state = {
            visibility: false
        };
        return _this8;
    }

    _createClass(VisibilityToggle, [{
        key: 'handleToggleVisibility',
        value: function handleToggleVisibility() {
            var _this9 = this;

            this.setState(function () {
                return {
                    visibility: !_this9.state.visibility
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'toggle-container' },
                React.createElement(
                    'div',
                    null,
                    'Visibility Toggle'
                ),
                React.createElement(
                    'button',
                    { className: 'toggle-btn', onClick: this.handleToggleVisibility },
                    this.state.visibility ? 'Hide details' : 'Show details'
                ),
                this.state.visibility && React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'p',
                        null,
                        'Hey, these are some details you can now see!!'
                    )
                )
            );
        }
    }]);

    return VisibilityToggle;
}(React.Component);

var app = document.getElementById('app');
ReactDOM.render(React.createElement(IndecisionApp, null), app);
