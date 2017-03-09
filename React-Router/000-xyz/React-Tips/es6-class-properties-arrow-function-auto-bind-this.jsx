class InputExample extends React.Component {
    state = { text: '' };
    change = ev => this.setState({text: ev.target.value});

    render() {
        let {text} = this.state;
        return (<input type="text" value={text} onChange={this.change} />);
    }
}
