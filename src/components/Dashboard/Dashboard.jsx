import React, {useEffect, useState} from 'react'
import User from '../../services/User';
import {Row, Col, Card, Container, ListGroup} from 'react-bootstrap'

export default function Dashboard() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await User.getUsers()
                setUsers(response.data)
            } catch(err) {
                console.log(err)
            }
        }
        fetchData()
    }, [])

    return (
        <Container>
            <Row xs={1} sm={2} md={3} lg={4} xl={5} xxl={6} className="g-4">
              {users.map((user, idx) => (
                <Col>
                  <Card key={idx}>
                    <Card.Body>
                        <Card.Title>{user.username}</Card.Title>
                        <Card.Text>
                          Hello, I am {user.username}. Nice to meet you!
                        </Card.Text>
                        <Card.Header>Activities</Card.Header>
                        <Card.Text>
                            {user.UserActivities.map(activity => activity.Activity.name).join(', ')}
                        </Card.Text>
                        <Card.Header>Availabilities</Card.Header>
                        <Card.Text>
                            {user.Availabilities.map(availability => `${availability.day} ${availability.start_time} - ${availability.end_time}`).join(', ')}
                        </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
        </Container>
    )
}