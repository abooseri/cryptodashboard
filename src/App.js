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

    const [data, setData] = useState()
    const [search,setSearch] = useState('')
    
    const ws = useRef(null);

    // let first = useRef(false);
     const url = "https://api.pro.coinbase.com/products";
     let pairs = []
     async function fetchData() {
         
             axios.get(url)
             .then( (res) => {
                 setData(res.data)
                 console.log(res.data)
                })
              
              .catch(error => console.log(error));
   

            
         
         
     }
// Search Input 
     const handleChange = e => {
        setSearch(e.target.value);
      };
// filter coins func
    //   const filteredCoins = data.filter(coin =>
    //     coin.name.toLowerCase().includes(search.toLowerCase())
    //   );

     useEffect(() => {
         ws.current = new WebSocket("wss://ws-feed.exchange.coinbase.com")
         fetchData()
     },[])
  
   

    return (
        <>
        <div className="search">
            <h1>Cryptocurrency Tracker</h1>
            
                <form className="Header">
            
                <input className="input" type="text"  placeholder="Search a Cryptocurrency..."/>
                <button className="btn">Search</button>
                </form>
        </div>
        <Crypto />
        </>
    )

    }
export default App



// State vars and pull data useEffect
// websocket then grab all currencies and then filter data for Top currencies
//
//