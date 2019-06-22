import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter,Route } from 'react-router-dom';
import store from './store/index';
import Header from './common/header/Header';
import Play from './play/Play';
import Popups from './common/popups/Popups';
import Main from './main/Main';
import Audio from './audio/Audio';
import Help from './help/Help';

class App extends Component {
    render() {
      return (
        <div>
          <Provider store={store}>
                <BrowserRouter>
                    <div>
                      <Popups></Popups>
                      <Audio></Audio>
                      <Route path="/" exact component={Play}></Route>
                      <Route path="/main" exact component={Main}></Route>
                      <Route path="/help" exact component={Help}></Route>
                    </div>          
                </BrowserRouter>  
          </Provider>
        </div>
      );
    }
  }
  
  export default App;

