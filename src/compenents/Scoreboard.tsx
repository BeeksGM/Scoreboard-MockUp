import React, {useState} from 'react'

const Scoreboard = () => {
    let homeStart:number = 0;
    let awayStart:number = 0;
    const [homescore, setHomeScore] = useState(homeStart)
    const [awayscore, setAwayScore] = useState(awayStart)
    
    return (
      <>
        <div className="container-fluid scoreboard-container">
          <div className="row">
            <div className="col-6">
              <div className=" scoreboard home-team- scoreboard border border-light border-5 rounded">
                <h1 className='text-primary fw-bolder'>HOME</h1>
                <h1 className="scoreboard-text text-white fw-bolder">
                  {homescore}
                </h1>
                <div className="row">
                  <div className="col-sm-6 p-2">
                    <button onClick={() => setHomeScore(homescore + 1)} className="btn btn-primary btn-block">
                      Home +
                    </button>
                  </div>
                  <div className="col-sm-6 p-2">
                    <button onClick={() => setHomeScore(homescore - 1)} className="btn btn-danger btn-block">
                      Home -
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="scoreboard home-team- scoreboard border border-light border-5 rounded">
              <h1 className='text-secondary fw-bolder'>Away</h1>
                <h1 className="scoreboard-text text-white fw-bolder">
                  {awayscore}
                </h1>
                <div className="row">
                  <div className="col-sm-6 p-2">
                    <button onClick={() => setAwayScore(awayscore + 1)} className="btn btn-primary btn-block">
                      Away +
                    </button>
                  </div>
                  <div className="col-sm-6 p-2">
                    <button onClick={() => setAwayScore(awayscore - 1)} className="btn btn-danger btn-block">
                      Away -
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Scoreboard
