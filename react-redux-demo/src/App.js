import React from 'react';
import logo from './logo.svg';
import './App.css';
import store from './redux/store'
import {Provider} from 'react-redux'
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HookCakeContainer';
import IcecreamContainer from './components/IcecreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <UserContainer />
        {/* <ItemContainer cake/>
        <ItemContainer />
        <CakeContainer />
        <HooksCakeContainer />
        <IcecreamContainer />
        <NewCakeContainer /> */}

      </div>
    </Provider>
  );
}

export default App;
