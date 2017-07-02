# Redux Dataflow

http://redux.js.org/docs/basics/DataFlow.html


https://gist.github.com/xgqfrms-GitHub/233bff1e7c701f664f85f877a1346419#gistcomment-2137959





## basic

> state -> components(event) -> Actions(action) -> Dispacther(action & prevState) -> Reducer(state) -> state




## Side Effects


> state -> components(event) -> Actions(action) -> 

Dispacther(action & prevState) -> Reducer(state) -> state


> state -> components(event) -> Actions(action) -> 

MiddleWare(req) <--> API(res) 

Dispacther(action & prevState) -> Reducer(state) -> state




