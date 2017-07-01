// controled components

/*

https://app.pluralsight.com/player?course=react-js-getting-started&author=samer-buna&name=react-js-getting-started-m2&clip=2&mode=live

*/

this.state.

const changeHandler = (e) => {
    return(
        this.setState({
            userName: e.target.value
        });
    );
};




value={this.state.userName}

onChange={(e) => this.setState({userName: e.target.value})}

onChange={(e) => this.changeHandler(e)}



const user = (user="xgqfrms") => {
    return user;
};


user_name = user();

let url = `https://api.github.com/users/${user_name}`;

// get(`https://api.github.com/users/xgqfrms`)

axios.get(url)
.then(
    res => {
        console.log(`response =`, res);
        // no need response.json();
        this.props.onSubmit(res.data);
        console.log(`response.data = `, res.data);
        return res.data;
    }
);


fetch(`https://api.github.com/users/xgqfrms`)
.then(
    (response) => {
        console.log(`response`, response);
        let json = response.json();
        console.log(`json`, json);
        return json;
    }
)
.then(
    (data) => {
        console.log(`data`, data);
    }
);


axios.get(`https://api.github.com/users/xgqfrms`)
.then(
    res => {
        console.log(`response`, res);
        // no need response.json();
        return res;
    }
)
.then(
    (data) => {
        console.log(`data`, data);
    }
);







const addNewCard = (card) => {
    this.setState((prevState) => {
        cards: prevState.cards.concat(card)
    });
};




state = {
    cards: []
};


// id = key (list unique key )


<div>
    {
        props.cards.map(
            (card) => <Card key ={card.id} {...card} />
        )
    }
</div>



// concat



