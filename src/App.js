import React from 'react';
import './App.css';
import Row from './Row';
import request from './requests';

function App() {
  return (
    <div className="App">
      <h1>Netflix Clone Frontend</h1>
      <Row 
      isLargeRow
      title="NETFLIX ORIGINALS" 
      fetchURL={request.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchURL={request.fetchTrending}/>
      <Row title="Top Rated" fetchURL={request.fetchTopRated}/>
      <Row title="Action Movies" fetchURL={request.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchURL={request.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchURL={request.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchURL={request.fetchRomanceMovies}/>
      <Row title="Documentries" fetchURL={request.fetchDocs}/>




    </div>
  );
}

export default App;
