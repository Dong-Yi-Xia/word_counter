import React from 'react'
import './Result.scss'

function Result({count}) {

    return (
        <div className='result-container'>
            <ul class='countList'>
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
