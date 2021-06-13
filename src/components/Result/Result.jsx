import React from 'react'
import './Result.scss'

function Result({count}) {

    console.log(count.characterCount)
    return (
        <div className='result-container'>
            <ul>
                <li>Character Count: {count.characterCount}</li>
                <li>Word Count: {count.wordCount}</li>
                <li>Sentence Count: {count.sentenceCount}</li>
                <li>Paragraph Count: {count.paragraphCount}</li>
                <li>Bigrams Unique Count: {count.bigramsUnqiueCount}</li>
            </ul>
           
        </div>
    )
}

export default Result
