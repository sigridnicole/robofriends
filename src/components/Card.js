import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <div className = 'tc bg-light-orange dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt='Simon' src ={`https://robohash.org/${id}?size=200x200`} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  )
}

export default Card;
