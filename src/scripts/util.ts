export function randomInt(lower: number, upper: number): number {
    if (lower % 1 !== 0) {
        console.error('"lower" must be integer')
        return 0
    }
    if (upper % 1 !== 0) {
        console.error('"upper" must be integer')
        return 0
    }
    return Math.round(Math.random() * (upper - lower) + lower)
}

export function writeAsJapanese(number: string): string {
    let text = ''
    UnshiftDirect(1, '')
    UnshiftCheckOne(2, '十')
    UnshiftCheckOne(3, '百')
    UnshiftCheckOne(4, '千')
    UnshiftCarry(5, '万')
    UnshiftCheckOne(6, '十')
    UnshiftCheckOne(7, '百')
    UnshiftDirect(8, '千')
    UnshiftCarry(9, '億')
    UnshiftCheckOne(10, '十')
    UnshiftCheckOne(11, '百')
    UnshiftDirect(12, '千')
    UnshiftDirect(13, '兆')
    function UnshiftDirect (pos: number, kanji: string) {
        if (number.length >= pos && number[number.length - pos] !== '0') {
            text = numberToKanji(number[number.length - pos]) + kanji + text
        }
    }
    function UnshiftCheckOne (pos: number, kanji: string) {
        if (number.length >= pos && number[number.length - pos] !== '0') {
            if (number[number.length - pos] === '1') {
                text = kanji + text
            } else {
                text = numberToKanji(number[number.length - pos]) + kanji + text
            }
        }
    }
    function UnshiftCarry(pos: number, kanji: string) {
        if (number.length === pos) {
            text = numberToKanji(number[number.length - pos]) + kanji + text;
        } else if (number[number.length - pos] === '0') {
            text = kanji + text
        } else {
            text = numberToKanji(number[number.length - pos]) + kanji + text
        }
    }
    return text
}

function numberToKanji(number: string): string {
    switch (number) {
        case '0': return '零';
        case '1': return '一';
        case '2': return '二';
        case '3': return '三';
        case '4': return '四';
        case '5': return '五';
        case '6': return '六';
        case '7': return '七';
        case '8': return '八';
        case '9': return '九';
        default: return '';
    }
}

