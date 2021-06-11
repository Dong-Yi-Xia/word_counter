import React from 'react'
import './Result.scss'

function Result({count}) {

    console.log(count)
    return (
        <div className='result-container'>
            <ul>
                <li>Character Count: {count.characterCount}</li>
                <li>Word Count: {count.wordCount}</li>
            </ul>
           
        </div>
    )
}

export default Result
