


```jsx

// routes

let routes = datas.map(
    (route, index) => {
        if (xyz_debug(true)) {
            console.log(`%c route index = ${index} = `, color.css1);
            console.log(`%c route ${index} = `, color.css2, route);
        }
        return {
            path: `/api/sc/${route.name}`,
            exact: true,
            main: () => (
                <div>
                    {/* contents */}
                    <SCT data={route} urlname={route.name}/>
                </div>
            )
        };
    }
);


// links

<SC 
    routes={this.state.routes}
    datas={this.state.datas}
/>


<Router>
    {/* display: 'flex', */}
    <div>
        <div>
            <Menu
                theme={this.state.theme}
                onClick={this.handleClick}
                defaultOpenKeys={['sub1']}
                mode="inline"
                >
                {/* dynamic menus ???  SubMenu SubItem*/}
                <SubMenu 
                    key="sub1"
                    title={
                        <span>
                            <Icon type="area-chart" style={{fontSize: 16, color: '#0f0'}} className=""/>
                            <span>
                                API 查询工具
                            </span>
                        </span>
                    }>
                    {
                        this.props.datas.map((data, index) => (
                            <SubItem key={(index)}>
                                <Link to={`/api/sc/${data.name}`}>
                                    <Icon
                                        type={data.name ? this.randomIcons(data.description.substr(0, 2)) : "bar-chart"}
                                        style={{fontSize: 12, color: '#fff'}}
                                    />
                                    {data.description.substr(0,2)}
                                </Link>
                            </SubItem>
                        ))
                    }
                </SubMenu>
            </Menu>
        </div>
        <div >
            {
                this.props.routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                ))
            }
            {/* route.main === SCT component */}
        </div>
    </div>
</Router>


```



```jsx

<Link to={`/api/sc/${data.name}`}></Link>


<SCT data={route} urlname={route.name}/>


```







## tree => li

> routes ???


```js

// 





```






















