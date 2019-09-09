// This is the Link API
import Layout from '../components/Layout';
import SearchBar from '../components/searchbar/SearchBar'
import SearchButton from '../components/searchbar/SearchButton'
import { Grid, Row, Col } from 'react-flexbox-grid'

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
