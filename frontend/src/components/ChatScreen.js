import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Sidebar from './Sidebar'
import {Row, Col, Form,Button} from 'react-bootstrap'
import Messagebox from './Messagebox'
import { listContactDetails } from '../actions/contactActions'
// import Header from './Header'
import {LinkContainer} from 'react-router-bootstrap'
import {Nav } from 'react-bootstrap'


const ChatScreen =({match})=> {
    const dispatch =useDispatch()

    const contactDetails = useSelector(state => state.contactDetails)
    const {contact} = contactDetails 

    useEffect(() => {
       dispatch(listContactDetails(match.params.id))
    },[dispatch,match])


    return (
        <div className='d-flex'>
            {/* <Header/> */}
            <Row>
                <Col xs={4} md={4}> 
                    <Sidebar/>
                </Col>
            </Row>
      
           
            <div className="content" style={{width:'100%'}}>               
                <div className='d-flex user-info ms-3'> 
                <span className='my-2 badge bg-info text-mute'>Your Chat with: {contact.email}</span>
                <LinkContainer to='/'>
                    <Nav.Link>
                       Dashboard
                    </Nav.Link>
                </LinkContainer>
                </div>
                <hr className='w-100'/>

                <main className='m-3 overflow'> 
                    {/* {contact.messages.map(m => <Messagebox m={m}/>)} */}
                    {contact.messages}
                </main>
            
                <div className='m-3'>
                <Form>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={3} placeholder={`reply to ${contact.email} ....`}/>
                    </Form.Group>
                    <Button type='submit' value='send' className='btn btn-sm btn-info'>SEND</Button>
                </Form>
                </div>
           </div>
            
           
        </div>
    )
}

export default ChatScreen
