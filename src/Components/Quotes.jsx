import React from "react";

const Quotes = ({QuotesR, ColorR}) => {
  return (
    <article className="Card" style={{color:ColorR}}>
    <p className="Text">{QuotesR.quote}</p>
    <h4 className="Author">{QuotesR.author}</h4>
    
    </article>
  );
};

export default Quotes;
