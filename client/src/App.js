import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'reactstrap';

import {Provider} from 'react-redux';
import store from './store';
import {loadUser} from './actions/authActions';

import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/ItemModel';

class App extends Component
{
    componentDidMount()
    {
        store.dispatch(loadUser());
    }

    render()
    {
        return(
            <Provider store={store}>
                <div className="App">
                    <AppNavbar></AppNavbar>
                    <Container>
                        <ItemModal></ItemModal>
                        <ShoppingList></ShoppingList>
                    </Container>
                </div>
            </Provider>
        );
    }
}

export default App;
