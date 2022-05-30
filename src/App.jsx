import { useState } from "react";
import "./App.css";
import Button from "./Components/Button";
import Quotes from "./Components/Quotes";
import quotes from "./json/quotes.json";

const colors = [
  "#0825E4",
  "#AC1080",
  "#5A59D0",
  "#7D98C7",
  "#362040",
  "#D902C4",
  "#62C54B",
  "#B46237",
];

function App() {
  const generateRandom = (Array) => {
    return Math.floor(Math.random() * Array.length);
  };
  const indexRandom = (Array) => {
    const i = generateRandom(Array);
    return Array[i];
  };
  const [quotesRandom, setQuotesRandom] = useState(indexRandom(quotes));
  const [colorRandom, setColorRandom] = useState(indexRandom(colors));
  
  const ClickButton = () => {
    setQuotesRandom(indexRandom(quotes));
    setColorRandom(indexRandom(colors));
  } 
  
const backgroundC = {backgroundColor : colorRandom}


  return (
    <div className="App" style={backgroundC}>
      <Quotes 
      QuotesR={quotesRandom}
      ColorR={colorRandom}
       />
      <Button 
      buttonC={ClickButton}
      colorR={colorRandom}/>
    </div>
  );
}

export default App;
