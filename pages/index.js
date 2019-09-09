import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Layout from '../components/Layout';
import SearchBar from '../components/searchbar/SearchBar'
import SearchButton from '../components/searchbar/SearchButton'

const Index = () => (
    <Layout>
        <Row>
            <Col xs={12}>
                <h2>A clone of thegradcafe.com</h2>
            </Col>
        </Row>
    </Layout>
);

Index.getInitialProps = async function(context) {
    return {}
};

export default Index;
