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



# redux & react

https://github.com/kenberkeley/redux-simple-tutorial

https://github.com/kenberkeley/react-demo



```js

├─ build/            # Webpack 配置目录
├─ dist/             # build 生成的生产环境下的项目
├─ src/              # 源码目录（开发都在这里进行）
│   ├─ assets/         # 放置需要经由 Webpack 处理的静态文件
│   ├─ components/     # 组件（COMPONENT）
│   ├─ redux/          # Redux 一箩筐
│   │   ├─ actions/      # （ACTION）
│   │   ├─ reducers/     # （REDUCER）
│   │   ├─ store/        # （STORE）
│   ├── routes/        # 路由（ROUTE）
│   ├── services/      # 服务（SERVICE，用于统一管理 XHR 请求，这是从 Vue Demo 中直接复制过来的）
│   ├── utils/         # 工具库（UTIL）
│   │   ├─ HoC/          # 高阶组件（HOC，全称 Higher Order Component）
│   │   ├─ mixins/       # 混合（MIXIN）
│   ├── views/         # 路由视图基页（VIEW）
│   │   ├─ layout/       # 全局布局
│   ├── app.js         # 启动文件
│   ├── index.html     # 静态基页
├── static/          # 放置无需经由 Webpack 处理的静态文件
├── .babelrc         # Babel 转码配置
├── .eslintignore    # （配置）ESLint 检查中需忽略的文件（夹）
├── .eslintrc        # ESLint 配置
├── .gitignore       # （配置）需被 Git 忽略的文件（夹）
├── package.json     # （这个就不用多解释了吧）

```




