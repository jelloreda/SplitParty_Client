import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ProductSelector from '../../components/ProductSelector/SearchProducts'

const HomePage = () => {

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Welcome to Split Party</h1>
                    <hr />
                    <p>Create, enjoy and split</p>

                    <Link to="/events/create">
                        <Button variant="dark">Create your event</Button>
                    </Link>

                    <ProductSelector />
                </Col>
            </Row>
        </Container>
    )
}

export default HomePage