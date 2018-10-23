import React, { Component } from 'react';
import { Footer } from '../Component/Footer';
import '../Style/Mine.less';

class Main extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="logo-container">
                    <img src="../../shot/login-logo.png" alt="" />
                </div>
                <div>
                    <div className="input-container">
                        <div className="row">
                            <div>手机号码</div>
                            <input className="phone-int" type="text" placeholder="请输入手机号" />
                        </div>
                        <div className="row">
                            <div>验证码</div>
                            <input className="code-int" type="text" placeholder="请输入验证码" />
                        </div>
                    </div>
                    <div className="login-btn">
                        登录
                    </div>
                </div>
                <Footer index='1' pathname={this.props.location.pathname} />
            </div>
        )
    }
}
export default Main;