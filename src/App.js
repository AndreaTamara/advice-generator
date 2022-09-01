
import './App.css';
import AdviceText from './components/AdviceText';
import ChangeAdviceButton from './components/ChangeAdviceButton';
import IdTittle from './components/IdTittle';
import { useState, useEffect } from 'react';
import Divider from './components/Divider';


function App() {

  const [advice, setAdvice] = useState({});
  //const [widthScreen, setWidthScreen] = useState(window.screen.width)

  useEffect(() => {
    handleClick()
  }, [])

  const handleClick = () => {
    fetch('https://api.adviceslip.com/advice')
      .then((res) => res.json())
      .then((json) => {
        setAdvice(json.slip);
      })
  }

  
  return (
    <div className="App">
      <IdTittle idAdvice={advice.id||'...'} />
      <AdviceText content={advice.advice?'“' + advice.advice + '”':'...'} />
      <Divider screenWidth={window.screen.width}/>
      <ChangeAdviceButton onChangeAdvice={handleClick} />
    </div>

  );
}

export default App;
