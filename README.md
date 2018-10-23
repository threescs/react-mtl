# React版mtl

## 说明
独立改造框架(angular1 => react) 因为时间有限,只粗糙改造了两个模块,后面更不更新看心情了

## 技术栈
>react
>redux
>react-router4
>webpack4.x 
>less
>flex.css
>ES6

### 下载
```
  git clone https://github.com/threescs/react-mtl.git
  cd react-mtl
  npm install (安装依赖模块)
  npm install webpack -g (没有安装webpack的需要安装)
```
### 运行（nodejs 6.0+）
```
  npm run dev (开发版本访问：http://localhost:3000/)
  npm run dist （发布生产版本）
```
### 功能
```
  1.列表分页
  2.登录退出(开发中)
```

### 总结
```
  1.UI是自己设计的，虽然我并不会PS这些工具(时间问题,暂没用到rem,正在改造中)。
  2.在移动端中，列表数据达到上百条之后，性能仍然是不容乐乎，有待于进一步的优化。
  3.使用高阶组件封装获取数据的流程，让页面组件专注于页面渲染，避免了每个页面都需要写一次获取数据的流程，提高开发效率
  4.redux听起来很美好，在实际操作的过程中，大大的复杂了创建一个页面的难度，最后只能将其封装起来，简化这个过程
  5.为了还原页面状态，比如后退时的滚动条位置，还是花费了不少功夫
  6.开发移动到应用，还是使用字体图标爽。
  7.借助webpack可以生成离线缓存清单，px转rem，ES6编译成ES5，模块化开发，代码压缩混淆......
  8.前端自动化，工程化，给前端的发展起到了很大的推动作用
```
### 状态树
![Alt text](https://github.com/threescs/react-mtl/raw/master/shot/redux-state.png)
### 截图

![截图](https://github.com/threescs/react-mtl/raw/master/shot/1.png)