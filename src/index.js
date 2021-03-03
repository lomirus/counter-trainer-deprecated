import React from 'react'
import ReactDom from 'react-dom'

class MainPrcs extends React.Component {
    constructor (props) {
        super(props)
    }
    render () {
        return <div>Hello World</div>
    }
}

ReactDom.render(<p>Hello World</p>, document.querySelector('#root'))