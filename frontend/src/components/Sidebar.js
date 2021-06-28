import React, { useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Row, Col} from 'react-bootstrap'
import Contact from './Contact'
import {listContacts} from '../actions/contactActions'

function Sidebar() {
   const dispatch = useDispatch() 

   const productList = useSelector(state => state.contactList)
    const {contacts} = productList

    useEffect(() => {
        dispatch(listContacts())
    },[dispatch])


    return (
        <div className='sidebar'>
            <div className='text-center mt-3'>
                <p>Contacts</p>
                
            </div> <hr />
            <Row>
                {contacts.map(contact => (
                    <Col sm={12} md={12} lg={12} xl={12}>
                    <Contact contact={contact}/>
                    </Col>
                ))}
            </Row>
        </div>
    )
}
export default Sidebar
