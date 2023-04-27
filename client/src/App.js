import {useState, useEffect} from 'react'
import {Switch, Route} from 'react-router-dom'
import Animes from './Animes'
import Quotes from './Quotes'
import Questions from './Questions'
import Navigation from './Navigation'
import ScoreDisplay from './ScoreDisplay'
import AnimeForm from './AnimeForm'
import './App.css';

function App() {
  
  const [score, setScore] = useState(0)
  const [animes, setAnimes] = useState([])
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    fetch('/animes')
    .then(res => res.json())
    .then(data => setAnimes(data))
  }, [])

  function addAnime(animes,newAnime){ 
    setAnimes([...animes, newAnime])
  }




  return (
    <div className="App">
      <Navigation />
            <br />
            <br />
            <br />
            <br />
            <br/>
            <Switch >
            
              <Route exact path='/'>
                <Quotes />
              </Route>
              <Route exact path='/animes' >
                <Animes  
                  animes={animes}
                  searchText={searchText}
                  setSearchText={setSearchText}  
                  />
              </Route>
              <Route exact path='/animes/new' >
                <AnimeForm addAnime={addAnime} animes={animes}  />
              </Route>
              <Route exact path= '/questions' >
                <Questions  score={score} setScore={setScore} />  
              </Route> 
              <Route path='/questions/score' >
                <ScoreDisplay  score={score} setScore={setScore}/>
              </Route>
            </Switch>
    </div>
  );
}

export default App;
