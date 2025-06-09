import React from 'react';
import './App.css';
import Find from './components/FindFriend';
import Historie from './components/History';

function MainUI()
{
    let  [currentPage,setCurrentPage]=React.useState('main');


    if(currentPage=='main')
    {
        return(
    <div className="container">

        <div className="heading">WeChat</div>
        <div className="optionContainer">

            <div className="option">
            <button class='button' onClick={() =>setCurrentPage('find')}>
                <i className="material-icons" style={{fontSize:'28px',marginInline:'10px'}}>person</i>
                Find A Friend
            </button>
            </div>
        
            <div className="option">
            <button class='button' onClick={() =>setCurrentPage('history')}>
                <i className="material-icons" style={{fontSize:'30px',marginInline:'10px'}}>history</i>
                Chat History
            </button>
            </div>


            <div className="option">
            <button class='button' onClick={() =>setCurrentPage('message')}>
                <i className="material-icons" style={{fontSize:'28px',marginInline:'10px'}}>send</i>
                Message A Friend
            </button>
            </div>
        </div>
    </div>)
    }
    else if(currentPage=='find')
    {
        return(
            <Find/>
        )
    }
    else if(currentPage=='history')
    {
        return(
            <Historie/>
        )
    }
    else if(currentPage=='message')
    {
        return(
            <Find/>
        )
    }
    
}

export default MainUI;

