import React, { useState, useEffect, useRef }  from 'react'
import Crypto from './components/Crypto.jsx'
import './App.css'
import axios from 'axios'
const ws = require('ws')

const App = () => {
    
    const ws = useRef(null);

    // let first = useRef(false);
     const url = "https://api.pro.coinbase.com/products";

     async function fetchData() {
         try {
             const result = axios.get(url)
             console.log(result)
         } catch (err) {

            console.log(err)
         }
         
     }
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
// websocket then grab all products filtered array