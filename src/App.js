import './index.css';
import './App.css'
import vector from './images/vector.svg'
import { useEffect, useState } from 'react';
const technologies = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
];


function App() {
  const [currentTech, setCurrentTech] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prevTech) => (prevTech + 1) % technologies.length);
    }, 3000); // Change technology every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  handleClick = () =>{
    console.log("")
  }
  return (
    <div className="body">
      <img className='vector-img' src={vector}></img>
     <h3 className='hello'>Hello</h3>
     <div className="static-text">I'm Aishwarya</div>
      <div className="dynamic-text">
        <p>{technologies[currentTech]}</p>
      </div>
      <button className='see-more' onClick={handleClick}>See More...</button>
    </div>
  );
}

export default App;
