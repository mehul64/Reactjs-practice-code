import React, { Component } from 'react';
import                           './App.css';
import { Greet }            from './components/hello'
import { Welcome }          from './components/welcome' 
import { Message }          from './components/message'
import { Counter }          from './components/counter' 
import { Parent }           from './components/parent';
import { Namelist }         from './components/namelist';
import { Forms }            from './components/forms';
import { LifecycleA } from './components/lifecycleA';
import { LifecycleM } from './components/lifecycleM';
import { Demoref } from './components/demoref';
import { FocusInput } from './components/focusInput';
import { PortalDemo } from './components/portolDemo';
import { Hero } from './components/hero';
import { ErrorBoundary } from './components/errorBoundary';
import Hovercount       from './components/hovercount';
import ClickCounter from './components/clickCounter';
import  {UserProvider}  from './components/context/usercontext';
import ComponentC from './components/context/compC';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <ErrorBoundary>
        <Hero name="batman"/>
        </ErrorBoundary>
        <ErrorBoundary>
        <Hero name="joker"/>
        </ErrorBoundary>
         <Hovercount />
        <ClickCounter name = "mehul"/>
         <UserProvider>
          <ComponentC />
        </UserProvider>

        <FocusInput /> 
        <PortalDemo /> */}
        <Welcome name="mehul"/>

      </div>
    );
  }
}
export default App;
