import React from 'react'
import * as util from './util.ts'

export default class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <div className="app">
            <BoxWrapper />
            <Tabs />
        </div>
    }
}

class Tabs extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <div className="tabs">
            <Tab type="test" icon="assessment" text="测试" />
            <Tab type="list" icon="list" text="清单" />
            <Tab type="conf" icon="settings" text="设置" />
        </div>
    }
}

class Tab extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <div className="tab">
            <span className='icon material-icons'>{this.props.icon}</span>
            <span className="text">{this.props.text}</span>
        </div>
    }
}

class BoxWrapper extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <div className="wrapper">
            <TestBox />
            <ListBox />
            <ConfBox />
        </div>
    }
}

class Box extends React.Component {
    constructor(props) {
        super(props)
    }
}

class TestBox extends Box {
    constructor(props) {
        super(props)
    }
    render() {
        return <div className="test">
            <PrepBox />
            <PrcsBox />
            <FnshBox />
        </div>
    }
}

class ConfBox extends Box {
    constructor(props) {
        super(props)
    }
    render() {
        return <div className="conf">

        </div>
    }
}

class ListBox extends Box {
    constructor(props) {
        super(props)
    }
    render() {
        return <div className="list">

        </div>
    }
}

class PrepBox extends Box {
    constructor(props) {
        super(props)
    }
    render() {
        return <div className="prep"></div>
    }
}

class PrcsBox extends Box {
    constructor(props) {
        super(props)
        this.words = []
        this.nowWord = 0
        this.state = {
            ...this.addNewWord(),
            lang: 'ja-JP'
        }
    }

    addNewWord() {
        const number = util.randomInt(0, 10000);
        const write = util.writeAsJapanese(number.toString());
        const read = util.readAsJapanese(write);
        const word = {
            number: number,
            write: write,
            read: read,
        }
        this.words.push(word)
        this.nowWord = this.words.length - 1
        return word
    }

    render() {
        return <div className="prcs">
            <div className="text">
                <span className="number">{this.state.number}</span>
                <span className="write">{this.state.write}</span>
                <div className="read">
                    <span>{this.state.read}</span>
                    <SpeakButton parent={this} />
                </div>
            </div>
            <div className="control">
                <BackButton parent={this} />
                <PlayButton />
                <NextButton parent={this} />
            </div>
        </div>
    }
}

class FnshBox extends Box {
    constructor(props) {
        super(props)
    }
    render() {
        return <div className="fnsh">

        </div>
    }
}

class ControlButton extends React.Component {
    constructor(props) {
        super(props)
    }
}

class SpeakButton extends ControlButton {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(props.parent)
    }
    handleClick() {
        util.speak(this.state.read, this.state.lang)
    }
    render(props) {
        return <span className="button material-icons speak" onClick={this.handleClick}>
            volume_up
        </span>
    }
}

class PlayButton extends ControlButton {
    render(props) {
        return <span className="button material-icons pause">
            pause
        </span>
    }
}

class BackButton extends ControlButton {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(props.parent)
    }
    render(props) {
        return <span
            className="button material-icons back"
            onClick={this.handleClick}>
            arrow_back
        </span>
    }
    handleClick() {
        if (this.nowWord !== 0) {
            this.nowWord -= 1
            this.setState(this.words[this.nowWord])
        }
    }
}

class NextButton extends ControlButton {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(props.parent)
    }
    handleClick() {
        if (this.nowWord === this.words.length - 1) {
            this.setState(this.addNewWord())
        } else {
            this.nowWord += 1
            this.setState(this.words[this.nowWord])
        }
    }
    render(props) {
        return <span
            className="button material-icons next"
            onClick={this.handleClick}>
            arrow_forward
        </span>
    }
}
