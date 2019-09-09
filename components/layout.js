import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';

//import { Grid, Row, Col } from 'react-flexbox-grid';

const layoutStyle = {
};

const Layout = props => (
    <Container>
        <Header/>
        {props.children}
    </Container>
);

export default Layout;
