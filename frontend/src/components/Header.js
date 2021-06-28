import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar, Nav, Container, Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {logout} from '../actions/userActions'

const Header = () => {

    const dispatch = useDispatch()

    const userLogin = useSelector(state=>state.userLogin)
    const {userInfo} = userLogin

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <header>
            <Navbar className='bg-theme' expand='sm' collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>
                            Dashboard
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ml-auto'>
                            {userInfo ? (
                                 
                                 <p className='userinfo  bg-'>Welcome:{userInfo.email}</p>
                                
                            ):
                                <LinkContainer to='/'>
                                    <Nav.Link>
                                        Sign in
                                    </Nav.Link>
                                </LinkContainer>
                            }                          

                            <Nav.Link>
                                <Button className='btn btn-warning btn-sm' onClick={logoutHandler}>Logout</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
