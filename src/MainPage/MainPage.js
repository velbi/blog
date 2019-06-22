import React from 'react'
import ReactDOM from 'react-dom'
import  { Redirect } from 'react-router-dom'

import './MainPage.scss'


const MainPage = () => (
    <div className="MainPage">
        <p className="test">MainPage</p>
        <p className="test">MainPage</p>
        <p className="test">MainPage</p>
        <Redirect to='/category'  />
    </div>
    
)

export default MainPage