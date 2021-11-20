import React, { useState, useEffect, useRef }  from 'react'
import Crypto from './components/Crypto.jsx'
import './App.css'
import axios from 'axios'


const App = () => {
    // image name price volume pricechange marketcap 
    // const [image,setImage] = useState('')
    // const [name,setName] = useState('')
    // const [price,setPrice] = useState()
    // const [volume,setVolume] = useState()
    // let pairs = []
    const [data, setData] = useState([]);
    const [search,setSearch] = useState('')

    useEffect(() => {
         
         fetchData()
     },[])

    // Search Input 
    const handleChange = e => {
        setSearch(e.target.value);
      };
   // filter coins func
    const filteredCoins = data.filter(pairs=>
    pairs.name.toLowerCase().includes(search.toLowerCase())
  );
    
    const ws = useRef(null);
    

    // let first = useRef(false);
     const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';
     
     async function fetchData() {
         
             axios.get(url)
             .then( (res) => {
                 
                 setData(res.data)
                 console.log(res.data)
                })
              .catch(error => console.log(error))       
     }
 



    return (
        <>
        <div className="search">
            <h1>Cryptocurrency Tracker</h1>
            
                <form className="Header">
            
                <input  onChange={handleChange} className="input" type="text"  placeholder="Search a Cryptocurrency..."/>
                {/* <button  className="btn">Search</button> */}
                </form>
        </div>
        <div>
        {filteredCoins.map((pair,idx )=> {
        return (
          <Crypto
            key={idx}
            name={pair.name}
            price={pair.current_price}
            symbol={pair.symbol}
            marketcap={pair.total_volume}
            volume={pair.market_cap}
            image={pair.image}
            priceChange={pair.price_change_percentage_24h}
          
          />
        );
      })}

        
    </div>
        </>
    )
    }


export default App



// State vars and pull data useEffect
// websocket then grab all currencies and then filter data for Top currencies
//
//