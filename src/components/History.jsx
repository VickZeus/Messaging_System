import React from 'react';
import './History.css';
import MainUI from '../App'


function List2()
{
    return(<div className='NoFriends'> Chat History Is Empty !!</div>)
}

function Historie()
{
    let [currentPage,setCurrentPage]=React.useState('history');
    
    if(currentPage=='history')
    {
        return(
            <div>
                <div className='cntHistory'>
                    <div className='title'>Chat History</div>
                    <hr></hr>
                    <List2/>
                    <button className='backButton' onClick={()=>setCurrentPage('main')}>
                        <i className="material-icons" style={{fontSize:'24px',marginInline:'1px'}}>arrow_back</i>
                        <div class='label'>Back</div>
                    </button>
                </div>   
            </div>
        )
    }
    else 
    {
        return (<MainUI/>);
    }

}

export default Historie;