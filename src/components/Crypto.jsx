import React from 'react'

const Crypto = ({name, price, symbol, marketcap, volume, image, priceChange}) => {
    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="crpto" className="image" />
                    <h1>BTC{name}</h1>
                    <p className='coin-symbol'>{symbol}</p>
                </div>
                <div className="coin-data">
                <p className='coin-price'>$34{price}</p>
                <p className='coin-volume'>$323232{volume}</p>

          {priceChange < 0 ? (
            <p className='coin-percent red'>{priceChange}%</p>
          ) : (
            <p className='coin-percent green'>{priceChange}%</p>
          )}

          <p className='coin-marketcap'>
            Mkt Cap: ${marketcap}
          </p>
                </div>
            </div>
        </div>
    )
}
// conditonal for coin price change 
export default Crypto
