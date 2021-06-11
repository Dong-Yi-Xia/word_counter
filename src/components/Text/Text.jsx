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

    const handleTextChange = (e) => {
        setWords(e.target.value)
        handleCount()
    }

    const handleCharacterCount = () => {
        return words.length
    }

    const handleWordCount = () => {
        let wordArray = words.split(/\s+/g)
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
        // g - to perform a global match

        if(matchArray !== null){
           return matchArray.length
        }
        return 0
    }

    const handleParagraphCount = () => {
        let lineArray = words.split(/\n+/g)
        // \n+ - one or more newline

        if (lineArray[lineArray.length-1] === "") lineArray.pop()
        return lineArray.length
    }

    const handleCount = (e) => {
        const counter = {
            characterCount: handleCharacterCount(),
            wordCount: handleWordCount(),
            sentenceCount: handleSentenceCount(),
            paragraphCount: handleParagraphCount()
        }

        setCount(counter)
        setShow(true)
    }

    console.log(handleParagraphCount())
    return (
        <div className='text-container'>
            <textarea 
                className='word-field' 
                placeholder='Enter Text Here'
                onChange={handleTextChange}
                value={words}
            ></textarea>
            <button onClick={handleClear}>Clear</button>
            <button onClick={handleCount}>Count</button>
      
            {show ? <Result count={count}/> : ""}
        </div>
    )
}

export default Text


