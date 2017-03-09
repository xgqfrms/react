class InputExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
        this.change = this.change.bind(this);
    }

    change(ev) {
        this.setState({ text: ev.target.value });
    }

    render() {
        let { text } = this.state;
        return (<input type="text" value={text} onChange={this.change} />);
    }
}
