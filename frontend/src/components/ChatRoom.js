import React, {useState, useEffect} from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar, Nav, Container, Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {logout} from '../actions/userActions'
import io from 'socket.io-client'
import Messagebox from './Messagebox'
import {listUserDetails,listUsers} from '../actions/userActions'
import Contact from '../components/Contact'

let data = [{'text':'Hello Ben',time:"12:30pm"},
{'text':'Hello Kweku',time:"12:31pm"},
{'text':'How are u',time:"12:35pm"}]

// let chatMessages = document.querySelector('.chat-messages')
function ChatRoom({match}) {
    const [textMessage, setTextMessage] = useState('')
    const[messageBox, setmessageBox] = useState(data)

    const socket = io()

    socket.on("message", message => {
        console.log(message)
        // chatMessages.scrollTop = chatMessages.scrollHeight;
    } )
    
    const dispatch = useDispatch()

    const userLogin = useSelector(state=>state.userLogin)
    const {userInfo} = userLogin

    const userDetails = useSelector(state => state.userDetails)
    const {user} = userDetails

    const userList = useSelector(state => state.userList)
    const {users} = userList



    const logoutHandler = () => {
        dispatch(logout())
    }

    const submitHandler = (e) =>{
        e.preventDefault()
        
        // Emitting message to server
        socket.emit('chatMessage', textMessage)

        setmessageBox([...messageBox, {'text':textMessage,'time':'12:30'}])
        setTextMessage('')
        
    }

    useEffect(()=>{
        dispatch(listUsers())
        dispatch(listUserDetails(match.params.id))
    },[dispatch,match])

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
            <ul id="users"></ul>
            {/* {users.map((user) => (
                <Contact user={user}/>
            ))} */}
          </div>
          <div class="chat-messages">
              {messageBox.map((message)=><Messagebox message={message}/>)}
          </div>
        </main>
        <div class="chat-form-container">
          <form id="chat-form" onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Enter Message"
              required
              autoComplete="off"
              value={textMessage}
              onChange={(e)=> setTextMessage(e.target.value)}
            />
            <button type='submit' class="btn"><i class="fas fa-paper-plane"></i> Send</button>
          </form>
        </div>
      </div>
    )
}

export default ChatRoom
