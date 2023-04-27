import {useState, useEffect} from 'react'

 function Quotes({PageTitleStyle}) {
 
  const [quote, setQuote] = useState('')
  const [newQuote, setNewQuote] = useState(false)

  useEffect(()=> {
    fetch('https://animechan.vercel.app/api/random')
    .then(res => res.json())
    .then(data => setQuote(data) )
  }, [newQuote])

  function changeQuote(){
    setNewQuote(!newQuote)
  }
  return (
    <div className='Quotes'>
        <h2 style={PageTitleStyle}>Quotes from your favorite anime characters! </h2>
        <hr />
        <h3>"{quote.quote}"</h3>
        <hr />
        <label>Character: {quote.character}</label>
        <hr />
        <br />
        <br />
        <label>Anime: {quote.anime}</label>
        <hr />
        <button onClick={changeQuote}>New Quote</button>
    </div>
  )
}

export default Quotes