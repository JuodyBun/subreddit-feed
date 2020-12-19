import React, {useState, useEffect} from 'react';

function App() {
  const [articles, setArticles] = useState([]); //use state as an empty array

  return (
    <div className="App">
      <header className="App-header">
        <input type="text" className="input" value="webdev"/>
      </header>
      <div className="articles">

      </div>
    </div>
  );
}     

export default App;
