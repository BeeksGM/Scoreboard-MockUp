import React, {useState} from 'react'

const Console = () => {
    let homeTOBtnColor = "btn btn-outline-info border-5"
    let awayTOBtnColor = "btn btn-outline-info border-5"
    let posessionBtn = "btn btn-outline-warning border-5 btn-lg"
    let posessionTxt = "Home"
    const [homeTimeout, setHomeTimeout] = useState(3);
    const [awayTimeout, setAwayTimeout] = useState(3);
    const [posession, setPosession] = useState(true);  
   
    if(homeTimeout < 2){
        homeTOBtnColor = "btn btn-outline-danger border-5"
    }
    if(awayTimeout < 2){
        awayTOBtnColor = "btn btn-outline-danger border-5"
    }
    if(posession === true){
        posessionTxt = "<- Home"
        posessionBtn = "btn btn-primary border-2 btn-lg"
    }
    else{
        posessionTxt = "Away ->"
        posessionBtn = "btn btn-secondary border-2 btn-lg"
    }
    return (
        <div className='container-sm console-container'>
        <div className='row'>
            <div className="col-4">
                <button onClick={()=>setHomeTimeout(homeTimeout-1)} className={homeTOBtnColor}>Home Timeout</button><h1 onClick={() => setHomeTimeout(homeTimeout +1)}
                className='text-white'>{homeTimeout}</h1>
            </div>
            <div className="col-4">
                <button onClick={() => setPosession(!posession)} className={posessionBtn}>{posessionTxt}</button>
            </div>
            <div className="col-4">
                <button onClick={()=>setAwayTimeout(awayTimeout-1)} className={awayTOBtnColor}>Away Timeout</button><h1 onClick={()=> setAwayTimeout(awayTimeout+1)} className='text-white'>{awayTimeout}</h1>
            </div>
            
        </div>
        
    </div>
    )
}

export default Console
