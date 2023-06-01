import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Game.scss';

const Game = ({ game, showPlataforma }) => {
  const { id, costo, idioma, imagen, nombre, plataforma } = game;

  const addCart = () => {
    const user = localStorage.getItem('user');
    if (user) {
      return () => {
        const cart = localStorage.getItem('cart');
        if (cart) {
          const cartArray = JSON.parse(cart);
          cartArray.push(game);
          localStorage.setItem('cart', JSON.stringify(cartArray));
        } else {
          localStorage.setItem('cart', JSON.stringify([game]));
        }
      };
    } else {
      return () => {
        window.location.href = '/login';
      };
    }
  };

  return (
    <div className='game-card'>
      <div className='game-card-image'>
        <img src={imagen} alt={nombre} />
      </div>
      <div className='game-card-info'>
        <div className='game-card-info-title'>{nombre}</div>
        <div className='game-card-info-price'>${costo}</div>
        {showPlataforma && (
          <div className='game-card-info-platform'>Plataforma: {plataforma}</div>
        )}
        <div className='game-card-info-language'>{idioma}</div>
        <div className='game-card-info-button'>
          <button className='game-card-info-button-add' onClick={addCart()}>
            <FontAwesomeIcon icon={faShoppingCart} />
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

Game.propTypes = {
  game: PropTypes.object.isRequired,
};

export default Game;
