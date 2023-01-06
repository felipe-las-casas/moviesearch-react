import { useState } from 'react';
import './style/App.css';
import Movie from './components/Movie';
import IMovie from './types/types';
import Error from './components/Error';
import Search from './components/Search';
import Context from './context/Context';


function App() {
  const [result, setResult] = useState<IMovie>(Object)

  return (
    <Context.Provider value={[result, setResult]}>
      <div className='app'>
        <Search />
        {result.Title && <Movie result={result} />}
        {result.Error && <Error />}
      </div>
    </Context.Provider>
  )
}

export default App;
