import React from 'react';
import './FindFriend.css';

function Historie() 
{
    let [currentPage,setCurrentPage]=React.useState('history');
    if(currentPage=='history')
    {
    return(
        <div className='containerFriend'>
            <div className='headingFriend'>
                <input type='text' className='Text' placeholder='Enter Friends ID'></input>
                <button class='fbutton'>
                <i className="material-icons">search</i>
                </button>
            </div>
            <hr></hr>
            <List/>
            <button className='backButton' onClick={()=>setCurrentPage('main')}>Back</button>
        </div>
    );
    }
    else 
    {
        return(
            <MainUI/>
        );
    }
}

export default Historie;