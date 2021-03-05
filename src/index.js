import React from 'react'
import ReactDom from 'react-dom'

import App from './scripts/components.jsx'
import * as util from './scripts/util.ts'

import './style/main.less'

ReactDom.render(<App />, document.querySelector('#root'))