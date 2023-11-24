import React from 'react';

const Card = ({ pokemon }) => {
  return (
    <div className="card">
      <div className="cardImg">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
      <h3 className="cardName">{pokemon.name}</h3>
      <div className="cardTypes">
        {pokemon.types.map((type) => {
          return (
            <div className="cardType" key={type.type.name}>
              {type.type.name}
            </div>
          );
        })}
      </div>
      <div className="cardInfo">
        <div className="cardData">
          <p className="title">Weight: {pokemon.weight}</p>
        </div>
        <div className="cardData">
          <p className="title">Height: {pokemon.height}</p>
        </div>
        <div className="cardData">
          <p className="title">Ability: {pokemon.abilities[0].ability.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
