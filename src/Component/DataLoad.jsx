import React, { Component } from 'react';

/**
 * (加载动画)
 *
 * @class DataLoad
 * @extends {Component}
 */
export class DataLoad extends Component {
    render() {
        let {loadAnimation, loadMsg} = this.props;
        return (
            <div className={'data-load data-load-' + loadAnimation}>
                <div className='msg'>{loadMsg}</div>
            </div>
        );
    }
}
DataLoad.defaultProps = {
    loadAnimation: true,
    loadMsg: '正在加载中'
}
