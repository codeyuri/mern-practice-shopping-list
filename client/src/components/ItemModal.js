import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { addItem } from '../store/actions/itemActions';

const ItemModal = () => {
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    
    const [ modal, setModal ] = useState(false);
    const [ name, setName ] = useState('');

    const toggle = () => {
        setModal(!modal)
    }

    const handleSubmit = e => {
        e.preventDefault();
        const newItem = {
            name: name
        }
         dispatch(addItem(newItem));
         toggle();
    }

    return (
        <div>
            { auth.isAuthenticated ? (
                <Button
                    color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick={toggle}
                >
                    Add Item
                </Button>
            ) : <h5 className="mb-4">Please login to add or delete items!</h5> }
            

            <Modal
                isOpen={modal}
                toggle={toggle}
            >
                <ModalHeader toggle={toggle}>Add Shopping Item</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="item">Item</Label>
                            <Input
                                type="text"
                                name="name"
                                id="item"
                                placeholder="Add item..."
                                onChange={e => setName(e.target.value)}
                            />
                            <Button
                                color="dark"
                                style={{marginTop: '1.5rem'}}
                                block
                            >
                                Add Item
                            </Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default ItemModal;
