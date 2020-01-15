import React from 'react';

import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';



import './app.css';

import Header from '../header';
import Footer from '../footer';
import Main from '../main';
import Brand from '../brand';
import ProductView from '../product-view';

import clothes1 from '../../img/clothes1.png';

const App = () => {

const dataArray = [
  {
    id: 1,
    sex: 'male',
    src: 'https://images.bewakoof.com/t320/travel-minimal-full-sleeve-t-shirt-men-s-printed-full-sleeve-t-shirt-248155-1572521719.jpg'
  }
]

  return (
    <Router>
      <Switch>
        <div>
          <Header />
          <Route path='/' exact render={()=><Main array={dataArray}/>}  />
          <Route path='/brand/' component = {Brand} />
          <Route path='/product-view/' render={()=><ProductView array={dataArray}/>}/>
          <Footer />
        </div>
      </Switch>
    </Router>
  );
};

export default App;