import Link from 'next/link'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Layout from '../components/Layout';
import SearchBar from '../components/searchbar/SearchBar'
import SearchButton from '../components/searchbar/SearchButton'

const Index = () => (
    <Layout>
        <Row className="justify-content-md-center">
            <Col xs={2} style={{textAlign:"center"}}>
                <h2>About</h2>
            </Col>
        </Row>
        <Row>
            <Col>
                <p>
                    This page was built for fun just to play around with React, Next.js, and Elasticsearch.
                    Its conception was heavily influenced by <Link href="http://thegradcafe.com"><a>The Grad Cafe</a></Link>, which could definitely use some improvements to their search tool.
                    Hopefully you find this app easy to use and full of useful information.
                    If you like it and you aren't on a student budget yourself, consider <Link href="/donate"><a>donating</a></Link> to our server costs!
                </p>
                <p>
                    <h4>A code we abide by: </h4>
                    <ol>
                        <li>We will never sell or give away any data that could be used to identify you.</li>
                        <li>We will make publicly available interesting trends we notice in the data.</li>
                        <li>We will listen to any feedback you have for us and consider any ideas for implementation to empower everybody as a contributor.</li>
                        <li>We will never sell or give away any data that could be used to identify you.</li>
                    </ol>
                </p>
            </Col>
        </Row>
    </Layout>
);

Index.getInitialProps = async function(context) {
    return {}
};

export default Index;
