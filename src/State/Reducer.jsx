import { Tool, merged } from '../Tool/Tool';
/**
 * 存储登录的用户信息
 * 
 * @param {string} [state=JSON.parse(Tool.localItem('User'))]
 * @param {Object} action
 * @returns Object
 */
const User = (state = JSON.parse(Tool.localItem('User')), action) => {
    switch (action.type) {
        case 'signinSuccess': //登录成功
            Tool.localItem('User', JSON.stringify(action.target));
            return action.target;
        case 'signin': //退出
            Tool.removeLocalItem('User');
            return null;
        default:
            return state;
    }
}

const DB = (_ID = '', setting = {}) => {
    const cb = {
        setDefault: () => {
            var defaults = merged({
                path: '', //当前页面的href
                loadAnimation: true, //true显示加载动画，false 不显示加载动画
                loadMsg: '加载中', //加载提示
                data: null, //页面的数据
                scrollX: 0, //滚动条X
                scrollY: 0, //滚动条Y 
                mdrender: true //当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。
            }, setting);
            return {
                defaults,
                path: {}
            };
        },
        setState: (state, target) => {
            state.path[target.path] = target;
            return merged(state);
        }
    }
    return (state = {}, action = {}) => {
        if (action._ID && action._ID !== _ID) {
            return state;
        } else if (cb[action.type]) {
            return cb[action.type](state, action.target);
        } else {
            return cb.setDefault();
        }
    }
}
const ShowList = DB('ShowList', { offset: 10, nextBtn: true, length: 10, mdrender: false, data: [] }); //首页
export default { ShowList, User }