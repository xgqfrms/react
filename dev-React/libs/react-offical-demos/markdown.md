# A Component Using External Plugins(remarkable)

[Markdown application](https://facebook.github.io/react/index.html))


```jsx
class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {value: 'Type some *markdown* here!'};
  }
  handleChange() {
    this.setState({value: this.refs.textarea.value});
  }
  getRawMarkup() {
    var md = new Remarkable();
    return { __html: md.render(this.state.value) };
  }
  render() {
    return (
      <div className="MarkdownEditor">
        <h3>Input</h3>
        <textarea
          onChange={this.handleChange}
          ref="textarea"
          defaultValue={this.state.value} />
        <h3>Output</h3>
        <div
          className="content"
          dangerouslySetInnerHTML={this.getRawMarkup()}
        />
      </div>
    );
  }
}

ReactDOM.render(<MarkdownEditor />, mountNode);
```

```js
class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: 'Type some *markdown* here!' };
  }
  handleChange() {
    this.setState({ value: this.refs.textarea.value });
  }
  getRawMarkup() {
    var md = new Remarkable();
    return { __html: md.render(this.state.value) };
  }
  render() {
    return React.createElement(
      "div",
      { className: "MarkdownEditor" },
      React.createElement(
        "h3",
        null,
        "Input"
      ),
      React.createElement("textarea", {
        onChange: this.handleChange,
        ref: "textarea",
        defaultValue: this.state.value }),
      React.createElement(
        "h3",
        null,
        "Output"
      ),
      React.createElement("div", {
        className: "content",
        dangerouslySetInnerHTML: this.getRawMarkup()
      })
    );
  }
}

ReactDOM.render(React.createElement(MarkdownEditor, null), mountNode);
```


