import React, {useState, useEffect} from 'react';

function App() {
  const [articles, setArticles] = useState([]); //use state as an empty array
  const [subreddit, setSubreddit] = useState('webdev');

  useEffect(() => {
    fetch("https://www.reddit.com/r/webdev.json").then(res => {
      if (res.status != 200) {
        console.log("EROROORORROR");
        return;
      }

      res.json().then(data => {
        if (data != null) {
          setArticles(data.data.children);
        }
      });
    })

  }, [subreddit]); //everytime a subreddit changes, useEffect will recall

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
