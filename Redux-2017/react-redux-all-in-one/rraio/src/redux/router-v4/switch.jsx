<Route path="/about" component={About}/>
<Route path="/:user" component={User}/>
<Route component={NoMatch}/>

import { Switch, Route } from 'react-router'

<Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/:user" component={User}/>
    <Route component={NoMatch}/>
</Switch>


/* there will only ever be one child here */

<Fade>
    <Switch>
        <Route/>
        <Route/>
    </Switch>
</Fade>

<Fade>
    <Route/>
    <Route/>
</Fade>

/* there will always be two children here, one might render null though, making transitions a bit more cumbersome to work out */



