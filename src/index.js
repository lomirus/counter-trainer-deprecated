import React from 'react'
import ReactDom from 'react-dom'

import { App } from './components/app.jsx'

import './style/main.less'

ReactDom.render(<App />, document.querySelector('#root'))