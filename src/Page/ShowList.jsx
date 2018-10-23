import React, {Component} from 'react';
import {NavLink as Link } from 'react-router-dom';
import  { PosterImg } from '../Component/PosterImg';
import ScrollNextPage from '../Component/common/ScrollNextPage'
import queryString from 'query-string';
import { Footer } from '../Component/Footer';
import '../Style/ShowList.less';

/**
 * (头部导航分类)
 * 
 * @class Nav
 * @extends {Component} 
 */
class Nav extends Component {
    render() {
        const tabs = [
            {title:'全部', path:'/'},
            {title:'演唱会', path:'/?type=1'},
            {title:'音乐会', path:'/?type=2'},
            {title:'话剧歌剧', path:'/?type=3'},
            {title:'曲艺杂谈', path:'/?type=4'},
        ]
        return (
            <nav className="index-nav">
                <ul data-flex="box:mean">
                {
                    tabs.map((item,index) => {
                    return (
                        <li key={index}>
                            <Link activeClassName='active' to={item.path}>{item.title}</Link>
                        </li>
                    )
                    })
                }
                </ul>
                <div className="height"></div>
            </nav>
        );
    }
    shouldComponentUpdate(np) {
        return this.props.type !== np.type; //type和之前的不一致，组件才需要更新，否则不更新，提升性能
    }
}


/**
 * (循环列表)
 * 
 * @class List
 * @extends {Component}
 */
class List extends Component {
    render() {
        return (
            <ul className="index-list">
                {
                    this.props.list.map((item, index) => {
                        return <ListItem key={item.showOID} {...item} />
                    })
                }
            </ul>
        );
    }
}

class ListItem extends Component {
    render() {
        let {showOID, showName, firstShowTime, lastShowTime, venueName, minPrice, posterURL, discount} = this.props;
        let showStatus = this.props.showStatus.displayName
        return (
            <li>
                <Link to={`/conrent/${showOID}`}>
                    <div className='normal-content'>
                        <div className='left-poster'>
                            <PosterImg url={posterURL} />
                            <div className='discount'>
                                <p className='number'>{discount * 10}</p>
                                折起
                            </div>
                        </div>
                        <div className='right-info'>
                            <div className='show-name'>{showName}</div>
                            <div className='show-time'>{firstShowTime + ' - ' + lastShowTime}</div>
                            <div className='show-avenue'>{venueName}</div>
                            <div className='price-info'>
                                <div className='show-status'>{showStatus}</div>
                                <div className='show-price'>{minPrice}元起</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </li>
        );
    }
    shouldComponentUpdate(np) {
        return false;
    }
}
/**
 * (导出组件)
 * 
 * @export
 * @class Main
 * @extends {Component}
 */
class Main extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var {data, loadAnimation, loadMsg} = this.props.state;
        var type = queryString.parse(this.props.location.search).type || '';
        return (
            <div className="index-list-box">
                <Nav type={type} />
                {
                    data.length > 0 ? <List list={data} /> : null
                }
                <Footer index="0" pathname={this.props.location.pathname} />
            </div>
        );
    }
}


export default ScrollNextPage({
    id: 'ShowList',  
    component: Main, //接收数据的组件入口
    url: 'pub/site/1001/active_show',
    data: (props, state) => { //发送给服务器的数据
        var { offset, length ,mdrender}  = state;
        return {
            type: queryString.parse(props.location.search).type || '',
            offset,
            length,
            mdrender
        }
    },
    success: (state) => { return state; }, 
    error: (state) => { return state } 
});
