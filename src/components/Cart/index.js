import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { CartArea, CartHeader, CartBody, CartIcon, CartText } from './styled';

const MenuItem = ({ icon, link }) => {
  const history = useHistory();

  //   uselocaation e isactive define qual rota está ativa
  // const location = useLocation();

  const handleLinkClick = (e) => {
    e.preventDefault();
    history.push(link);
  };

  return (
    <CartArea onClick={handleLinkClick}>
      <CartHeader>
        <CartIcon src="/assets/cart.png" />
        <CartText>Meu Carrinho (x)</CartText>
      </CartHeader>
      <CartBody></CartBody>
    </CartArea>
  );
};

export default MenuItem;
