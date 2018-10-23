import React, { Component } from 'react';
import {NavLink as Link } from 'react-router-dom';
import "../Style/Component/Footer.less";
/**
 * (底部导航分类)
 * 
 * @class Footer
 * @extends {Component} 
 */

class Footer extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        var arr = [];
        arr[this.props.index] = 'on';
        let { pathname }= this.props;
        return(
            <footer className="common-footer">
                <div className="zhanwei"></div>
                <ul className="menu" data-flex="box:mean">
                    <li>
                        <Link to="/" className={arr[0]}>
                            <i className = {'iconfont icon-' + (pathname == '/' ? 'yanchukuaimian' : 'yanchuxianxing')}></i> 演出
                        </Link>
                    </li>
                    <li>
                        <Link to="/mine"  className={arr[1]}>
                            <i className = {'iconfont icon-' + (pathname == '/mine' ? 'wodekuaimian' : 'wodexianxing')}></i> 我的
                        </Link>
                    </li>
                </ul>
            </footer>
        )
    }
}
Footer.defaultProps = {
    index: 0
};
export { Footer }