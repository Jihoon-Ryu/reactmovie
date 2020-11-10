import React from 'react'; 
import axios from "axios";
import Movie from "./Movie";
import "./App.css";
//import logo from './logo.svg';
//import './App.css';

class App extends React.Component {
  /*Mount: constructor => render => componentDidMount
  Updating by setState => render => componentDidUpdate 
  */ 
  state = {
   isLoading: true,
   movies: []
  };
  
  /*
  //(3) get HTML from Movie.js
  renderMovie = (movies_ele) => {
    <Movie key={movies_ele.id} 
    id={movies_ele.id} year={movies_ele.year} 
    title={movies_ele.title} summary={movies_ele.summary} 
    poster={movies_ele.medium_cover_image} />
  };*/

  //(2-2) movies:{ id, title, year, rating, medium_cover_image }
  getMovies = async () => {
      const { data: { data : { movies }}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
      this.setState({movies, isLoading: false});
    };
    
  //(2-1)
  componentDidMount() {
     this.getMovies();
    }  

  //(1)Loading (3)renderMovie
  render() {
    const { isLoading, movies } = this.state;
    
    return (
      <section className="container">
        {//로딩중
         isLoading
          ? ( <div className="loader">
              <span className="loader__text">
               "Loading..."
              </span>
            </div> )
         //로딩끝
         : (
            <div className="movies">
            {movies.map(movie => (
              <Movie
                key ={movie.id }
                id ={movie.id }
                year ={movie.year }
                title ={movie.title }
                summary ={movie.summary }
                poster ={movie.medium_cover_image }
                genres = {movie.genres}
              />
              ))}  
            </div>
          )}
      </section>
            );
          }
        }
    /*     
    return (
     <div>
       {isLoading ? "Loading": movies.map(this.renderMovie)}
     </div>
    )}
    }*/  



export default App;
