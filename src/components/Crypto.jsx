import React from 'react'

const Crypto = (props) => {
    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <img src={props.image} alt="crpto" className="image" />
                    <h1>BTC{props.name}</h1>
                </div>
                <div className="coin-data">
                <p className='coin-price'>$34{props.price}</p>
                <p className='coin-volume'>$323232{props.volume}</p>

          {props.priceChange < 0 ? (
            <p className='coin-percent red'>{props.priceChange}%</p>
          ) : (
            <p className='coin-percent green'>{props.priceChange}%</p>
          )}

          <p className='coin-marketcap'>
            Mkt Cap: ${props.marketcap}
          </p>
                </div>
            </div>
        </div>
    )
}
// conditonal for coin price change 
export default Crypto
