import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Contact({user}) {
    return (
        
        <Card className='contact-card'>
            {user.isBlacklisted ? null:
                <Link to={`/chat/${user._id}`}>
                <Card.Body>
                    <Card.Title className='card-title'>{user.email}</Card.Title>
                    {user.isOnline ? 
                    <i className="" style={{color:'green'}}>Online</i>
                    :<i className="" style={{color:'red'}}>Offline</i>
                }
                </Card.Body>
                </Link>
            }
        </Card>
    )
}

export default Contact
