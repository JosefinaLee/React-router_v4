/**
 * Created by Liqi on 17/3/29.
 */
"use strict";

//https://reacttraining.com/react-router/web/example/no-match
//https://reacttraining.cn/core/api/Switch

//TODO NOTE <Switch>
//A <Switch> renders the first child <Route> that matches. A <Route> with no path always matches.
/*
 const NoMatch = ({ location }) => (
 <div>
 <h3>No match for <code>{location.pathname}</code></h3>
 </div>
 )

 <Switch>
 渲染匹配地址(location)的第一个 <Route> 或者 <Redirect>，这与只使用一堆<Route>有什么不同？
 <Switch>的独特之处是独它仅仅渲染一个路由。
 相反地，每一个包含匹配地址(location)的<Route>都会被渲染。

 <Route exact path="/" component={Home}/>
 <Route path="/about" component={About}/>
 <Route path="/:user" component={User}/>
 <Route component={NoMatch}/>

 如果现在的URL是 /about ，那么 <About>, <User>, 还有 <NoMatch> 都会被渲染，因为它们都与路径(path)匹配。
 这种设计，允许我们以多种方式将多个 <Route> 组合到我们的应用程序中，例如侧栏(sidebars)，面包屑(breadcrumbs)，bootstrap tabs等等。
 然而，偶尔我们只想选择一个<Route> 来渲染。如果我们现在处于 /about ，我们也不希望匹配 /:user （或者显示我们的 “404” 页面 ）。
 以下是使用 Switch 的方法来实现：
 <Switch>
 <Route exact path="/" component={Home}/>
 <Route path="/about" component={About}/>
 <Route path="/:user" component={User}/>
 <Route component={NoMatch}/>
 </Switch>
 现在，如果我们处于 /about, <Switch> 将开始寻找匹配的 <Route>。
 <Route path="/about"/> 将被匹配， <Switch> 将停止寻找匹配并渲染<About>。
 同样，如果我们处于 /michael ， <User> 将被渲染。
 这对于过渡动画也是起作用的，因为匹配的 <Route> 在与前一个相同的位置被渲染。
 */

import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom'

const NoMatchExample = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/old-match">Old Match, to be redirected</Link></li>
                <li><Link to="/will-match">Will Match</Link></li>
                <li><Link to="/will-not-match">Will Not Match</Link></li>
                <li><Link to="/also/will/not/match">Also Will Not Match</Link></li>
            </ul>
            <Switch> //NOTE
                /*
                 <Switch> 的所有子节点应为 <Route> 或 <Redirect> 元素。
                 只有匹配当前地址(location)的第一个子节点才会被渲染。
                 <Route> 元素使用它们的 path 属性匹配，<Redirect> 元素使用它们的 from 属性匹配。
                 没有 path 属性的<Route> 或者 没有 from 属性的 <Redirect> 将总是可以匹配当前的地址(location)
                 */
                <Route path="/" exact component={Home}/>
                <Redirect from="/old-match" to="/will-match"/>
                <Route path="/will-match" component={WillMatch}/>
                <Route component={NoMatch}/> //相当于default
            </Switch>
        </div>
    </Router>
)

const Home = () => (
    <p>
        A <code>{"<Switch>"}</code> renders the
    first child <code>{"<Route>"}</code> that
    matches. A <code>{"<Route>"}</code> with
    no <code>path</code> always matches.
    </p>
)

const WillMatch = () => <h3>Matched!</h3>

const NoMatch = ({location}) => (
    <div>
        <h3>No match for <code>{location.pathname}</code></h3>  //NOTE
    </div>
)

export default NoMatchExample