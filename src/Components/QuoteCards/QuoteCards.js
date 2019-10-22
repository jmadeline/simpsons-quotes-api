import React from 'react';
import './QuoteCards.css';


function QuoteCards({ simpson }) {
  console.log(simpson)
  return (
    <figure className="QuoteCards">
      <img
        src={simpson.image}
        alt={simpson.character}
      />
      <figcaption>
        <blockquote>
          {simpson.quote}
        </blockquote>
        <p>
          <cite>{simpson.character}</cite>
        </p>
      </figcaption>
    </figure>
  );
}


export default QuoteCards;