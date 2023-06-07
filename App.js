import './App.css';

//  importing components
import Header from './components/Header';
import Movie from './components/Movie';
import movieFile from './movie.json';


function App() {


  return(
    <div className='App'>
        <Header/>
        <div className='movie'>
          
            {
              movieFile.map((element,index)=>{
                /*  return is must */
                return(
                  <Movie
                  key = {index}
                    img = {element.Poster}
                    title = {element.Title}
                    year = {element.Year}
                  />  
                )
              })
            }

        </div>
      </div>
  )
}

export default App;
