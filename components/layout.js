import Header from './Header';

import { Grid, Row, Col } from 'react-flexbox-grid';

const layoutStyle = {
};

const Layout = props => (
    <Grid>
        <Header/>
        {props.children}
    </Grid>
);

export default Layout;
