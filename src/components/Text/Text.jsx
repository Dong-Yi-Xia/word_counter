import React,{useState} from 'react'
import './Text.scss'
import Result from '../Result/Result'

function Text() {

    const [words, setWords] = useState('')
    const [count, setCount] = useState({})


    console.log(words)


    const handleCharacterCount = () => {
        return words.length
    }

    const handleCount = (e) => {
        const counter = {
            characterCount: handleCharacterCount()
        }

        setCount(counter)
    }

    console.log(count.characterCount)
    return (
        <div className='text-container'>
            <textarea 
                className='word-field' 
                placeholder='Enter Text Here'
                onChange={e => setWords(e.target.value)}
                value={words}
            ></textarea>
            <button onClick={e => setWords('')}>Clear</button>
            <button onClick={handleCount}>Count</button>
            <Result/>
        </div>
    )
}

export default Text


