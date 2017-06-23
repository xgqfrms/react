function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

const names = ["Sara","Cahal", "Edite"];

function App() {
    return (
        <div>
            {
                names.map((name)=>{
                    return <Welcome name={name} />;
                })
            }
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
