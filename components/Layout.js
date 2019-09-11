import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';

import Head from 'next/head';

//import { Grid, Row, Col } from 'react-flexbox-grid';

const layoutStyle = {
};

const Layout = props => (
    <div>
        <Head>
            <link href="https://fonts.googleapis.com/css?family=Nunito&display=swap" rel="stylesheet"/>

            <title>GradClone</title>
        </Head>
        <Container>
            <Header/>
            {props.children}
        </Container>

        <style global jsx>{`
         body {
           font-family: 'Nunito', sans-serif;
         }
       `}</style>
    </div>

);

export default Layout;
