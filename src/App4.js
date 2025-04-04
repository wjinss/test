import {useEffect, useState} from "react"

function App() {
  let [loading, setLoading] = useState(true)
  let [coins, setConins] = useState([])
  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers?limit=10")
    .then((response) => response.json())
    .then((json) => {setConins(json); setLoading(false)})
  },[])
  return(
    <div>
      <h1>The Coins!{loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong> : null}  
      <ul>
        {coins.map((coin) => <li>
          {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
          </li>
        )}
      </ul>
    </div>
  ) 
}

export default App;

