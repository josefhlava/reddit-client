import React, { useEffect, useState } from 'react';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { Main } from '../components/Main/Main';
import { Menu } from '../components/Menu/Menu';

function App() {
  const [currentListing, setCurrentListing] = useState('')

  useEffect(() => {
    const fetchArticles = async() => {
      const articles = await fetch("https://www.reddit.com/r/gifs.json");
      const json = await articles.json();
      setCurrentListing(json.data.children);
    }
    fetchArticles();
  },[]);

  console.log(currentListing)

  return (
    <div className="App">
      <Header />
      <Menu />
      <h2>Hello World</h2>
      <Main currentListing={currentListing}/>
      <Footer />
    </div>
  );
}

export default App;
