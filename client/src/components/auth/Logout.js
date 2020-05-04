import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { NavLink } from 'reactstrap';

import { logout } from '../../store/actions/authActions';

const Logout = () => {
    const dispatch = useDispatch();

    return (
        <>
            <NavLink onClick={() => dispatch(logout())} href="#">Logout</NavLink>
        </>
    )
}

export default Logout
