import React from 'react'

export class App extends React.Component {
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
            <Tab type="test" icon="assessment" text="测试" />
            <Tab type="list" icon="list" text="清单" />
            <Tab type="conf" icon="settings" text="设置" />
        </div>
    }
}

class Tab extends React.Component {
    constructor (props) {
        super(props)
    }
    render () {
        return <div className="tab">
            <span className='icon material-icons'>{this.props.icon}</span>
            <span className="text">{this.props.text}</span>
        </div>
    }
}

class BoxWrapper extends React.Component {
    constructor (props) {
        super(props)
    }
    render () {
        return <div className="wrapper">
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

class TestBox extends Box {
    constructor (props) {
        super(props)
    }
    render () {
        return <div className="test">
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
        return <div className="conf">

        </div>
    }
}

class ListBox extends Box {
    constructor (props) {
        super(props)
    }
    render () {
        return <div className="list">

        </div>
    }
}

class PrepBox extends Box {
    constructor (props) {
        super(props)
    }
    render () {
        return <div className="prep"></div>
    }
}

class PrcsBox extends Box {
    constructor (props) {
        super(props)
    }
    render () {
        return <div className="prcs">
            <div className="text">
                <span className="number">65536</span>
                <span className="write">六万五千五百三十六</span>
                <div className="read">
                    <span>ろくまんごせんごひゃくさんじゅうろく</span>
                    <SpeakButton />
                </div>
            </div>
            <div className="control">
                <BackButton />
                <PlayButton />
                <NextButton />
            </div>
        </div>
    }
}

class FnshBox extends Box {
    constructor (props) {
        super(props)
    }
    render () {
        return <div className="fnsh">
            
        </div>
    }
}

class ControlButton extends React.Component {
    constructor (props) {
        super(props)
    }
}

class SpeakButton extends ControlButton {
    render (props) {
        return <span className="button material-icons speak">
            volume_up
        </span>
    }
}

class PlayButton extends ControlButton {
    render (props) {
        return <span className="button material-icons pause">
            pause
        </span>
    }
}

class BackButton extends ControlButton {
    render (props) {
        return <span className="button material-icons back">
            arrow_back
        </span>
    }
}

class NextButton extends ControlButton {
    render (props) {
        return <span className="button material-icons next">
            arrow_forward
        </span>
    }
}