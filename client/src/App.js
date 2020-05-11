import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import AppNav from './components/AppNav';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/ItemModal';

import store from './store'
import { loadUser } from './store/actions/authActions';


const App = () => {
    useEffect(() => {
        store.dispatch(loadUser());
    }, [])

    return (
        <Router>
            <div>
                <AppNav />
                <Container>
                    <ItemModal />
                    <ShoppingList />
                </Container>
            </div>
        </Router>
    )
}
 
export default App;