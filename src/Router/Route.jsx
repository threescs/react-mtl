import React, { Component } from 'react';
import { BrowserRouter, HashRouter, Switch, Route, Redirect} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import getComponent from '../Component/common/getComponent';
const history = createBrowserHistory();


import ShowList from '../Page/ShowList'; //演出列表
import Mine from '../Page/Mine'


const routes = [
	{ path: '/',
		exact: true,
		component: ShowList
	},
	{ path: '/mine',
		exact: true,
		component: Mine
	}
];
/**
 * (路由根目录组件，显示当前符合条件的组件)
 * 
 * @class Roots
 * @extends {Component}
 */
class Roots extends Component {
    render() {
        return (
            <div>{this.props.children}</div>
        );
    }
}
// var history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;
// 当浏览器不支持H5的historyAPI时强制刷新页面
const supportsHistory = 'pushState' in window.history;
let Router = process.env.NODE_ENV !== 'production' ? BrowserRouter : HashRouter;
const RouteConfig = (
    <Router  history={history} forceRefresh={!supportsHistory}>
	{/* Switch 只匹配一个路由 */}
	    <Switch>
		    {routes.map((route, index) => (
			    <Route
				    key={index}
				    path={route.path}
				    exact={route.exact}
				    component={route.component}
			    />
		    ))}
		    <Redirect from='' to="/" />
	    </Switch>
    </Router>
);

export default RouteConfig;