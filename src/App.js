import React, { useState, useEffect, useRef }  from 'react'
import Crypto from './components/Crypto.jsx'
import './App.css'
import axios from 'axios'
const ws = require('ws')

const App = () => {
    // image name price volume pricechange marketcap 
    // const [image,setImage] = useState('')
    // const [name,setName] = useState('')
    // const [price,setPrice] = useState()
    // const [volume,setVolume] = useState()
    let pairs = []
    const [data, setData] = useState()
    const [search,setSearch] = useState('')
    
    const ws = useRef(null);
    let first = useRef(false);

    // let first = useRef(false);
     const url = "https://api.pro.coinbase.com/products";
     
     async function fetchData() {
         
             axios.get(url)
             .then( (res) => {
                 pairs = res.data
                 console.log(pairs.filter((pair) => {
                     return pair.quote_currency === "USD"
                 }))
                })
            
              
              .catch(error => console.log(error));
   

            
         
         
     }
 
// Search Input 
     const handleChange = e => {
        setSearch(e.target.value);
      };
// filter coins func
   
    

     useEffect(() => {
         ws.current = new WebSocket("wss://ws-feed.exchange.coinbase.com")
         fetchData()
     },[])
 
      let filteredCoins = pairs.filter(pair => {
          return pair.quote_currency === "USD";
        }
    );
console.log(filteredCoins)
    return (
        <>
        <div className="search">
            <h1>Cryptocurrency Tracker</h1>
            
                <form className="Header">
            
                <input onChange={handleChange} className="input" type="text"  placeholder="Search a Cryptocurrency..."/>
                <button className="btn">Search</button>
                </form>
        </div>
        <div>
        {/* {data.map(coin => {
        return (
          <Crypto
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            volume={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        ); */
      }
    </div>
        </>
    )
    }
export default App



// State vars and pull data useEffect
// websocket then grab all currencies and then filter data for Top currencies
//
//