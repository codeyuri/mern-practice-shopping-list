import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, NavLink, Alert } from 'reactstrap';
import { register } from '../../store/actions/authActions';
import { clearError } from '../../store/actions/errorActions';

const RegisterModal = () => {
    const auth = useSelector(state => state.auth);
    const error = useSelector(state => state.error);
    const dispatch = useDispatch();
    
    const [ modal, setModal ] = useState(false);
    const [ user, setUser ] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [ msg, setMsg ] = useState(null);

    const toggle = () => {
        dispatch(clearError())
        setModal(!modal)
    }

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        const { name, email, password } = user;
        dispatch(register(name, email, password));
    }

    useEffect(() => {
        
        if(error.id === 'REGISTER_FAILED') {
            setMsg(error.msg.msg)
        } else {
            setMsg(null)
        }

        if(modal) {
            if(auth.isAuthenticated) {
                toggle()
            }
        }
        
    }, [])

    return (
        <div>
            <NavLink onClick={toggle} href="#">Register</NavLink>

            <Modal
                isOpen={modal}
                toggle={toggle}
            >
                <ModalHeader toggle={toggle}>Register</ModalHeader>
                <ModalBody>
                    { msg ? <Alert color="danger">{ msg }</Alert> : null }
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="item">Name</Label>
                            <Input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Name..."
                                className="mb-3"
                                onChange={handleChange}
                            />
                            <Label for="item">Email</Label>
                            <Input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email..."
                                className="mb-3"
                                onChange={handleChange}
                            />
                            <Label for="item">Password</Label>
                            <Input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password..."
                                className="mb-3"
                                onChange={handleChange}
                            />
                            <Button
                                color="dark"
                                style={{marginTop: '1.5rem'}}
                                block
                            >
                                Register
                            </Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default RegisterModal;
