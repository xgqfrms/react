# bad


```jsx


            <Menu>
            <SubMenu>
                <Link to={`/api/sc/${node.apiname ? node.apiname : ""}`}>
                    <i className={iconClass} style={iconStyle}/>
                    {/* {node.name} & {`${node.apiname ? "api = "+node.apiname : "☹️"}`} */}
                    {/* {node.name} & {`${node.apiname ? "❤" : "☹️"}`} */}
                    {node.name}
                    {/* 
                        {(node.apiname ? window.location.hash = `${node.apiname}` : ``)}
                    */}
                    {/* {setTimeout(() => {
                        (node.apiname ? window.location.hash = `${node.apiname}` : ``)
                    }, 0)}  */}
                </Link>
                <SubItem key={node.apiname + "1"}>
                        <Link to={`/api/sc/${data.name}`}>
                            <Icon
                                type="bar-chart"
                                style={{fontSize: 12, color: '#fff'}}
                            />
                            {node.name}
                        </Link>
                </SubItem>
            </SubMenu>
            </Menu>

```



```js


/* 

    <Menu
        theme={this.state.theme}
        onClick={this.handleClick}
        style={{
            width: 220,
            minHeight: 1000,
            maxHeight: 1400,
            overflowY: "scroll"
        }}
        defaultOpenKeys={['sub1']}
        mode="inline"
        >
        <SubMenu 
            key="sub1"
            title={
                <span>
                    <Icon type="area-chart" style={{fontSize: 16, color: '#0f0'}} className=""/>
                    <span
                        style={{fontSize: 16, color: 'rgba(255, 255, 255, 0.7)'}}
                        className=""
                        >
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

*/

// decorators ???

/* 

Header === menus apiname

if(apiname !== undefined){
    // pass apiname
}else{
    // nothing need to do
}

Container

Loading

Toggle

*/

// content ??? get apiname



```
