import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Container, Menu, PageBody } from './AppStyled.js/styled';

import HomeScreen from './pages/HomeScreen';
import Tela2Screen from './pages/Tela2Screen';
import PrivateRoute from './components/PrivateRoute';

import MenuItem from './components/MenuItem';
import Card from './components/Cart';

export default () => {
  const name = useSelector((state) => state.user.name);

  return (
    <BrowserRouter>
      <Container>
        <Menu>
          <MenuItem icon="/assets/store.png" link="/" />
          <MenuItem icon="/assets/order.png" link="/orders" />
          <MenuItem icon="/assets/profile.png" link="/profile" />
        </Menu>
        <PageBody>
          <Switch>
            <Route exact path="/" component={HomeScreen} />

            <PrivateRoute exact path="/orders">
              <div>kkmmk</div>
            </PrivateRoute>
            <PrivateRoute exact path="/profile">
              <div>mkmkmkx </div>
            </PrivateRoute>

            <Route exact path="/tela2/:nome" component={Tela2Screen} />
          </Switch>
        </PageBody>
        <Card />
      </Container>
    </BrowserRouter>
  );
};
