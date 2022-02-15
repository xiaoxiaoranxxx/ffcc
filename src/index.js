import React from "react";
import ReactDom from "react-dom";

// const title = React.createElement('h1', null, 'xiaoxiaoran')
// ReactDom.render(title, document.getElementById('root'))

const name = "xiaoxiaoran"
const age = 11

const title = (<h1 className="title" >JSX,name={name},age={age}<span /></h1>)


ReactDom.render(title, document.getElementById('root'))