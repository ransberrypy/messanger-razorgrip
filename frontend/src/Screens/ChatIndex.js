import React, {useEffect} from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Link} from 'react-router-dom'
import {Navbar, Nav, Container, Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {logout} from '../actions/userActions'
import Contact from '../components/Contact'

// import {listMessages} from '../actions/messageActions'
import {listUsers,login} from '../actions/userActions'


function ChatIndex() {
      
    const dispatch = useDispatch()

    const userLogin = useSelector(state=>state.userLogin)
    const {userInfo} = userLogin

    const userList = useSelector(state => state.userList)
    const {users} = userList

    const logoutHandler = () => {
        dispatch(logout())
    }

    useEffect(()=>{
        dispatch(listUsers())
        dispatch(login())

    },[dispatch])

    

    return (
        <div class="container-fluid mt-5 chat-container">
        <header class="chat-header">
        <Navbar className='' expand='sm' collapseOnSelect>
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
        <main class="chat-main">
          <div class="chat-sidebar">
            {/* <h3><i class="fas fa-comments"></i> Room Name:</h3>
            <h2 id="room-name">hi</h2> */}
            <h3><i class="fas fa-users"></i> Users</h3>
            {/* <ul id="users"></ul> */}
            
                        
          </div>
          <div class="chat-messages"> </div>
        </main>
        <div class="chat-form-container">
          {/* <form id="chat-form" onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Enter Message"
              required
              autoComplete="off"
              value={textMessage}
              onChange={(e)=> setTextMessage(e.target.value)}
            />
            <button type='submit' class="btn"><i class="fas fa-paper-plane"></i> Send</button>
          </form> */}
        </div>
      </div>
    )
}

export default ChatIndex
