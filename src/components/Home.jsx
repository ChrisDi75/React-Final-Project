import "../App.css";
import 'react-loading-skeleton/dist/skeleton.css'
import Nav from './Nav'
import MovieResults from './MovieResults'
          

function Home() {
    
    return (
        
        <div>
         <section id="landing-page">
           <Nav/>
            <MovieResults/>
         </section>
     </div>
      );
            };
    
  

export default Home
