import React from "react";
import ReactDom from 'react-dom';

import './css/index.css'

import Hello from './js/Hello.js'

// const title = React.createElement('h1', null, 'xiaoxiaoran')
// ReactDom.render(title, document.getElementById('root'))

// 变量 样式
const name = "xiaoxiaoran"
const age = 11
//const title = (<h1 style={{ color: 'red', backgroundColor: 'blue' }} >JSX,name={name},age={age}<span /></h1>)
const title = (<h1 className="title" >JSX,name={name},age={age}<span /></h1>)
ReactDom.render(title, document.getElementById('root'))

// 列表
const songs = [{ id: 1, name: 'song1' }, { id: 2, name: 'song2' }, { id: 3, name: 'song3' }]
const list = (<ul>{songs.map(item => <li key={item.id}> {item.name}</li>)}</ul>)
ReactDom.render(list, document.getElementById('root1'))

// 组件
//const Hello = () => <div>函数组件</div>
//function Hello() { return (<div>函数组件</div>) }
//class Hello extends React.Component { render() { return <div>类组件</div> } }

ReactDom.render(<Hello />, document.getElementById('root2'))

// 事件处理

// class App extends React.Component {
//     handleClick() { alert('xiuxiu') }
//     render() {
//         return (<button onClick={this.handleClick}>click</button>)
//     }

// }

function App() {
    function handleClick() { alert('xiuxiu') }
    return (<button onClick={handleClick}>click</button>)
}

ReactDom.render(<App />, document.getElementById('root3'))

// 事件对象
class App1 extends React.Component {
    handleClick(e) {
        e.preventDefault()
        alert('阻止默认行为')
    }
    render() {
        return (<a href="https://xiaoxiaoran.top" onClick={this.handleClick}>click</a>)
    }
}

ReactDom.render(<App1 />, document.getElementById('root4'))


