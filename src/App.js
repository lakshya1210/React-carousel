
import './App.css';
import { Carousel } from './components/carousel';
import { slides } from "./data/carouselData"

function App() {
  return (
    <>
      <div className='App'>
        <Carousel data = {slides} />
      </div>
    </>
  );
}

export default App;
