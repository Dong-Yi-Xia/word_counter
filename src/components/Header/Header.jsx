import React from 'react'
import './Header.scss'

function Header() {
    return (
        <div className='header-container'>
            <div className='animation-container'>
                <div className='zero'>0</div>
                <div className='one'>1</div>
            </div>
            <h1 className='title'> Word Counter </h1>
        </div>
    )
}

export default Header
