import React from 'react'
import * as util from './util.ts'

export default class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <div className="app">
            <Practice />
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
            <Tab key="practice" icon="assignment" text="练习" />
            <Tab key="test" icon="assessment" text="测试" />
            <Tab key="settings" icon="settings" text="设置" />
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

class PrePractice extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <div className="pre_practice activity"></div>
    }
}

class Practice extends React.Component {
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

    speakWord() {
        util.speak(this.state.read, this.state.lang)
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
        return <div className="practice activity">
            <div className="practice_box box">
                <span className="number">{this.state.number}</span>
                <span className="write">{this.state.write}</span>
                <span className="read">{this.state.read}</span>
            </div>
            <div className="practice_control">
                <PlayButton />
                <SpeakButton onClick={ () => this.speakWord() }/>
            </div>
        </div>
    }
}

class SpeakButton extends React.Component {
    constructor(props) {
        super(props)
    }
    render(props) {
        return <span className="button material-icons speak" onClick={this.props.onClick}>
            volume_up
        </span>
    }
}

class PlayButton extends React.Component {
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
