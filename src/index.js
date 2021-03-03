import React from 'react'
import ReactDom from 'react-dom'

import './style/main.less'

class App extends React.Component {
    constructor (props) {
        super(props)
    }
    render () {
        return <div className="app">
            <BoxWrapper />
            <Tabs />
        </div>
    }
}

class Tabs extends React.Component {
    constructor (props) {
        super(props)
    }
    render () {
        return <div className="tabs">
            <Tab type="test" />
            <Tab type="list" />
            <Tab type="conf" />
        </div>
    }
}

class Tab extends React.Component {
    constructor (props) {
        super(props)
    }
    render () {
        return <div></div>
    }
}

class BoxWrapper extends React.Component {
    constructor (props) {
        super(props)
    }
    render () {
        return <div className="boxWrapper">
            <TestBox />
            <ListBox />
            <ConfBox />
        </div>
    }
}

class Box extends React.Component {
    constructor (props) {
        super(props)
    }
}

class PrepBox extends Box {
    constructor (props) {
        super(props)
    }
    render () {
        return <div></div>
    }
}

class PrcsBox extends Box {
    constructor (props) {
        super(props)
    }
    render () {
        return <div></div>
    }
}

class FnshBox extends Box {
    constructor (props) {
        super(props)
    }
    render () {
        return <div></div>
    }
}

class TestBox extends Box {
    constructor (props) {
        super(props)
    }
    render () {
        return <div>
            <PrepBox />
            <PrcsBox />
            <FnshBox />
        </div>
    }
}

class ConfBox extends Box {
    constructor (props) {
        super(props)
    }
    render () {
        return <div></div>
    }
}

class ListBox extends Box {
    constructor (props) {
        super(props)
    }
    render () {
        return <div></div>
    }
}

ReactDom.render(<App />, document.querySelector('#root'))