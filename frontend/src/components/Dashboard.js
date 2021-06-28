import React from 'react'
import Sidebar from './Sidebar'
import MessageArea from './MessageArea'
import Header from './Header'
import {Row,Col}from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {Nav} from 'react-bootstrap'
import ChatRoom from './ChatRoom'

function Dashboard() {

    const userLogin = useSelector(state=>state.userLogin)
    const {userInfo} = userLogin

    return (
        <div className=''>
            {userInfo ? 
            <>
             <Header/>
            <div className="content-main">
                <Row>
                    <Col xs={4} md={4}>
                        <Sidebar/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={8} md={8}>
                        <MessageArea/>
                        {/* <ChatRoom /> */}
                    </Col>
                </Row>
            </div>
            </>
            :
            <div className='d-flex container'>
                <p className='mt-2'> You are currently logged out, Kindly click here to</p> 
            <LinkContainer  to='/'>
                <Nav.Link>
                    Sign in
                </Nav.Link>
            </LinkContainer>
            </div>
            }
           
        </div>
    )
}

export default Dashboard
