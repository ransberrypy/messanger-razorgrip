import React from 'react'
import {Card, Container, Row, Col} from 'react-bootstrap'

const FormContainer = ({children}) => {
    return (
        <Card className='p-5 col-md-8 mx-auto my-5'>
        <Container>
            <Row className='justify-content-md-center'>
                <Col xs={12} md={6}>
                {children}
                </Col>
            </Row>
        </Container>
        </Card>
    )
}

export default FormContainer
