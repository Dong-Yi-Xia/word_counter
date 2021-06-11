import React,{useState} from 'react'
import './Text.scss'
import Result from '../Result/Result'

function Text() {

    const [words, setWords] = useState('')
    const [count, setCount] = useState({})
    const [show, setShow] = useState(false)


    console.log(words)
    
    const handleClear = () => {
        setWords('')
        setShow(false)
    }

    const handleCharacterCount = () => {
        return words.length
    }

    const handleWordCount = () => {
        let wordArray = words.split(/\s+/)
        // \s+ - one or more whitespace 
        if (wordArray[wordArray.length-1] === "") wordArray.pop()
        return wordArray.length
    }

    const handleSentenceCount = () => {
        let matchArray
        matchArray = words.match(/\w[.?!](\s|$)/g)
        // \w - Word character
        // \[.?!] - Punctuation as specified.
        // (\s|$) - Whitespace character OR the end of the string.

        if(matchArray !== null){
           return matchArray.length
        }
        return 0
    }

    const handleCount = (e) => {
        const counter = {
            characterCount: handleCharacterCount(),
            wordCount: handleWordCount()
        }

        setCount(counter)
        setShow(true)
    }

    console.log(handleSentenceCount())
    return (
        <div className='text-container'>
            <textarea 
                className='word-field' 
                placeholder='Enter Text Here'
                onChange={e => setWords(e.target.value)}
                value={words}
            ></textarea>
            <button onClick={handleClear}>Clear</button>
            <button onClick={handleCount}>Count</button>
            {show ? <Result count={count}/> : ""}
        </div>
    )
}

export default Text


