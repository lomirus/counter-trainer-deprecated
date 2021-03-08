import React from 'react'
import * as util from './util.ts'

export default class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <div className="app">
            <PracticeActivity />
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

class Activity extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <div className="activity">
            <div className={"box " + this.props.boxClass}>
                {this.props.box}
            </div>
            <div key="controls" className="buttons">
                {this.props.buttons}
            </div>
        </div>
    }
}

class PracticeActivity extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activity: <PrePracticeActivity toMain={this.toMain} />
        }
    }

    toPre = () => {
        this.setState({
            activity: <PrePracticeActivity toMain={this.toMain} />
        })
    }

    toMain = () => {
        this.setState({
            activity: <MainPracticeActivity toPre={this.toPre} />
        })
    }

    render() {
        return this.state.activity
    }
}

class PrePracticeActivity extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            box: <NumberConfig />
        }
    }
    render() {
        return <Activity box={this.state.box} buttons={<>
            <Button key="number" type="number" icon="pin" onClick={
                () => this.setState({ box: <NumberConfig /> })} />
            <Button key="time" type="time" icon="schedule" onClick={
                () => this.setState({ box: <TimeConfig /> })} />
            <Button key="start" type="start" icon="play_arrow" onClick={
                () => this.props.toMain()} />
        </>} />
    }
}

class NumberConfig extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <>
            <span>数字范围</span>
            <div>
                <input type="text" placeholder="最小值"></input>
                <input type="text" placeholder="最大值"></input>
            </div>
        </>
    }
}

class TimeConfig extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <>
            <span>时间格式</span>
            <div>
                <input type="text" placeholder="示例：DAY-MONTH-YEAR HOUR:MINUTE"></input>
            </div>
            <span>时间范围</span>
            <div>
                <input type="text" placeholder="最早时间（格式同上所填）"></input>
                <input type="text" placeholder="最晚时间（格式同上所填）"></input>
            </div>
        </>
    }
}

class MainPracticeActivity extends React.Component {
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

    speakWord = () => {
        console.log(this)
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
        return <Activity boxClass="main_practice" box={<>
            <span className="number">{this.state.number}</span>
            <span className="write">{this.state.write}</span>
            <span className="read">{this.state.read}</span>
        </>} buttons={<>
            <PlayButton />
            <SpeakButton onClick={this.speakWord}/>
        </>} />
    }
}

class SpeakButton extends React.Component {
    constructor(props) {
        super(props)
    }
    render(props) {
        return <Button key="speak" type="speak" icon="volume_up" onClick={this.props.onClick} />
    }
}

class PlayButton extends React.Component {
    // change it to a static property later if avalible...
    canvasStyle = {
        position: 'absolute'
    }

    render(props) {
        return <Button key="pause" type="pause" icon="pause" />
    }
}

class Button extends React.Component {
    render() {
        return (
            <span
                className={"button material-icons " + this.props.type}
                onClick={this.props.onClick}>
                    {this.props.icon}
            </span>
        )
    }
}
