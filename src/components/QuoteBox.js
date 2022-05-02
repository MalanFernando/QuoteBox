import quotes from '../quotes.json'
import Button from './Button';
import { useState } from "react";

const QuoteBox = () => {
    let randomNumber = Math.floor(Math.random() * quotes.length)
    
    const [ index, setIndex] = useState(randomNumber);
    
    const nextQuote = ()=>{

        const randomNumberQuote = Math.floor(Math.random() * quotes.length)
        setIndex(randomNumberQuote)
    }

    let colors = ["#525E75", "#5b6349", "#7c555f", "#4f6f80", "#998b4c", "#6a5083"]
    let randomNumberColor = Math.floor(Math.random() * colors.length);

    document.body.style = `background: ${colors[randomNumberColor]}`

    return (
        <div style={{color: colors[randomNumberColor]}} className='box-quote'>
            <i className="content-icon fa-solid fa-quote-left"></i>
            <div className="quote-content">
                <p className="content-text">{quotes[index].quote}</p>
                <span className='author'><b>Author:</b> {quotes[index].author}</span>
            </div>
            <Button style={{color: colors[randomNumberColor]}} onClick={nextQuote} />
        </div>
    );
};

export default QuoteBox;