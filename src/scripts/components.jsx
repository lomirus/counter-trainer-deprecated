import React from 'react'
import * as util from './util.ts'

export default class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <div className="app">
            <TestBox />
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

class Box extends React.Component {
    constructor(props) {
        super(props)
        this.className = 'box'
    }
}

class TestBox extends Box {
    constructor(props) {
        super(props)
    }
    render() {
        return <PrcsBox />
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
        window.addEventListener('mousewheel', (e) => {
            if (e.deltaY > 0) {
                this.scrollNext()
            } else {
                this.scrollBack()
            }
        })
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

    scrollBack() {
        if (this.nowWord !== 0) {
            this.nowWord -= 1
            this.setState(this.words[this.nowWord])
        }
    }

    scrollNext() {
        if (this.nowWord === this.words.length - 1) {
            this.setState(this.addNewWord())
        } else {
            this.nowWord += 1
            this.setState(this.words[this.nowWord])
        }
    }

    render() {
        return <div className={ this.className + " prcs" }>
            <div className="text">
                <span className="number">{this.state.number}</span>
                <span className="write">{this.state.write}</span>
                <span className="read">{this.state.read}</span>
            </div>
            <div className="control">
                <PlayButton />
                
                <SpeakButton parent={this} />
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
    // change it to a static property later if avalible...
    canvasStyle = {
        position: 'absolute'
    }

    render(props) {
        return <span className="button material-icons pause">
            pause
        </span>
    }
}
