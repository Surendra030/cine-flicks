import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainNavbar from './Components/MainNavbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import TvShows from './Pages/TvShows';
import Movies from './Pages/Movies';
import WebSeries from './Pages/WebSeries';
import MovieProfile from './Components/MovieProfile';
import SearchResults from './Pages/SearchResults';

 


function App() {
  return (
    <>
    <MainNavbar/>
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route path="/TvShows" element={<TvShows />} />
      <Route path="/Movies" element={<Movies />} />
      <Route path="/webSeries" element={<WebSeries />} />
      <Route path="/movie/:id" element={<MovieProfile />} />
      <Route path="/search-results/:search-item" element={<SearchResults />} />

    </Routes>
    
    <Footer/>
    </>
  );
}

export default App;
