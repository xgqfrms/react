


```jsx


<div 
                            style={{
                                background: "#404040",
                                border: "1px solid #ccc"
                            }}
                            >
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
                        </div>

```