import React,{useEffect, useState} from 'react'
import './Text.scss'
import Result from '../Result/Result'
import Speech from 'speak-tts' 
import Button from 'react-bootstrap/Button'


function Text() {

    const [words, setWords] = useState('')
    const [count, setCount] = useState({})


    useEffect(() => {
        handleCount()
    }, [words])
 

    const handleClear = () => {
        setWords('')
    }


    const handleTextChange = (e) => {
        setWords(e.target.value)
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


    const handleUnqieNGramCount = (words, n) => {
        words = words.replace((/[^a-zA-Z0-9\s]/g), '').toLowerCase().split(" ")
        let map = {}
        for(let i=0; i<=words.length-n; i++){
          let key = words.slice(i, i+n)
          map[key] ? map[key]++ : map[key] = 1
        }

        let count = 0
        for(let key in map){
          if(map[key] === 1) count++
        }
        return count
    }


    const handleCount = (e) => {
        const counter = {
            characterCount: handleCharacterCount(),
            wordCount: handleWordCount(),
            sentenceCount: handleSentenceCount(),
            paragraphCount: handleParagraphCount(),
            bigramsUnqiueCount: handleUnqieNGramCount(words, 2)
        }
        setCount(counter)
    }

    
    const speechTTS = () => {
        const speech = new Speech();
            speech.init({
                volume: 0.5,
                lang: "en-GB",
                rate: 1,
                pitch: 1,
                voice:'Google UK English Female',
                splitSentences: true,
                listeners: {
                    onvoiceschanged: voices => {
                    console.log("Voices changed", voices);
                    }
                }
            }).then(data => {
                speech.speak({
                        text: words ? words : "PLease enter a text"
                    })
            })
    }




    // console.log(handleUnqieNGramCount(words, 2))
    return (
        <div className='text-container'>
            <textarea 
                className='word-field' 
                placeholder='Enter Text Here'
                onChange={handleTextChange}
                value={words}
            ></textarea>
            <div className='buttonOption'>
                <Button variant="warning" onClick={handleClear}>Clear</Button>
                <Button variant="success" onClick={speechTTS}>Listen</Button>
            </div>
      
            <Result count={count}/> 
        </div>
    )
}

export default Text


