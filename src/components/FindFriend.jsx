import React from 'react';
import './FindFriend.css';
import MainUI from '../App';



function Friends()
{

let arr=['John Doe','Jane Smith','Alice Johnson','Bob Brown','Charlie Davis'];
 <div>
        {arr.map((friend, index) => (
            <div key={index}>
                <span>{friend}</span>
                <button>Add</button>
            </div>
        ))}
</div>;
}



function List()
{
    return(<div className='NoFriends'>No Friends Yet !</div>)
}


function Find() 
{
    let [currentPage,setCurrentPage]=React.useState('friend');
    
    if(currentPage=='friend')
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
            <button className='backButton' onClick={()=>setCurrentPage('main')}>
                <i className="material-icons" style={{fontSize:'24px',marginInline:'10px'}}>arrow_back</i>
                <div class='label'>Back</div>
            </button>
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
 
export default Find;