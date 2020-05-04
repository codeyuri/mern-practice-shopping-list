import React, { useEffect } from 'react';

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
        <div>
            <AppNav />
            <Container>
                <ItemModal />
                <ShoppingList />
            </Container>
        </div>
    )
}
 
export default App;