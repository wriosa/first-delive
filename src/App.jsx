import { useState } from 'react'
import './App.css'
import users from '../users.json'
import QuoteBox from '../components/QuoteBox';
function App() {
  // console.log(users)
  const randomIndex = Math.floor(Math.random() * users.length);
  const [index, setIndex] = useState(randomIndex);
  const changeUser = () => {
    const anotherRandom = Math.floor(Math.random() * users.length);
    setIndex(anotherRandom);
  };
  const colors = [
    "#FF3333",
    "#52BE80",
    "#E74C3C",
    "#707B7C",
    "#7D3C98",
    "#F8C471",
    "#2471A3",
    "#A9DFBF"
  ];
  const randomColor = Math.floor(Math.random() * colors.length);  

  return (
    <div className="App" style={{ background: colors[randomColor] }}>
      <QuoteBox index={index} changeUser={changeUser} colors={colors} randomColor={randomColor} randomIndex={randomIndex}/>
    </div>
  )
}

export default App
