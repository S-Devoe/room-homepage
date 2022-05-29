
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import './App.css';
import Furniture from './Components/Furniture/Furniture';
import Me from './Components/Me/Me';
import Navbar from './Components/Navbar';
import Room from './Components/Room/Room';

function App() {
  const [selectedArticle, setSelectedArticle] = useState(0)

  const isMobile = useMediaQuery({query: "(max-width: 950px)"})

  const handleNext = () =>{
    if (selectedArticle === 2){
      setSelectedArticle(0)
    }
    else{
      setSelectedArticle(selectedArticle + 1)
    }
  }

  const handlePrevious = () =>{
    if (selectedArticle === 0){
      setSelectedArticle(2)
    }
    else{
      setSelectedArticle(selectedArticle - 1)
    }
  }


  return (
    <div className="App">
      <Navbar />
      <Room isMobile={isMobile} handleNext={handleNext} handlePrevious={handlePrevious} selectedArticle={selectedArticle}/>
      <Furniture />
      <Me/>
    </div>
  );
}

export default App;
