import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { deleteItem, getItem } from '../store/actions/itemActions';

const ShoppingList = () => {
    const items = useSelector(state => state.item)
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getItem())
    }, [])

    return (
        <Container>
            <ListGroup>
                <TransitionGroup className="shopping-list">
                    { items.loading ? (
                        <CSSTransition timeout={500} classNames="fade-2"><p>Loading items...</p></CSSTransition>
                    ) : items.items.length ? (
                        items.items.map(({_id, name}) => (
                            <CSSTransition key={_id} timeout={200} classNames="fade">
                                <ListGroupItem>
                                    { auth.isAuthenticated ? (
                                        <Button
                                            style={{marginRight: '0.5rem'}}
                                            color="danger"
                                            size="sm"
                                            onClick={() => dispatch(deleteItem(_id))}
                                        >
                                            &times;
                                        </Button>
                                    ) : null }
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))
                    ) : <CSSTransition timeout={500} classNames="fade-2"><p>No items found.</p></CSSTransition> }

                </TransitionGroup>
            </ListGroup>
        </Container>
    )
}

export default ShoppingList
