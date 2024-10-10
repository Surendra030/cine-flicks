import React from 'react'
import Top20Movies from './Top20Movies'
import TrendingMovies from './TrendingMovies'
import TopPicks from './TopPicks'
import CategoryGrid from './CategoryGrid'
import MovieInfoSlider from './MovieInfoSlider'
import UpcomingMovies from './UpComingMovies'
import MovieProfile from './MovieProfile'



export default function ContentSection() {
  return (
    <div className='content-section p-3'>
      <Top20Movies/>
      <TrendingMovies/>
      <CategoryGrid/>
      <MovieInfoSlider/>
      <UpcomingMovies/>
    </div>
  )
}
