import React from 'react';
import ReactDOM from 'react-dom';

import reducers from './reducers'

import { createStore, applyMiddleware } from 'redux';
import { connect, Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import SearchUI from './components/SearchUI'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

const store = createStoreWithMiddleware(reducers);
window.store = store;

class App extends React.Component{
    render(){
        return (
            <Provider store={store}>
                <MuiThemeProvider>
                    <SearchUI/>
                </MuiThemeProvider>
            </Provider>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#app'));
