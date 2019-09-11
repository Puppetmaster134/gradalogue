import Link from 'next/link'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Layout from '../components/Layout';

const Donate = () => (
    <Layout>
        <Row className="justify-content-md-center">
            <Col xs={2} style={{textAlign:"center"}}>
                <h2>Donate</h2>
            </Col>
        </Row>
        <Row>
            <Col>
                <script src="https://donorbox.org/widget.js" paypalExpress="false"></script><iframe src="https://donorbox.org/embed/gradalogue-server-costs" height="685px" width="100%" seamless="seamless" name="donorbox" frameborder="0" scrolling="no" allowpaymentrequest></iframe>
            </Col>
        </Row>
    </Layout>
);

Donate.getInitialProps = async function(context) {
    return {}
};

export default Donate;
